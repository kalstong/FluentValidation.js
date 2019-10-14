function IsNotNullOrWhitespace() {
    if (this.break == true) return;
    var pattern = new RegExp("^ *$");
    this.hasError = this.value === null || this.value === undefined || pattern.test(this.value) == true;
    return this;
}

module.exports = IsNotNullOrWhitespace;