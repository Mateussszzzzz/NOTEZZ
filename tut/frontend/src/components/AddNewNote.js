import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import  IconButton  from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useEffect } from 'react';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("title");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    const newNote  = { 
      name
    };
    const requestOptions = {
      
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    };
    fetch("/api/create-note", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  

  return (
    <React.Fragment>
      <IconButton variant="outlined" onClick={handleClickOpen} color='success' size='large'>
        <AddCircleOutlineIcon fontSize='large'/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: () => {
          handleSubmit();
          
          },
        }}
      >
        <DialogTitle>Create a title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new note you need to first create title for it.
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="name"
            name="title"
            label="Title"
            type="title"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
