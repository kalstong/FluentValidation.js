import FluentValidation from "../FluentValidation";

export default function isInteger (): FluentValidation {
	this.hasError =  Number.isSafeInteger(this.value);
    return this;
}