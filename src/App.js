import './App.css';
import AddDocumentButton from './AddDocumentButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const Medias = ["Item 1", "Item 2", "Item 3", "Item 4" ];
  const MediaList = Medias.map((Media) => 
        <Card sx={{ maxWidth: 500, display: 'flex' }}>
          <CardContent sx={{ flex: '1 0 auto', display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Item>{Media}</Item>
          </CardContent> 
          <CardActions>
            <Button size="small" variant="outlined">Consulter</Button>
          </CardActions>
        </Card>
      );

  return (
    <div className="App">
      <Box sx={{ width: '100%', display: 'flex' }}>
        <Drawer sx={{width: 280, flexShrink: 0}} variant="permanent" anchor="left">
          <Stack spacing={2} padding={2}>
            <AddDocumentButton/>
            <Button variant="outlined">Supprimer</Button>
          </Stack>
        </Drawer>
        <Stack spacing={2}>
          {MediaList}
        </Stack>
      </Box>
    </div>
  );
}

export default App;
