// import React from "react";
// import ReactDOM from "react-dom";


// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

// function Paypal() {
//   function _createOrder(data, actions) {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: "1",
//           },
//         },
//       ],
//     });
//   }
//   return (
//     <div className= "PaypalWrap">
//       <PayPalButton
//         createOrder={(data, actions) => _createOrder(data, actions)}
//       />
//     </div>
//   );
// }
// export default Paypal;