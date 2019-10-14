'use strict'
const NotEmpty = require('../dist/plugins/NotEmpty');
const IsNumber = require('../dist/plugins/IsNumber');
const IsIPV4 = require('../dist/plugins/IsIPV4');
const IsIPV6 = require('../dist/plugins/IsIPV6');
const IsNetworkPort = require('../dist/plugins/IsNetworkPort');
const IsNotNullOrWhitespace = require('./plugins/IsNotNullOrWhitespace');

class FluentValidation {
  constructor() {
    this.value = 0;
    this.errors = [];
    this.hasError = false;
    this.cfg = {};
    this.break = (this.hasError == true && this.cfg.useChain == false);
  }
  Config(cfg) {
    this.cfg = cfg;
    return this;
  }
  RuleFor(arg) {
    if (this.break == true) return;
    this.value = arg;
    return this;
  }
  ErrorMessage(value) { 
    if (this.break == true) return;
    if (this.hasError)
      this.errors.push({error: value});
    return this;
  }
}

FluentValidation.prototype.NotEmpty = NotEmpty;
FluentValidation.prototype.IsNumber = IsNumber;
FluentValidation.prototype.IsIPV4 = IsIPV4;
FluentValidation.prototype.IsIPV6 = IsIPV6;
FluentValidation.prototype.IsNetworkPort = IsNetworkPort;
FluentValidation.prototype.IsNotNullOrWhitespace = IsNotNullOrWhitespace;

module.exports = FluentValidation;