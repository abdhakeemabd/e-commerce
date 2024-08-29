import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Upi from '../assets/images/icons/upi.webp';
import Debit from '../assets/images/icons/card.svg';
import Net from '../assets/images/icons/net.webp';
import SuccessGif from '../assets/images/gif/success.gif'; 

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  p: 4, 
  textAlign: 'center', // Center align the content
};

function Payment() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000); 
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <section className='payment-sec'>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3">
              <h5 className='bg-black text-center text-white px-3 text-uppercase fw-medium py-2 rounded-3'>Payments</h5>
            </div>
            <div className="col-md-7 mb-3">
              <div className="card px-3 py-4">
                <FormControl>
                  <FormLabel className='text-black mb-3 fw-bolder' id="demo-radio-buttons-group-label">Payment Options</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Pay using UPI or Wallets"
                    name="radio-buttons-group">
                    <FormControlLabel value="Pay using UPI or Wallets" control={<Radio />} label="Pay using UPI or Wallets" />
                    <img className='img-fluid payment' src={Upi} alt="" />
                    <FormControlLabel value="Pay using Credit or Debit Cards" control={<Radio />} label="Pay using Credit or Debit Cards" />
                    <img className='img-fluid' src={Debit} alt="" />
                    <FormControlLabel value="Pay using Netbanking" control={<Radio />} label="Pay using Netbanking" />
                    <img className='img-fluid payment' src={Net} alt="" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card p-3">
                <div className="d-flex justify-content-between">
                  <div className="fs-14">Price (1) item</div>
                  <div className="fs-14">₹ 240</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="fs-14">Delivery Charge</div>
                  <div className="fs-14 text-green"><span className='line-through text-mute me-1'>₹ 40 </span> Free</div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <div className="fs-14">Total Price</div>
                  <div className="fs-14">₹ 240</div>
                </div>
                <hr />
                <div className="text-green">Your Total Savings ₹ 40</div>
              </div>
              <Button className='w-100 bg-black text-white mt-3 py-2' onClick={handleOpen} type='button'>Pay ₹ 40</Button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description">
        <Box sx={modalStyle}>
          <img src={SuccessGif} alt="Payment Successful" className='img-fluid mb-3' /> {/* Display the success GIF */}
          <h2 id="success-modal-title" className='text-green'>Payment Successful</h2>
          <p id="success-modal-description">
            Your payment of ₹ 40 has been successfully processed.
          </p>
        </Box>
      </Modal>
    </div>
  );
}

export default Payment;
