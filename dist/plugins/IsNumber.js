function IsNumber() {
    this.hasError = isNaN(this.value)
    return this;
}

module.exports = IsNumber;