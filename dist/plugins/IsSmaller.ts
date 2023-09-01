import FluentValidation from "../FluentValidation";

export default function IsSmallerThan(param) : FluentValidation {
    this.hasError = !(this.value < param);
    return this;
}