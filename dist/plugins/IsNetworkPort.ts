import FluentValidation from "../FluentValidation";

export default function IsNetworkPort() : FluentValidation {
    const min = 1;
    const max = 65535;

    if (!isNaN(this.value)) {
        if ((this.value >= min && this.value <= max)) {
            this.hasError = false;
            return this;
        }
     }
     
    this.hasError = true;
    return this;
}