function IsBiggerThan(param) {
    this.hasError = !(this.value > param);
    return this;
}

module.exports = IsBiggerThan;