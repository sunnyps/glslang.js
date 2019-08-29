
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(Module) {
  Module = Module || {};

var d;d||(d=typeof Module !== 'undefined' ? Module : {});d.compileGLSLZeroCopy=function(a,b,c){c=!!c;if("vertex"===b)var e=0;else if("fragment"===b)e=4;else if("compute"===b)e=5;else throw Error("shader_stage must be 'vertex', 'fragment', or 'compute'");b=d._malloc(4);var g=d._malloc(4),f=aa([a,e,c,b,g]);c=ba(b);a=ba(g);d._free(b);d._free(g);if(0===f)throw Error("GLSL compilation failed");b={};g=c/4;b.data=d.HEAPU32.subarray(g,g+a);b.ga=function(){d._destroy_output_buffer(f)};return b};
d.compileGLSL=function(a,b,c){a=d.compileGLSLZeroCopy(a,b,c);b=a.data.slice();a.ga();return b};var m={},p;for(p in d)d.hasOwnProperty(p)&&(m[p]=d[p]);var r="",ca,da;r=__dirname+"/";var ea,fa;ca=function(a){ea||(ea=require("fs"));fa||(fa=require("path"));a=fa.normalize(a);return ea.readFileSync(a)};da=function(a){a=ca(a);a.buffer||(a=new Uint8Array(a));a.buffer||t("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);
process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",t);d.inspect=function(){return"[Emscripten Module object]"};var ha=d.print||console.log.bind(console),u=d.printErr||console.warn.bind(console);for(p in m)m.hasOwnProperty(p)&&(d[p]=m[p]);m=null;var ia={"f64-rem":function(a,b){return a%b},"debugger":function(){}},ja;d.wasmBinary&&(ja=d.wasmBinary);"object"!==typeof WebAssembly&&u("no native wasm support detected");
function ba(a){var b="i32";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return v[a>>0];case "i8":return v[a>>0];case "i16":return w[a>>1];case "i32":return x[a>>2];case "i64":return x[a>>2];case "float":return ka[a>>2];case "double":return la[a>>3];default:t("invalid type for getValue: "+b)}return null}var y,ma=!1;function na(){var a=d._convert_glsl_to_spirv;a||t("Assertion failed: Cannot call unknown function convert_glsl_to_spirv, make sure it is exported");return a}
function aa(a){var b=["string","number","boolean","number","number"],c={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=oa(c);z(a,A,b,c)}return b},array:function(a){var b=oa(a.length);v.set(a,b);return b}},e=na(),g=[],f=0;if(a)for(var h=0;h<a.length;h++){var l=c[b[h]];l?(0===f&&(f=pa()),g[h]=l(a[h])):g[h]=a[h]}a=e.apply(null,g);0!==f&&qa(f);return a}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(e="";b<c;){var g=a[b++];if(g&128){var f=a[b++]&63;if(192==(g&224))e+=String.fromCharCode((g&31)<<6|f);else{var h=a[b++]&63;g=224==(g&240)?(g&15)<<12|f<<6|h:(g&7)<<18|f<<12|h<<6|a[b++]&63;65536>g?e+=String.fromCharCode(g):(g-=65536,e+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else e+=String.fromCharCode(g)}return e}function B(a){return a?sa(A,a,void 0):""}
function z(a,b,c,e){if(0<e){e=c+e-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var h=a.charCodeAt(++g);f=65536+((f&1023)<<10)|h&1023}if(127>=f){if(c>=e)break;b[c++]=f}else{if(2047>=f){if(c+1>=e)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=e)break;b[c++]=224|f>>12}else{if(c+3>=e)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0}}
function ta(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,v,A,w,va,x,C,ka,la;
function wa(a){buffer=a;d.HEAP8=v=new Int8Array(a);d.HEAP16=w=new Int16Array(a);d.HEAP32=x=new Int32Array(a);d.HEAPU8=A=new Uint8Array(a);d.HEAPU16=va=new Uint16Array(a);d.HEAPU32=C=new Uint32Array(a);d.HEAPF32=ka=new Float32Array(a);d.HEAPF64=la=new Float64Array(a)}var xa=d.TOTAL_MEMORY||16777216;d.wasmMemory?y=d.wasmMemory:y=new WebAssembly.Memory({initial:xa/65536});y&&(buffer=y.buffer);xa=buffer.byteLength;wa(buffer);x[69820]=5522192;
function D(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ha;"number"===typeof c?void 0===b.ea?d.dynCall_v(c):d.dynCall_vi(c,b.ea):c(void 0===b.ea?null:b.ea)}}}var ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=d.preRun.shift();ya.unshift(a)}var E=0,Da=null,F=null;d.preloadedImages={};d.preloadedAudios={};var H="glslang.wasm";
if(String.prototype.startsWith?!H.startsWith("data:application/octet-stream;base64,"):0!==H.indexOf("data:application/octet-stream;base64,")){var Ea=H;H=d.locateFile?d.locateFile(Ea,r):r+Ea}
function Fa(a){function b(a){d.asm=a.exports;E--;d.monitorRunDependencies&&d.monitorRunDependencies(E);0==E&&(null!==Da&&(clearInterval(Da),Da=null),F&&(a=F,F=null,a()))}var c={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ia};E++;d.monitorRunDependencies&&d.monitorRunDependencies(E);if(d.instantiateWasm)try{return d.instantiateWasm(c,b)}catch(e){return u("Module.instantiateWasm callback failed with error: "+e),!1}(function(){try{a:{try{if(ja){var a=new Uint8Array(ja);break a}if(da){a=
da(H);break a}throw"sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";}catch(h){t(h)}a=void 0}var g=new WebAssembly.Module(a);var f=new WebAssembly.Instance(g,c)}catch(h){throw f=h.toString(),u("failed to compile wasm module: "+f),(0<=f.indexOf("imported Memory")||0<=f.indexOf("memory import"))&&u("Memory size incompatibility issues may be due to changing TOTAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set TOTAL_MEMORY at runtime to something smaller than it was at compile time)."),
h;}b(f,g)})();return d.asm}d.asm=function(a,b){b.memory=y;b.table=new WebAssembly.Table({initial:1320,maximum:1320,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Fa(b)};za.push({ha:function(){Ga()}});function Ha(a){d.___errno_location&&(x[d.___errno_location()>>2]=a);return a}var Ia=[null,[],[]],I=0;function J(){I+=4;return x[I-4>>2]}var K={};
function Ja(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ka=void 0;function L(a){for(var b="";A[a];)b+=Ka[A[a++]];return b}var La={},Ma={},Na={};function Oa(a,b){if(void 0===a)a="_unknown";else{a=a.replace(/[^a-zA-Z0-9_]/g,"$");var c=a.charCodeAt(0);a=48<=c&&57>=c?"_"+a:a}return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Qa(a){var b=Error,c=Oa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ra=void 0;function M(a){throw new Ra(a);}
function N(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||M('type "'+e+'" must have a positive integer typeid pointer');if(Ma.hasOwnProperty(a)){if(c.ja)return;M("Cannot register type '"+e+"' twice")}Ma[a]=b;delete Na[a];La.hasOwnProperty(a)&&(b=La[a],delete La[a],b.forEach(function(a){a()}))}var Sa=[],O=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ta(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Sa.length?Sa.pop():O.length;O[b]={la:1,value:a};return b}}function Ua(a){return this.fromWireType(C[a>>2])}function Va(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Wa(a,b){switch(b){case 2:return function(a){return this.fromWireType(ka[a>>2])};case 3:return function(a){return this.fromWireType(la[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Xa(a,b,c){switch(b){case 0:return c?function(a){return v[a]}:function(a){return A[a]};case 1:return c?function(a){return w[a>>1]}:function(a){return va[a>>1]};case 2:return c?function(a){return x[a>>2]}:function(a){return C[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function Ya(){return v.length}var Za={};function P(a){if(0===a)return 0;a=B(a);if(!Za.hasOwnProperty(a))return 0;P.X&&Q(P.X);a=Za[a];var b=ta(a)+1,c=$a(b);c&&z(a,v,c,b);P.X=c;return P.X}
function R(){R.X||(R.X=[]);R.X.push(pa());return R.X.length-1}function S(a){return 0===a%4&&(0!==a%100||0===a%400)}function ab(a,b){for(var c=0,e=0;e<=b;c+=a[e++]);return c}var T=[31,29,31,30,31,30,31,31,30,31,30,31],U=[31,28,31,30,31,30,31,31,30,31,30,31];
function V(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),e=(S(a.getFullYear())?T:U)[c];if(b>e-a.getDate())b-=e-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function bb(a,b,c,e){function g(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function f(a,b){return g(a,b,"0")}function h(a,b){function c(a){return 0>a?-1:0<a?1:0}var X;0===(X=c(a.getFullYear()-b.getFullYear()))&&0===(X=c(a.getMonth()-b.getMonth()))&&(X=c(a.getDate()-b.getDate()));return X}function l(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function q(a){a=V(new Date(a.W+1900,0,1),a.da);var b=l(new Date(a.getFullYear()+1,0,4));return 0>=h(l(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var k=x[e+40>>2];e={oa:x[e>>2],na:x[e+4>>2],aa:x[e+8>>2],$:x[e+12>>2],Y:x[e+16>>2],W:x[e+20>>2],ba:x[e+24>>2],da:x[e+28>>2],xa:x[e+32>>2],ma:x[e+36>>2],pa:k?
B(k):""};c=B(c);k={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var n in k)c=c.replace(new RegExp(n,"g"),k[n]);var G="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Pa="January February March April May June July August September October November December".split(" ");k={"%a":function(a){return G[a.ba].substring(0,3)},"%A":function(a){return G[a.ba]},"%b":function(a){return Pa[a.Y].substring(0,3)},"%B":function(a){return Pa[a.Y]},"%C":function(a){return f((a.W+1900)/100|0,2)},"%d":function(a){return f(a.$,2)},"%e":function(a){return g(a.$,2," ")},"%g":function(a){return q(a).toString().substring(2)},"%G":function(a){return q(a)},"%H":function(a){return f(a.aa,
2)},"%I":function(a){a=a.aa;0==a?a=12:12<a&&(a-=12);return f(a,2)},"%j":function(a){return f(a.$+ab(S(a.W+1900)?T:U,a.Y-1),3)},"%m":function(a){return f(a.Y+1,2)},"%M":function(a){return f(a.na,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=a.aa&&12>a.aa?"AM":"PM"},"%S":function(a){return f(a.oa,2)},"%t":function(){return"\t"},"%u":function(a){return a.ba||7},"%U":function(a){var b=new Date(a.W+1900,0,1),c=0===b.getDay()?b:V(b,7-b.getDay());a=new Date(a.W+1900,a.Y,a.$);return 0>h(c,a)?
f(Math.ceil((31-c.getDate()+(ab(S(a.getFullYear())?T:U,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=l(new Date(a.W+1900,0,4)),c=l(new Date(a.W+1901,0,4)),e=V(new Date(a.W+1900,0,1),a.da);return 0>h(e,b)?"53":0>=h(c,e)?"01":f(Math.ceil((b.getFullYear()<a.W+1900?a.da+32-b.getDate():a.da+1-b.getDate())/7),2)},"%w":function(a){return a.ba},"%W":function(a){var b=new Date(a.W,0,1),c=1===b.getDay()?b:V(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.W+1900,a.Y,a.$);
return 0>h(c,a)?f(Math.ceil((31-c.getDate()+(ab(S(a.getFullYear())?T:U,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%y":function(a){return(a.W+1900).toString().substring(2)},"%Y":function(a){return a.W+1900},"%z":function(a){a=a.ma;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.pa},"%%":function(){return"%"}};for(n in k)0<=c.indexOf(n)&&(c=c.replace(new RegExp(n,"g"),k[n](e)));n=cb(c);if(n.length>b)return 0;v.set(n,
a);return n.length-1}for(var db=Array(256),W=0;256>W;++W)db[W]=String.fromCharCode(W);Ka=db;Ra=d.BindingError=Qa("BindingError");d.InternalError=Qa("InternalError");d.count_emval_handles=function(){for(var a=0,b=5;b<O.length;++b)void 0!==O[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<O.length;++a)if(void 0!==O[a])return O[a];return null};function cb(a){var b=Array(ta(a)+1);z(a,b,0,b.length);return b}
var Y=d.asm({},{c:t,I:function(){ma=!0;throw"Pure virtual function called!";},C:function(){return eb.ya},v:function(){},q:function(){Ha(1);return-1},j:Ha,p:function(a,b){I=b;try{return K.ia(),J(),J(),J(),J(),0}catch(c){return t(c),-c.fa}},i:function(a,b){I=b;try{var c=J(),e=J(),g=J();for(b=a=0;b<g;b++){for(var f=x[e+8*b>>2],h=x[e+(8*b+4)>>2],l=0;l<h;l++){var q=A[f+l],k=Ia[c];0===q||10===q?((1===c?ha:u)(sa(k,0)),k.length=0):k.push(q)}a+=h}return a}catch(n){return t(n),-n.fa}},o:function(a,b){I=b;return 0},
n:function(a,b){I=b;try{return K.ia(),0}catch(c){return t(c),-c.fa}},H:function(a,b){I=b;try{var c=J();var e=J();if(-1===c||0===e)var g=-22;else{var f=K.ka[c];if(f&&e===f.ua){var h=(void 0).sa(f.fd);K.ra(c,h,e,f.flags);(void 0).wa(h);K.ka[c]=null;f.qa&&Q(f.va)}g=0}return g}catch(l){return t(l),-l.fa}},m:function(){},G:function(a,b,c,e,g){var f=Ja(c);b=L(b);N(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:g},argPackAdvance:8,readValueFromPointer:function(a){if(1===
c)var e=v;else if(2===c)e=w;else if(4===c)e=x;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>f])},Z:null})},F:function(a,b){b=L(b);N(a,{name:b,fromWireType:function(a){var b=O[a].value;4<a&&0===--O[a].la&&(O[a]=void 0,Sa.push(a));return b},toWireType:function(a,b){return Ta(b)},argPackAdvance:8,readValueFromPointer:Ua,Z:null})},l:function(a,b,c){c=Ja(c);b=L(b);N(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==
typeof b)throw new TypeError('Cannot convert "'+Va(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Wa(b,c),Z:null})},e:function(a,b,c,e,g){function f(a){return a}b=L(b);-1===g&&(g=4294967295);var h=Ja(c);if(0===e){var l=32-8*c;f=function(a){return a<<l>>>l}}var q=-1!=b.indexOf("unsigned");N(a,{name:b,fromWireType:f,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+Va(c)+'" to '+this.name);if(c<e||c>g)throw new TypeError('Passing a number "'+
Va(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+g+"]!");return q?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:Xa(b,h,0!==e),Z:null})},d:function(a,b,c){function e(a){a>>=2;var b=C;return new g(b.buffer,b[a+1],b[a])}var g=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=L(c);N(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{ja:!0})},k:function(a,b){b=L(b);var c="std::string"===
b;N(a,{name:b,fromWireType:function(a){var b=C[a>>2];if(c){var f=A[a+4+b],e=0;0!=f&&(e=f,A[a+4+b]=0);var l=a+4;for(f=0;f<=b;++f){var q=a+4+f;if(0==A[q]){l=B(l);if(void 0===k)var k=l;else k+=String.fromCharCode(0),k+=l;l=q+1}}0!=e&&(A[a+4+b]=e)}else{k=Array(b);for(f=0;f<b;++f)k[f]=String.fromCharCode(A[a+4+f]);k=k.join("")}Q(a);return k},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var f="string"===typeof b;f||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof
Int8Array||M("Cannot pass non-string to std::string");var e=(c&&f?function(){return ta(b)}:function(){return b.length})(),g=$a(4+e+1);C[g>>2]=e;if(c&&f)z(b,A,g+4,e+1);else if(f)for(f=0;f<e;++f){var q=b.charCodeAt(f);255<q&&(Q(g),M("String has UTF-16 code units that do not fit in 8 bits"));A[g+4+f]=q}else for(f=0;f<e;++f)A[g+4+f]=b[f];null!==a&&a.push(Q,g);return g},argPackAdvance:8,readValueFromPointer:Ua,Z:function(a){Q(a)}})},E:function(a,b,c){c=L(c);if(2===b){var e=function(){return va};var g=
1}else 4===b&&(e=function(){return C},g=2);N(a,{name:c,fromWireType:function(a){for(var b=e(),c=C[a>>2],f=Array(c),k=a+4>>g,n=0;n<c;++n)f[n]=String.fromCharCode(b[k+n]);Q(a);return f.join("")},toWireType:function(a,c){var f=e(),h=c.length,k=$a(4+h*b);C[k>>2]=h;for(var n=k+4>>g,G=0;G<h;++G)f[n+G]=c.charCodeAt(G);null!==a&&a.push(Q,k);return k},argPackAdvance:8,readValueFromPointer:Ua,Z:function(a){Q(a)}})},D:function(a,b){b=L(b);N(a,{ta:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},
b:function(){d.abort()},B:Ya,A:function(a,b,c){A.set(A.subarray(b,b+c),a)},z:function(a){if(2147418112<a)return!1;for(var b=Math.max(Ya(),16777216);b<a;)536870912>=b?b=ua(2*b):b=Math.min(ua((3*b+2147483648)/4),2147418112);a:{try{y.grow(b-buffer.byteLength+65535>>16);wa(y.buffer);var c=1;break a}catch(e){}c=void 0}return c?!0:!1},h:P,y:function(a){return Math.log(a)/Math.LN2},g:function(a){var b=R.X[a];R.X.splice(a,1);qa(b)},f:R,x:function(){t("trap!")},w:function(){return 0},u:function(){},t:function(){},
s:function(a,b,c,e){return bb(a,b,c,e)},r:function(){t("OOM")},a:279280},buffer),Ga=d.__GLOBAL__sub_I_bind_cpp=Y.J,eb=d.__ZSt18uncaught_exceptionv=Y.K;d.___embind_register_native_and_builtin_types=Y.L;d.___getTypeName=Y.M;d._convert_glsl_to_spirv=Y.N;d._destroy_output_buffer=Y.O;var Q=d._free=Y.P,$a=d._malloc=Y.Q,oa=d.stackAlloc=Y.T,qa=d.stackRestore=Y.U,pa=d.stackSave=Y.V;d.dynCall_v=Y.R;d.dynCall_vi=Y.S;d.asm=Y;var Z;
d.then=function(a){if(Z)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};F=function fb(){Z||gb();Z||(F=fb)};
function gb(){function a(){if(!Z&&(Z=!0,!ma)){D(za);D(Aa);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var a=d.postRun.shift();Ba.unshift(a)}D(Ba)}}if(!(0<E)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ca();D(ya);0<E||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);a()},1)):a())}}d.run=gb;
function t(a){if(d.onAbort)d.onAbort(a);ha(a);u(a);ma=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}d.abort=t;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();gb();


  return Module
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = Module;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return Module; });
    else if (typeof exports === 'object')
      exports["Module"] = Module;
    