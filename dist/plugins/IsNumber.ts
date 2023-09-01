import FluentValidation from "../FluentValidation";

export default function IsNumber() : FluentValidation {
    this.hasError = isNaN(this.value)
    return this;
}