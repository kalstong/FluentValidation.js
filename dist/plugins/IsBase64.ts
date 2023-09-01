import FluentValidation from "../FluentValidation";

const _BASE64REGEX = "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$";

export default function IsBase64 (): FluentValidation{
    const pattern = new RegExp(_BASE64REGEX);
    this.hasError = !pattern.test(this.value);
    return this;
}