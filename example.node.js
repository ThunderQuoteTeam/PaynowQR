//File paynowqr.umd.js (For usage in Node)
const PaynowQR = require('./dist/paynowqr.umd.js');

//Create a PaynowQR object
let qrcode = new PaynowQR({
    uen:'201403121W',         //Required: UEN of company
    amount : 50.50,             //Specify amount of money to pay.
    editable: true,           //Whether or not to allow editing of payment amount. Defaults to false if amount is specified
    expiry: '20201231',       //Set an expiry date for the Paynow QR code (YYYYMMDD). If ommitted, defaults to 5 years from now.
    refNumber: 'GIT-INV-10001',  //Reference number for Paynow Transaction. Useful if you need to track payments for recouncilation.
    company:  'ACME Pte Ltd.' //Company name to embed in the QR code. Optional.               
  });
  
  
  /*
  -- PayNow QR String Getter
  Description:
    To output the QR Code to a UTF-8 String format, which can be passed to a QR Code generation script to generate the PayNow QR Image
  Method:
    qrcode.output()  
  Parameters:
    None
  Return value:
    None. The QR Code Image will be saved to path.
  */

  let QRstring = qrcode.output();
  //console.log(QRstring);



  /*
  -- PayNow QR Code Image generator
  Description:
    To generate QR Code Image and save it to path
  Method:
    qrcode.saveQRCodeImage(path, options)  
  Parameters:
    1 - path. Accepts string. Optional. Default value: 'output.png'
    2 - options. Accepts Object. Optional. Default value:
    {
      width: 256,                         //Integer. Width of the QR Code Image.
      height: 256,                        //Integer. Height of the QR Code Image.
      colorDark: '#90137B',               //Color hexcode string. The dark color of the QR Code Image.
      colorLight: '#ffffff',              //Color hexcode string. The light color of the QR Code Image.
      quietZone: 6,                       //Integer. The margin size of the QR Code Image.
      quietZoneColor: '#ffffff',          //Color hexcode string. The margin color of the QR Code Image.
      useLogo: true                       //Boolean. Choice to place logo for the QR Code Image.
      customLogo: false                   //[Ignored if useLogo = false]. String or Boolean false. Boolean false will use the PayNow logo. For string, the direct URL to the image file (E.g.: "http://example.com/image.png") or Data URL (E.g.: "data:image/png;base64,iVBORw0KGgoAA...") .
      logoWidth: 76,                      //[Ignored if useLogo = false]. Integer. Width of the logo for QR Code Image.
      logoHeight: 76,                     //[Ignored if useLogo = false]. Integer. Height of the logo QR Code Image.
      logoBackgroundColor: '#ffffff',     //[Ignored if useLogo = false or if logoBackgroundTransparent = true]. Color hexcode string. The background color of the QR Code Image.                
      logoBackgroundTransparent: false,   //[Ignored if useLogo = false]. Boolean. Transparency of the logo background.                     
    }
  Return value:
    None. The QR Code Image will be saved to path.
  */

   let options = {
    width: 256,
    height: 256,
    colorDark: '#90137B',
    colorLight: '#eee',
    quietZone: 6,
    quietZoneColor: '#ffffff',
    logoWidth: 76,
    logoHeight: 76,
    useLogo: true,
    //customLogo: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
    logoBackgroundColor: '#ffffff',
    logoBackgroundTransparent: false,
  };

  qrcode.saveQRCodeImage('qrcode.example.png', options);
  //qrcode.saveQRCodeImage(); //Default options



  /*
  -- PayNow QR Code Image Data URL Getter
  Description:
    To generate QR Code Image and returns the QR Code Image Data URL.
  Method:
    qrcode.getQRCodeImageDataURL(options)
  Parameter:
    1 - options. Accepts Object. Optional. Default value is same as the above method
  Return value:
    A Promise. Therefore you have to wait the Promise to resolve before getting the QR Code Image Data URL string.
  */
  (async ()=>{
    //You can leave the options empty to use the default options.
    let QRCodeImageDataURL = await qrcode.getQRCodeImageDataURL();
    console.log(QRCodeImageDataURL);
  })();
  

