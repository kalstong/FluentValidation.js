# FluentValidation.js Documentation

__... Work in progress ...__

## How to start

## Create a basic validation

## Create a chain validation

## What Rules are included
- NotEmpty
- IsNumber
- IsIPV4
- IsIPV6
- IsNetworkPort
- IsNotNullOrWhitespace

## Custom Validation
- User-defined validations shall be used with the chain function Must().
- The user-defined function must accept a data as the value to be validates and shall return true if error and false if not.

```javascript
const person = {
    state : 'idle'
}

const config = {
    useChain : true // Don't stop at first error
}

function BeActive(data) {
    return (data === 'active');
}

let validation = new FluentValidation()
    .Config(config)
    .RuleFor(model.state).IsNotNullOrWhitespace().ErrorMessage("State cannot be empty")
    .RuleFor(model.state).Must(BeActive).ErrorMessage("State is not Active")
    .errors;

console.log(validation);

// Output:
// [ { error: 'State is not Active' } ]
```