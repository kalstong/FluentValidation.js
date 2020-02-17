function NotEmpty() {
    this.hasError = (this.value.length === 0 || !this.value.trim())
    return this;
}

module.exports = NotEmpty;