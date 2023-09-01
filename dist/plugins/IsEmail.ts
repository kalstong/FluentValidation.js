import FluentValidation from "../FluentValidation";

const _EMAILREGEX = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";

export default function IsEmail() :FluentValidation {
    const pattern = new RegExp(_EMAILREGEX);
    this.hasError = !pattern.test(this.value);
    return this;
}