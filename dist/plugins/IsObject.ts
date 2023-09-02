import FluentValidation from "../FluentValidation";

export default function objIsEmpty () : FluentValidation {
	this.hasError = Object.prototype.toString.call(this.value) === "[object Object]";
    return this;
}