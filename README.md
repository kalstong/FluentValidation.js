# FluentValidation.js

Inspired by the awsome [FluentValdiation .NET](https://github.com/JeremySkinner/FluentValidation/blob/master/README.md)

A node.js package for providing a model validation based on a chain of rules with a fluent syntax.

## Get Started
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm i @kalstong/fluentvalidation
```


### Example 1 - Standard rules
```javascript
const person = {
    name : 'John Doe',
    age : 'unknown'
}

const config = {
    breakOnFirstError : true // Stop at first error
}

let validation = new FluentValidation()
    .Config(config)
    .RuleFor(person.name).NotEmpty().ErrorMessage("Name cannot be empty")
    .RuleFor(person.age).IsNumber().ErrorMessage("Age must be a number")
    .errors;

console.log(validation);

// Output:
// [ { error: 'Age must be a number' } ]
```

### Example 2 - Custom rules
```javascript
const model = {
    state : 'idle'
}

const config = {
    breakOnFirstError : true // Stop at first error
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

## Documentation

[See documentation](DOC.md)