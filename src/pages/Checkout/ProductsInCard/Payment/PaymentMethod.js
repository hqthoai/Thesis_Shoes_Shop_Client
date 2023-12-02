import React, { useState } from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, Button, Typography } from '@mui/material';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

import CashOnDeliveryMethod from './CashOnDelivery/CashOnDeliveryMethod';
import PayPalMethod from './PayPal/PayPalMethod';
// Separate UI components for each payment method

const PaymentMethod = ({ onSelectPaymentMethod }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Pass the selected payment method to the parent component
        onSelectPaymentMethod(selectedPaymentMethod);
    };

    return (
        <Box sx={{ ml: 2 }}>
            <form onSubmit={handleSubmit}>
                <RadioGroup
                    aria-label="payment-method"
                    name="payment-method"
                    value={selectedPaymentMethod}
                    onChange={handlePaymentMethodChange}
                >
                    <FormControlLabel
                        value="paypal"
                        control={<Radio size="large" />}
                        label={
                            <img
                                src="https://res.cloudinary.com/dd4gcajeh/image/upload/v1701186085/Gimme-shoes-images/Logo/PayPal-Logo-png_wabrm3.png"
                                alt="PayPal Logo"
                                width={'100px'}
                            />
                        }
                    />
                    <FormControlLabel
                        value="COD"
                        control={<Radio size="large" />}
                        label={
                            <img
                                src="https://res.cloudinary.com/dd4gcajeh/image/upload/v1701186085/Gimme-shoes-images/Logo/cod-logo_o2ek2f.webp"
                                alt="COD Logo"
                                width={'100px'}
                                height={'80px'}
                            />
                        }
                    />
                    {/* Add more payment methods as needed */}
                </RadioGroup>

                {/* <Button type="submit" variant="contained" color="primary">
                    Continue
                </Button> */}
            </form>

            {/* Conditionally render UI based on the selected payment method */}
            <Box sx={{ ml: 48, mr: 48, textAlign: 'center' }}>
                {selectedPaymentMethod === 'paypal' && <PayPalMethod />}
                {selectedPaymentMethod === 'COD' && <CashOnDeliveryMethod />}
            </Box>
        </Box>
    );
};

export default PaymentMethod;
