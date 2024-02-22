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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip,
        guest_can_pause: this.state.guestCanPause, /** tu wchodzi useState hook na "name" ale nie chce mi sie narazie tego zmieniac co skopiowałem :>>> */
      }),
    };
    fetch("/api/create-room", requestOptions)
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
