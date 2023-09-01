import FluentValidation from "../FluentValidation";

export default function NotEmpty() :FluentValidation {
    this.hasError = (this.value.length === 0 || !this.value.trim())
    return this;
}