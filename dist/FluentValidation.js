'use strict'
const NotEmpty = require('../dist/plugins/NotEmpty');
const IsNumber = require('../dist/plugins/IsNumber');
const IsIPV4 = require('../dist/plugins/IsIPV4');
const IsIPV6 = require('../dist/plugins/IsIPV6');
const IsNetworkPort = require('../dist/plugins/IsNetworkPort');
const IsNotNullOrWhitespace = require('./plugins/IsNotNullOrWhitespace');
const IsEmail = require('./plugins/IsEmail');
const IsBase64 = require('./plugins/IsBase64');
const IsBiggerThan = require('./plugins/IsBigger');
const IsSmallerThan = require('./plugins/IsSmaller');
const IsBiggerOrEqualThan = require('./plugins/IsBiggerOrEqual');
const IsSmallerOrEqualThan = require('./plugins/IsSmallerOrEqual');

class FluentValidation {
  constructor() {
    this.value = 0;
    this.errors = [];
    this.hasError = false;
    this.cfg = { breakOnFirstError : true };
  }
  Config(cfg) {
    this.cfg = cfg;
    return this;
  }
  RuleFor(arg) {
    if (this.hasError === true && this.cfg.breakOnFirstError === true) return this;
    this.value = arg;
    return this;
  }
  Must(f) {
    if (this.hasError === true && this.cfg.breakOnFirstError === true) return this;
    this.hasError = !f(this.value);
    return this;
  }
  ErrorMessage(value) { 
    if (this.hasError === true && this.cfg.breakOnFirstError === true && this.errors.length === 0) {
      this.errors.push({error: value});
      return this;
    }

    if (this.hasError === true && this.cfg.breakOnFirstError === true) return this;
    
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
FluentValidation.prototype.IsEmail = IsEmail;
FluentValidation.prototype.IsBase64 = IsBase64;
FluentValidation.prototype.IsBiggerThan = IsBiggerThan;
FluentValidation.prototype.IsSmallerThan = IsSmallerThan;
FluentValidation.prototype.IsBiggerOrEqualThan = IsBiggerOrEqualThan;
FluentValidation.prototype.IsSmallerOrEqualThan = IsSmallerOrEqualThan;

module.exports = FluentValidation;