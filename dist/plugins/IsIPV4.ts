import FluentValidation from "../FluentValidation";

const _IPV4REGEX = "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";

export default function IsIPV4() :FluentValidation {
    const pattern = new RegExp(_IPV4REGEX);
    this.hasError = !pattern.test(this.value);
    return this;
}