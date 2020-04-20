import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_xEOMJfpjzihbs3W0IRLDU7Hb00NF3T67bv';
    const onToken = token => {
    console.log(token);
    alert('Payment successful');
}

return (
    <StripeCheckout 
     label='Pay Now'
     name='Virtus Clothing Ltd.'
     billingAddress
     shippingAddress
     image=''
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
    />
)
}

export default StripeCheckoutButton;