System.register(["./core-64492bec.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.r;e=t.h}],execute:function(){var r=t("my_counter",function(){function t(t){n(this,t);this.count=0}t.prototype.inc=function(){this.count++};t.prototype.dec=function(){this.count--};t.prototype.render=function(){return e("div",null,e("button",{class:"large btn",onClick:this.dec.bind(this)},"-"),e("span",{class:"large span"},this.count),e("button",{class:"large btn",onClick:this.inc.bind(this)},"+"))};Object.defineProperty(t,"style",{get:function(){return".large{font-size:200%}.value{width:4rem;display:inline-block;text-align:center}.btn{width:64px;height:64px;border:none;border-radius:10px;background-color:#2e8b57;color:#fff}"},enumerable:true,configurable:true});return t}())}}}));