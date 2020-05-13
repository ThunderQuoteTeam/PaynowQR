const PaynowQR = require('./dist/paynowqr.umd.js');

//Create a PaynowQR object
let qrcode = new PaynowQR({
    uen:'201403121W',         //Required: UEN of company
    amount : 500,             //Specify amount of money to pay.
    editable: true,           //Whether or not to allow editing of payment amount. Defaults to false if amount is specified
    expiry: '20201231',       //Set an expiry date for the Paynow QR code (YYYYMMDD). If ommitted, defaults to 5 years from now.
    refNumber: 'GIT-INV-10001',  //Reference number for Paynow Transaction. Useful if you need to track payments for recouncilation.
    company:  'ACME Pte Ltd.' //Company name to embed in the QR code. Optional.               
  });
  
  //Outputs the qrcode to a UTF-8 string format, which can be passed to a QR code generation script to generate the paynow QR
  let QRstring = qrcode.output();

  console.log(QRstring);