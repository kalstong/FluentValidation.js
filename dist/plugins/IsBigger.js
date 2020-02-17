function IsBiggerThan(param) {
    if (this.break == true) return;
    this.hasError = !(this.value > param);
    return this;
}

module.exports = IsBiggerThan;