var plugin = function () {
  return window.Flic;
};
var Flic = /** @class */ (function () {
  function Flic() {
  }

  Flic.init = function (config, success, error) {
    var plu = plugin();
    return plu.init.apply(plu, arguments);
  };

  Flic.getKnownButtons = function (success, error) {
    var plu = plugin();
    return plu.getKnownButtons.apply(plu, arguments);
  };

  Flic.grabButton = function (success, error) {
    var plu = plugin();
    return plu.grabButton.apply(plu, arguments);
  };

  Flic.onButtonClick = function (success, error) {
    var plu = plugin();
    return plu.onButtonClick.apply(plu, arguments);
  };

  Flic.forgetButton = function (config, success, error) {
    var plu = plugin();
    return plu.forgetButton.apply(plu, arguments);
  };

  return Flic;
}());
export default Flic;
