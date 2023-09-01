import FluentValidation from "../FluentValidation";

export default function IsBiggerOrEqualThan(param) : FluentValidation {
    this.hasError = !(this.value >= param);
    return this;
}