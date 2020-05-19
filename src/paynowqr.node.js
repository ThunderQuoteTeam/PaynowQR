const PaynowQRBase = require('./paynowqr.base.js');
var QRCode;
var allowQR = true;
    try{
       QRCode = require('easyqrcodejs-nodejs');
    }catch(err){
      allowQR = false;
    }



class PaynowQR extends PaynowQRBase{
  constructor(opts){
    super(opts);
  }
  
  saveQRCodeImage(loc, opts = {}) {
    if(!allowQR){
      throw 'Missing dependencies for QR module, Only non .output() will work;';
    }
    if (!loc) {
      loc = 'output.png'
    };

    if (!this.getFileExt(loc) || this.getFileExt(loc)[0] !== 'png') {
      loc = loc + '.png'
    }

    let defaultOpts = this.getDefaultOpts()

    let finalOpts = {};
    for (let defKey in defaultOpts) {
      finalOpts[defKey] = !opts[defKey] ? defaultOpts[defKey] : opts[defKey];
    }

    if(opts.customLogo !== 'undefined' && opts.customLogo) {
      finalOpts.logo = opts.customLogo
    }

    if(opts.useLogo === false) {
      finalOpts.logo = ''
    }

    this.qrcode = new QRCode(finalOpts);
    this.qrcode.saveImage({
        path: loc // save path
    });
  }

  async getQRCodeImageDataURL(opts = {}) {
    if(!allowQR){
      throw 'Missing dependencies for QR module, Only non .output() will work;';
    }
    let defaultOpts = this.getDefaultOpts();

    let finalOpts = {};
    for (let defKey in defaultOpts) {
      finalOpts[defKey] = !opts[defKey] ? defaultOpts[defKey] : opts[defKey];
    }

    if(opts.customLogo !== 'undefined' && opts.customLogo) {
      finalOpts.logo = opts.customLogo
    }

    if(opts.useLogo === false) {
      finalOpts.logo = ''
    }

    this.qrcode = new QRCode(finalOpts);
    return await this.qrcode.toDataURL();
  }

}

module.exports = PaynowQR;