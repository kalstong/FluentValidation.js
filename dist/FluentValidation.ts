import NotEmpty from '../dist/plugins/NotEmpty';
import IsNumber from '../dist/plugins/IsNumber';
import IsIPV4 from '../dist/plugins/IsIPV4';
import IsIPV6 from '../dist/plugins/IsIPV6';
import IsNetworkPort from '../dist/plugins/IsNetworkPort';
import IsNotNullOrWhitespace from './plugins/IsNotNullOrWhitespace';
import IsEmail from './plugins/IsEmail';
import IsBase64 from './plugins/IsBase64';
import IsBiggerThan from './plugins/IsBigger';
import IsSmallerThan from './plugins/IsSmaller';
import IsBiggerOrEqualThan from './plugins/IsBiggerOrEqual';
import IsSmallerOrEqualThan from './plugins/IsSmallerOrEqual';

interface Config {
  breakOnFirstError: boolean;
}

export default class FluentValidation {
  NotEmpty: typeof NotEmpty;
  IsNumber: typeof IsNumber;
  IsIPV4: typeof IsIPV4;
  IsIPV6: typeof IsIPV6;
  IsNetworkPort: typeof IsNetworkPort;
  IsNotNullOrWhitespace: typeof IsNotNullOrWhitespace;
  IsEmail: typeof IsEmail;
  IsBase64: typeof IsBase64;
  IsBiggerThan: typeof IsBiggerThan;
  IsSmallerThan: typeof IsSmallerThan;
  IsBiggerOrEqualThan: typeof IsBiggerOrEqualThan;
  IsSmallerOrEqualThan: typeof IsSmallerOrEqualThan;
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