function IsSmallerThan(param) {
    this.hasError = !(this.value < param);
    return this;
}

module.exports = IsSmallerThan;