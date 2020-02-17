function IsNetworkPort() {
    var min = 1;
    var max = 65535;

    if (!isNaN(this.value)) {
        if ((this.value >= min && this.value <= max)) {
            this.hasError = false;
            return this;
        }
     }
     
    this.hasError = true;
    return this;
}

module.exports = IsNetworkPort;