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
  NotEmpty() {
    if (this.break == true) return;
    this.hasError = (  this.value === null || this.value.match(/^ *$/) !== null)
    return this;
  }
  IsNumber() {
    if (this.break == true) return;
    this.hasError = isNaN(this.value)
    return this;
  }
  ErrorMessage(value) { 
    if (this.break == true) return;
    if (this.hasError)
      this.errors.push({error: value});
    return this;
  }
}

module.exports = { FluentValidation }