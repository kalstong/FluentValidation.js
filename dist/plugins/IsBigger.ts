import FluentValidation from "../FluentValidation";

export default function IsBiggerThan(param) : FluentValidation {
    this.hasError = !(this.value > param);
    return this;
}