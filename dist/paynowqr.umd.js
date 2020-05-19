(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('util'), require('stream'), require('zlib'), require('http'), require('https'), require('querystring'), require('url'), require('fs')) :
	typeof define === 'function' && define.amd ? define(['util', 'stream', 'zlib', 'http', 'https', 'querystring', 'url', 'fs'], factory) :
	(global = global || self, global.PaynowQR = factory(global.util, global.stream, global.zlib, global.http, global.https, global.querystring, global.url, global.fs));
}(this, (function (util, stream, zlib, http, https, querystring, url, fs) { 'use strict';

	util = util && Object.prototype.hasOwnProperty.call(util, 'default') ? util['default'] : util;
	stream = stream && Object.prototype.hasOwnProperty.call(stream, 'default') ? stream['default'] : stream;
	zlib = zlib && Object.prototype.hasOwnProperty.call(zlib, 'default') ? zlib['default'] : zlib;
	http = http && Object.prototype.hasOwnProperty.call(http, 'default') ? http['default'] : http;
	https = https && Object.prototype.hasOwnProperty.call(https, 'default') ? https['default'] : https;
	querystring = querystring && Object.prototype.hasOwnProperty.call(querystring, 'default') ? querystring['default'] : querystring;
	url = url && Object.prototype.hasOwnProperty.call(url, 'default') ? url['default'] : url;
	fs = fs && Object.prototype.hasOwnProperty.call(fs, 'default') ? fs['default'] : fs;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var dayjs_min = createCommonjsModule(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:c,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,e,n){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else {var i=t.name;m[i]=t,r=i;}return !n&&r&&(l=r),r||!n&&l},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},D=d;D.l=M,D.i=y,D.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,e){var n=D.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return f?n:n.endOf(i)},$=function(t,e){return D.w(h.toDate()[t].apply(h.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[n]=c+"Minutes",h[e]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(e){var n=g(f);return D.w(n.date(n.date()+Math.round(e*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[n]=6e4,h[r]=36e5,h[e]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:c(h,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(f,function(t,e){return e||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[n]=m/6e4,c[e]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,e){return t(e,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
	});

	class PaynowQRBase{
	  constructor(opts){
	    Object.defineProperty(this, 'qrstring',{
	      value : this.generate(opts)
	    });

	    Object.defineProperty(this, 'payNowLogo', {
	        value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADmCAYAAADBavm7AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAQABJREFUeAHtvQmcXcV951t1zrn39r63lkZoQRJCEjsYBBhbGK/YTpzEkHnJOBPHCbzYgcSeGTvJm/eh+bwktjN+cYLHyQeSjDOfSSZ5kHgSG4M3jMDGmEVsQmKThCREa+lNvfe995xT7/s/597u2913a6lbC6qSbp+t6l91fqf+9f9X1b/+pZQNFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCFgGLgEXAImARsAhYBCwCpzsC+mQX8D51szu2enNifEx5C513ozNqJtwGk67rDwZ2twfdqjsgD7PQ+Qg9aDubNitvf99ooi5sKInjOGVa1dGQvXnnnVmtdNmyCDZqxTXJ3vSwW02ZG5163nfMHGpVfvfO7kw1aWbHMcrouzbfleg8qpKzn5W6Fpz7EkE4fLA5DQ5hqXj2/vEjULJCHT/J0iml4vUsWd/h+M4lSoUrSsc8vieO1oFW4YjjekeyyhxO68nDY0caJha68khlvrf195uy2tkUaOd8bRwYSdqAmUErx/BvMutk94a1ky9+7uBXJ2bGmL4SRm9Zkul0Q+dqrXVHGMylNx07PhP6tDvjvmteHepNvjjf9ySx/svO7vpsOLmRcl6klLQHlfM14GyMOXzMTT7e3ds9Ortc9vrEEVhwqVWuSCIpnWH/EqPC/4d4V5WLezzPwlBlkEqHQhO8pIx5IaEST7Q3+zvv7ry95/bdd8uzshKr2jzvUnclWl29zgnV7+pQfUzpMFWccGhCrQZd5Xzbm6z5E+i/zq94VKWccNJf5SQSn4Xmu4jkVCqPUYGhZe1Vgf7Hc+ozX1Rj6kilNIXP71LdbttEeqWTdH9LK/ObfJeKAJEf7ZIZhTEfqlNjL0DPMmYhqAt0XvHjL1A+EZlYfY0k5YIzpWRgtEnCCKvQrT5Mjf2Cq527tas+4x1r2fJXzX/QIlLpRN9HpGVHY7pRhe4VSjvvQUrDlMV5jbtU9LDZUc6WMNTvvEfdU64hDEMncUSH5gnE0SiNSBVF1URyWjztXDeZ0u8iQTWJ8nS1auuvC1y1CSrXa+1Q1uLvkU8gR2IAsTrkKfPoe1au6y98Zs8XDoETrqgLV5SFpqTdUJk1VLbP+EH4J35CfXB5o2oTxjqRnO5XtziOY5phyE2QaiePSuQc5OYyKv+70w37WkpFFjW08djKnlAFD2rHvAILVCSco+Uhkc8JjbnsG6o7VYr+7Pvkp5vD+jZe5h0mNBso4+woc64BTso0jmayI+PqH165/bbsnEj2xoIg8DZmzBgfGKcGZrwSde8/p2syP/e1hj/s4MkJMOdm13czSxAv6x0Ni1ZgTGqySKI6Y/S60PFWl/tqh9ShwDXem8R5hHST5eJOPzMIWUaftFo/3jQ5n367R1/xXFerd9KnpYxVhdDR7mHjqkcakqmDVaWwkY4Lgbc9Y0aoaJWkEl5sAvV5N6k+9rcdn284HrRE2vY1T9Y7YWoD7LbJVCFlJB8qvYyqLFde8E6OJRsFkZrhseHDbqC+hyq7uxp1VhifxqfWMe76dMK9CBrl1GUpjpRHN7eoOlfrDaS9tAqpn0unM2Ho7/FC97HberrHo5v2z6IgcHYwZgydS41cHRj1yUzoXXuPujUxX0RvQY1N65rm0HE3o2iuDlVl9U/ygBOFeToQS5d/qfULTeXyHVDtWaPSe+nxPQBjIjVL8nEhGbqxZrln1FYGgdoLHxQ7v1/d7Lj+SJfSUb+0tlic2fcoBd1Rp5dy/aw5ObF39nN7vbAInE2MST1USSr7BRkTfiJoXHLefKHcrOoTCTWxksp5JYMlFZTYaeoioYicIt3aOke/Y/rJ3DMknplI6b4gND+BnXe5VYwkI8mdIAzb6CtuGUvoDSLZ51KevrN/6aoa7blM8ygkOKhUF5CWwR7Gih/9tSNfGasuiY11vAicVYwpDEKVbYKprs2mgo92r+6uqRa4WP1rqQmVPo+Kf2E1gyWFtKn+CDS9XIXOZTBfOdyNzL362tkRauc7NCRj1ai0sL7jOs5y1zHv/rvVd5UcBLqZuWRv0lvK1Ov1DLAuKyxjmXNUA6dfufoJ31/6fJl49tECIVCugixQFqcdGQe9r9MJ3OvahtNVS03m/JAsNS3KcS7EoKAT5pzXi5FY/rcEjtrUtixdVt0UqTniDg6iKf80dIIXHElaOTiBCqGrLzPD2c5S0a9XyzxPq5Xw8Tv51VbzHuQ+ybTPqwxzP/TZY589Voq2vb9wCJwRjEnFEC4o+ss9qxoRkXxUslqmCS7g/Oq71e0lpcssoh6q6Aok7nXVDpYUppd8ua5xjVrrZPSlhc+KnBvVu2Q8G068rIz7Y/qz6aqkplJi6HD+hFN8kClScRsamkLX2cx7nFslzRBJP8jv8d7BxM+KlNXeWgQETnfGxMBEZfkN8+uf/YNVB6hso1RGH2w4VBeIKHOLS5kl2Oq0NFWjzunajvGUo9zVdN82zSOrGQWirNij6nNJX3H0VKRm4LkDys8+g13fgSqZSKZvuoJQ31BskAmLJTfw9DkgdYNjdGdVDQz4M6W61wsTD1MmwdmGk4BAxaH1k1CGclkESKlDVOTHqUhvwUwzGhKmEcVYtBVVbz3HtYywLOEokqlskDhIzUbsQzdkEnollVkqPreLByqkTmaHOrWrr6CrWFcyYvHkU3cpGF1NpwmG2LiyId2KMVvv1MO5J2ZN3xvjh9vWvYxd35MUbxVRKhmaMyFp6sjnwkatryb+9wvIatV5tMbJNq1hLvIS3terPN2jQwo8ANGfhK1tTyqrxBbAubinpzVjUsGYOtCvO576+u1Hv/h4MSi61c3J1tb15zPZ/xs8/xWYuCrmFCZhHq9Nh/6F96u7niRtudUZnuPWLUOnuxIGkTnJ4wrSIGBkX8dhzViNXlWBMdUt6v7wy87n30yE+ttkeh3MtIZGpGzezNfKNNAqTNGvv3vd7Y/esftraUkgjUvT6FCzTumL6LueGzCBUynA5KyIcV5Puv6Dt+6+PXOHuqNSEvt8gRCYIYEWiOZJJdOt7s8MDiZfMWrib2jZ/xl1c6RatQ+b1Gbsa9f3dpaVRNFkPObd58OUGyPeOqE3NAlPu13kvenWynOpSM0rx5Mq2Ak/PgFTVlz6IQ0O/xv5XaAHG9bki7pc9bheKrXEdfRm13FL2vfm44Mh0tKhq+A/MZ6tfYnr8i1CPqE9LggCZzxjCgpIg2CgZmSfUc43MVB7BulZERyRXqiUDUxfrEylSjMmS9WcMEgvQWJdReVE2p1YIF8WpZh26F15SWdX2dFZyQmjhlC7tfsD7f4bHHekUu7yXsSp5c9m35h3go2o+zpobmtQbuISo50tQRUWS4j2LEy813M1I7HdVomtBPwCP69cgxc4w0UiZ1RP1ySrBPeExnmWwYqKkiVXDuYW3ZaxMVXSRG8XRgVJ13QxRcJIqq5qeqHcO0YNQhg00yBcrE1wTo6Ryibp7N004Sn/JZZ1/EgkWbnI8TPjojl0srrm8mRjulUsfSZC3YlJhDQuKytZLMHUtG/OiG+CF2s8tatyfjbGQiPwdmFMdae600z4aRYim4MMEo0xV1kRKwaLpA7WM7LTVSwyqqNe2bC80dGyNMqsRIqUD0bLqKVYxZRvGBhBchy9DEuay+5X3RVNA0VqDoQTPZT3h5S3F+YqW46I+U3YCHNtrk84Gwa7Nqc8T63jfbZWIy1Rm30014MI1p/8xuEvlhugKlsO+/D4Eahce4+f9klNKZXVdQLfxYMB0yDYmJ54kCVewzpoQ/27mMrextKqkkRFkrEUrJ9KvZ3e2LEKzOOEoWlDAl4qRvEliU4/gOJb416gX0BNf1jymn5U4gzmxxKoi8bkypHxkU7SbKbBYu629DsIpUhaKj1MvOdoPp4uQd3eXmQE3jaMKdUtaWrQOMMkk59Vj5xSYcvUVMZJPHcJdfxiV7ll1VioZJm22YsM/lfl6DfKyTQyxDQwbGGA9+KM45xbzTe+U92XTYfJA2jpP2Kq53AFxof9sJ81Ybs24Zakm2SaRwzWK8p8WQXq8w4HMYr/4e/2/pF4XLDhFCDwtmFMMZkzQZDCDUAnEpO5xjL8lgNaYhAPS7ZUNKVQiL8wz1stx1hHySoSHa4qNxmfkzIT9Mn20Co8Q5odEd1CgnPPGZQJlyEBZb6xHB9HKaUBGR5Ww1njPYVkfphGoOwLSvmh3+TohCyE/gXjRINXc0sx847QHGWx9nN1KrmNcxtOEQJvG8bsYTogTHlt9C0xNKjOBhTMpSKO+6FzdDb+wuihU9/IbOcGJHAXauDsKAXXCEBHj9Ot3Y8qvR8PBC9DuNy8qKQVKx2xub36nq7u2gJiJU/pRwde1j8cBuEzDOAMV7KhpQxuYPw1Wrsfx5igCvteXlKrw4nQefRTfd09JQtiHyw6Am8LxqRy6wua6hsZ3r8CZW0Lc5NVAmcwYAiP1fhukUW/Oz0vCJj3M5tcHAeRRzma0v2kXxnuPtRcexRvCa8g4YbKqZtQYyzH1KJqrs1mMheUI55/JlLzotHUIK49nuT8BRqgcq1FlEyYk7KziqayGkucCUT3DsfVP8jnaY+nBoEznjFlnu7LuJL0vPormcf8OBW2Kv81VELs+9whrFt2j9X0z5Zu2MauwbjdWatCc0l5aSkcpjKh8g+6rvua2kcfLQxE2rxY8ZPSeYVfukygq3ZO9ihrtcKsczDQ/g/Qwcsyf8X8Z0Zg4Ys+yK3vtfe/dnjmI3t1shE4rU3y4lbe1NNHWv319v8yEFCDCwHycdjm6Mk6ZRIXIw8+gbr2br+8ZJtKLuIKFe8Yo6OvNB0ZnsGYMDv5jDcqN4TJndXwwlS62SdEFIE9AbF92bHRPZju4hBP9TP69BJx3z87fuE1jQgzMRiTa3NZd1d3XXcV7jooW3jPxK1Hx732h52E+jD5Xx1J30LCx3FOOSboR7/EPMkPMAUsP91zHPRtkvkhcFozJjUeo22zGdv1/9sPfXHpOIMxsXV1GYZtRh1dAevM611QA7EDVW/hsPn529S9s729ObW+s9R1nctDFmCWm5CHKeT/CKrs7t8b+wuxzNH36C8MTii9y1GhOHgu23/kHVOUY1VbOnshcZ+q5vMdUl1Bk589oBPBg2gJm0mDCd7xB/JnsQCLBHT4Q10z0acGjp+WTbkwCJzuqizlE7tPtQH+uMI4+vLCHwIHEzO1Gl1ynkwp84B6EFXw2aTvzxnkqF86Gi3xwj/QVTBOBaQZ1dVhP33F3bmIJjlYmzaBvx/VEOYsDXFO0qUoPwNWClWct6kiiNSsn+g9qrP6hzQwYsdaRariUUgpL4hLyvBFfCD8sJy3+OIU7N3FQKB0rVmM3E4TmlRGJIQ6DNM8ueSDl82wA6XS46gqaGEN5MUUd2klxhTJi1KMhbjemX+9/awPdRz/MGO1O5FE+duljuJRoRn+OP8vO++qxtggoiNScywI9jPQ9QA3RDIfZ9CBp9w3HeN/RzUtOXicRGyyBUbgrGNMkRCIiLEgDHaEZvLpW+6/ZXZ/yqnxG5ax3OydYF0JH0iZCeLu7+tL7S34NmE609CHocHL3MP7QOkgUpMh3QaYewNuRNaUjjnziUjNJeN1A8yHPIHEfL6cZJ6ZcvpKsOAqzfzr7nTgPnHH7jvmzOdOx7ZnJxOBShXvZJblZOUl9qwHGJJ9+I6BP50rIbpUMqN9jMsNUxiVxB3DUsr0Y0f7AowidKPAualJ9Y+HfnYPA1L7qmCaBCPEy33fXxvt+JUnVOG4n9HgtKtf4yM+hGSuzmnXTJrAoI+GrvrJfxz54mszH9mrU4nA2caYDJhSEbV5KKxNigo4I4ga2zox0eG6mlUYqm3Gw+IXwph9OqFlBLYwmGUD7ZPa0wfoB7/GusbCZ8XO4Q/TjpeGy/ua15b1O1uYWBqA4VTvIC/1OCOqT1ez3K0wPeJykpHtV3CR+UjhfXt+6hGoWGNOfREXqgSiwaoh1MZHEknnf3zuYHexsUcGUnUnlj5XELesbWxcKp1BGr41Ntnw6uxSslbKzwbmCLYOr/LzYfSSAeZ2kKwwproqqEmsKBlx7oNouVvGmNeZ0cHDg6nWaZdQkkYKtyHq8d/p+6Ptc0nbO6cSgbOCMaUvRSUchkEeTWj/65859EfS95sTOvGJA/euZgoCVyXs6lE+hPgM6lMm3N62rm10dtQ7kWYmTLNKI3iVPtxgZXVWJxztdTlZf4P4fp1Nr9S1SM0wkR7QKvgZDL5nHlKTuVvzGiqwbMcgjZYNpxECb3vGhLsChjj6kJTfhZO+9NsDX36yGP7CDJlM0xLtOtehVy6pZO0DDVnmdZRZzmdu3X7rVP8yT1saAzWsJnQQHsCo/jC//KOix0hqqrATQldf37a56tFZiImD6HTW+KyfNLtpDaphMrKTdaNmZ39f4vmiBbI3TykC85r/O6UlnXfmjHMqPc7vDQZnvheEqf/22f7ufb+nvliU0ntxtpd2Q5Z4uZfAmA30vYrGm7qJVUNW+Rms183X2v5w493qD6Ye5U+Y23QzoW5yTYjkLN8GCmPiB6iN/uilrj+5BBrDeTqVjpvUJnPYeS7DeLMYOuCrR4t9bLlkGCopGYEdxjA+ROqWi2ufnQIE3m6MSb9Jtq8zMILYr+gXYJ9/OtdTj/z8wJ+MlMFXH+toqakLHZwgqzXRfH3Zeg0lFlMyT3kBpgpfhQfEcmiOSBRmxFOBbKbbJbs/VxrlhVlEf+5ibzAxs9vDeaVSlHkl++hMRuB0Z0xhNBgKNxdKl2Os6Bsg6TKorAep3dsZSHn6aG1ie3fPHxdZOTLzkyExtJ4YqzdJbzUMtwR1cGaEolcsOdGqHWZrr2SvE3Ns/LcoqdzNSJ01isEnfeXfqe5/Uap7QTwxlMvTPjs9ETitGZOqnEZkPINf2TvvOPonjDrOMwxWHd+pS9XAYGYz84n1vpnTZaya0IlFROlWpgmzw83jnWxC26t2nxg9m/pMRaB8x+dMfav5lVuLbWxogtVI20sq9M3mR/l4YmP3S4N0TjZ0rj2e5DbN2wOBs54xI0YcU/X0786HIapcy7l4H58Pwq4Qos6qyx9cdzdrQm04GxE46xlTNtqpSbhsMKRkM9oqjAoWu5qwUlSzDbtR5/X0H16/2LlZ+qcnAmc9YzatGGJiP3FOiDlcdYM+i/shZeiWHFgKplcx93EZEl2ubTjLEDirGVOYIDlUU5dlXxJUR3GIfFp8fuZesV1gobbnXiJuU06LQtlCnFQEzmrGvF/dxz6ZaikGslcxHlq1GdzifyHGh03YwOLlTXXRRkaLn6PN4fRC4KxmzDG1KxEm2UjWODjDopd5moRYnTU1zMueFyp3M/OsZ/V3Ok0+y0ktxln7waWyDy3JNGOcg68ds+ykol5VZuLQyGnhA21qayu96VFVpGykMw6B09rAYJHRdHRWdbIa4x30LSuOxiJOZd3YJEdxDo3XgrkmeFWUV8QyUyAaiyHVUL5PyyYKqLNI8/Wh6y8nftW2s1WUw0Y5zRE4axmzSQ0llE6twAj9UgZb2Pa8/MAPT8Wr3k56f3eHrrd3vsDBZDBa4Lmhcx7+hv49voJuYDlYyeqRY/xUwvHOyarsOiT86/yqsRUsSdM+OHMQmG/9OnPerExJRY3VHZkWlnNczOqtjiqEn/DJOIboL2Y8/5urjuw+LhvWQVawBM1dB4wbbKQxuB5G9yBcLsjGQJQvuKyzUz2Kid6cdZ/lEttnZy4CZyVj8rnEE96S0PG20IdrrcAcorOy9pJF0co8u+rIVZO3qK+UFnVl6gL5hF81nz2WUvWvsEh0gLUnS3ChWTIFqq74tO3QofuOTDAJg1rGLAnW2+zBWTn4s0qcQxvNNIleB8PJ5j4VPqsOMJM75Pjhz9hE9riYUjKAwaPF02w8dABnIoeqGQimZEmakXOVl9xMOSFhw9mAwFnHmFK5+xpGm5jA3wifrKzkqUCYid8EKuU+HfhvnmilWKGuyfgq6GFb+pfp1+ILqBKvsYGeCZe4YXDVQ+preKa34WxA4KxjzPvV/U7SqWkOXX0+ErOpkrSEbVBjXbY+0I8f6Wg44ZHRXWqX0emwHzcD22HMwcqMKVt6mXYk55VvtU10ng2V0r7jPPf7eDsAdnDFE8naifpzA6MvxL8GFjYV3spoHwY+nHX08937Tnzhsoysdo/9+rEWr+sF7Slh+M68Ji2yU1rK6IfuHJs8UEDDpuvarKpz+j76g67P/cxjfDfjhD4bZ09mw2QmGzw1GaSTSVwqVHgZ+/hMQeCkDv40OvVmMMwy7mHw0EbfqWLAeYcK2eTLmb3pT8WUJSLompEU22GqNbjGuahSlw1GoabrYQqwM6HMnD1OSuRRxe3VvnYyh3CU8BJ+2C9IsAYTZosWYtaSOsF5rcd2RmQvP4ohazQ3wLB/DLdOwrKBFzrH6Oy+yYbYvUnHvNrqBoNsOdZGgxOnqFwK2SspzeqayjFtjJOOwEllzKB2LHCH3R62Ev8J9efc8m8btf6juIjEbs5fkP0aheKfazxUhtkMEugQfpj7Ybwoo6JlYX6ELuDeIMx+7+LB2kNF4xzHzU2bcQV0NJseVc5uVNk03rq8Ji+jEgxDCVuJpBQVV/zd5X80IjK10ipthYzjwoBdxFqfkIbL6Gx7MggmAxeEjSutWNoY3Nqyea6jjkFxxjuiJsDTep/jejtxxmWQ4sfxFjbJYiJwUhnz1/fdmf7K0q/8NDE+9Gn2dlxV7sWwETVZN5hI+P6BvsEnF0RaiQTsPqaGGxonHwoTNa8njWEzn5mVtrBMjNjCmD79wNrdNxRsgVAYZz7nj6hur+6C3mYv3b9+skG91w+cmzzH1ApDSgjEw1Eu4E2B0uLoRG7Jaa6Yke8/bnGfOU6VkpEpSS1qbC3FTdEjhVPNeOCMjBrnCZ58P+3ow+wkOsKocpQRGjybHoUDo2YSh1+l3z9XFHs4BQhM14STmLlM8GNEU7ZRWJ6bXpRdraRftsDF09CU1SRSjhKkN6vlajlzGodEosgUSVSpS0Que1tGgl9c+p/rgub0OtjmvQltfiHrOxdiAVQHqyQC2UEE/pBjFMgplpTyeWLJKZkLU8oxJzF5Ep9Hz6J48ecUnmZ9acCmuwPw4lP4qXyg13e+O3RsDw3cjPc6Vc6NKLkN5RA4JYxZrkBvt2f3be5Otk4MLmtxslelXPMJP1Dvpj2o4z0T8q7CgLMZM2YsaQn4PDCjxOG/MJskmT4XZo6ec5//+ecSQc4RnHRj9WSgnL3Dvv7b7Jo1/+227bctVH89Kov9szgIlJVai5Pl2UEV3tBPrPhsjU73bmQrr19JuuHHUBvPQY2syY8Ex8eY2QpRkTvyy8crfCbnwqSigeYZUaQt0lHuRkGeS1rprfKI5WNqVaNjrhnYv/+feLRgfeU4N/t3MRCwjLkIqIrq+uS6OxprvezltV7wq/QXf5GR5Rb6hGivhBxTCWMVWwUaMVYUrzhzxkwbUZoqvXCgqLq5ZJFqHKu+5ABBjxGfWicpKrkNZwACljEX+CNJ//mpC36ntdY4N6BJfhoevSoIVJ2IrygrGEjUU3GFJ7vziZqKXJt6LHEkojBsmOtZC6MWBrkWRhQ6ch4xZEw9ihbdy2XHjYApl37XCZ/fe2RbtMOZlBFfR6kg63Jcn7HqbQTbafXnNHKncVrhclyFMVT4xvN72uo89T7PDT7PSOmVqJS1MI6wURQiKRZJNukDxgwo3JVXS2O2zGc/k2FjXssxI1GE12O6cCX/p3g/Si4TLpKFM4Kh77ZRz/mr3x35h9571K2JJa3eObXZxDV1OrVZDw80XN+wZfAHYz+1fc887KfB0TLmAn0EkUJdMKWb1B/EGuC3WX55BaSTIvRiYRb/zUs3OcbMGDOfSMjoGfGF2aIBH5GIERNzQ0LB+Yz7EemYThRNohKXfxm8IOwYD9Vf7z5a91Sn6lTntXZ1JRz3EzVa/34yDD9KOTd6KtF7xZL3HNh2bJsdpRUAT4NgGXMBPoIIvsSG8xpqE+71APqfuMQrQjzqKuTzkk0YLmIoYTD+5zqcEeP6U3OYwqHaJ+4oGxKJccAxkonXBDGGQBU1cm8MOpOiDsPcuKBFKZZkEaWINGdatgnsgf3vr/Mm/+W3Rv909DOdW+vqdf0WTCxud7XewJKzRsq7BI26PRX4ez56wSeOPHDogYWemqLoNswXAdvHnC9iReLL6GuLN3Exk/6fcBx1eTaEKYULCXKIFU44JzoXvuMuzCmqrOwBJlwlk/4wETteq36M8Y5gt/hybcLfF2S8vqSjD46HWqyQhAUTQVYvnQjdZQ1edgOMtYEpkaVhqFsZVMLVpcjeiEknyWIXi7K//UxPez/GDW5/mF6BYcEHYOBNWcNuoRIRFyeuMVtSvvrUxJv7x+5TN++8Rd1vB4libE7Z35PKmDJa+RUm2r1JbymVGKubykHrhI8V0NBglzrcvbNbbGznHe5T97lHG59rySS8ZZigYqNbujvFnJ9JeGa8VgWHPtX3pxV3GHt93e0pkxrdgGXNJ2Gcj2C9w+wIqig/qfjCJTBOdC7XETOIxMwF11EZJhsHXKPfcL3w0cBxH54cVru9ZHaofkhnX3EGzBUdk9k3ib+Z3/70Mj0aaOfw5GRinR5NuTX17dlMzaXMZ26tcfS1MPsScMaGQe1Lh+Y7Lx1uinbP7m1It8KJ19MafIgyoG0TC3pwO22JaceE6AOYxY8cad5wtxpS+3gUFZWjEjV9SfNkc+AkVkCfOlMaP4mPshC6ieyYl6jpua2nu+Jua3Ga0n9lU+FrW85pVG5yuRukairl7/INPTc5GfiTR3576EvHQHvqXQpzkfr4l5131RuT7gp9j82Cy7+X1A3PNZN0AQ7dNvjloUJaC31+Uhnza+vuSCb7my4znvmPjFhuqfwyIlrCESTJYx2H/D+ngrzMb16qloD/jYY/bAsT4cdcFXyanbTwiDfNGIVlkLvkmA1C9fKEcf+CzB8q9VElnaHCvOpOdFG3P85y648jvWpFBy3s/0mNKC4xHd83qKpGvUL879bq8Ad+6L/6RmrJxM2H78S/kLx7LrAGpUiYkHvg0b9JDe33GtwfqSZ/vXHcdwcZYc7whYZ0w7/xfPIbqrtmzDOba7X55YTRq5DGucZClN+IQdlSUC/j2UdrvKD3S61f+PrvF1S8zs6jdX7YzChzIEb0LaXwk/JIuZmZyfihu8Nks/+VRvHxE1lcLt/vi42/0+Lqmg8yln07vLFKGrpygecBCw/2ho7zl/eqW9nO8N5iHBcJiWTWeycq/xfwFXFBufeK3w0FJ1Svp5X3Z1x/u1wZTvTZSWXMlpGV3qAzsNYx+oNUCVq+aoJZ4hoG+7Xz6qoW9ZY6xr95hPvVLc6YXsl6xuTV1MFNKHrJfF9sNpmIiWgFuE99Da/EIfT3VAmPBcTVOy7qaEo62evw5PUxPm6TqKUS5JA7japQocSEMPKSFZna7IExv6dC95/N2PBLl1y4ckJv684NvnQLmapCrqGawOnI5COjWweGO656MfQzrlc3nvlA71cmUE3dbMvI0mTCex+S/J1hEJvfxo3FdFlhAJGiK1JGfaTVVS9A93v8pDy6N3Cd5lDV0y+lEVKsYS3NGNG7y1baODgLQ/OBwa5du1SPwi3L8YV71W1es9txLnL9JvrTVwQqoM6Wzl9y4QPSY2cvRUetal1xgacOzhWFvJv20pOdxnHeA+9fB8VEufcSuuCHYiK7lIeL7u70pDLmSDjGvIEMVqgqmTKqOK6vg3NId9NIIv0kgD7Obx5S82YUu+dknAQVVmYOqwmUUWvilw7bVv96qktnL0RKfhKqG6iEVEd8uheoqZJaKqowgXx03oGpSc2iEvXsaMb5xhvjqe9uWjE8eOX+/55V2yT2CQVzg2JUtW9brH7HzZd+sG1zfdaZuAZJ/u8oCXw3HaRM8S93j0aLG5sSxv2Vzs7JV3P7c5qmAS+baNY9+Kp/ReMcG+aYJlL0DPnDtvVU+MvH074s7j5uxmR/7YQ/4XQ5RhynqarqK0wGYzpDoe/v3nVwuJi0lFJ7Ho7OUE7Xw/SJbBV7ooKd1LsBx3VeFQKLGaqsqItZhKpop3AFsl6H+gNNTQpV6tQGma/scOtY4OzewMDNpTAcS7KkklP1aQGE/eMhGGFKYc7oL42zGUp4/o88HXzJzXr3/9qRr/Reub2omrUgL3i3uj05qocuYG8WWie1MirgLMqy3jMuudQ6DcS6geWgW5Tv/uLXO7sbJPoKdTATGOcAzsOe4dUKeXsWtcJLnXAddwkd2DU0pMdbz/T4eFdS0zDjxWGtKODVBND2cd9y1NRq6frMmQLiBfTy1glsQBKo/mZjtJKnAmFoSpObBqt9NenxlypEP+HHxwvYCWc8TwJov6adVvAaz02fcqdUT1yzM1XfmLmgNmFu8jCeieUhFRymlFpLPyQacZV3lGtApgXXMljwY/pe93gm89NrD35V+ohVVnJizjMIMzS3ex3GTW51jfMOGgrGvWYGYci40ZCGI25EOGOWRi2t0epGE2auJobepTbTvQxZMG72+ioc5V1mEipyRTqHvVfate9ftGlFU6pIlIq3eAd2V1JNSrtrwZBZnsqBkkmRR/gWrzJQxPTS3HAXdNOTppFOBRtJ6ZWyYrxSIG+skbW4gtnptjWf8IBWpfzOFMakoht2fTYbUTs+8lfNf3DKpKb02ZaMNHTAfNdSngtZWxWpV5Hckd4jiIu0zEtMAGZ8x4w6rnmMCvPnnSP+Yxe8+t9jdbPS1zmB55swuWtP+Rtrlfk5+nvLC0nNrOByFd/JnYnMr00q94KUca5n/WwdDGKyDZlRdPVdSNhdrFMtJFf0XCCgMW2lNl942O+NJG/RiOVv0gWZbMc28ULKJNBWDHyB0HX0ACr3c0Fz22CxBMtVj5tIOZ2shd1MY1/RC7/QIPOA9z6M1H5y/z51XLMDxcpS6l5lhEulPPn3pd/Szu9dYUJfJxLh5BdB6Q0X19SEqu4C9NV304LWoWJNFUNHHggiTowkJh+Th5rW1Wx3wuCvh8dSP+vquXfRW1uZHspm1fJMUHMDfd5LMCRA1Z4upxQ4akhmST6p+blYLLkOO4lzbe3k4AaRXGNHGtJO1tnHwusd0lcWGuWCvDh51jjGXen4bNx0fMHD4dJSkjJiWl2gFQzo7/fhcuWVO3bfUYyBtN/pMW2rz+X9NlWzJ6p8Rxh+glHzvczevQ4eFd+/utKWjnUqKnfp0lR4gnqCexx9Hl6D3t+yJCODCic1IC0ZJWjqwKvBuwDuSphS6nIU5ISaCL/GVTu6ZmKMPtYreNL6W22CR3Pqay7F4hxEj8uufLbJVcmr8DLyIcrBPB3lKsguLlu+nHKMn+bP5MgvhSqwHunz3tymRrxuejAw/uvotWNiFFEpEEMcMGD8EF46lUmlRLnn5K8bGkca8FC4Dsm7bHbDUowMeTFmpydZjH4QT2VvEUdeZUYQOtnxlnrHc9cjhFFl50SZET++wIpKuX0Mfj3VrJaKFdaihzOKMflW+IczLagU19KBeU83i5AXHaGCDK5ZsYL8wvU4v9qa8MLGvLSUii+jsdFPTOu4pm/E0CXe9QL1/fFM4vsnQ32Voj7EXHFbJruu2Q1/roa9NYVR833f/Kvkq2Lcx5yuvZS8oJoyLIK5HvfQDIJzxTeQqhsbpb/6Ok+ORCNceYIljuSN+xPTxqDSRXyraGF4iahzbt9PI+gptx31mb1lnCr7qCiwWo/RMd1rjqWLzv7ifIy2RjSv8GK6R9WpsYhV3qUXKF/Ye2Qsmj+eU+AFvnGGMWZU4cVFzmq++fvbD6fPW2A8SpKjkurxurF61wk28JE2ieeAvCGB9H4wdctJS6oRM+xIylHiPYXnkH+5bPfdxz9dULJEcx+Iep89Vts+ETg3Mox6IxUvGjCJGTHu/0qqPGPKUZhRGFRC/jq64A9NTQoVZZ1W/rXbqNBer4+PL/HM57zGCFcV6hzIaFXP9zqvuZ+Jj3kE2efFSSRaIbCBkjErVTlQfrTY8BgfZs/n1FcnS6Tw8Cl8Du9xKd+nRJTp2+ATS2ET7A/98I2TocZK7mccYwIlXRzVhPe8d2Ch8+57rrhnXi3xNOTzO9u2davrJ/SShKvegclei+itMjkqFTsKFEq+s3xsamwQqVKu+mH/ZNtOKlflGpCncwLHK7p6ahLJ7IWp2FtCR16iC0mR6vliTJU5Kr1cxXfkb76guSPTh2opTc11L6+cbBT/S6HjH0UpeI43H61GnYUiu6o55ySyE5dAvtqgh5c2JRlgY9BKnwt+00UuQYEI8gWwQlRvqCB4gWj5V5lKwQ3d1DRUx7QVDbo+rxrGJB50nSH+vGyG0oemiC3yyRnHmDEeGPUZs4KtXbeqN99cyb2KH+5EcVy3+7IEBqhrqCLXohoyOMln5Wvlv74cI5seqRBajWQC/fSA7373hhJOoh/Z2u3tOe/W5lfPv7Xjma5b66B2Qu8g6yyDsHE1vaGfowCMNqJwRoWLSxgRzxW2MKP4VuHfHMLyPsIQOAyDs85X4/pipIUZ9EYGfOPDmKY/R64CtJFByTJcn1xebSNKPtodTknjt4l8Km76VFCASUz23jBu3WsF96ZORT1OqVQbNC/mJ36XKgcjc6LhEUxHdpSRwpXpzDPGGcmYVAhpxuo95WwaD82W7tXdVfZB5olOLjofUR9LjDQhKTZ7nr+Ca/qTRZpk4lOVxc/rwfFs4gdvvXz0YLEcn7ni1kTbob5zh5zEL6V14lOmNvnuJ1Z8Dp+xxxekfLVLm1pD7b4L+/YPAU69tA75ZWURVYS23Jsd4jvTf+MziRk3OpyJpRaqn3ONMMxy1NlkEO4nnli/VFRniQckqhEa5zsH31wxO/8S145TY9pZS3opFZR3IXWFQAysHM0QJlu7bx+4s+h0FPOxru+aZY7yLqNYFes+5UaNNRP0c3fzFjspQuWCVChntY8rFq5aQic/HguaTLCKgfuPNo+Mr5HKuWhluPkWp6ZWd+DljoEIfLlGWUnVnQ6irErfEq8Fo5TpWeI+Umz5lFgN1fZ77bhpvoldUe7AjeVnWLL1e75j3iMMO02x+rO/W/3JVKdrzq/TwS/yQVcyillQNFgrupoub1y7InmKBz01CHYRgxXWujwbk1SSN8OdG8TqStRZ9jBk8Cd8hnpabDpiRsGhKSSS5H5uJqvoL1YV0DaNLGNjk1+3uv6lTJMo3eM4znPkVfgq+Qwjax/Pcc9Dl1gTQZJ/UuIIEUByhujwvWRal79RItqi3D5jGVM+ONNpDa4yl3lB8r2ynGxREILo7ueWsYrIdDESezlDnMyncpO6L6Od+Q8cswIsadxDqLGPXPZqR9Fh9SeY+PdT4SZGDn/ZdUXlDFdQ866EkT860p9ca7rnNz8bGTyk22VLwRspzdWUDDU/qlG55h3Jl7suqK8Cn8ynPgdnfZOBrCGpCPl3ic+mrqSWY/ivViYTwXoZ/PBqmvpZHbqdJAPT7M5VycDMM6tXUAkZOKv4fvrcjvEUhiSov6aTLktJqvkHlBTJptIw0P5kxt2Rv194ZOmYw5rWdrSeSwGkqiWHAIg5X9hDs/Usc6LpQnqLfX7GMqYAQ6VgLFSdEzjhh5KBV/Uk9HxAlRrcOzlenw30ar6/bB4bVXSp5IV9TLkPC2SpTAeY4X5ax06i5fZUeARP7Mkav8sPvQ8gXK9gBJGJf3kN1cTK6i2Nrv7wc//W3z6VoMKJpG0977yGhKsvhyk/xGVuCiduNOI6HVfsiM3iU7JTARX5QG0iuA9l9Fswzcu0NzP0tFiRjQvAuUi8c5i0v0juHOpRGd7zTeiIeldNQKvWTdA57+9aMLErE0Rd7p+oq6cwq0hD/zJX6DJpiCGRMJcLdhwcLr76aDNqLLOqS2Gyi6HLaHV5usLstLyTfOQ9zJ5LI3RSwxnNmEAr9a0Wk7NNzK+9/78u/U8sdl3o0K3b6nWzuOJArYmksuh28l3znzYa9ME0FCPvQaTo85OpaK+V/OOoQFQEnVox1IR3gmtgCxmgwWqI9phY/DxUypXauB+bHPSve5DF19W8xXZ1q6fGMivpXd1EZbsYZpGSESTr2X3MqKZFD/noQ0kn/Gkilf1WTcJ/OaWxTEL9yL2WxJl6t+gCJZ3+XlNCO6tlkIl7oc6EMk/4M35zjMTjNDP/ypwhRFeOeeklM5/MuUIbTbco11lLrhFGc2LMvUHZdS+T3C+KRJ/9GDQ0C73rk6FeT7w1XOZwmh1z+po09AgMJn3BjsePvn5Sprumcz8Dp0sKCy/nICyqVieT++9J6uRVwgCz45zI9bat25xkQjV6rlpDHzKZY6Q44xzhSKWlU8TMdT91+Nl05545+2jKxH9jMntejRNg+M5KCakt1FSkVcxGTii2wBeFYeLfh2NJbEPLq3zynkeXpVro1L6L/t6HMaFjsjwOcbXLy4T47pRGiMoXOOZlXIv877cOjL2ZmJhkgVjwOvVwmEoreEZBzvL0uMH4h6lBenSF7Z1LqPxmoh4/ByqUqaDD06lyiWcd5FX5pVydWIbY6ir3jXCrmZBuA6ryespEG1JQill0Cy4zlO1NP6VfLrg3dSpG62DSDLULKQpaTxU0UWOJ9RYN1hPsqUq7eXLDGS0xBSrAE6USp296o0mrDyy0gfvWkfO1mwqbkm5AX1DTHYSZpqpv/mNRnbED88NwgKXze2/YxrrIgiBMdp5r2lUquAEjkhthbhblTjOOMBINC5tMm0ZcjWypS/i//KMVQzMMzwvIRacPdN1WW+MmLua9P44jr6WFfTGpdlLKiBlz7ZQwHD98zDpvZYx+YDBtnrxN3etP1qfGMUh409emV4zTJZ4E+r5T5zHK+AsxuhPHRFIuM9FXl8ZNwX5Od1Rj1E4ajHJMexBkN97bdVet5DE7yLeUbRJxDcIAVrC20m7fkp7yyqJsBrDUznbj986mKdditI5Hig5GlsU7S8MckTorETSlxRynZr1aE9Yu+hKvWdlHl2c8Y+ZeCnll2qlW12GCs4UWfUHe62aIHzxS7+FFXfpFjZEk4qvF0xC5nDlElj6uwkYzPJwwNXMGfe5fsTM1ysAHFjAfRtvsyDMlo7GRUiWyKbajEYMh3VmHw6yUqz5YSqWVvqqnas/NGvXzDEVeIUWQMvE/DjCj0IzKSaZyn3OEqxoPdLhzOHC+d2ikUZZEmYkjwxneC3Mz1RunkloZ1czoKASFYeByGQDq1IG4ZomCn3KCQ8wlP88o3IyGKPd89kEanmaj3I19mUzRwReRbEE2xMuKcw6lXi7lqCLwXu4g+4vuOPfIMyUGaLoSODRbBqOtpnWoRgrjqQztR+vnguHlRadeqijXCUVZkAp8QiWokJhKFdeTCvGIxoJasxKLmy0LtZh6m9ql36rxE1lfN6A5SsWMwpRFjShoEmAERqGyqEqDfYE/Ft+M/8KEDEcuI73aSEt9PlVcJEf0UBg9VjGFQWMJCosmYN5zsXh7T01GXyiGCDPpsSZrXX9dyvFYl+rgEsM0CBPGFPMllKPcJfAnvite9swRR/s/G9HBlGkZ0x8GzMZ9HQ6ISagwsfwk5I9yjkB3UBfqQ+VHTCW2s5mwcYQ0e3iKOlupKtFlUyHpnTUtxpFle4XkJQsJGHS5LcycwkBs1Jgrefyo1F96gkqNOZ4+uFVtm6NyCv5jTUM1QegvQ7toL9QsSlGkaLLE6wjubHaw29scmqXTLdyTSmguXE7HRQkY6RMB6Fixr1hIko8jsqGTkYNrXC97wUJIzUbVo+uDiVpW9dOCG1Zp8FcqelR9yZ2jlIu/Ip4ytLJ9/f6G0cJyKXWXTtRk64NAr2ZEsHWKKYkkJn1xkGNMiaPcbfJ4DwZbfqH5SO85uUjRAedS3tCIXol/oQ/AehvBJi4EZYllo1CQqHna8QVq4TAM+KSn9EOFjrY2qZ34XwjHeSn20JR5yRxDF1AQalQUjUeCmoTyolFVeefWYTXOSpPXQh3uYnBMopUMlIYImn4mDhG0Wcf3mTM/uYqpnoTrLkOv3yzFz79BSaIFD9IZaTfmpsBoHQFc1+g43nkAi0H93DgFZKSQ8lVZDG52ecp7jXJW0nwLky/Y+enNmEZn6Oq8BVivTImZsq/OYmqMnplovLGjMX3cljSFWbg1piZhQpx5sdVB9CDmg3wcuSd8St9tEh4Z+FCRNYA6m/ATxsGBs8mtTCCBpIt+ci6/+Er+ciWVrIsplA+mM4kbxEUmt5U0NufKgI9KbKHivBdjhtqpijbF5DGlmKakImiVQVzumVD6gTd7J2cMkIh3gkSgJ2jWemh4JuTt4tJNU4ivUVqNwwo2hflgHKVe7czSw+uBqV8mbTCdMs529l+aNRpP1YGl+eWdnXP8PukjrRMptnPAjYheX41XgZg+vVETttFD33TX5rvmGGhsEt8+briM5XibmF2L+vazyzXrGkfZqp8puO17a4YYlT014bRlTCqDtFwT9Ah2cXwYaYC/lXyVKQ4WH533MZ0wyA1u0r1EFgwXj1nd3VqmxpI4WGb+C/Vt2jlXXurlqcAkOJ8LJqic/VLu/P342G38hrEhL5V+kcK9wT2eT0eRMyosf+Xdpt8PWmzNpc/3M+qjb04kLhCV9v0YJzQk3fNrPPN+z+iVJIhSxuqwXOWCtBS5PDiDYeg/mvDRQ8o8dof62ox+mKikx/DWhUQ/RKKcZjJdPqGYv0Kieozo1m/bGku7m9V9YSacGEJEv0YDgZHCdPkl3ezAU/6zAEC5F2OA2lb4nEZH17umHgZaTRvDXG4+18JYRc/FbrmNL3/J8p6J2YNK+nBbPzNCZjXkLkLtLkpg5k02/A3Do/RNdvzZwT8rtUJlZpJFuDptGTN+V7YKMOpQGGYf50Pt48NXRJZKnqIC4WncfHjX0qeqnqwvju1mhjEDeEA1kD+tbfGAWkkH02SMG87oX0psqYnXvcr0nQqew1nsQ9yhFZ6uwCLopMGJmX06BzGrox7JvOw7+P3S5L5jKxhSXU5L8z66e++E2zyZuhFK08onF1EQOlEzJo3bGM4/tyc8539/oe9Pe3IRpg4SazwRZqAzxDnHmKJEECqFP56gfetkb680gFEOxsH1IS9PP1MdRJuV6CUDD8U0CndC5lzPzawlomSWD04QhB00RpsBo0D+5x8XPwpNkKpnDvi8Cd/kB6aiyMLs2qltCD1nHTSRxOWrD4VhmIDtJ7R6fTwM3gCLsu9TvEQLc/e0Zkw+oNSTbOia1xiXeBSUqnEEJS5I6EuE1zcH7jsOr/vxjMGTE4UtrjJxfcp/NTnOkVoFGWEFFO7L9hwe991vo3Y9Ag1a4piG0JO0uavpVNwT1Y8HS1mAelOTE3yIaY53ZUPnl3i/5Yxw5hNxjFPnE+cvGZDJUsf34UbjW5lk5rn889lH7GzpRrvM28VE5X3yQSjPpJ5/Eh+HVTPfB3+/Sr1MA5UtHztKIxKuPQydi9FoCusffmg98VQgKz9mZlLhitgeSZY7SVemQ6aCTJP4vreEt8IMDxvnqSelTqThj/aL2XnjqrVFp15KpVzo+4XALDTtBaKHRU1Yd4g+0Pdhtr1wavlmj1ypmOzTqlfjb+am9Ehz1wIVZKqC5itOVGFzXzuWNKVz+tDuhzKT2bFX8av8T3DbC4z6+VHndIqqVGkhNkUwJmaQ1Mac72fd30AV+yT9M0Z36YVJ5sJH0SFfougy90cseXQ/nctHRhUG9bFXvsIIU+diZ5jMKf1CKc+I+eNUxOInYZge76cs2/kNV6pQ0tjiCV4GYS7a27odTSQKOtU8Weu5ehVXK6YwyD2s4gCk4pVAXZazTIqSHMInLQ3fCl7p0qm+eBliNGLMQJkexnlfvnL7bTQypy5UwvHUlSyXMx/S/Hhg5xh+Tl/AYH0bH41Rz0pVBog1LkhCfW3KD6/PYk6zEC8SsU30pyD/3Gkx1ijMk2imd9/YSMIETzKq+898/LeYSI8amYgkkWOWKKAt95inIFIj85WXw2rX8uoxC0VMGcflZUWfm86OU3DD23v4yqQKv81cZdHlZ/kEfZzk5wQKqOQflz2iLoZ14y1DJjA7KS3TJvmWpXgy3lGiyEDamiblrpJYonI2KF+mUDbxHlMWTMUpzL0rrws9bHH1xrClKxrF5nvo+uGmBuY41wMN9wTl0iEqt1FjpNuFT6cXSsc8OU9Oe8YUGDCJCt3kwBFm2X4IvK8Is1aGR5wwY3+qnPclPJwdMwZfRaLKZGc3ChDlo1LdqHBMfJUjIMvAnJreI2E2/CGGQqjmsi+LpJ2ZSso5VVieyWNGChmYRmXLBy6ieFPXBW/HEiiKc5QIj9UHme1Y+JRt/cfCOu2zY06cU55gXJVn5DH9aMZZq9qUZoDsAC+yk/iVjQ3Qmyn9EhqDC4WQqJyB8Tp4RfqX1bkRKSwAeUqVSIHTSuOFkTpLnWFRdALHaTRo9GsL0ClMOnXOc2w8zEAAUw4M1M3pi09FPEknZSvSSSpDNdmY3t4l42Yy2IH0+D7fYc4gy2wi0cfSppEW+DIY5nrS4L5mqrrPjl7y2jBMSDqxm5z6ttIvzAdhKhkRAUgMEZyKWz9s2nl/NnD8NzAT+jdE2ktQklHTXMliunItPwn5Y3xV1V8RSiPosdtxmvPgLxz7c2xhSwfJ0feHMKLPRgNc0+wY51xYFtEKoBtJ+UKKLKkKM9nMUSTWE8Rhb4+KgXaGJVgwZre6OTnGmnfGEZbBGAwIzW6mKtKKI8hsDpZJWRNsRgJ7h9WPPXZjWcr87cVV0hR724MMlBU1hK+yFAsW7UxhTFF3wmAi02uC4BE+wIt8/LgWl4dCpOa5zP6/i6OoOHMqVbnkO2VVUzrLXKqsGtGTpSoclYxFkJq5RqexHD15JuV+YG/XyGRY/1OGnP8FpmaeVhoMoV6QQ+6y1EuKvctUioL2hnsZ0uwdN+ED7d74jkrlETO4er82xQR8GwQLJMvMnKO8jJOl9o+pTTvzmm9Envc3Y6N9w4yq7uL1UJsldunAU/6bBpKtXdqyucupr21yNXuIsIFu6VTlnwhNJG4TuKxfXnes029iWz0TCk2+O3/LB3nZcQi8Vpeq56Of+nDGMKZAxQhg2s2Er9Hr+g6VQYb3yyII2vTPAvGruhGxtpHumrSqVYfzVKsZTjdOZA0rKAwfjvxgoun03IyvGJVnEyK8rbfIwuXpCMXPpJFRq5/uq0lmHkJKPIAEzq1GKaAtSWdd5qnJbelSRsco2hQOzBSpfgwZtg1mU9+vxo8tlj86kQjxvB4sI634HoKi0JuNbtQSYLnnjN5y/9zVFpvUTVne/y2SP0/JSpQcsgQeCoyyxnNF4KUvdFJsfyEjpyyFK5swTl70b0STFTbQWG2S9etd5bV7nnMZQDVUpinuKVUfv2d+82C32BCf8nBGMaZU6IGJuj52sv0xyD2NtU3l/ow4HUl69OMAABmOSURBVJb9L1gZQZWgj1b5M+W/ygh2pCars4ygwjhG5vqiEMsqTnMDLlRmrLjDFAMgbZ2dm2dPcudSzTywAiU4NKoOZEL9Tcr3FJWUaU4Js8o361JixPHypeFaTiUe27/79POwh/32b/f/sUxhVBFuVjBUbRA4y5E4BVMKMzNG1eD1wjFGVJmHnRtEnR1J637mXXDUhSVRpaC1x1DqsiCgnxliHK/Veq4ZpJuZbyUyhc/Jl+6K6srocDPLAZhSci6BLr6AK9GMsD9Ac/JUIb1TeX5GMWYOqAxDB7tZTsGmsuYQH3NR8WtumMgkVXiMT5uZyqr4d8ZISHUs7ThWUZ3NFdhs7+mabDTpl+Csb9Lp2oO6DOXc++TzKPV6kQBDeY6Iiakuhn94JciE4UP948Gz1YIyqH4oe482YGOMm0odDS7ls84fhRbFYKPdYIgd54vO75HWdIwlR7C5Y3BOiTFIhSIwR6uwqHL0RaS9mDauvWKSChTJUcbIRCW/hHWfl1A/usC0YkHIf5jGlQZtZF+FLE7a4zOOMUVqDjUkByfDzBMsDn4SUGf0dxYSuV61CY9f9ZmkE/TxeYenpiRmfWrmGbmjU2xSswwmrrqfJO+SbnMGGFDZBp89yHpBJHNMPBLGs/KZ8W4USBgnZh40dqMHWcv5mOME3/3VgbtHZsQte9GVcDNuJ+vmqMRCb0ofmEoV3YYxcWo9SEvQP/Vg1gk2fRm2vzsAc27nu1Tsz1PoOrITpnwf8ZtFnzyxIKix2EAx4KfN+yHXWnksnoVsSh3Fu97TPx44XHFQ8cTKV33qM44x5dXu3HdnOpFx96BibqMiResIq3/l+cU8uGJHkA6DYdZOMl2TM7acVYGkKnOL/SCdzow7uaqS94HCErA/pn9oNHNgJOM9mDbhM1QSVngQojzijGZlFyfnZoGXHqZDzG4sFr5VUx/spZIXTRInnP4rKrhqHKnLemY1JgtY3eR5KU5OWaYCFLE61P1joT9nvelUJAbXnMzkUeCgn1neSoscIGnEOH8NL7KFZW7NuZcuIDe/U6GJqo0LE30+KvU1MZOWp5HDez8+g5+/j2m58rFP3tMzkjGjijc6OswWeC9QmV6iEiN0Fif0bus0ExlvlD1IDmAGRz+wWE5SkXH5QwvNfhubdm0+WjeP0piP9NwzMRmkXuQl/lk7wQHSRgJT/kpus3OM2UaqoTxn2zksfFhd8Tjb8Dxx0+6ZRurly3GXbnITDThNWuUxoikSK6Yd5xifCwXZE8Rh+Z3Te7guW1JiogGYRF12DAO/3Yz/oM5WrF4SQQbnOnlV+rfTOZYvd7mnjCNgXEIMWRHEQFxpmoIdvyEa3Bcb1PKDvHXpyOWyXIRnFZFbhDwXhOSAas+6E5Pso0GHHTVzbvVdkGyULIsK3cSwHzp7aE4nI621CGnp8kUr9E14YQZj7CJRSt6icpjaw6nBpJv5CS4MHoUB2Hh1NjvOSi61KBJ52N0a9bof6Mc+OM8RxfuxMZ10laixa5nxRwOdWS+nS4CqoMMxVPaer5Yx7aOEprN3icwH9lD+1+jwzSQ46xVOg8vQ004fYxY7LliTqjxgdRILfMYypvTPMpPhUTyjPQxeL/FblL6m5HN0bPyYCdwdrO0SL3gs65tb37gTmc5RjotrPHXhI0xyz+c73sCW5G+la/cMT3j/i0nx50ibnSMqcwQjhollKosx9FvpMPze/snOx+eTn5S3r/lIPbyzEQPRy3HOFXFRnhkL35AGQPwZHWHkmXnK8oEI/ribPYywFOMJ5n7zFMunq+KpCHRR86sZia+CnDTlYhurekInsfNU28bOLvAZy5jyIjKvydqTV1j28yCtPV7bFidsXb2aBRqmPwgxO4vkFPnEjFGQIZ9YHOU5qotJ7hvbLzpS7ejsFI2bWf+XqMW6SZt/xDZ2HzZHRfs85ERgqEipEQ7PJJPOtz899AdFpzGmiM86kX08ak1DByrsFYzmYoQR6xwx7Rnn0oVOM+eEqjf5yiwycy5FnW1hq3VYeXdogv7Ko7NzSMy5AWvLMptxfvthpgUZUxCaDOaNZVWwx0ukq5xamlO0RbtxRjOmSLPXxif6w9B9jMojrvGLVuQTRm8bhra+34t2+TT8yFIqKM4aX5Haiy0vq2yZAjA4yMqGF0Sa5jwyp/zm8O7DA9kx72HEwrcgeUxGSGaTiGSQxpWJY/YwUvqd969tqMgws2ho1dlZm3KTlNG5HolIPSiSUZyIxxh3syfItoEt1diQsr3tOCq/+yaYHOAd5pR/VlmquBR/RQojD/MIllJsNT8L/CoozI1C/9LRxxhAe6VvfWrRGvW5+VZ354xmTHnFu9XdGT878TqV+lt8LgYmompb3dtXHaubaZOJfirEc1RQPH7PDVL/IjVXy1IjdZ6n9Yd2r7tj3lIz2u+kvvkgr/GveH9/HGbH3cfMgE4n0yN9VKofNbSM/lBv656Xeic7Y4eZ+qUJN3h3QgcXxErsTOQkT/nBVQjw8Kiv/efuV7dU1V1Ypg776SA8DEejzpqKnidmvt3cK8qB5/dwH1ZcjzBQsyOmecJVl6GALOaD4c7ueeI3t4QLf+eE327hizQ/iiJlUqPpISrBM4hLrIFMVZVnPrlQMcxQc/1EaNzXQ1+/FImXWQRkUCiqzAxgMvXAqgbzbtOYudTcXNlEbxYptXVfd5pZ05d8R/0v3ukVVLgpTUDKwlAjzrP0C8ybfvvqj68oOuE/m2b+GkbTb7Wc05h1nSsY1f4gEl7M2PKPp85EAyDwViwfU/oN5RqZAqkqiMsR5kFw/8j+JjSWMTJVJZ0TSd6X9KO0ei/XJMKn6Qo/H9OcE7XqG9CT0dhhvL0/z/YHFe2Jqya8gBHPeMYULG5HamYyid2MUTxExVsUa6ArtncFA354OFTuE+z1iOMtakzhh+BanD/KD1ATjEiuxzHKx3btasXD3lR9L0xR8lxIbz3WMkxF/CkGA/9KRKQ1FZQHkKL7qd/Em8GD/eOpF3R39xTTliRY8OBr6vZkk0mug96HIbgufhS/ifzNv1NOsZWiD/hO+MzVK9fsLyBT9pRKb/pGUvR/1S7ovAnVPNmy6Yo9JCHvawax0d2pjg4dYLOhV5m72cf9eb13IW3KhNKBf6YwfOmOw1+cV8NWSGcxz98WjCkVYdWoOoYTpZ9x/mN+iyA1maNzJ/qZlniS3bzeQIrN4LZIlc2N1lJp0HqZRwud96jA/eDjHb8hK/Ujtqr2Y2r6z621PTQEie/C6Y/JQAWqOm5/ZGQ4fFLVjj/w831/Og8LH6XEwH5Zq8NezepGVO0beQME20yeyRcyOsZGBXvZCO+RK7bfOi91GeP4wPXDo0y0vAhjlV0PWgETMZ44iAnm861qMPSCgJF4/xmE3nHT5L1ldHe/63hVawEVyrjgj98WjCmo3KzuzCZD9w1UsEdoDXvxDjCzxp04dGagbW2agVI2MQ0fpeJOGbVHpJGUcZBs+RmNSxA2xnH1zzW11l720xWfrbhWM0dg6iBrNxsSI6/h8+fvIf8znCUfZFL1aTjkOzf9h68jiaoPDJQ5qmlFc00qsQWDhJtRvbvYfi9HID7mr6T8VF6MZ/RQlr7lxGTqZa7nhWfkQU9P9tFGPk3aY/yqL+x0TD6lnkA07j5XN+y6ObLMEZeS+gVU2tyKnOnI1Z1F0nsUwozm979aXZqTH+ttw5hScTaPpHBx4T9LfXuaWnTcLWqpz7B1W3fgjalDmWzyx/jS2cfUyFTI1/FYxZVtpaUmG3Y7UFe5jvm1hobJTfPdmJaqbK7Ye89w4I88hpT8iyAM/no49O/dOdLyI91dvSoHFvqyjvF6t9a9PBM6/wfGEpcI702veY55Tv7KT5iIf0wRqf0sAXl4+PL5M4F8j/rhsZFQebK+ce8UUPM44f1FXR1E83zp5/u+IN4ejDsUjBrfYdtALQN+86CWjxppU71uqJ/7TO9f4qbm9AzzmgQ/PV9hulRb1Z3BjuAPD6DvfJee3mV8uBUwx3SEEzyTivHI3q6xrov6nkO1eoTrNaiw024tGVIozA0Vjq6caqcSfYixzWE1khwzW7t3z2cUVSq4OqhkjeADud9830I/0NVd60+Ob2Zbu1/12a6QDhbfXZCRih2zohCVK/kRuGlGMDrYwerh7cc7aimqZzpoxkdr8hkmDa+CbkFTFuVT9g9cSZfEvIWjsCfyEWVH6yV68qivEs/At1vmS5P4LCQP92fdgPSnb5gXUKfva8Qlk0o8MJoaxGz1J1Qw1tadUN+m6OtuZUPaGhUcyfrmZ9jPFthXUpdz2l5BBafJZ5TWGPbNUL+Y1P6vPPvWwfXmOLd0L1qgMjdFff1yx+cbhtPjF2L68KsocR/DsU1dvvkQI/hY6sTNSZ5Fkf4scdN72azl4d/r++PDZbIo+0hUzzHlsnomlL7cvFRPMKQYWrwK7PbDmtfzGfFOzL/U0FAFLxCn4mL5fLrcUWgiJZ1XhlJ1+2c9O60u31aMKcjeCeMkw8E3XXzqMBh4aKHRlgrz5I6+4YlM8ETWuN+DG/F1S+CTi7yhIkUyKK7q8TkMK3aoK5Ccv5ZwvF9/bTK16ZHVv44bjyjRQhcxoicDPWvYJmKZCa9mt6XfpIX4RBA6LXmmlPLlf/kCyBtwj3ZE9+M757FxXScDaflXyUer+ihQ1A+NjXuh8zqqA9M+86puuAFSfS6WTak1PYV2rMY91j/BKO1evq9MJVVdHr5PbomXeVr1KHz7nr5hXkidvq8xXTKpDB1DNwynHXc7LePjqLTzGk2cplT6TCTBW71p+prOtxnLfwlmxMdcXM3FoLMwxNUm+ksd0+einn0iHfifTur6q55Y8bnW2bt5FaY9znN9n+pOum3LljfVZ2+s1c7tGKj/KozBFnjThZMSyccvKJ9kJy3FOOtcd0w6zgOfGfgv8xpgEgKzgxgbZMKgh228ZO2s9BmrCshyxqb0EQr4/K3b75nxDYVmIhQzOucZ3qhqmryejDvsZ072WSTvPNJVVeQFjfS2Y0xB5xZ1S5gxmYNsT/UAZlxvUSEWFDSomQ8NrB9NhhNMdjv/iop4hIqH1hrnJFJTfhJiVsj9FfPW0MGdhnML+zV+viaV/kjboSNrn+m6tW6+Ru8x9Rl/tTg7/kbL7zWHLRMb2WLs5qTRd9TgxR2VFV86zH4WwCBKLHdmlg8Dce7vxzXHt9a2LJnq183IZZ4XMjo7ibUUg2EvI90GqvkWgi+/SWxt9427/hukmW5RyF8axnHl9xMJKyA1WI3UhAbr8pwhGqddYZg6bvV8nq9/3NHflowJGmbv4OA47fML1L3vUyExC1vYIPOMh5bvPYrXvu9Qmb9H3RnKe5WVAfloUJ4s43xzuXPgEW2FakGKsQeJ+r/CQN+m67wbTdfg2kc6P91w32b4SaY2qgz42nHvVren/qbps62NrU0b25Luh2tTwWfI5nd9o69jt+mpPU4KSeZZsqB8Mkd6BAb+AStpvnPT7jvShfGP91yYqqZ5cpx9XV5j01yspmYyWXG6MBFrP9mRdntzon5O3zSCsUlNOFo88xu2m68KLmHMo+D/zLUzVePiRTjFd0/6qCwgUi9pP2e038VRINJ89JQZRO5lG/O7VfebbCfwA3TI65nX3MCypRyHzIha9AI1SrIvG8Sh1jNd57/R0Kr+JxYFXUyfvBeV0Y2sG3Kp44P8jblSCAppQEjCNOu5ug2Gfk+Np7cFXuLx5ePLXtu2+uiRnfXdAz/Z2WPOxyFYsULI3p2ZFfXenknT4ofJVfWJcHONMlvox17P9nzrXTYHEctvrqNGohgRYU6JQ6DS6mOsgfrxhBv+/WcG/ujA76g/Lpbtcd1bcfBg5mDT2jcdj4Yy2myXOd6crC5GUCoIZTvETOrTt/V0jxeL8wQ0r29evU97yRch9U7ilOROQZ4fC73NvoynduE1YsGn0oqV8UTunVTGHHdGTdJP0hKz4xXOmMsVnP6YTHBPYBd6vH5YzMCAGm/pyL5ojPcwecoeFnMsXeaUQfKVBdE4LhYf8BWCuQLvA680/c6LGTf4lyR7jFAFVpE+qiQ5doxUxogOD6L6KNWEABOLfV0d9reXJD3/gkzovh/V+DEv1DsHhoZeX9dVgz1nX8bJJNJMXcSJhITnuqOmvoG51I7WhLcqE6qr2axlC97AZENbRwwHxDSwkBklcT77/FGeo+ZycMaJ/iLzpPd3LL18h+6r3CiRtOogqueX9O/3e2Ln6qD2K70UFyCkLyxhjhzjZJRvCN9Brycd541SmbAhUfi14I5htrp9jXnOAdqfGX3ownRRXVKaKRZ/e2siVc0KmcLkp+T8pDLmqo6G7OHD2d2BCb6J5Dy//BtLTTRHMOmq2uPbbHp08IMvq8/3JEPUTa2XUSE6K9nqCa9QYd5E7XlevBdUYk5R1e575eZj6zY2fR+3IsswX/sttnAV+9gC5hT5IOwgzMFbyUCR8Bn/caClcMcpmgHOvIKNMNRGWqTAcYMBzOb2wWdDfpJ+FHugk1y4SFiujv7hOfRqz0uosLEGP+rCjBlZtRjlEmU0o95L/pI4H+LTyL1Ymld4GVOYv590ah7+1M5bYp9D+YgLcKRMpnuoZqSxbeJpVpkzWq4ugizcP7cBIC746x5k+LePHEuUHFUX3O8evX1Yp8xT+N9kZVG4DpSL0kQt9nnweqC9h35znl4eFuD1j4vE1Hc8rtTHkUg2kz3Y9ESzW1t+Fy5awDBt/IlU45KeO06sv6PpgyWzbU1LvIRpZl+rsqUOHT+oyZjhI/2JIzD2jNHAcgmlX/jqxQdXocn+lvH1f6Di49wq0ttj6ZVjCpx6RXIikmgwk1wJUwmXstIjzoK4MrorcQgsAtEZWv0kUdjsSyquqqH/GNPhgmcRk+fiRwwp6fP0YqbMxc/lETVQRtQ753VfB/8zrdv+6lNY10iGixVuZXBqdUN7CwtBO2rY57lYCyD4e1lvqL9PHa0Gf6G5vqGptS5V0+6UoZn0mwZ7e8eF5mk9GpvHPlcT8pf2eCIIyBKvF1/tWJdSwadRiH+RgZ3lMACblMXMIzVCGDOSebmMhKnYzCTX74yZRyRbPO3CdY4B43tc0/QLAwozy8cTmkTnF6uvQlZ8+UUjrrl882klQZS/RDGsccSXrXHNP/T56u9/d/DLByStDacHAqIe2bBACNy1a5d5z5E1x1qb8Sgg2+Vp1cWvGaVcdDaUAAIMJQyS+xMxkDyQnzBQHHLSTZhS4hPyzJdPJ8doEIljXmJOPYvSxAwsaWUASKjIbA3qHtnoCaK8xgzCP6Y9929+u+9LJVVGSW/DyUcg/uonP9+3dY6i1j63oY/+pvm4a4JP0Z9eiw5KvxBWKJCYwoh5yRersznmhGtEYsaqaXwujJlXVaekJPHkvqilrBFlMEnYLo4nceU8krhylHhsAcxhCD59jjGu/682eezvP9pzb9FRT+LZcAoRsIy5SODLQIRY9jTWT7yXpV//J4M9l/qhkT1UhDuYy8wxDvnnGS7uE8b386rsFIMVxBMmk/tTDMp1oSorXJhn7Fw+3NEyRcCiYP3YmBN+I9V55aO3LMJAD3nYsAAIWMZcABBLkRBu2H7erU01SWcLxuP/jhHWLbDkypDta3nmMI/JjkfTfcZIJYVYJPXkyPM80xJ/6jzPkFPMCZOKrjoVlwjSx4yY2zhY85gxJDL2qubhplT2H9538KunpTuNUjiejfdtH3MRv/pd0L53cHt6Sd9H3tjUdOwJnYpcL9Yw9y9+dmqlx0fAKJQB/ZwaKhwmraX84r/xmVyJVMyHSBLmL6LbotbmnsOJ/EN7dsZh1n1sPritP3Tv6VHmf/za4f/3zXwyezx9EZj+0qdvGd82JYsWSo8k1yZM+EvYj96YUHol7LYsE7hsUy7Lw2KjvrifKJJzpsTMM6NITAnSL42kZ05ici37Y8rcvQzuHMqGasdgmPi+V+M8+B8OVrstX0zb/j21CFjGPAX4373u9tQGP7lmec3Ye/EhtDUTJFajfC6jH8oWcti2BvgrkOFbrCJgPOmPwm8iMWN1FXFIYEpdHskF0TjJwJj9mNj1sLv1ntpE5rHljf73N738dZkGiUQzRxvOEAQsY57CD8Vkt/POc3pbQyd5BZ7Or23y/AthsA5cfzTCYA30S2vhOxylO3XcF4lKacU9px7HwGASpp3Adkek4wAG3Ycnsu6OXpX4qVuX2vnJfd3HTuGr2axPEAHLmCcI4EIlR6Tpgzjs2l+fWKmDiVXZtHcOIrMdKdgI0y4lnwSDOVgosorKU73s59iLtO2fVE7/oUDtWVfbcOiGfd2n9eLfhcLK0rEIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhYBi4BFwCJgEbAInAQE/n/slhbNh4aHAwAAAABJRU5ErkJggg=="
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
	    str += '6304' + this.crc16(str + '6304');
	  
	    return str;
	  
	  }

	  getDefaultOpts(){
	    return { 
	        text: this.output(),
	        width: 256,
	        height: 256,
	        colorDark: '#90137B',
	        colorLight: '#ffffff',
	        correctLevel: 2,
	        quietZone: 6,
	        quietZoneColor: '#ffffff',
	        useLogo: true,
	        customLogo: false,
	        logo: this.payNowLogo,
	        logoWidth: 76,
	        logoHeight: 76,
	        logoBackgroundColor: '#ffffff',
	        logoBackgroundTransparent: false
	    }
	  }

	  getFileExt(filename) {
	    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
	  }

	}


	var paynowqr_base = PaynowQRBase;

	var filename = require("./filename.node");

	var filename$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': filename
	});

	var require$$0 = getCjsExportFromNamespace(filename$1);

	var bindings = require$$0;

	/**
	 * Font RegExp helpers.
	 */

	const weights = 'bold|bolder|lighter|[1-9]00'
	  , styles = 'italic|oblique'
	  , variants = 'small-caps'
	  , stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded'
	  , units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q'
	  , string = '\'([^\']+)\'|"([^"]+)"|[\\w\\s-]+';

	// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
	//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
	// https://drafts.csswg.org/css-fonts-3/#font-prop
	const weightRe = new RegExp('(' + weights + ') +', 'i');
	const styleRe = new RegExp('(' + styles + ') +', 'i');
	const variantRe = new RegExp('(' + variants + ') +', 'i');
	const stretchRe = new RegExp('(' + stretches + ') +', 'i');
	const sizeFamilyRe = new RegExp(
	  '([\\d\\.]+)(' + units + ') *'
	  + '((?:' + string + ')( *, *(?:' + string + '))*)');

	/**
	 * Cache font parsing.
	 */

	const cache = {};

	const defaultHeight = 16; // pt, common browser default

	/**
	 * Parse font `str`.
	 *
	 * @param {String} str
	 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
	 *   appearing in the input string.
	 * @api private
	 */

	var parseFont = function (str) {
	  // Cached
	  if (cache[str]) return cache[str]

	  // Try for required properties first.
	  const sizeFamily = sizeFamilyRe.exec(str);
	  if (!sizeFamily) return // invalid

	  // Default values and required properties
	  const font = {
	    weight: 'normal',
	    style: 'normal',
	    stretch: 'normal',
	    variant: 'normal',
	    size: parseFloat(sizeFamily[1]),
	    unit: sizeFamily[2],
	    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')
	  };

	  // Optional, unordered properties.
	  let weight, style, variant, stretch;
	  // Stop search at `sizeFamily.index`
	  let substr = str.substring(0, sizeFamily.index);
	  if ((weight = weightRe.exec(substr))) font.weight = weight[1];
	  if ((style = styleRe.exec(substr))) font.style = style[1];
	  if ((variant = variantRe.exec(substr))) font.variant = variant[1];
	  if ((stretch = stretchRe.exec(substr))) font.stretch = stretch[1];

	  // Convert to device units. (`font.unit` is the original unit)
	  // TODO: ch, ex
	  switch (font.unit) {
	    case 'pt':
	      font.size /= 0.75;
	      break
	    case 'pc':
	      font.size *= 16;
	      break
	    case 'in':
	      font.size *= 96;
	      break
	    case 'cm':
	      font.size *= 96.0 / 2.54;
	      break
	    case 'mm':
	      font.size *= 96.0 / 25.4;
	      break
	    case '%':
	      // TODO disabled because existing unit tests assume 100
	      // font.size *= defaultHeight / 100 / 0.75
	      break
	    case 'em':
	    case 'rem':
	      font.size *= defaultHeight / 0.75;
	      break
	    case 'q':
	      font.size *= 96 / 25.4 / 4;
	      break
	  }

	  return (cache[str] = font)
	};

	// DOMMatrix per https://drafts.fxtf.org/geometry/#DOMMatrix

	function DOMPoint(x, y, z, w) {
	  if (!(this instanceof DOMPoint)) {
	    throw new TypeError("Class constructors cannot be invoked without 'new'")
	  }

	  if (typeof x === 'object') {
	    w = x.w;
	    z = x.z;
	    y = x.y;
	    x = x.x;
	  }
	  this.x = typeof x === 'number' ? x : 0;
	  this.y = typeof y === 'number' ? y : 0;
	  this.z = typeof z === 'number' ? z : 0;
	  this.w = typeof w === 'number' ? w : 1;
	}

	// Constants to index into _values (col-major)
	const M11 = 0, M12 = 1, M13 = 2, M14 = 3;
	const M21 = 4, M22 = 5, M23 = 6, M24 = 7;
	const M31 = 8, M32 = 9, M33 = 10, M34 = 11;
	const M41 = 12, M42 = 13, M43 = 14, M44 = 15;

	const DEGREE_PER_RAD = 180 / Math.PI;
	const RAD_PER_DEGREE = Math.PI / 180;

	function parseMatrix(init) {
	  var parsed = init.replace(/matrix\(/, '');
	  parsed = parsed.split(/,/, 7); // 6 + 1 to handle too many params
	  if (parsed.length !== 6) throw new Error(`Failed to parse ${init}`)
	  parsed = parsed.map(parseFloat);
	  return [
	    parsed[0], parsed[1], 0, 0,
	    parsed[2], parsed[3], 0, 0,
	    0, 0, 1, 0,
	    parsed[4], parsed[5], 0, 1
	  ]
	}

	function parseMatrix3d(init) {
	  var parsed = init.replace(/matrix3d\(/, '');
	  parsed = parsed.split(/,/, 17); // 16 + 1 to handle too many params
	  if (parsed.length !== 16) throw new Error(`Failed to parse ${init}`)
	  return parsed.map(parseFloat)
	}

	function parseTransform(tform) {
	  var type = tform.split(/\(/, 1)[0];
	  switch (type) {
	    case 'matrix':
	      return parseMatrix(tform)
	    case 'matrix3d':
	      return parseMatrix3d(tform)
	    // TODO This is supposed to support any CSS transform value.
	    default:
	      throw new Error(`${type} parsing not implemented`)
	  }
	}

	function DOMMatrix (init) {
	  if (!(this instanceof DOMMatrix)) {
	    throw new TypeError("Class constructors cannot be invoked without 'new'")
	  }

	  this._is2D = true;
	  this._values = new Float64Array([
	    1, 0, 0, 0,
	    0, 1, 0, 0,
	    0, 0, 1, 0,
	    0, 0, 0, 1
	  ]);

	  var i;

	  if (typeof init === 'string') { // parse CSS transformList
	    if (init === '') return // default identity matrix
	    var tforms = init.split(/\)\s+/, 20).map(parseTransform);
	    if (tforms.length === 0) return
	    init = tforms[0];
	    for (i = 1; i < tforms.length; i++) init = multiply(tforms[i], init);
	  }

	  i = 0;
	  if (init && init.length === 6) {
	    setNumber2D(this, M11, init[i++]);
	    setNumber2D(this, M12, init[i++]);
	    setNumber2D(this, M21, init[i++]);
	    setNumber2D(this, M22, init[i++]);
	    setNumber2D(this, M41, init[i++]);
	    setNumber2D(this, M42, init[i++]);
	  } else if (init && init.length === 16) {
	    setNumber2D(this, M11, init[i++]);
	    setNumber2D(this, M12, init[i++]);
	    setNumber3D(this, M13, init[i++]);
	    setNumber3D(this, M14, init[i++]);
	    setNumber2D(this, M21, init[i++]);
	    setNumber2D(this, M22, init[i++]);
	    setNumber3D(this, M23, init[i++]);
	    setNumber3D(this, M24, init[i++]);
	    setNumber3D(this, M31, init[i++]);
	    setNumber3D(this, M32, init[i++]);
	    setNumber3D(this, M33, init[i++]);
	    setNumber3D(this, M34, init[i++]);
	    setNumber2D(this, M41, init[i++]);
	    setNumber2D(this, M42, init[i++]);
	    setNumber3D(this, M43, init[i++]);
	    setNumber3D(this, M44, init[i]);
	  } else if (init !== undefined) {
	    throw new TypeError('Expected string or array.')
	  }
	}

	DOMMatrix.fromMatrix = function (init) {
	  if (!(init instanceof DOMMatrix)) throw new TypeError('Expected DOMMatrix')
	  return new DOMMatrix(init._values)
	};
	DOMMatrix.fromFloat32Array = function (init) {
	  if (!(init instanceof Float32Array)) throw new TypeError('Expected Float32Array')
	  return new DOMMatrix(init)
	};
	DOMMatrix.fromFloat64Array = function (init) {
	  if (!(init instanceof Float64Array)) throw new TypeError('Expected Float64Array')
	  return new DOMMatrix(init)
	};

	// TODO || is for Node.js pre-v6.6.0
	DOMMatrix.prototype[util.inspect.custom || 'inspect'] = function (depth, options) {
	  if (depth < 0) return '[DOMMatrix]'

	  return `DOMMatrix [
    a: ${this.a}
    b: ${this.b}
    c: ${this.c}
    d: ${this.d}
    e: ${this.e}
    f: ${this.f}
    m11: ${this.m11}
    m12: ${this.m12}
    m13: ${this.m13}
    m14: ${this.m14}
    m21: ${this.m21}
    m22: ${this.m22}
    m23: ${this.m23}
    m23: ${this.m23}
    m31: ${this.m31}
    m32: ${this.m32}
    m33: ${this.m33}
    m34: ${this.m34}
    m41: ${this.m41}
    m42: ${this.m42}
    m43: ${this.m43}
    m44: ${this.m44}
    is2D: ${this.is2D}
    isIdentity: ${this.isIdentity} ]`
	};

	DOMMatrix.prototype.toString = function () {
	  return this.is2D ?
	    `matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e}, ${this.f})` :
	    `matrix3d(${this._values.join(', ')})`
	};

	/**
	 * Checks that `value` is a number and sets the value.
	 */
	function setNumber2D(receiver, index, value) {
	  if (typeof value !== 'number') throw new TypeError('Expected number')
	  return receiver._values[index] = value
	}

	/**
	 * Checks that `value` is a number, sets `_is2D = false` if necessary and sets
	 * the value.
	 */
	function setNumber3D(receiver, index, value) {
	  if (typeof value !== 'number') throw new TypeError('Expected number')
	  if (index === M33 || index === M44) {
	    if (value !== 1) receiver._is2D = false;
	  } else if (value !== 0) receiver._is2D = false;
	  return receiver._values[index] = value
	}

	Object.defineProperties(DOMMatrix.prototype, {
	  m11: {get: function () { return this._values[M11] }, set: function (v) { return setNumber2D(this, M11, v) }},
	  m12: {get: function () { return this._values[M12] }, set: function (v) { return setNumber2D(this, M12, v) }},
	  m13: {get: function () { return this._values[M13] }, set: function (v) { return setNumber3D(this, M13, v) }},
	  m14: {get: function () { return this._values[M14] }, set: function (v) { return setNumber3D(this, M14, v) }},
	  m21: {get: function () { return this._values[M21] }, set: function (v) { return setNumber2D(this, M21, v) }},
	  m22: {get: function () { return this._values[M22] }, set: function (v) { return setNumber2D(this, M22, v) }},
	  m23: {get: function () { return this._values[M23] }, set: function (v) { return setNumber3D(this, M23, v) }},
	  m24: {get: function () { return this._values[M24] }, set: function (v) { return setNumber3D(this, M24, v) }},
	  m31: {get: function () { return this._values[M31] }, set: function (v) { return setNumber3D(this, M31, v) }},
	  m32: {get: function () { return this._values[M32] }, set: function (v) { return setNumber3D(this, M32, v) }},
	  m33: {get: function () { return this._values[M33] }, set: function (v) { return setNumber3D(this, M33, v) }},
	  m34: {get: function () { return this._values[M34] }, set: function (v) { return setNumber3D(this, M34, v) }},
	  m41: {get: function () { return this._values[M41] }, set: function (v) { return setNumber2D(this, M41, v) }},
	  m42: {get: function () { return this._values[M42] }, set: function (v) { return setNumber2D(this, M42, v) }},
	  m43: {get: function () { return this._values[M43] }, set: function (v) { return setNumber3D(this, M43, v) }},
	  m44: {get: function () { return this._values[M44] }, set: function (v) { return setNumber3D(this, M44, v) }},

	  a: {get: function () { return this.m11 }, set: function (v) { return this.m11 = v }},
	  b: {get: function () { return this.m12 }, set: function (v) { return this.m12 = v }},
	  c: {get: function () { return this.m21 }, set: function (v) { return this.m21 = v }},
	  d: {get: function () { return this.m22 }, set: function (v) { return this.m22 = v }},
	  e: {get: function () { return this.m41 }, set: function (v) { return this.m41 = v }},
	  f: {get: function () { return this.m42 }, set: function (v) { return this.m42 = v }},

	  is2D: {get: function () { return this._is2D }}, // read-only

	  isIdentity: {
	    get: function () {
	      var values = this._values;
	      return values[M11] === 1 && values[M12] === 0 && values[M13] === 0 && values[M14] === 0 &&
	             values[M21] === 0 && values[M22] === 1 && values[M23] === 0 && values[M24] === 0 &&
	             values[M31] === 0 && values[M32] === 0 && values[M33] === 1 && values[M34] === 0 &&
	             values[M41] === 0 && values[M42] === 0 && values[M43] === 0 && values[M44] === 1
	    }
	  }
	});

	/**
	 * Instantiates a DOMMatrix, bypassing the constructor.
	 * @param {Float64Array} values Value to assign to `_values`. This is assigned
	 *   without copying (okay because all usages are followed by a  multiply).
	 */
	function newInstance(values) {
	  var instance = Object.create(DOMMatrix.prototype);
	  instance.constructor = DOMMatrix;
	  instance._is2D = true;
	  instance._values = values;
	  return instance
	}

	function multiply(A, B) {
	  var dest = new Float64Array(16);
	  for (var i = 0; i < 4; i++) {
	    for (var j = 0; j < 4; j++) {
	      var sum = 0;
	      for (var k = 0; k < 4; k++) {
	        sum += A[i * 4 + k] * B[k * 4 + j];
	      }
	      dest[i * 4 + j] = sum;
	    }
	  }
	  return dest
	}

	DOMMatrix.prototype.multiply = function (other) {
	  return newInstance(this._values).multiplySelf(other)
	};
	DOMMatrix.prototype.multiplySelf = function (other) {
	  this._values = multiply(other._values, this._values);
	  if (!other.is2D) this._is2D = false;
	  return this
	};
	DOMMatrix.prototype.preMultiplySelf = function (other) {
	  this._values = multiply(this._values, other._values);
	  if (!other.is2D) this._is2D = false;
	  return this
	};

	DOMMatrix.prototype.translate = function (tx, ty, tz) {
	  return newInstance(this._values).translateSelf(tx, ty, tz)
	};
	DOMMatrix.prototype.translateSelf = function (tx, ty, tz) {
	  if (typeof tx !== 'number') tx = 0;
	  if (typeof ty !== 'number') ty = 0;
	  if (typeof tz !== 'number') tz = 0;
	  this._values = multiply([
	    1, 0, 0, 0,
	    0, 1, 0, 0,
	    0, 0, 1, 0,
	    tx, ty, tz, 1
	  ], this._values);
	  if (tz !== 0) this._is2D = false;
	  return this
	};

	DOMMatrix.prototype.scale = function (scaleX, scaleY, scaleZ, originX, originY, originZ) {
	  return newInstance(this._values).scaleSelf(scaleX, scaleY, scaleZ, originX, originY, originZ)
	};
	DOMMatrix.prototype.scale3d = function (scale, originX, originY, originZ) {
	  return newInstance(this._values).scale3dSelf(scale, originX, originY, originZ)
	};
	DOMMatrix.prototype.scale3dSelf = function (scale, originX, originY, originZ) {
	  return this.scaleSelf(scale, scale, scale, originX, originY, originZ)
	};
	DOMMatrix.prototype.scaleSelf = function (scaleX, scaleY, scaleZ, originX, originY, originZ) {
	  // Not redundant with translate's checks because we need to negate the values later.
	  if (typeof originX !== 'number') originX = 0;
	  if (typeof originY !== 'number') originY = 0;
	  if (typeof originZ !== 'number') originZ = 0;
	  this.translateSelf(originX, originY, originZ);
	  if (typeof scaleX !== 'number') scaleX = 1;
	  if (typeof scaleY !== 'number') scaleY = scaleX;
	  if (typeof scaleZ !== 'number') scaleZ = 1;
	  this._values = multiply([
	    scaleX, 0, 0, 0,
	    0, scaleY, 0, 0,
	    0, 0, scaleZ, 0,
	    0, 0, 0, 1
	  ], this._values);
	  this.translateSelf(-originX, -originY, -originZ);
	  if (scaleZ !== 1 || originZ !== 0) this._is2D = false;
	  return this
	};

	DOMMatrix.prototype.rotateFromVector = function (x, y) {
	  return newInstance(this._values).rotateFromVectorSelf(x, y)
	};
	DOMMatrix.prototype.rotateFromVectorSelf = function (x, y) {
	  if (typeof x !== 'number') x = 0;
	  if (typeof y !== 'number') y = 0;
	  var theta = (x === 0 && y === 0) ? 0 : Math.atan2(y, x) * DEGREE_PER_RAD;
	  return this.rotateSelf(theta)
	};
	DOMMatrix.prototype.rotate = function (rotX, rotY, rotZ) {
	  return newInstance(this._values).rotateSelf(rotX, rotY, rotZ)
	};
	DOMMatrix.prototype.rotateSelf = function (rotX, rotY, rotZ) {
	  if (rotY === undefined && rotZ === undefined) {
	    rotZ = rotX;
	    rotX = rotY = 0;
	  }
	  if (typeof rotY !== 'number') rotY = 0;
	  if (typeof rotZ !== 'number') rotZ = 0;
	  if (rotX !== 0 || rotY !== 0) this._is2D = false;
	  rotX *= RAD_PER_DEGREE;
	  rotY *= RAD_PER_DEGREE;
	  rotZ *= RAD_PER_DEGREE;
	  var c, s;
	  c = Math.cos(rotZ);
	  s = Math.sin(rotZ);
	  this._values = multiply([
	    c, s, 0, 0,
	    -s, c, 0, 0,
	    0, 0, 1, 0,
	    0, 0, 0, 1
	  ], this._values);
	  c = Math.cos(rotY);
	  s = Math.sin(rotY);
	  this._values = multiply([
	    c, 0, -s, 0,
	    0, 1, 0, 0,
	    s, 0, c, 0,
	    0, 0, 0, 1
	  ], this._values);
	  c = Math.cos(rotX);
	  s = Math.sin(rotX);
	  this._values = multiply([
	    1, 0, 0, 0,
	    0, c, s, 0,
	    0, -s, c, 0,
	    0, 0, 0, 1
	  ], this._values);
	  return this
	};

	DOMMatrix.prototype.rotateAxisAngle = function (x, y, z, angle) {
	  return newInstance(this._values).rotateAxisAngleSelf(x, y, z, angle)
	};
	DOMMatrix.prototype.rotateAxisAngleSelf = function (x, y, z, angle) {
	  if (typeof x !== 'number') x = 0;
	  if (typeof y !== 'number') y = 0;
	  if (typeof z !== 'number') z = 0;
	  // Normalize axis
	  var length = Math.sqrt(x * x + y * y + z * z);
	  if (length === 0) return this
	  if (length !== 1) {
	    x /= length;
	    y /= length;
	    z /= length;
	  }
	  angle *= RAD_PER_DEGREE;
	  var c = Math.cos(angle);
	  var s = Math.sin(angle);
	  var t = 1 - c;
	  var tx = t * x;
	  var ty = t * y;
	  // NB: This is the generic transform. If the axis is a major axis, there are
	  // faster transforms.
	  this._values = multiply([
	    tx * x + c,      tx * y + s * z,  tx * z - s * y,  0,
	    tx * y - s * z,  ty * y + c,      ty * z + s * x,  0,
	    tx * z + s * y,  ty * z - s * x,  t * z * z + c,   0,
	    0,               0,               0,               1
	  ], this._values);
	  if (x !== 0 || y !== 0) this._is2D = false;
	  return this
	};

	DOMMatrix.prototype.skewX = function (sx) {
	  return newInstance(this._values).skewXSelf(sx)
	};
	DOMMatrix.prototype.skewXSelf = function (sx) {
	  if (typeof sx !== 'number') return this
	  var t = Math.tan(sx * RAD_PER_DEGREE);
	  this._values = multiply([
	    1, 0, 0, 0,
	    t, 1, 0, 0,
	    0, 0, 1, 0,
	    0, 0, 0, 1
	  ], this._values);
	  return this
	};

	DOMMatrix.prototype.skewY = function (sy) {
	  return newInstance(this._values).skewYSelf(sy)
	};
	DOMMatrix.prototype.skewYSelf = function (sy) {
	  if (typeof sy !== 'number') return this
	  var t = Math.tan(sy * RAD_PER_DEGREE);
	  this._values = multiply([
	    1, t, 0, 0,
	    0, 1, 0, 0,
	    0, 0, 1, 0,
	    0, 0, 0, 1
	  ], this._values);
	  return this
	};

	DOMMatrix.prototype.flipX = function () { 
	  return newInstance(multiply([
	    -1, 0, 0, 0,
	    0, 1, 0, 0,
	    0, 0, 1, 0,
	    0, 0, 0, 1
	  ], this._values))
	};
	DOMMatrix.prototype.flipY = function () {
	  return newInstance(multiply([
	    1, 0, 0, 0,
	    0, -1, 0, 0,
	    0, 0, 1, 0,
	    0, 0, 0, 1
	  ], this._values))
	};

	DOMMatrix.prototype.inverse = function () {
	  return newInstance(this._values).invertSelf()
	};
	DOMMatrix.prototype.invertSelf = function () {
	  // If not invertible, set all attributes to NaN and is2D to false
	  throw new Error('Not implemented')
	};

	DOMMatrix.prototype.setMatrixValue = function (transformList) {
	  var temp = new DOMMatrix(transformList);
	  this._values = temp._values;
	  this._is2D = temp._is2D;
	  return this
	};

	DOMMatrix.prototype.transformPoint = function (point) {
	  point = new DOMPoint(point);
	  var x = point.x;
	  var y = point.y;
	  var z = point.z;
	  var w = point.w;
	  var values = this._values;
	  var nx = values[M11] * x + values[M21] * y + values[M31] * z + values[M41] * w;
	  var ny = values[M12] * x + values[M22] * y + values[M32] * z + values[M42] * w;
	  var nz = values[M13] * x + values[M23] * y + values[M33] * z + values[M43] * w;
	  var nw = values[M14] * x + values[M24] * y + values[M34] * z + values[M44] * w;
	  return new DOMPoint(nx, ny, nz, nw)
	};

	DOMMatrix.prototype.toFloat32Array = function () { 
	  return Float32Array.from(this._values)
	};

	DOMMatrix.prototype.toFloat64Array = function () { 
	  return this._values.slice(0)
	};

	var DOMMatrix_1 = {DOMMatrix, DOMPoint};

	/*!
	 * Canvas - Context2d
	 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
	 * MIT Licensed
	 */



	const { DOMMatrix: DOMMatrix$1 } = DOMMatrix_1;

	bindings.CanvasRenderingContext2dInit(DOMMatrix$1, parseFont);
	var context2d = bindings.CanvasRenderingContext2d;

	var pngstream = createCommonjsModule(function (module) {

	/*!
	 * Canvas - PNGStream
	 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
	 * MIT Licensed
	 */

	var Readable = stream.Readable;


	var PNGStream = module.exports = function PNGStream(canvas, options) {
	  if (!(this instanceof PNGStream)) {
	    throw new TypeError("Class constructors cannot be invoked without 'new'");
	  }

	  Readable.call(this);

	  if (options &&
	    options.palette instanceof Uint8ClampedArray &&
	    options.palette.length % 4 !== 0) {
	    throw new Error("Palette length must be a multiple of 4.");
	  }
	  this.canvas = canvas;
	  this.options = options || {};
	};

	util.inherits(PNGStream, Readable);

	function noop() {}

	PNGStream.prototype._read = function _read() {
	  // For now we're not controlling the c++ code's data emission, so we only
	  // call canvas.streamPNGSync once and let it emit data at will.
	  this._read = noop;
	  var self = this;
	  self.canvas.streamPNGSync(function(err, chunk, len){
	    if (err) {
	      self.emit('error', err);
	    } else if (len) {
	      self.push(chunk);
	    } else {
	      self.push(null);
	    }
	  }, self.options);
	};
	});

	var pdfstream = createCommonjsModule(function (module) {

	/*!
	 * Canvas - PDFStream
	 */

	var Readable = stream.Readable;


	var PDFStream = module.exports = function PDFStream(canvas, options) {
	  if (!(this instanceof PDFStream)) {
	    throw new TypeError("Class constructors cannot be invoked without 'new'");
	  }

	  Readable.call(this);

	  this.canvas = canvas;
	  this.options = options;
	};

	util.inherits(PDFStream, Readable);

	function noop() {}

	PDFStream.prototype._read = function _read() {
	  // For now we're not controlling the c++ code's data emission, so we only
	  // call canvas.streamPDFSync once and let it emit data at will.
	  this._read = noop;
	  var self = this;
	  self.canvas.streamPDFSync(function(err, chunk, len){
	    if (err) {
	      self.emit('error', err);
	    } else if (len) {
	      self.push(chunk);
	    } else {
	      self.push(null);
	    }
	  }, this.options);
	};
	});

	var jpegstream = createCommonjsModule(function (module) {

	/*!
	 * Canvas - JPEGStream
	 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
	 * MIT Licensed
	 */

	var Readable = stream.Readable;


	var JPEGStream = module.exports = function JPEGStream(canvas, options) {
	  if (!(this instanceof JPEGStream)) {
	    throw new TypeError("Class constructors cannot be invoked without 'new'");
	  }

	  if (canvas.streamJPEGSync === undefined) {
	    throw new Error("node-canvas was built without JPEG support.");
	  }

	  Readable.call(this);

	  this.options = options;
	  this.canvas = canvas;
	};

	util.inherits(JPEGStream, Readable);

	function noop() {}

	JPEGStream.prototype._read = function _read() {
	  // For now we're not controlling the c++ code's data emission, so we only
	  // call canvas.streamJPEGSync once and let it emit data at will.
	  this._read = noop;
	  var self = this;
	  self.canvas.streamJPEGSync(this.options, function(err, chunk){
	    if (err) {
	      self.emit('error', err);
	    } else if (chunk) {
	      self.push(chunk);
	    } else {
	      self.push(null);
	    }
	  });
	};
	});

	var canvas = createCommonjsModule(function (module) {

	/*!
	 * Canvas
	 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
	 * MIT Licensed
	 */


	const Canvas = module.exports = bindings.Canvas;




	const FORMATS = ['image/png', 'image/jpeg'];


	// TODO || is for Node.js pre-v6.6.0
	Canvas.prototype[util.inspect.custom || 'inspect'] = function () {
	  return `[Canvas ${this.width}x${this.height}]`
	};

	Canvas.prototype.getContext = function (contextType, contextAttributes) {
	  if ('2d' == contextType) {
	    var ctx = this._context2d || (this._context2d = new context2d(this, contextAttributes));
	    this.context = ctx;
	    ctx.canvas = this;
	    return ctx;
	  }
	};

	Canvas.prototype.pngStream =
	Canvas.prototype.createPNGStream = function(options){
	  return new pngstream(this, options);
	};

	Canvas.prototype.pdfStream =
	Canvas.prototype.createPDFStream = function(options){
	  return new pdfstream(this, options);
	};

	Canvas.prototype.jpegStream =
	Canvas.prototype.createJPEGStream = function(options){
	  return new jpegstream(this, options);
	};

	Canvas.prototype.toDataURL = function(a1, a2, a3){
	  // valid arg patterns (args -> [type, opts, fn]):
	  // [] -> ['image/png', null, null]
	  // [qual] -> ['image/png', null, null]
	  // [undefined] -> ['image/png', null, null]
	  // ['image/png'] -> ['image/png', null, null]
	  // ['image/png', qual] -> ['image/png', null, null]
	  // [fn] -> ['image/png', null, fn]
	  // [type, fn] -> [type, null, fn]
	  // [undefined, fn] -> ['image/png', null, fn]
	  // ['image/png', qual, fn] -> ['image/png', null, fn]
	  // ['image/jpeg', fn] -> ['image/jpeg', null, fn]
	  // ['image/jpeg', opts, fn] -> ['image/jpeg', opts, fn]
	  // ['image/jpeg', qual, fn] -> ['image/jpeg', {quality: qual}, fn]
	  // ['image/jpeg', undefined, fn] -> ['image/jpeg', null, fn]
	  // ['image/jpeg'] -> ['image/jpeg', null, fn]
	  // ['image/jpeg', opts] -> ['image/jpeg', opts, fn]
	  // ['image/jpeg', qual] -> ['image/jpeg', {quality: qual}, fn]

	  var type = 'image/png';
	  var opts = {};
	  var fn;

	  if ('function' === typeof a1) {
	    fn = a1;
	  } else {
	    if ('string' === typeof a1 && FORMATS.includes(a1.toLowerCase())) {
	      type = a1.toLowerCase();
	    }

	    if ('function' === typeof a2) {
	      fn = a2;
	    } else {
	      if ('object' === typeof a2) {
	        opts = a2;
	      } else if ('number' === typeof a2) {
	        opts = {quality: Math.max(0, Math.min(1, a2))};
	      }

	      if ('function' === typeof a3) {
	        fn = a3;
	      } else if (undefined !== a3) {
	        throw new TypeError(typeof a3 + ' is not a function');
	      }
	    }
	  }

	  if (this.width === 0 || this.height === 0) {
	    // Per spec, if the bitmap has no pixels, return this string:
	    var str = "data:,";
	    if (fn) {
	      setTimeout(() => fn(null, str));
	      return;
	    } else {
	      return str;
	    }
	  }

	  if (fn) {
	    this.toBuffer((err, buf) => {
	      if (err) return fn(err);
	      fn(null, `data:${type};base64,${buf.toString('base64')}`);
	    }, type, opts);
	  } else {
	    return `data:${type};base64,${this.toBuffer(type, opts).toString('base64')}`
	  }
	};
	});

	var simpleConcat = function (stream, cb) {
	  var chunks = [];
	  stream.on('data', function (chunk) {
	    chunks.push(chunk);
	  });
	  stream.once('end', function () {
	    if (cb) cb(null, Buffer.concat(chunks));
	    cb = null;
	  });
	  stream.once('error', function (err) {
	    if (cb) cb(err);
	    cb = null;
	  });
	};

	// We define these manually to ensure they're always copied
	// even if they would move up the prototype chain
	// https://nodejs.org/api/http.html#http_class_http_incomingmessage
	const knownProperties = [
		'aborted',
		'complete',
		'destroy',
		'headers',
		'httpVersion',
		'httpVersionMinor',
		'httpVersionMajor',
		'method',
		'rawHeaders',
		'rawTrailers',
		'setTimeout',
		'socket',
		'statusCode',
		'statusMessage',
		'trailers',
		'url'
	];

	var mimicResponse = (fromStream, toStream) => {
		const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));

		for (const property of fromProperties) {
			// Don't overwrite existing properties.
			if (property in toStream) {
				continue;
			}

			toStream[property] = typeof fromStream[property] === 'function' ? fromStream[property].bind(fromStream) : fromStream[property];
		}

		return toStream;
	};

	const {PassThrough: PassThroughStream} = stream;



	const decompressResponse = response => {
		const contentEncoding = (response.headers['content-encoding'] || '').toLowerCase();

		if (!['gzip', 'deflate', 'br'].includes(contentEncoding)) {
			return response;
		}

		const isBrotli = contentEncoding === 'br';
		if (isBrotli && typeof zlib.createBrotliDecompress !== 'function') {
			return response;
		}

		const decompress = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
		const stream = new PassThroughStream();

		mimicResponse(response, stream);

		decompress.on('error', error => {
			// Ignore empty response
			if (error.code === 'Z_BUF_ERROR') {
				stream.end();
				return;
			}

			stream.emit('error', error);
		});

		response.pipe(decompress).pipe(stream);

		return stream;
	};

	var decompressResponse_1 = decompressResponse;
	// TODO: remove this in the next major version
	var _default = decompressResponse;
	decompressResponse_1.default = _default;

	// Returns a wrapper function that returns a wrapped callback
	// The wrapper function should do some stuff, and return a
	// presumably different callback function.
	// This makes sure that own properties are retained, so that
	// decorations and such are not lost along the way.
	var wrappy_1 = wrappy;
	function wrappy (fn, cb) {
	  if (fn && cb) return wrappy(fn)(cb)

	  if (typeof fn !== 'function')
	    throw new TypeError('need wrapper function')

	  Object.keys(fn).forEach(function (k) {
	    wrapper[k] = fn[k];
	  });

	  return wrapper

	  function wrapper() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    var ret = fn.apply(this, args);
	    var cb = args[args.length-1];
	    if (typeof ret === 'function' && ret !== cb) {
	      Object.keys(cb).forEach(function (k) {
	        ret[k] = cb[k];
	      });
	    }
	    return ret
	  }
	}

	var once_1 = wrappy_1(once);
	var strict = wrappy_1(onceStrict);

	once.proto = once(function () {
	  Object.defineProperty(Function.prototype, 'once', {
	    value: function () {
	      return once(this)
	    },
	    configurable: true
	  });

	  Object.defineProperty(Function.prototype, 'onceStrict', {
	    value: function () {
	      return onceStrict(this)
	    },
	    configurable: true
	  });
	});

	function once (fn) {
	  var f = function () {
	    if (f.called) return f.value
	    f.called = true;
	    return f.value = fn.apply(this, arguments)
	  };
	  f.called = false;
	  return f
	}

	function onceStrict (fn) {
	  var f = function () {
	    if (f.called)
	      throw new Error(f.onceError)
	    f.called = true;
	    return f.value = fn.apply(this, arguments)
	  };
	  var name = fn.name || 'Function wrapped with `once`';
	  f.onceError = name + " shouldn't be called more than once";
	  f.called = false;
	  return f
	}
	once_1.strict = strict;

	var simpleGet_1 = simpleGet;


	 // excluded from browser build






	const isStream = o => o !== null && typeof o === 'object' && typeof o.pipe === 'function';

	function simpleGet (opts, cb) {
	  opts = Object.assign({ maxRedirects: 10 }, typeof opts === 'string' ? { url: opts } : opts);
	  cb = once_1(cb);

	  if (opts.url) {
	    const { hostname, port, protocol, auth, path } = url.parse(opts.url); // eslint-disable-line node/no-deprecated-api
	    delete opts.url;
	    if (!hostname && !port && !protocol && !auth) opts.path = path; // Relative redirect
	    else Object.assign(opts, { hostname, port, protocol, auth, path }); // Absolute redirect
	  }

	  const headers = { 'accept-encoding': 'gzip, deflate' };
	  if (opts.headers) Object.keys(opts.headers).forEach(k => (headers[k.toLowerCase()] = opts.headers[k]));
	  opts.headers = headers;

	  let body;
	  if (opts.body) {
	    body = opts.json && !isStream(opts.body) ? JSON.stringify(opts.body) : opts.body;
	  } else if (opts.form) {
	    body = typeof opts.form === 'string' ? opts.form : querystring.stringify(opts.form);
	    opts.headers['content-type'] = 'application/x-www-form-urlencoded';
	  }

	  if (body) {
	    if (!opts.method) opts.method = 'POST';
	    if (!isStream(body)) opts.headers['content-length'] = Buffer.byteLength(body);
	    if (opts.json && !opts.form) opts.headers['content-type'] = 'application/json';
	  }
	  delete opts.body; delete opts.form;

	  if (opts.json) opts.headers.accept = 'application/json';
	  if (opts.method) opts.method = opts.method.toUpperCase();

	  const protocol = opts.protocol === 'https:' ? https : http; // Support http/https urls
	  const req = protocol.request(opts, res => {
	    if (opts.followRedirects !== false && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
	      opts.url = res.headers.location; // Follow 3xx redirects
	      delete opts.headers.host; // Discard `host` header on redirect (see #32)
	      res.resume(); // Discard response

	      if (opts.method === 'POST' && [301, 302].includes(res.statusCode)) {
	        opts.method = 'GET'; // On 301/302 redirect, change POST to GET (see #35)
	        delete opts.headers['content-length']; delete opts.headers['content-type'];
	      }

	      if (opts.maxRedirects-- === 0) return cb(new Error('too many redirects'))
	      else return simpleGet(opts, cb)
	    }

	    const tryUnzip = typeof decompressResponse_1 === 'function' && opts.method !== 'HEAD';
	    cb(null, tryUnzip ? decompressResponse_1(res) : res);
	  });
	  req.on('timeout', () => {
	    req.abort();
	    cb(new Error('Request timed out'));
	  });
	  req.on('error', cb);

	  if (isStream(body)) body.on('error', cb).pipe(req);
	  else req.end(body);

	  return req
	}

	simpleGet.concat = (opts, cb) => {
	  return simpleGet(opts, (err, res) => {
	    if (err) return cb(err)
	    simpleConcat(res, (err, data) => {
	      if (err) return cb(err)
	      if (opts.json) {
	        try {
	          data = JSON.parse(data.toString());
	        } catch (err) {
	          return cb(err, res, data)
	        }
	      }
	      cb(null, res, data);
	    });
	  })
	}

	;['get', 'post', 'put', 'patch', 'head', 'delete'].forEach(method => {
	  simpleGet[method] = (opts, cb) => {
	    if (typeof opts === 'string') opts = { url: opts };
	    return simpleGet(Object.assign({ method: method.toUpperCase() }, opts), cb)
	  };
	});

	var image = createCommonjsModule(function (module) {

	/*!
	 * Canvas - Image
	 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
	 * MIT Licensed
	 */

	/**
	 * Module dependencies.
	 */


	const Image = module.exports = bindings.Image;


	// Lazily loaded simple-get
	let get;

	const {GetSource, SetSource} = bindings;

	Object.defineProperty(Image.prototype, 'src', {
	  /**
	   * src setter. Valid values:
	   *  * `data:` URI
	   *  * Local file path
	   *  * HTTP or HTTPS URL
	   *  * Buffer containing image data (i.e. not a `data:` URI stored in a Buffer)
	   *
	   * @param {String|Buffer} val filename, buffer, data URI, URL
	   * @api public
	   */
	  set(val) {
	    if (typeof val === 'string') {
	      if (/^\s*data:/.test(val)) { // data: URI
	        const commaI = val.indexOf(',');
	        // 'base64' must come before the comma
	        const isBase64 = val.lastIndexOf('base64', commaI) !== -1;
	        const content = val.slice(commaI + 1);
	        setSource(this, Buffer.from(content, isBase64 ? 'base64' : 'utf8'), val);
	      } else if (/^\s*https?:\/\//.test(val)) { // remote URL
	        const onerror = err => {
	          if (typeof this.onerror === 'function') {
	            this.onerror(err);
	          } else {
	            throw err
	          }
	        };

	        if (!get) get = simpleGet_1;

	        get.concat(val, (err, res, data) => {
	          if (err) return onerror(err)

	          if (res.statusCode < 200 || res.statusCode >= 300) {
	            return onerror(new Error(`Server responded with ${res.statusCode}`))
	          }

	          setSource(this, data);
	        });
	      } else { // local file path assumed
	        setSource(this, val);
	      }
	    } else if (Buffer.isBuffer(val)) {
	      setSource(this, val);
	    }
	  },

	  get() {
	    // TODO https://github.com/Automattic/node-canvas/issues/118
	    return getSource(this);
	  },

	  configurable: true
	});

	// TODO || is for Node.js pre-v6.6.0
	Image.prototype[util.inspect.custom || 'inspect'] = function(){
	  return '[Image'
	    + (this.complete ? ':' + this.width + 'x' + this.height : '')
	    + (this.src ? ' ' + this.src : '')
	    + (this.complete ? ' complete' : '')
	    + ']';
	};

	function getSource(img){
	  return img._originalSource || GetSource.call(img);
	}

	function setSource(img, src, origSrc){
	  SetSource.call(img, src);
	  img._originalSource = origSrc;
	}
	});

	var _from = "canvas@^2.6.0";
	var _id = "canvas@2.6.1";
	var _inBundle = false;
	var _integrity = "sha512-S98rKsPcuhfTcYbtF53UIJhcbgIAK533d1kJKMwsMwAIFgfd58MOyxRud3kktlzWiEkFliaJtvyZCBtud/XVEA==";
	var _location = "/canvas";
	var _phantomChildren = {
	};
	var _requested = {
		type: "range",
		registry: true,
		raw: "canvas@^2.6.0",
		name: "canvas",
		escapedName: "canvas",
		rawSpec: "^2.6.0",
		saveSpec: null,
		fetchSpec: "^2.6.0"
	};
	var _requiredBy = [
		"/easyqrcodejs-nodejs"
	];
	var _resolved = "https://registry.npmjs.org/canvas/-/canvas-2.6.1.tgz";
	var _shasum = "0d087dd4d60f5a5a9efa202757270abea8bef89e";
	var _spec = "canvas@^2.6.0";
	var _where = "/Users/thunderquote/Documents/GitHub/PaynowQR/node_modules/easyqrcodejs-nodejs";
	var author = {
		name: "TJ Holowaychuk",
		email: "tj@learnboost.com"
	};
	var binary = {
		module_name: "canvas",
		module_path: "build/Release",
		host: "https://github.com/node-gfx/node-canvas-prebuilt/releases/download/",
		remote_path: "v{version}",
		package_name: "{module_name}-v{version}-{node_abi}-{platform}-{libc}-{arch}.tar.gz"
	};
	var browser = "browser.js";
	var bugs = {
		url: "https://github.com/Automattic/node-canvas/issues"
	};
	var bundleDependencies = false;
	var contributors = [
		{
			name: "Nathan Rajlich",
			email: "nathan@tootallnate.net"
		},
		{
			name: "Rod Vagg",
			email: "r@va.gg"
		},
		{
			name: "Juriy Zaytsev",
			email: "kangax@gmail.com"
		}
	];
	var dependencies = {
		nan: "^2.14.0",
		"node-pre-gyp": "^0.11.0",
		"simple-get": "^3.0.3"
	};
	var deprecated = false;
	var description = "Canvas graphics API backed by Cairo";
	var devDependencies = {
		"@types/node": "^10.12.18",
		"assert-rejects": "^1.0.0",
		dtslint: "^0.5.3",
		express: "^4.16.3",
		mocha: "^5.2.0",
		pixelmatch: "^4.0.2",
		standard: "^12.0.1"
	};
	var engines = {
		node: ">=6"
	};
	var files = [
		"binding.gyp",
		"lib/",
		"src/",
		"util/",
		"types/index.d.ts"
	];
	var homepage = "https://github.com/Automattic/node-canvas";
	var keywords = [
		"canvas",
		"graphic",
		"graphics",
		"pixman",
		"cairo",
		"image",
		"images",
		"pdf"
	];
	var license = "MIT";
	var main = "index.js";
	var name = "canvas";
	var repository = {
		type: "git",
		url: "git://github.com/Automattic/node-canvas.git"
	};
	var scripts = {
		benchmark: "node benchmarks/run.js",
		dtslint: "dtslint types",
		install: "node-pre-gyp install --fallback-to-build",
		prebenchmark: "node-gyp build",
		pretest: "standard examples/*.js test/server.js test/public/*.js benchmarks/run.js lib/context2d.js util/has_lib.js browser.js index.js && node-gyp build",
		"pretest-server": "node-gyp build",
		test: "mocha test/*.test.js",
		"test-server": "node test/server.js"
	};
	var types = "types/index.d.ts";
	var version = "2.6.1";
	var _package = {
		_from: _from,
		_id: _id,
		_inBundle: _inBundle,
		_integrity: _integrity,
		_location: _location,
		_phantomChildren: _phantomChildren,
		_requested: _requested,
		_requiredBy: _requiredBy,
		_resolved: _resolved,
		_shasum: _shasum,
		_spec: _spec,
		_where: _where,
		author: author,
		binary: binary,
		browser: browser,
		bugs: bugs,
		bundleDependencies: bundleDependencies,
		contributors: contributors,
		dependencies: dependencies,
		deprecated: deprecated,
		description: description,
		devDependencies: devDependencies,
		engines: engines,
		files: files,
		homepage: homepage,
		keywords: keywords,
		license: license,
		main: main,
		name: name,
		repository: repository,
		scripts: scripts,
		types: types,
		version: version
	};

	var _package$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		_from: _from,
		_id: _id,
		_inBundle: _inBundle,
		_integrity: _integrity,
		_location: _location,
		_phantomChildren: _phantomChildren,
		_requested: _requested,
		_requiredBy: _requiredBy,
		_resolved: _resolved,
		_shasum: _shasum,
		_spec: _spec,
		_where: _where,
		author: author,
		binary: binary,
		browser: browser,
		bugs: bugs,
		bundleDependencies: bundleDependencies,
		contributors: contributors,
		dependencies: dependencies,
		deprecated: deprecated,
		description: description,
		devDependencies: devDependencies,
		engines: engines,
		files: files,
		homepage: homepage,
		keywords: keywords,
		license: license,
		main: main,
		name: name,
		repository: repository,
		scripts: scripts,
		types: types,
		version: version,
		'default': _package
	});

	var packageJson = getCjsExportFromNamespace(_package$1);

	const DOMMatrix$2 = DOMMatrix_1.DOMMatrix;
	const DOMPoint$1 = DOMMatrix_1.DOMPoint;

	function createCanvas (width, height, type) {
	  return new canvas(width, height, type)
	}

	function createImageData (array, width, height) {
	  return new bindings.ImageData(array, width, height)
	}

	function loadImage (src) {
	  return new Promise((resolve, reject) => {
	    const image$1 = new image();

	    function cleanup () {
	      image$1.onload = null;
	      image$1.onerror = null;
	    }

	    image$1.onload = () => { cleanup(); resolve(image$1); };
	    image$1.onerror = (err) => { cleanup(); reject(err); };

	    image$1.src = src;
	  })
	}

	/**
	 * Resolve paths for registerFont. Must be called *before* creating a Canvas
	 * instance.
	 * @param src {string} Path to font file.
	 * @param fontFace {{family: string, weight?: string, style?: string}} Object
	 * specifying font information. `weight` and `style` default to `"normal"`.
	 */
	function registerFont (src, fontFace) {
	  // TODO this doesn't need to be on Canvas; it should just be a static method
	  // of `bindings`.
	  return canvas._registerFont(fs.realpathSync(src), fontFace)
	}

	var canvas$1 = {
	  Canvas: canvas,
	  Context2d: context2d, // Legacy/compat export
	  CanvasRenderingContext2D: context2d,
	  CanvasGradient: bindings.CanvasGradient,
	  CanvasPattern: bindings.CanvasPattern,
	  Image: image,
	  ImageData: bindings.ImageData,
	  PNGStream: pngstream,
	  PDFStream: pdfstream,
	  JPEGStream: jpegstream,
	  DOMMatrix: DOMMatrix$2,
	  DOMPoint: DOMPoint$1,

	  registerFont,
	  parseFont,

	  createCanvas,
	  createImageData,
	  loadImage,

	  backends: bindings.Backends,

	  /** Library version. */
	  version: packageJson.version,
	  /** Cairo version. */
	  cairoVersion: bindings.cairoVersion,
	  /** jpeglib version. */
	  jpegVersion: bindings.jpegVersion,
	  /** gif_lib version. */
	  gifVersion: bindings.gifVersion ? bindings.gifVersion.replace(/[^.\d]/g, '') : undefined,
	  /** freetype version. */
	  freetypeVersion: bindings.freetypeVersion
	};

	var index_min = createCommonjsModule(function (module) {
	function QR8bitByte(t){this.mode=QRMode.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,o=this.data.length;e<o;e++){var i=[],r=this.data.charCodeAt(e);r>65536?(i[0]=240|(1835008&r)>>>18,i[1]=128|(258048&r)>>>12,i[2]=128|(4032&r)>>>6,i[3]=128|63&r):r>2048?(i[0]=224|(61440&r)>>>12,i[1]=128|(4032&r)>>>6,i[2]=128|63&r):r>128?(i[0]=192|(1984&r)>>>6,i[1]=128|63&r):i[0]=r,this.parsedData.push(i);}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239));}function QRCodeModel(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[];}function QRPolynomial(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var o=0;o<t.length&&0==t[o];)o++;this.num=new Array(t.length-o+e);for(var i=0;i<t.length-o;i++)this.num[i]=t[i+o];}function QRRSBlock(t,e){this.totalCount=t,this.dataCount=e;}function QRBitBuffer(){this.buffer=[],this.length=0;}function _getTypeNumber(t,e){for(var o=e.correctLevel,i=1,r=_getUTF8Length(t),n=0,a=QRCodeLimitLength.length;n<=a;n++){var s=0;switch(o){case QRErrorCorrectLevel.L:s=QRCodeLimitLength[n][0];break;case QRErrorCorrectLevel.M:s=QRCodeLimitLength[n][1];break;case QRErrorCorrectLevel.Q:s=QRCodeLimitLength[n][2];break;case QRErrorCorrectLevel.H:s=QRCodeLimitLength[n][3];}if(r<=s)break;i++;}if(i>QRCodeLimitLength.length)throw new Error("Too long data");return 0!=e.version&&(i<=e.version?(i=e.version,e.runVersion=i):(console.warn("QR Code version "+e.version+" too small, run version use "+i),e.runVersion=i)),i}function _getUTF8Length(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}function QRCode(t){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:QRErrorCorrectLevel.H,dotScale:1,quietZone:0,quietZoneColor:"transparent",title:"",titleFont:"bold 16px Arial",titleColor:"#000000",titleBackgroundColor:"#ffffff",titleHeight:0,titleTop:30,subTitle:"",subTitleFont:"14px Arial",subTitleColor:"#4F4F4F",subTitleTop:60,logo:void 0,logoWidth:void 0,logoHeight:void 0,logoBackgroundColor:"#ffffff",logoBackgroundTransparent:!1,PO:void 0,PI:void 0,PO_TL:void 0,PI_TL:void 0,PO_TR:void 0,PI_TR:void 0,PO_BL:void 0,PI_BL:void 0,AO:void 0,AI:void 0,timing:void 0,timing_H:void 0,timing_V:void 0,backgroundImage:void 0,backgroundImageAlpha:1,autoColor:!1,onRenderingStart:void 0,format:"PNG",compressionLevel:6,quality:.75,version:0},"string"==typeof t&&(t={text:t}),t)for(var e in t)this._htOption[e]=t[e];(this._htOption.version<0||this._htOption.version>40)&&(console.warn("QR Code version '"+this._htOption.version+"' is invalidate, reset to 0"),this._htOption.version=0),this._htOption.format=this._htOption.format.toUpperCase(),"PNG"!=this._htOption.format&&"JPG"!=this._htOption.format&&(console.warn("Image format '"+this._htOption.format+"' is invalidate, reset to 'PNG'"),this._htOption.format="PNG"),"PNG"==this._htOption.format&&(this._htOption.compressionLevel<0||this._htOption.compressionLevel>9)?(console.warn(this._htOption.compressionLevel+" is invalidate, PNG compressionLevel must between 0 and 9, now reset to 6. "),this._htOption.compressionLevel=1):(this._htOption.quality<0||this._htOption.quality>1)&&(console.warn(this._htOption.quality+" is invalidate, JPG quality must between 0 and 1, now reset to 0.75. "),this._htOption.quality=.75),(this._htOption.dotScale<0||this._htOption.dotScale>1)&&(console.warn(this._htOption.dotScale+" , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "),this._htOption.dotScale=1),(this._htOption.backgroundImageAlpha<0||this._htOption.backgroundImageAlpha>1)&&(console.warn(this._htOption.backgroundImageAlpha+" , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "),this._htOption.backgroundImageAlpha=1),this._htOption.height=this._htOption.height+this._htOption.titleHeight,this._oQRCode=null,this._oQRCode=new QRCodeModel(_getTypeNumber(this._htOption.text,this._htOption),this._htOption.correctLevel),this._oQRCode.addData(this._htOption.text),this._oQRCode.make();}var createCanvas=canvas$1.createCanvas,Image=canvas$1.Image;QR8bitByte.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,o=this.parsedData.length;e<o;e++)t.put(this.parsedData[e],8);}},QRCodeModel.prototype={addData:function(t){var e=new QR8bitByte(t);this.dataList.push(e),this.dataCache=null;},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e][0]},getEye:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);var o=this.modules[t][e];if(o[1]){var i="P"+o[1]+"_"+o[2];return "A"==o[2]&&(i="A"+o[1]),{isDarkBlock:o[0],type:i}}return null},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern());},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[o][i]=[];}this.setupPositionProbePattern(0,0,"TL"),this.setupPositionProbePattern(this.moduleCount-7,0,"BL"),this.setupPositionProbePattern(0,this.moduleCount-7,"TR"),this.setupPositionAdjustPattern("A"),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e);},setupPositionProbePattern:function(t,e,o){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(0<=i&&i<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=r&&r<=4?(this.modules[t+i][e+r][0]=!0,this.modules[t+i][e+r][2]=o,this.modules[t+i][e+r][1]=-0==i||-0==r||6==i||6==r?"O":"I"):this.modules[t+i][e+r][0]=!1);},getBestMaskPattern:function(){for(var t=0,e=0,o=0;o<8;o++){this.makeImpl(!0,o);var i=QRUtil.getLostPoint(this);(0==o||t>i)&&(t=i,e=o);}return e},createMovieClip:function(t,e,o){var i=t.createEmptyMovieClip(e,o);this.make();for(var r=0;r<this.modules.length;r++)for(var n=1*r,a=0;a<this.modules[r].length;a++){var s=1*a,h=this.modules[r][a][0];h&&(i.beginFill(0,100),i.moveTo(s,n),i.lineTo(s+1,n),i.lineTo(s+1,n+1),i.lineTo(s,n+1),i.endFill());}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6][0]&&(this.modules[t][6][0]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e][0]&&(this.modules[6][e][0]=e%2==0);},setupPositionAdjustPattern:function(t){for(var e=QRUtil.getPatternPosition(this.typeNumber),o=0;o<e.length;o++)for(var i=0;i<e.length;i++){var r=e[o],n=e[i];if(null==this.modules[r][n][0])for(var a=-2;a<=2;a++)for(var s=-2;s<=2;s++)-2==a||2==a||-2==s||2==s||0==a&&0==s?(this.modules[r+a][n+s][0]=!0,this.modules[r+a][n+s][2]=t,this.modules[r+a][n+s][1]=-2==a||-2==s||2==a||2==s?"O":"I"):this.modules[r+a][n+s][0]=!1;}},setupTypeNumber:function(t){for(var e=QRUtil.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var i=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3][0]=i;}for(var o=0;o<18;o++){var i=!t&&1==(e>>o&1);this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)][0]=i;}},setupTypeInfo:function(t,e){for(var o=this.errorCorrectLevel<<3|e,i=QRUtil.getBCHTypeInfo(o),r=0;r<15;r++){var n=!t&&1==(i>>r&1);r<6?this.modules[r][8][0]=n:r<8?this.modules[r+1][8][0]=n:this.modules[this.moduleCount-15+r][8][0]=n;}for(var r=0;r<15;r++){var n=!t&&1==(i>>r&1);r<8?this.modules[8][this.moduleCount-r-1][0]=n:r<9?this.modules[8][15-r-1+1][0]=n:this.modules[8][15-r-1][0]=n;}this.modules[this.moduleCount-8][8][0]=!t;},mapData:function(t,e){for(var o=-1,i=this.moduleCount-1,r=7,n=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[i][a-s][0]){var h=!1;n<t.length&&(h=1==(t[n]>>>r&1));var l=QRUtil.getMask(e,i,a-s);l&&(h=!h),this.modules[i][a-s][0]=h,r--,-1==r&&(n++,r=7);}if((i+=o)<0||this.moduleCount<=i){i-=o,o=-o;break}}}},QRCodeModel.PAD0=236,QRCodeModel.PAD1=17,QRCodeModel.createData=function(t,e,o){for(var i=QRRSBlock.getRSBlocks(t,e),r=new QRBitBuffer,n=0;n<o.length;n++){var a=o[n];r.put(a.mode,4),r.put(a.getLength(),QRUtil.getLengthInBits(a.mode,t)),a.write(r);}for(var s=0,n=0;n<i.length;n++)s+=i[n].dataCount;if(r.getLengthInBits()>8*s)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+8*s+")");for(r.getLengthInBits()+4<=8*s&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(!1);for(;;){if(r.getLengthInBits()>=8*s)break;if(r.put(QRCodeModel.PAD0,8),r.getLengthInBits()>=8*s)break;r.put(QRCodeModel.PAD1,8);}return QRCodeModel.createBytes(r,i)},QRCodeModel.createBytes=function(t,e){for(var o=0,i=0,r=0,n=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,l=e[s].totalCount-h;i=Math.max(i,h),r=Math.max(r,l),n[s]=new Array(h);for(var u=0;u<n[s].length;u++)n[s][u]=255&t.buffer[u+o];o+=h;var g=QRUtil.getErrorCorrectPolynomial(l),d=new QRPolynomial(n[s],g.getLength()-1),f=d.mod(g);a[s]=new Array(g.getLength()-1);for(var u=0;u<a[s].length;u++){var c=u+f.getLength()-a[s].length;a[s][u]=c>=0?f.get(c):0;}}for(var v=0,u=0;u<e.length;u++)v+=e[u].totalCount;for(var p=new Array(v),R=0,u=0;u<i;u++)for(var s=0;s<e.length;s++)u<n[s].length&&(p[R++]=n[s][u]);for(var u=0;u<r;u++)for(var s=0;s<e.length;s++)u<a[s].length&&(p[R++]=a[s][u]);return p};for(var QRMode={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},QRErrorCorrectLevel={L:1,M:0,Q:3,H:2},QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G15)>=0;)e^=QRUtil.G15<<QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G15);return (t<<10|e)^QRUtil.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G18)>=0;)e^=QRUtil.G18<<QRUtil.getBCHDigit(e)-QRUtil.getBCHDigit(QRUtil.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return QRUtil.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case QRMaskPattern.PATTERN000:return (e+o)%2==0;case QRMaskPattern.PATTERN001:return e%2==0;case QRMaskPattern.PATTERN010:return o%3==0;case QRMaskPattern.PATTERN011:return (e+o)%3==0;case QRMaskPattern.PATTERN100:return (Math.floor(e/2)+Math.floor(o/3))%2==0;case QRMaskPattern.PATTERN101:return e*o%2+e*o%3==0;case QRMaskPattern.PATTERN110:return (e*o%2+e*o%3)%2==0;case QRMaskPattern.PATTERN111:return (e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new QRPolynomial([1],0),o=0;o<t;o++)e=e.multiply(new QRPolynomial([1,QRMath.gexp(o)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else {if(!(e<41))throw new Error("type:"+e);switch(t){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,i=0;i<e;i++)for(var r=0;r<e;r++){for(var n=0,a=t.isDark(i,r),s=-1;s<=1;s++)if(!(i+s<0||e<=i+s))for(var h=-1;h<=1;h++)r+h<0||e<=r+h||0==s&&0==h||a==t.isDark(i+s,r+h)&&n++;n>5&&(o+=3+n-5);}for(var i=0;i<e-1;i++)for(var r=0;r<e-1;r++){var l=0;t.isDark(i,r)&&l++,t.isDark(i+1,r)&&l++,t.isDark(i,r+1)&&l++,t.isDark(i+1,r+1)&&l++,0!=l&&4!=l||(o+=3);}for(var i=0;i<e;i++)for(var r=0;r<e-6;r++)t.isDark(i,r)&&!t.isDark(i,r+1)&&t.isDark(i,r+2)&&t.isDark(i,r+3)&&t.isDark(i,r+4)&&!t.isDark(i,r+5)&&t.isDark(i,r+6)&&(o+=40);for(var r=0;r<e;r++)for(var i=0;i<e-6;i++)t.isDark(i,r)&&!t.isDark(i+1,r)&&t.isDark(i+2,r)&&t.isDark(i+3,r)&&t.isDark(i+4,r)&&!t.isDark(i+5,r)&&t.isDark(i+6,r)&&(o+=40);for(var u=0,r=0;r<e;r++)for(var i=0;i<e;i++)t.isDark(i,r)&&u++;return o+=Math.abs(100*u/e/e-50)/5*10}},QRMath={glog:function(t){if(t<1)throw new Error("glog("+t+")");return QRMath.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return QRMath.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)QRMath.EXP_TABLE[i]=1<<i;for(var i=8;i<256;i++)QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];for(var i=0;i<255;i++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;QRPolynomial.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var i=0;i<t.getLength();i++)e[o+i]^=QRMath.gexp(QRMath.glog(this.get(o))+QRMath.glog(t.get(i)));return new QRPolynomial(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=QRMath.glog(this.get(0))-QRMath.glog(t.get(0)),o=new Array(this.getLength()),i=0;i<this.getLength();i++)o[i]=this.get(i);for(var i=0;i<t.getLength();i++)o[i]^=QRMath.gexp(QRMath.glog(t.get(i))+e);return new QRPolynomial(o,0).mod(t)}},QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],QRRSBlock.getRSBlocks=function(t,e){var o=QRRSBlock.getRsBlockTable(t,e);if(void 0==o)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=o.length/3,r=[],n=0;n<i;n++)for(var a=o[3*n+0],s=o[3*n+1],h=o[3*n+2],l=0;l<a;l++)r.push(new QRRSBlock(s,h));return r},QRRSBlock.getRsBlockTable=function(t,e){switch(e){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},QRBitBuffer.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var o=0;o<e;o++)this.putBit(1==(t>>>e-o-1&1));},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],Drawing=function(t){this._bIsPainted=!1,this._htOption=t,this._canvas=createCanvas(200,200),this._oContext=this._canvas.getContext("2d"),this._oContext.patternQuality="best",this._oContext.quality="best",this._oContext.textDrawingMode="path",this._oContext.antialias="gray",this._bSupportDataURI=null;};Drawing.prototype.draw=function(t){function e(){i.lineWidth=0,i.fillStyle=r.quietZoneColor,i.fillRect(0,0,u._canvas.width,r.quietZone),i.fillRect(0,r.quietZone,r.quietZone,u._canvas.height-2*r.quietZone),i.fillRect(u._canvas.width-r.quietZone,r.quietZone,r.quietZone,u._canvas.height-2*r.quietZone),i.fillRect(0,u._canvas.height-r.quietZone,u._canvas.width,r.quietZone);}function o(t){for(var o=0;o<n;o++)for(var g=0;g<n;g++){var d=g*a+r.quietZone,f=o*s+r.quietZone,c=t.isDark(o,g),v=t.getEye(o,g);if(v){c=v.isDarkBlock;var p=v.type,R=r[p]||r[p.substring(0,2)]||r.colorDark;i.lineWidth=0,i.strokeStyle=c?R:r.colorLight,i.fillStyle=c?R:r.colorLight,i.fillRect(d,r.titleHeight+f,a,s);}else {i.lineWidth=0,i.strokeStyle=c?r.colorDark:r.colorLight,i.fillStyle=c?r.colorDark:r.colorLight;var m=r.dotScale;if(6==o){m=1;var _=r.timing_H||r.timing||r.colorDark;i.fillStyle=c?_:r.colorLight,i.strokeStyle=i.fillStyle,i.fillRect(d+a*(1-m)/2,r.titleHeight+f+s*(1-m)/2,a*m,s*m);}else if(6==g){m=1;var C=r.timing_V||r.timing||r.colorDark;i.fillStyle=c?C:r.colorLight,i.strokeStyle=i.fillStyle,i.fillRect(d+a*(1-m)/2,r.titleHeight+f+s*(1-m)/2,a*m,s*m);}else r.backgroundImage?(r.autoColor?(i.strokeStyle=c?h:l,i.fillStyle=c?h:l):(i.fillStyle=c?r.colorDark:r.colorLight,i.strokeStyle=i.fillStyle),i.fillRect(d+a*(1-m)/2,r.titleHeight+f+s*(1-m)/2,a*m,s*m)):(i.strokeStyle=i.fillStyle,i.fillRect(d+a*(1-m)/2,r.titleHeight+f+s*(1-m)/2,a*m,s*m));}1==r.dotScale||v||(i.strokeStyle=r.colorLight);}if(r.title&&(i.fillStyle=r.titleBackgroundColor,i.fillRect(0,0,u._canvas.width,r.titleHeight+this._htOption.quietZone),i.font=r.titleFont,i.fillStyle=r.titleColor,i.textAlign="center",i.fillText(r.title,u._canvas.width/2,this._htOption.quietZone+this._htOption.titleTop)),r.subTitle&&(i.font=r.subTitleFont,i.fillStyle=r.subTitleColor,i.fillText(r.subTitle,u._canvas.width/2,this._htOption.quietZone+this._htOption.subTitleTop)),r.logo){var Q=function(){var t=Math.round(r.width/3.5),o=Math.round(r.height/3.5);t!=o&&(t=o),r.logoWidth&&(t=Math.round(r.logoWidth)),r.logoHeight&&(o=Math.round(r.logoHeight)),r.logoBackgroundTransparent||(i.fillStyle=r.logoBackgroundColor,i.fillRect((r.width+2*r.quietZone-t)/2,(r.height+r.titleHeight+2*r.quietZone-o)/2,t,t)),i.drawImage(L,(r.width+2*r.quietZone-t)/2,(r.height+r.titleHeight+2*r.quietZone-o)/2,t,o),T._bIsPainted=!0,r.quietZone>0&&r.quietZoneColor&&e(),T.makeImage();},L=new Image;L.src=r.logo;var T=this;if(L.onload=function(){Q();},L.onerror=function(t){console.error(t);},L.complete)return L.onload=null,void Q()}else this._bIsPainted=!0,r.quietZone>0&&r.quietZoneColor&&e(),this.makeImage();}var i=this._oContext,r=this._htOption;r.title||r.subTitle||(r.height-=r.titleHeight,r.titleHeight=0);var n=t.getModuleCount(),a=Math.round(r.width/n),s=Math.round((r.height-r.titleHeight)/n);r.quietZone=Math.round(r.quietZone),this._htOption.width=a*n,this._htOption.height=s*n+r.titleHeight,this._canvas.width=this._htOption.width+2*this._htOption.quietZone,this._canvas.height=this._htOption.height+2*this._htOption.quietZone;var h="rgba(0, 0, 0, .6)",l="rgba(255, 255, 255, .7)";"JPG"==r.format?("transparent"==r.quietZoneColor&&(r.quietZoneColor="#ffffff"),r.logoBackgroundTransparent=!1,h=r.colorDark,l=r.colorLight,r.colorLight,i.fillStyle="#ffffff",i.fillRect(0,0,this._canvas.width,this._canvas.height)):(i.lineWidth=0,i.fillStyle=this._htOption.colorLight,i.fillRect(0,0,this._canvas.width,this._canvas.height));var u=this;if(r.backgroundImage){var g=new Image;g.onload=function(){i.globalAlpha=1,i.globalAlpha=r.backgroundImageAlpha,i.drawImage(g,0,r.titleHeight,r.width+2*r.quietZone,r.height+2*r.quietZone-r.titleHeight),i.globalAlpha=1,o.call(u,t);},g.src=r.backgroundImage;}else o.call(u,t);},Drawing.prototype.makeImage=function(){var t=this.makeOptions,e=this;if("FILE"==t.makeType){this._htOption.onRenderingStart&&this._htOption.onRenderingStart(this._htOption);var o=fs.createWriteStream(t.path),i=void 0;i="PNG"==this._htOption.format?this._canvas.createPNGStream({compressionLevel:this._htOption.compressionLevel}):this._canvas.createJPEGStream({quality:this._htOption.quality}),i.pipe(o),o.on("finish",function(){e.resolve({});});}else "URL"==t.makeType&&(this._htOption.onRenderingStart&&this._htOption.onRenderingStart(this._htOption),"PNG"==this._htOption.format?this._canvas.toDataURL(function(t,o){e.resolve(o);}):this._canvas.toDataURL("image/jpeg",function(t,o){e.resolve(o);}));},Drawing.prototype.isPainted=function(){return this._bIsPainted},Drawing.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},QRCode.prototype.saveImage=function(t){var e={makeType:"FILE",path:null};t=Object.assign(e,t);var o=new Drawing(this._htOption);o.makeOptions=t;try{var i=this;return new Promise(function(t){o.resolve=t,o.draw(i._oQRCode);})}catch(t){console.error(t);}},QRCode.prototype.toDataURL=function(t){var e={makeType:"URL"},o=new Drawing(this._htOption);o.makeOptions=e;try{var i=this;return new Promise(function(t){o.resolve=t,o.draw(i._oQRCode);})}catch(t){console.error(t);}},QRCode.CorrectLevel=QRErrorCorrectLevel,module.exports=QRCode;
	});

	class PaynowQR extends paynowqr_base{
	  constructor(opts){
	    super(opts);
	  }
	  
	  saveQRCodeImage(loc, opts = {}) {

	    if (!loc) {
	      loc = 'output.png';
	    }
	    if (!this.getFileExt(loc) || this.getFileExt(loc)[0] !== 'png') {
	      loc = loc + '.png';
	    }

	    let defaultOpts = this.getDefaultOpts();

	    let finalOpts = {};
	    for (let defKey in defaultOpts) {
	      finalOpts[defKey] = !opts[defKey] ? defaultOpts[defKey] : opts[defKey];
	    }

	    if(opts.customLogo !== 'undefined' && opts.customLogo) {
	      finalOpts.logo = opts.customLogo;
	    }

	    if(opts.useLogo === false) {
	      finalOpts.logo = '';
	    }

	    this.qrcode = new index_min(finalOpts);
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
	      finalOpts.logo = opts.customLogo;
	    }

	    if(opts.useLogo === false) {
	      finalOpts.logo = '';
	    }

	    this.qrcode = new index_min(finalOpts);
	    return await this.qrcode.toDataURL();
	  }

	}

	var paynowqr_node = PaynowQR;

	return paynowqr_node;

})));
