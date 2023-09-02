import FluentValidation from "../FluentValidation";

export default function isValidDate(): FluentValidation {
  this.hasError = !isNaN(Date.parse(this.value));
  return this;
}