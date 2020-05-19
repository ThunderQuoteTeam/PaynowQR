const PaynowQRBase = require('./paynowqr.base.js');
const QRCode = require('easyqrcodejs');
const FileSaver = require('file-saver');

class PaynowQR extends PaynowQRBase{
  constructor(opts){
    super(opts);
    Object.defineProperty(this, 'id', {
      value: [...Array(30)].map(() => Math.random().toString(36)[2]).join('')
    });
  }

  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], {type: mimeString});
    return blob;
  }

  async saveQRCodeImage(filename, opts = {}) {

    if (!filename) {
      filename = 'output.png'
    };

    if (!this.getFileExt(filename) || this.getFileExt(filename)[0] !== 'png') {
      filename = filename + '.png'
    }

    let URL = await this.getQRCodeImageDataURL(opts);
    let blob = this.dataURItoBlob(URL);
    FileSaver.saveAs(blob, filename);
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

    let elem = document.createElement('div');
    elem.setAttribute("id", 'qrcode_' + this.id);
    new QRCode(elem, finalOpts);
    return await new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(elem.children[1].src);
      },1000);
    });
  }

}


module.exports = PaynowQR;