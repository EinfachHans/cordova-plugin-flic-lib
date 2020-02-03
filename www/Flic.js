var exec = cordova.require('cordova/exec');


exports.init = function (config, success, error) {
  console.log('Flic.js: init');
  if (!config) {
    console.warn('Flic.js: init failure, please provide config for the Flic plugin');
    return;
  }

  exec(success || function () {
  },
    error || function () {
    },
    'Flic',
    'init',
    [config]);
};

exports.getKnownButtons = function (success, error) {
  exec(success, error, 'Flic', 'getKnownButtons', []);
};

exports.grabButton = function (success, error) {
  exec(success, error, 'Flic', 'grabButton', []);
};

exports.onButtonClick = function (success, error) {
  exec(success, error, "Flic", "onButtonClick", []);
};

exports.forgetButton = function (config, success, error) {
  if (!config) {
    console.warn('Flic.js: init failure, please provide a buttonId');
    return;
  }

  exec(success, error, 'Flic', 'forgetButton', [config]);
};

exports.handleOpenFlicURL = function (url, success, error) {
  exec(success, error, 'Flic', 'handleOpenFlicURL', [url]);
};
