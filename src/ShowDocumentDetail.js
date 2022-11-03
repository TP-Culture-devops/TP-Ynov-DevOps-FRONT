import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HttpRequestGetFiles from './HttpRequest';


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
};

export default function ShowDocumentDetail(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [sourceImage, setSourceImage] = React.useState("");
    /*HttpRequestGetContentOf(props.id).then( (data)=>{
        console.log("data: ", data)
        setSourceImage(data)
    })*/

    return (
    <div>
        <Button size="small"  variant="outlined" onClick={handleOpen}>Consulter</Button>
        <Modal
        open={open}
        onClose={handleClose}
        >
             <Card sx={style}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        <Typography 
                            sx={{textDecoration: 'underline'}} 
                            display="inline" 
                            variant="h6">
                            Nom:</Typography>  {props.name}
                    </Typography>
                    <Typography component="div" variant="h6">
                        <Typography 
                                sx={{textDecoration: 'underline'}} 
                                display="inline" 
                                variant="h6">
                                Date de création:</Typography>  {props.creationDate}
                    </Typography>
                    <Typography component="div" variant="h6">
                        <Typography 
                            sx={{textDecoration: 'underline'}} 
                            display="inline" 
                            variant="h6">
                            Date de dernière modification:</Typography>  {props.lastModificationDate}
                    </Typography>
                    <Typography component="div" variant="h6">
                        <Typography 
                            sx={{textDecoration: 'underline'}} 
                            display="inline" 
                            variant="h6">
                            Poids:</Typography>  {props.weight} Mo
                    </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    source={sourceImage}
                />
                </Card>
        </Modal>
    </div>
  );
}
