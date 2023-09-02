import FluentValidation from "../FluentValidation";

export default function isArray() : FluentValidation {
	this.hasError = Array.isArray(this.value);
    return this;
}