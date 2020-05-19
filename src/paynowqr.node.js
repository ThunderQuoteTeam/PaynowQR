const PaynowQRBase = require('./paynowqr.base.js');
const QRCode = require('easyqrcodejs-nodejs');

class PaynowQR extends PaynowQRBase{
  constructor(opts){
    super(opts);
  }
  
  saveQRCodeImage(loc, opts = {}) {

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