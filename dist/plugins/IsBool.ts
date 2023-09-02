import FluentValidation from "../FluentValidation";

export default function isBool () : FluentValidation {
	this.hasError = Object.prototype.toString.call(this.value) === "[object Boolean]";
    return this;
}