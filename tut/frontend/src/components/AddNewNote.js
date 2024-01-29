import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton  from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Typography  from '@mui/material/Typography';




export default function AddNewNote(props){
    return(
        
            <Card sx={{border: 3, borderColor: 'green', borderStyle: 'dashed', height: 200 , width: 200}}>
                <CardActions sx={{
                            position: 'relative', 
                            left: '80%', 
                            top: '50%',
                            transform: 'translate(-50%, -50%)'}}>
                <IconButton size='large'>
                <AddCircleOutlineIcon color='success' fontSize='inherit'/>
                </IconButton>
                </CardActions>
                <CardContent sx={{position: 'relative', 
                            left: '65%', 
                            top: '50%',
                            transform: 'translate(-50%, -50%)'}}>
                <Typography color={'green'}> Add new note</Typography>
                </CardContent>
            
            </Card>
    )
}
