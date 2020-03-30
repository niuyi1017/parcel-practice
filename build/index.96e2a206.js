// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"yIHR":[function(require,module,exports) {
// 主函数
(function init(window) {
  // 0. 处理需要区分开发环境和生成环境的特殊指令
  if ("production" !== 'production') {//开发环境
  } else {} // 生产环境
    // do something
    // 1.判断PC端、移动端


  window.addEventListener('resize', function () {
    ScrrenWidth();
  });
  ScrrenWidth(); // 2.引入layui、 阿里图标库

  loadLayui('https://www.layuicdn.com/layui/layui.js', 'https://www.layuicdn.com/layui/css/layui.css');
  loadIconfont('//at.alicdn.com/t/font_1633596_94e5cgu2ah.css'); // 3. 注册全局方法

  window.gotoUrl = function (url) {
    var newTab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (url == '-1') {
      window.history.go(-1);
    } else if (newTab) window.open(url, 'target', '');else window.location.href = url;
  };

  window.callPhone = function (phoneNumber) {
    window.location.href = "tel://".concat(phoneNumber);
  };

  window.eduToast = function (text) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var toast = document.createElement('div');
    toast.classList.add("toast");
    var html = " <p class=\"content\">".concat(text, "</p>");
    toast.innerHTML = html;
    document.body.appendChild(toast);
    setTimeout(function () {
      var toast = document.querySelector('.toast');
      document.body.removeChild(toast);
    }, time);
  };
})(window);

function ScrrenWidth() {
  var mobile = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent);
  var url = window.location.href;

  if (mobile) {
    if (url.indexOf("/m") < 0) {
      window.location.href = "http://".concat(window.location.host, "/m/index/index.html");
    }
  } else {
    if (url.indexOf("/pc") < 0) {
      window.location.href = "http://".concat(window.location.host, "/pc/index/index.html");
    }
  }
}

function loadLayui(jsUrl, cssUrl) {
  var head = document.getElementsByTagName('head')[0],
      scriptTag = document.createElement('script');
  scriptTag.src = jsUrl;
  head.appendChild(scriptTag);
  var head = document.getElementsByTagName('head')[0],
      linkTag = document.createElement('link');
  linkTag.href = cssUrl;
  linkTag.setAttribute('rel', 'stylesheet');
  linkTag.setAttribute('media', 'all');
  linkTag.setAttribute('type', 'text/css');
  head.appendChild(linkTag);
}

function loadIconfont(iconUrl) {
  var head = document.getElementsByTagName('head')[0],
      linkTag = document.createElement('link');
  linkTag.href = iconUrl;
  linkTag.setAttribute('rel', 'stylesheet');
  linkTag.setAttribute('media', 'all');
  linkTag.setAttribute('type', 'text/css');
  head.appendChild(linkTag);
}
},{}],"cqV9":[function(require,module,exports) {

},{}],"olRd":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"W3j6":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"olRd"}],"y2OC":[function(require,module,exports) {
"use strict";

require("../../../main");

require("../index/index.styl");

// import { loadModule } from "../../../common/Utils"
// import { async } from '../../../../dist/index.e0d146f8'
// import 'babel-polyfill'
// import Swiper from "swiper"
//  async function loadModule (moduleName) {
//   const module = await import(moduleName)
//   console.log(module)
//   return module.default
// }
window.onload = function () {
  // const Swiper1 = await import('swiper')
  // const Swiper = Swiper1.default
  // const Swiper = await loadModule('swiper')
  // console.log(Swiper)
  layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function () {
    var laydate = layui.laydate //日期
    ,
        laypage = layui.laypage //分页
    ,
        layer = layui.layer //弹层
    ,
        table = layui.table //表格
    ,
        carousel = layui.carousel //轮播
    ,
        upload = layui.upload //上传
    ,
        element = layui.element; //元素操作 等等...

    /*layer弹出一个示例*/

    layer.msg('Hello World');
  });

  require("_bundle_loader")(require.resolve('swiper')).then(function (module) {
    var Swiper = module.default;
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // 垂直切换选项
      loop: true,
      // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  });
};
},{"../../../main":"yIHR","../index/index.styl":"cqV9","_bundle_loader":"W3j6","swiper":[["swiper.esm.bundle.62f68f22.js","JDmx"],"JDmx"]}],"HC8h":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("W3j6");b.register("js",require("HC8h"));
},{}]},{},[0,"y2OC"], null)