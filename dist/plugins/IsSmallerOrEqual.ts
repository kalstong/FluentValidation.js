import FluentValidation from "../FluentValidation";

export default function IsSmallerOrEqualThan(param) : FluentValidation {
    this.hasError = !(this.value <= param);
    return this;
}