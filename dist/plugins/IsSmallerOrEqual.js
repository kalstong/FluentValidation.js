function IsSmallerOrEqualThan(param) {
    this.hasError = !(this.value <= param);
    return this;
}

module.exports = IsSmallerOrEqualThan;