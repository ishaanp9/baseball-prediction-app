import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialog(props) {
  
  let isOpen = props.state;
  let today = new Date().toLocaleString('en-US', { timeZone: 'PST' });
  

  const sendBuyOrderToDB = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'uid' : 1234567, 'playerName': 'Aaron Judge', 'playerId': 674564, 'numShares': 7, 'valueBoughtAt': 30, 'totalValue': 210, 'timeBought': today})
    };
    fetch(`http://localhost:8080/buy-order`, requestOptions)
      .then(async (response) => {
        let dataPromise = response.json();
        let data = await dataPromise;
        console.log(data);
      })
      .catch((error) => {
        console.log(requestOptions);
        console.log('There was an error!', error);
      });
  };

  const handleClose = () => {
    props.open(false);
  };

  const handleAgree = () => {
    props.open(false);
    sendBuyOrderToDB();
    // send to database
    //open confirm modal
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Your Order"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.playerName} - {props.estQuantity}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          {/* send to database */}
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}