function NotEmpty() {
    if (this.break == true) return;
    this.hasError = (  this.value === null || this.value.match(/^ *$/) !== null)
    return this;
}

module.exports = NotEmpty;