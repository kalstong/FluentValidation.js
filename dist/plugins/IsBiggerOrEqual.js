function IsBiggerOrEqualThan(param) {
    if (this.break == true) return;
    this.hasError = !(this.value >= param);
    return this;
}

module.exports = IsBiggerOrEqualThan;