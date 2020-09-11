(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.PaynowQR = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var dayjs_min = createCommonjsModule(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:c,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,e,n){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else {var i=t.name;m[i]=t,r=i;}return !n&&r&&(l=r),r||!n&&l},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},D=d;D.l=M,D.i=y,D.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,e){var n=D.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return f?n:n.endOf(i)},$=function(t,e){return D.w(h.toDate()[t].apply(h.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[n]=c+"Minutes",h[e]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(e){var n=g(f);return D.w(n.date(n.date()+Math.round(e*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[n]=6e4,h[r]=36e5,h[e]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:c(h,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(f,function(t,e){return e||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[n]=m/6e4,c[e]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,e){return t(e,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
	});

	class PaynowQR{
	  constructor(opts){
	    Object.defineProperty(this, 'qrstring',{
	      value : this.generate(opts)
	    });
	  }
	  output(){
	    return this.qrstring;
	  }

	  padLeft(s, n, str) {
	      if (n < String(s).length) {
	        return s.toString();
	      }
	      else {
	        return Array(n - String(s).length + 1).join(str || '0') + s;
	      }
	    }
	  
	  crc16(s) {
	    var crcTable = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5,
	      0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b,
	      0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210,
	      0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
	      0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c,
	      0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401,
	      0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b,
	      0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
	      0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6,
	      0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738,
	      0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5,
	      0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
	      0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969,
	      0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96,
	      0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc,
	      0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
	      0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03,
	      0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd,
	      0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6,
	      0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
	      0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a,
	      0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb,
	      0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1,
	      0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
	      0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c,
	      0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2,
	      0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb,
	      0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
	      0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447,
	      0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8,
	      0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2,
	      0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
	      0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9,
	      0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827,
	      0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c,
	      0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
	      0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0,
	      0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d,
	      0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07,
	      0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
	      0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba,
	      0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74,
	      0x2e93, 0x3eb2, 0x0ed1, 0x1ef0];
	  
	    var crc = 0xFFFF;
	    var j, i;
	  
	    for (i = 0; i < s.length; i++) {
	  
	      let c = s.charCodeAt(i);
	      if (c > 255) {
	        throw new RangeError();
	      }
	      j = (c ^ (crc >> 8)) & 0xFF;
	      crc = crcTable[j] ^ (crc << 8);
	    }
	  
	    return ((crc ^ 0) & 0xFFFF).toString(16).toUpperCase();
	  }
	  
	  
	  generate( opts ) {

	    for(let key in opts){
	      if(typeof opts[key] == 'string'){
	        opts[key] = opts[key].trim();
	      }
	    }

	  
	    const p = [
	      { id: '00', value: '01' },                    // ID 00: Payload Format Indicator (Fixed to '01')
	      { id: '01', value: '12' },                    // ID 01: Point of Initiation Method 11: static, 12: dynamic
	      {
	        id: '26', value:                            // ID 26: Merchant Account Info Template
	          [{ id: '00', value: 'SG.PAYNOW' },
	          { id: '01', value: '2' },                 // 0 for mobile, 2 for UEN. 1 is not used.
	          { id: '02', value: String(opts.uen) },            // PayNow UEN (Company Unique Entity Number)
	          { id: '03', value: String(! opts.amount ||opts.editable ? 1 : 0) },       // 1 = Payment amount is editable, 0 = Not Editable
	          { id: '04', value: String(opts.expiry|| dayjs_min().add(5,"year").format('YYYYMMDD') )}]         // Expiry date (YYYYMMDD)
	      },
	      { id: '52', value: '0000' },                  // ID 52: Merchant Category Code (not used)
	      { id: '53', value: '702' },                   // ID 53: Currency. SGD is 702
	      { id: '54', value: String(opts.amount || 0) },  // ID 54: Transaction Amount
	      { id: '58', value: 'SG' },                    // ID 58: 2-letter Country Code (SG)
	      { id: '59', value: String(opts.company ||'COMPANY') },          // ID 59: Company Name
	      { id: '60', value: 'Singapore' }             // ID 60: Merchant City
	      
	    ];
	  
	    let otherdata = {
	      id: '62', value: [{                         // ID 62: Additional data fields
	        id: '01', value: String(opts.refNumber||'')           // ID 01: Bill Number
	      }]
	    };

	    if(opts.refNumber){
	      p.push(otherdata);
	    }

	    let str = p.reduce((final, current) => {
	      if (Array.isArray(current.value)) { //nest loop
	        current.value = current.value.reduce((f, c) => {
	          f += c.id + this.padLeft(c.value.length.toString(),2) + c.value;
	          return f
	        }, "");
	      }
	      final += current.id + this.padLeft(current.value.length.toString(),2) + current.value;
	      return final
	    }, "");
	  
	    // Here we add "6304" to the previous string
	    // ID 63 (Checksum) 04 (4 characters)
	    // Do a CRC16 of the whole string including the "6304"
	    // then append it to the end.
	    str += '6304' + this.padLeft(this.crc16(str + '6304'), 4);
	  
	    return str;
	  
	  }
	}
	var paynowqr = PaynowQR;

	return paynowqr;

})));
