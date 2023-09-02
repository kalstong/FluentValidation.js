import IsArray from '../dist/plugins/IsArray';
import IsBase64 from './plugins/IsBase64';
import IsBiggerThan from './plugins/IsBigger';
import IsBiggerOrEqualThan from './plugins/IsBiggerOrEqual';
import IsBool from '../dist/plugins/IsBool';
import IsDate from '../dist/plugins/IsDate';
import IsEmail from './plugins/IsEmail';
import IsInteger from './plugins/IsInteger';
import IsIPV4 from '../dist/plugins/IsIPV4';
import IsIPV6 from '../dist/plugins/IsIPV6';
import IsNetworkPort from '../dist/plugins/IsNetworkPort';
import IsNotNullOrWhitespace from './plugins/IsNotNullOrWhitespace';
import IsNumber from '../dist/plugins/IsNumber';
import IsObject from '../dist/plugins/IsObject';
import IsSmallerThan from './plugins/IsSmaller';
import IsSmallerOrEqualThan from './plugins/IsSmallerOrEqual';
import NotEmpty from '../dist/plugins/NotEmpty';

interface Config {
  breakOnFirstError: boolean;
}

export default class FluentValidation {
  IsArray: typeof IsArray;
  IsBase64: typeof IsBase64;
  IsBiggerThan: typeof IsBiggerThan;
  IsBiggerOrEqualThan: typeof IsBiggerOrEqualThan;
  IsBool: typeof IsBool;
  IsDate: typeof IsDate;
  IsEmail: typeof IsEmail;
  IsInteger: typeof IsInteger;
  IsIPV4: typeof IsIPV4;
  IsIPV6: typeof IsIPV6;
  IsNetworkPort: typeof IsNetworkPort;
  IsNotNullOrWhitespace: typeof IsNotNullOrWhitespace;
  IsNumber: typeof IsNumber;
  IsObject: typeof IsObject;
  IsSmallerThan: typeof IsSmallerThan;
  IsSmallerOrEqualThan: typeof IsSmallerOrEqualThan;
  NotEmpty: typeof NotEmpty;

  value: number | string | boolean | object | null | undefined;
  errors: object[];
  hasError: boolean;
  cfg: Config;
  
  
  constructor() {
    
    this.value = 0;
    this.errors = [];
    this.hasError = false;
    this.cfg = { breakOnFirstError : true };
  }
  Config(cfg: Config): this {
    this.cfg = cfg;
    return this;
  }
  RuleFor(arg: number | string | boolean | object | null | undefined): this {
    if (this.hasError === true && this.cfg.breakOnFirstError === true) return this;
    this.value = arg;
    return this;
  }
  Must(f: (arg0: number | string | boolean | object | null | undefined) => unknown): this {
    if (this.hasError === true && this.cfg.breakOnFirstError === true) return this;
    this.hasError = !f(this.value);
    return this;
  }
  ErrorMessage(value: string): this { 
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

FluentValidation.prototype.IsArray = IsArray;
FluentValidation.prototype.IsBase64 = IsBase64;
FluentValidation.prototype.IsBiggerThan = IsBiggerThan;
FluentValidation.prototype.IsBiggerOrEqualThan = IsBiggerOrEqualThan;
FluentValidation.prototype.IsBool = IsBool;
FluentValidation.prototype.IsDate = IsDate;
FluentValidation.prototype.IsEmail = IsEmail;
FluentValidation.prototype.IsInteger = IsInteger;
FluentValidation.prototype.IsIPV4 = IsIPV4;
FluentValidation.prototype.IsIPV6 = IsIPV6;
FluentValidation.prototype.IsNetworkPort = IsNetworkPort;
FluentValidation.prototype.IsNotNullOrWhitespace = IsNotNullOrWhitespace;
FluentValidation.prototype.IsNumber = IsNumber;
FluentValidation.prototype.IsObject = IsObject;
FluentValidation.prototype.IsSmallerThan = IsSmallerThan;
FluentValidation.prototype.IsSmallerOrEqualThan = IsSmallerOrEqualThan;
FluentValidation.prototype.NotEmpty = NotEmpty;