# PaynowQR
Singapore Paynow QR generator for node.js and javascript. Works on both browser and nodejs. 

Have any questions or need help to do a custom implementation?

Feel free to drop us an email at hello@thunderquote.com.

### Demo
> See it in action here:
> https://code.thunderquote.com/PaynowQR/



## Usage Instructions

**On nodejs**

Install via npm
```
$ npm i paynowqr
```

In your code, include the following:

```javascript
const PaynowQR = require('paynowqr');
```

**Browser**

You can use the CDN link provided by unpkg:

```html
<script src="https://unpkg.com/paynowqr@latest/dist/paynowqr.min.js"></script>
```



*Example usage:*

```javascript
//Create a PaynowQR object
let qrcode = new PaynowQR({
    uen:'201403121W',           //Required: UEN of company
    amount : 500,               //Specify amount of money to pay.
    editable: true,             //Whether or not to allow editing of payment amount. Defaults to false if amount is specified
    expiry: '20201231',         //Set an expiry date for the Paynow QR code (YYYYMMDD). If omitted, defaults to 5 years from current time.
    refNumber: 'TQINV-10001',   //Reference number for Paynow Transaction. Useful if you need to track payments for recouncilation.
    company:  'ACME Pte Ltd.'   //Company name to embed in the QR code. Optional.               
  });
  
  //Outputs the qrcode to a UTF-8 string format, which can be passed to a QR code generation script to generate the paynow QR
  let QRstring = qrcode.output();
```


## Potential usecases:

Dynamically generating payment QR codes on e-commerce or donation pages that allow tracking of payments via reference codes.

Can be used in conjunction with Bank APIs to detect resolved payments.



## To do

Incorporate QR generation into the PaynowQR class with logo / branding options



## Credits

Original code referenced from:
https://gist.github.com/chengkiang/7e1c4899768245570cc49c7d23bc394c

See also:

https://github.com/jtaych/PayNow-QR-Javascript

https://github.com/mindmedia/paynow.py

Developed by ThunderQuote (https://www.thunderquote.com)

Was looking around for various ways to implement dynamic SGQR codes for payment over Javascript, however couldn't find any that worked with UEN based payments.

Feel free to report any issues and feature requests!
