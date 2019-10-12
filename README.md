# FluentValidation.js

Inspired by the awsome [FluentValdiation .NET](https://github.com/JeremySkinner/FluentValidation/blob/master/README.md)

## Disclaimer
This is a w.i.p. version, there is a couple of commits that need to be pushed before the first release.

A node.js package for providing a model validation based on a chain of rules with a fluent syntax.

## Get Started
This is a [Node.js](https://nodejs.org/en/) module, it is not available yet through the
[npm registry](https://www.npmjs.com/). Installation is using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) but at this moment only refering the git repo on the package.json file:


### Example
```javascript
const person = {
    name : 'Jon Dow',
    age : 'unknown'
}

const config = {
    useChain : true // Don't stop at first error
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


## Documentation

[See documentation](DOC.md)