// import React from 'react'
// import GooglePayButton from '@google-pay/button-react';
// import { color } from '@mui/system';
// export default function Gpay() {
//     return (
//         <div style={{textAlign:"center", color:"black" ,padding:"300px"}}>
//              <h3>Google Pay React Demo</h3>
//       <br />
//       <br />
      
//       <GooglePayButton
//         environment="TEST"
//         paymentRequest={{
//           apiVersion: 2,
//           apiVersionMinor: 0,
//           allowedPaymentMethods: [
//             {
//               type: 'CARD',
//               parameters: {
//                 allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                 allowedCardNetworks: ['AMEX','MASTERCARD',],
//               },
//               tokenizationSpecification: {
//                 type: 'PAYMENT_GATEWAY',
//                 parameters: {
//                   gateway: 'example',
//                   gatewayMerchantId: 'exampleGatewayMerchantId',
//                 },
//               },
//             },
//           ],
//           merchantInfo: {
//             merchantId: '12345678901234567890',
//             merchantName: 'Demo Merchant',
//           },
//           transactionInfo: {
//             totalPriceStatus: 'FINAL',
//             totalPriceLabel: 'Total',
//             totalPrice: '0',
//             currencyCode: 'INR',
//             countryCode: 'US',
//           },
//           shippingAddressRequired: true,
//           callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
//         }}
//         onLoadPaymentData={paymentRequest => {
//           console.log('Success', paymentRequest);
//         }}
//         onPaymentAuthorized={paymentData => {
//             console.log('Payment Authorised Success', paymentData)
//             return { transactionState: 'SUCCESS'}
//           }
//         }
//         onPaymentDataChanged={paymentData => {
//             console.log('On Payment Data Changed', paymentData)
//             return { }
//           }
//         }
//         existingPaymentMethodRequired='false'
//         buttonColor='white'
//         buttonType='Buy'
//       />
//     </div>
    
     
//     )
// }
