function IsBiggerOrEqualThan(param) {
    this.hasError = !(this.value >= param);
    return this;
}

module.exports = IsBiggerOrEqualThan;