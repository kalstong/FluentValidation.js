import FluentValidation from "../FluentValidation";

export default function IsNotNullOrWhitespace() : FluentValidation {
    const pattern = new RegExp("^ *$");
    this.hasError = this.value === null || this.value === undefined || pattern.test(this.value) == true;
    return this;
}