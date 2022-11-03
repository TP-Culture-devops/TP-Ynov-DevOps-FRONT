import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import  { useRef } from 'react';


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const item = {
    margin: 1,
};

export default function AddDocumentButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = React.useState('');  
    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    };

    const ref = useRef();
    const [file, setFile] = React.useState('');
    function selectFile() {
        ref.current.click()
    }
    function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>)  {
        const files = Array.from(e.target.files)
        console.log("files:", files)
        if(files[0] != undefined)
            setFile(files[0])
    }

    function createDocument()  {
        console.log("Name: ", name);
        console.log("File: ", file);
        setOpen(false);
    }


  return (
    <div>
        <Button variant="outlined" onClick={handleOpen}>Ajouter</Button>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <Box sx={style}>
                <Typography 
                    sx={item}   
                    id="modal-modal-name"  >
                    Nom du document: 
                </Typography>
                
                <TextField 
                    sx={item} 
                    id="standard-basic" 
                    label="Standard" 
                    variant="standard"
                    value={name}
                    onChange={handleChange} />

                <Typography 
                    sx={item} 
                    id="modal-modal-select-file" >
                    Select your file
                </Typography>

                <Button 
                    sx={item} 
                    onClick={selectFile}>
                    Select file
                </Button>
                <input 
                    ref={ref} 
                    type="file"
                    onChange={handleFileSelected}
                    accept=".jpg,.jpeg,.png" 
                    style={{ display: 'none' }} />

                <Button 
                    sx={item} 
                    onClick={createDocument}>
                    Create document
                </Button>
            </Box>
        </Modal>
    </div>
  );
}
