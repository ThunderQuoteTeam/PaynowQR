<template>
  <div id="app">
      <div v-if="!inMobile" class="thunderquote-footer full-width">
        <div class="m-2 mr-4" >Made by <a class="no-style-link" target="_blank" href="https://thunderquote.com">ThunderQuote</a></div>
      </div>
      <div v-if="!inMobile" class="github-header full-width">
        <a class="github-corner" :href="gitHubLink" title="GitHub">
          <svg width="80" height="80" viewBox="0 0 250 250">
            <title>Github</title>
            <path d="M0 0h250v250"></path>
            <path class="octo-arm" d="M127.4 110c-14.6-9.2-9.4-19.5-9.4-19.5 3-7 1.5-11 1.5-11-1-6.2 3-2 3-2 4 4.7 2 11 2 11-2.2 10.4 5 14.8 9 16.2" fill="currentColor" style="transform-origin:130px 110px">
            </path>
            <path class="octo-body" d="M113.2 114.3s3.6 1.6 4.7.6l15-13.7c3-2.4 6-3 8.2-2.7-8-11.2-14-25 3-41 4.7-4.4 10.6-6.4 16.2-6.4.6-1.6 3.6-7.3 11.8-10.7 0 0 4.5 2.7 6.8 16.5 4.3 2.7 8.3 6 12 9.8 3.3 3.5 6.7 8 8.6 12.3 14 3 16.8 8 16.8 8-3.4 8-9.4 11-11.4 11 0 5.8-2.3 11-7.5 15.5-16.4 16-30 9-40 .2 0 3-1 7-5.2 11l-13.3 11c-1 1 .5 5.3.8 5z" fill="currentColor"></path>
            </svg>
        </a>
      </div>
      <div>
        <img height="300" width="300" id="logoimg" class="d-none">
      </div>

      <div>
        <img height="300" width="300" id="bgimg" class="d-none">
      </div>
      <div class="main-container">
        <div class="d-flex flex-column align-items-center mb-0 mt-4">
          <h3 class="text-center">PayNow QR Code Generator</h3>
        </div>
        <div class="d-flex justify-content-center mt-0 mb-4 mx-1">
          <div class="main-box full-width full-height">
            <b-row class="col-row mx-2">
                <b-col sm="12" lg="6" xl="6" class="col-box col-box-first p-4" :class="{'corners-first': !inMobile}">
                  <h5 class="settings-section">General</h5>
                  <div class="mt-4">
                    <div>
                      <b-form-group
                        label-cols-sm="4"
                        label-cols-lg="3"
                        label="UEN:"
                        label-for="uen"
                        label-size="sm"
                        :state="qrForm.uen ? null : false"
                      >
                        <b-form-input id="uen" size="sm" v-model="qrForm.uen"></b-form-input>
                        <template slot="description">
                          <p class="text-white">UEN of the receiver.</p>
                        </template>

                        <template slot="invalid-feedback">
                          <strong class="text-white">Required.</strong>
                        </template>

                      </b-form-group>
                    </div>
                    <div v-if="qrForm.uen" id="rest-of-form">
                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="Editable:"
                          label-for="editable"
                          label-size="sm"
                        >
                          <b-form-radio-group
                            size="sm"
                            id="editable"
                            v-model="qrForm.editable"
                            :options="[{text: 'Yes', value: true}, {text: 'No', value: false}]"
                          ></b-form-radio-group>
                          <template slot="description">
                            <p class="text-white">Whether or not to allow editing of payment amount. Defaults to false if amount is specified.</p>
                          </template>

                        </b-form-group>
                      </div>

                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="Amount:"
                          label-for="amount"
                          label-size="sm"
                        >
                          <b-form-input id="amount" size="sm" type="number" step="0.01" min="0.00" @change="fixAmount" @input="fixAmount" :key="qrForm.amount" v-model="qrForm.amount"></b-form-input>
                          <template slot="description">
                            <p class="text-white">The amount to pay.</p>
                          </template>
                        </b-form-group>
                      </div>

                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="Expiry date:"
                          label-for="expiry"
                          label-size="sm"
                        >
                          <b-form-datepicker id="expiry" size="sm" v-model="rawDate"></b-form-datepicker>
                          <template slot="description">
                            <p class="text-white">Set an expiry date for the PayNow QR code. If omitted, defaults to 5 years from current time.</p>
                          </template>
                        </b-form-group>
                      </div>

                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="Reference Number:"
                          label-for="refnumber"
                          label-size="sm"
                        >
                          <b-form-input id="refnumber" size="sm" v-model="qrForm.refNumber"></b-form-input>
                          <template slot="description">
                            <p class="text-white">Reference number for Paynow Transaction. Useful if you need to track payments for recouncilation.</p>
                          </template>
                        </b-form-group>
                      </div>


                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="Company:"
                          label-for="company"
                          label-size="sm"
                        >
                          <b-form-input id="company" size="sm" v-model="qrForm.company"></b-form-input>
                          <template slot="description">
                            <p class="text-white">Company name to embed in the QR code. Optional.</p>
                          </template>
                        </b-form-group>
                      </div>

                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="QR Code light color:"
                          label-for="qrcode-light-color"
                          label-size="sm"
                          class="mt-2"
                        >
                          <b-form-input id="qrcode-light-color" size="sm" type="color" v-model="qr.color.light"></b-form-input>
                        </b-form-group>
                      </div>

                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="QR Code dark color:"
                          label-for="qrcode-dark-color"
                          label-size="sm"
                          class="mt-2"
                        >
                          <b-form-input id="qrcode-dark-color" size="sm" type="color" v-model="qr.color.dark"></b-form-input>
                        </b-form-group>
                      </div>

                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="QR Code Border Size:"
                          label-for="border-size"
                          label-size="sm"
                          class="mt-2"
                        >
                          <b-form-input id="border-size" size="sm" type="range" step="1" min="6" max="10" v-model="qr.border.size"></b-form-input>
                        </b-form-group>
                      </div>

                      <div v-if="qrLogo.src">
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="QR Code Border Color:"
                          label-for="qrcode-border-color"
                          label-size="sm"
                          class="mt-2"
                        >
                          <b-form-input id="qrcode-border-color" size="sm" type="color" v-model="qr.border.color"></b-form-input>
                        </b-form-group>
                      </div>

                      <hr class="border-dim-white" />
                      <h5 class="settings-section mb-3">Logo</h5>
                      
                      

                      <div>
                          <b-form-group
                            label-cols-sm="4"
                            label-cols-lg="3"
                            label="Use custom logo:"
                            label-for="custom-logo"
                            label-size="sm"
                          >
                            <b-form-radio-group
                              size="sm"
                              id="custom-logo"
                              v-model="customLogo"
                              :options="[{text: 'Yes', value: true}, {text: 'No', value: false}]"
                            ></b-form-radio-group>
                          </b-form-group>
                        </div>
                      <div>

                        <div>
                          
                            
                          <div v-if="customLogo">
                            <b-form-group
                              label-cols-sm="4"
                              label-cols-lg="3"
                              label="Image:"
                              label-for="logo"
                              label-size="sm"
                            >
                              <b-form-file
                                @input="loadLogoImage"
                                v-model="qrLogo.src"
                                placeholder="QR Code logo image"
                                drop-placeholder="Drop file here..."
                                size="sm"
                                id="logo"
                                accept="image/*"
                                class="mb-3"
                              ></b-form-file>
                            </b-form-group>

                            <div v-if="qrLogo && qrLogo.src" class="d-flex justify-content-between align-items-center">
                              <small class="text-italic">
                                {{'Selected logo image: ' + qrLogo.src.name}}
                              </small>
                              <b-button variant="light" class="mt-2 mb-3" size="sm" @click="removeLogo">Remove</b-button>
                            </div>
                          </div>
                        </div>
                      
                        <div v-if="qrLogo.src">
                          
                          <div>
                            <b-form-group
                              label-cols-sm="4"
                              label-cols-lg="3"
                              label="Logo height:"
                              label-for="logo-height"
                              label-size="sm"
                              class="mt-2"
                            >
                              <b-form-input id="logo-height" size="sm" type="range" step="1" min="1" max="121" v-model="qrLogo.logoHeight"></b-form-input>
                            </b-form-group>
                          </div>

                          <div>
                            <b-form-group
                              label-cols-sm="4"
                              label-cols-lg="3"
                              label="Logo width:"
                              label-for="logo-width"
                              label-size="sm"
                              class="mt-2"
                            >
                              <b-form-input id="logo-width" size="sm" type="range" step="1" min="1" max="121" v-model="qrLogo.logoWidth"></b-form-input>
                            </b-form-group>
                          </div>

                            

                          <div>
                            <b-form-group
                              label-cols-sm="4"
                              label-cols-lg="3"
                              label="Transparent logo background:"
                              label-for="logo-background-transparent"
                              label-size="sm"
                            >
                              <b-form-radio-group
                                size="sm"
                                id="logo-background-transparent"
                                v-model="qrLogo.bgTransparent"
                                :options="[{text: 'Yes', value: true}, {text: 'No', value: false}]"
                              ></b-form-radio-group>
                            </b-form-group>
                          </div>
                          <div v-if="!qrLogo.bgTransparent">
                            <b-form-group
                              label-cols-sm="4"
                              label-cols-lg="3"
                              label="Logo background color:"
                              label-for="logo-bg-color"
                              label-size="sm"
                              class="mt-2"
                            >
                              <b-form-input ref="logoBgColor" id="logo-bg-color" size="sm" type="color" v-model="qrLogo.bgColor"></b-form-input>
                            </b-form-group>
                          </div>
                        
                        </div>

                        
                      </div>

                      <hr class="border-dim-white" />
                      <h5 class="settings-section mb-3">Background Image</h5>
                      <div>
                        <b-form-group
                          label-cols-sm="4"
                          label-cols-lg="3"
                          label="Image:"
                          label-for="logo"
                          label-size="sm"
                        >
                        <b-form-file
                          @input="loadBgImage"
                          v-model="qrBg.src"
                          placeholder="QR Code background image"
                          drop-placeholder="Drop file here..."
                          size="sm"
                          id="logo"
                          accept="image/*"
                          class="mb-3"
                        ></b-form-file>
                        </b-form-group>

                        <div v-if="qrBg.src">
                          <div class="d-flex justify-content-between align-items-center">
                            <small class="text-italic">
                              {{'Selected Background Image: ' + qrBg.src.name}}
                            </small>
                            <b-button variant="light" class="mt-2 mb-3" size="sm" @click="removeBackground">Remove</b-button>

                          </div>

                          <div>
                            <b-form-group
                              label-cols-sm="4"
                              label-cols-lg="3"
                              label="Auto background color:"
                              label-for="auto-bg-color"
                              label-size="sm"
                            >
                              <b-form-radio-group
                                size="sm"
                                id="auto-bg-color"
                                v-model="qrBg.autoBgColor"
                                :options="[{text: 'Yes', value: true}, {text: 'No', value: false}]"
                              ></b-form-radio-group>
                            </b-form-group>
                          </div>

                          <div>
                            <b-form-group
                              label-cols-sm="4"
                              label-cols-lg="3"
                              label="Background Image Alpha:"
                              label-for="bg-img-alpha"
                              label-size="sm"
                              class="mt-2"
                            >
                              <b-form-input id="bg-img-alpha" size="sm" type="range" step="0.1" min="0.1" max="1.0" v-model="qrBg.bgImgAlpha"></b-form-input>
                            </b-form-group>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="mt-3 d-flex justify-content-center">
                      <b-button variant="light" @click="resetGenerator">Reset Generator</b-button>
                    </div>

                  </div>
                </b-col>
              <b-col sm="12" lg="6" xl="6" class="col-box col-box-second p-4" :class="{'corners-second': !inMobile}">
                <div v-if="qrForm.uen" class="second-box-content-container">
                  <div>
                    <label>QR Code Text Output (click on this box to copy):</label>
                    <div>
                      <code>
                        <b-form-textarea @click="copyToClipboard" class="output-text" :rows="5" readonly v-model="output" no-resize/>
                      </code>
                    </div>
                  </div>
                  <div class="mt-3">
                    <label>QR Code Image Output:</label>
                    <div :class="{'qr-image-container': !inMobile}" class="d-flex justify-content-center align-items-center">
                      <div v-show="!generating">
                        <div :class="{'qr-image-container': !inMobile}" id="qr-image" ref="qrcode" @click="downloadqRCodeImage" class="d-flex justify-content-center align-items-center"></div>
                      </div>
                      <div v-show="generating">
                        <p>Generating...</p>
                      </div>
                    </div>
                    <div class="mt-3">
                      <div class="text-muted tip">Tip: Try scanning the QR Code first to make sure it's readable by a QR Code scanner before usage.</div>
                    </div>
                    <div class="mt-3 d-flex justify-content-center">
                      <b-button variant="light" @click="downloadqRCodeImage">Save QR Code Image</b-button>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center align-items-center full-height" v-else>
                  <h3 class="text-center">Please enter the receiver UEN</h3>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PaynowQR from 'paynowqr';
import * as QRCode from 'easyqrcodejs'   


let getInitialData = () => {
  return {
      gitHubLink: 'https://github.com/ThunderQuoteTeam/PaynowQR',
      customLogo: false,
      generating: false,
      inMobile: window.innerWidth <= 991 ? true : false,
      rawDate: '2020-12-31',
      qrForm: {
        uen:'',           //Required: UEN of company
        amount : '500.00',               //Specify amount of money to pay.
        editable: true,             //Whether or not to allow editing of payment amount. Defaults to false if amount is specified
        expiry: '',         //Set an expiry date for the Paynow QR code (YYYYMMDD). If omitted, defaults to 5 years from current time.
        refNumber: '',   //Reference number for Paynow Transaction. Useful if you need to track payments for recouncilation.
        company:  ''   //Company name to embed in the QR code. Optional.               
      },
      output: null,
      qrLogo: {
        src: null,
        name: null,
        logoHeight: '67',
        logoWidth: '76',
        bgColor: '#ffffff',
        bgTransparent: false
      },
      qrBg: {
        src: null,
        name: null,
        autoBgColor: true,
        bgImgAlpha: '0.1',
      },
      qr: {
        color: {
          dark: '#90137B',
          light: '#ffffff',
        },
        border: {
          color: '#ffffff',
          size: 6
        }
      },
      qRCodeImage: null
    }
}


export default {
  name: 'PaynowQRDemo',
  data: getInitialData,
  watch: {
    customLogo(val){
      switch(val){
        case true:
          this.removeLogo();
          break;
        case false:
          this.useDefaultLogo();
          break;
        case null:
          this.removeLogo();
          break;
      }
    },
    rawDate(val){
      if(val){
        this.qrForm.expiry = val.replace(/-/g, '');
      }
    },
    qrForm: {
      handler(){
        this.reloadOutput();
      },
      deep: true
    },
    qr: {
      handler(){
        this.reloadOutput();
      },
      deep: true
    },
    'qr.border.color': {
      handler(){
        this.reloadOutput();
      },
      deep: true
    },
    qrLogo:{
      handler(){
        this.reloadOutput();
      },
      deep: true
    },
    qrBg:{
      handler(){
        this.reloadOutput();
      },
      deep: true
    },
  },
  mounted() {
    window.addEventListener('resize', this.resizeHandler)
    this.useDefaultLogo();
    this.reloadOutput();
  },
  destroyed(){
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    resetGenerator(){
      Object.assign(this.$data, getInitialData());
    },
    useDefaultLogo(){
      let payNowLogo = "data:image/png;base64,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";
      let imgLogo = document.getElementById('logoimg');
      this.$set(this.qrLogo, 'src', payNowLogo);
      imgLogo.setAttribute('src', payNowLogo);
    },
    fixAmount(){
      this.qrForm.amount ? this.$set(this.qrForm, 'amount', Number(this.qrForm.amount).toFixed(2).toString()) : this.$set(this.qrForm, 'amount', '0.00');
      console.log(this.qrForm.amount);
    },
    resizeHandler(val){
      val.target.innerWidth <= 991 ? this.inMobile = true : this.inMobile = false;
    },
    downloadqRCodeImage() {
      let e = this.$refs.qrcode;
      const downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);
      downloadLink.href = e.children[1].src;
      downloadLink.target = '_self';
      downloadLink.download = 'PayNow QR Code';
      downloadLink.click(); 
      document.body.removeChild(downloadLink);

      this.$bvToast.toast(`PayNow QR Code output has been downloaded`, {
          title: 'Success!',
          autoHideDelay: 2000,
          variant: 'success',
      });
    },
    removeLogo() {
      let logoimg = document.getElementById("logoimg");
      logoimg.removeAttribute("src");
      this.qrLogo.src = null;
    },
    removeBackground() {
      let bgimg = document.getElementById("bgimg");
      bgimg.removeAttribute("src");
      this.qrBg.src = null;
    },
    async reloadOutput(){
        await this.$nextTick();
        if(!this.qrForm.uen){
          return;
        }

        let obj = new PaynowQR(this.qrForm);
        this.output = obj.output();

        let options = {
          text: this.output,
          width: 256,
          height: 256,
          colorDark : this.qr.color.dark,
          colorLight : this.qr.color.light,
          correctLevel : QRCode.CorrectLevel.H,
          dotScale: 1, 
          
          quietZone: this.qr.border.size,
          quietZoneColor: this.qr.border.color,
      
          
          onRenderingStart: () => { this.generating = true},
          onRenderingEnd: () => { this.generating = false},

      }

        let uploadedLogoImage = document.getElementById("logoimg");
        if (uploadedLogoImage && uploadedLogoImage.src) {
          options.logo =  uploadedLogoImage.src;
          options.logoWidth =  Number(this.qrLogo.logoWidth);
          options.logoHeight =  Number(this.qrLogo.logoHeight);
          options.logoBackgroundColor =  this.qrLogo.bgColor;
          options.logoBackgroundTransparent = this.qrLogo.bgTransparent;
        }


        let uploadedBackgroundImage = document.getElementById("bgimg");
        if (uploadedBackgroundImage && uploadedBackgroundImage.src) {
          options.backgroundImage =  uploadedBackgroundImage.src;
          options.backgroundImageAlpha = this.qrBg.bgImgAlpha;
          options.autoColor = this.qrBg.autoBgColor;
        }

        if (this.$refs && this.$refs.qrcode) {
           this.$refs.qrcode.innerHTML = '';
           new QRCode(this.$refs.qrcode, options);
        }

    },
    loadLogoImage(){
        if (!this.qrLogo.src) {
          return;
        }

        let selectedFile = this.qrLogo.src;
        let imgtag = document.getElementById("logoimg");
        let reader = new FileReader();

        reader.onload = (event) => {
          imgtag.src = event.target.result;
          this.reloadOutput();
        };

        reader.readAsDataURL(selectedFile);
        
    },
    loadBgImage(){
        if (!this.qrBg.src) {
          return;
        }

        let selectedFile = this.qrBg.src;
        let imgtag = document.getElementById("bgimg");
        let reader = new FileReader();

        reader.onload = (event) => {
          imgtag.src = event.target.result;
          this.reloadOutput();
        };

        reader.readAsDataURL(selectedFile);
    },
    copyToClipboard(e) {
      const el = document.createElement('textarea');
      el.value = e.target.value;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      this.$bvToast.toast(`The text has been successfully copied to your clipboard!`, {
          title: 'Copied!',
          autoHideDelay: 2000,
          variant: 'success',
      });
    }
  }
}
</script>

<style lang="scss">
$primary: #4e3961;

@import "~@openfonts/montserrat_all/index.css";

#app, body, html, .main-container  {
  width: 100%;
  height: 100%;
  margin: 0;
  color: #fff;
  overflow: auto;
  font-family: 'Montserrat';
}
.main-container {
  background: #4f3961;
}

.main-box {
  max-width: 900px;
  margin-top: 20px;
}

.col-box-first {
  background: #ea728c
}

.corners-first {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.corners-second {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  
}

.col-box-second {
  background: #fc9d9d;
}

.col-row, .col-box {
  height: auto;
}

.full-width {
  width: 100%;
}

.output-text {
  cursor: pointer;
  color: rgb(29, 29, 29);
  word-break: break-all;
}

h1 {
  text-align: center;
}

#qr-image {
  cursor: pointer;
}

.qr-image-container {
  min-height: 291px;
}

.full-height {
  height: 100%;
}

.tip {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.65rem 0.75rem;
  font-size: 0.9rem;
  text-align: center;
  font-style: italic;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.second-box-content-container {
  position: sticky;
  top: 0;
}

.text-italic {
  font-style: italic;
}

.border-dim-white {
  border-color: rgba(255,255,255,0.6);
}

.settings-section {
  text-align: center;
}

.thunderquote-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
}

.github-header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  right: 0;
}


.github-corner svg{
  position:absolute;
  right:0;
  top:0;
  mix-blend-mode:darken;
  color:#ffffff;
  fill:#000000;}

.github-corner:hover .octo-arm{
  animation:octocat-wave .56s;
}

@keyframes octocat-wave{
  0%, 100%{
    transform:rotate(0);
  }
  20%, 60%{
    transform:rotate(-20deg);
  }
  40%, 80%{
    transform:rotate(10deg);
    }
}

.no-style-link {
  color: inherit;
  text-decoration: none;
}

.no-style-link:hover {
  color: inherit;
  text-decoration: none;
}

.text-black {
  color: #000000;
}

.btn-custom-primary {
  color: #fff;
  background-color: $primary;
  border-color: $primary;
}
</style>

