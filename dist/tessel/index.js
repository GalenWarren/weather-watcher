(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.index = mod.exports;
  }
})(this, function () {
  "use strict";

  var x = 0;
});
//# sourceMappingURL=index.js.map
