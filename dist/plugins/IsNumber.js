function IsNumber() {
    if (this.break == true) return;
    this.hasError = isNaN(this.value)
    return this;
}

module.exports = IsNumber;