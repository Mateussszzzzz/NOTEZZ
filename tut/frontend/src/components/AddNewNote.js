import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import  IconButton  from '@mui/material/IconButton';




export default function AddNewNote(props){
    return(
        
            <Card sx={{border: 3, borderColor: 'green', borderStyle: 'dashed', height: 200 , width: 200}}>
            <CardContent>
            <IconButton sx={{left: '50%', top: '50%', transform: 'translate(-50%, -50%))'}}>
                <AddCircleOutlineIcon color='success' />
                </IconButton>
            </CardContent>
            </Card>
    )
}
