const _IPV4REGEX = "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";

function IsIPV4() {
    if (this.break == true) return;
    var pattern = new RegExp(_IPV4REGEX);
    this.hasError = !pattern.test(this.value);
    return this;
}

module.exports = IsIPV4;