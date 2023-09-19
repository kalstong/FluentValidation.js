# FluentValidation.js

Inspired by the awsome [FluentValdiation .NET](https://github.com/JeremySkinner/FluentValidation/blob/master/README.md)

A node.js package for providing a model validation based on a chain of rules with a fluent syntax.

[![Tests](https://github.com/kalstong/FluentValidation.js/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/kalstong/FluentValidation.js/actions/workflows/nodejs.yml)

# Support me
Here's the option for you to buy me a coffee - if you like my software, if you find it useful and you can, please consider this small gesture for all the hard work I've been putting into these projects.

That would mean a lot to me!

Of course, don't feel pressured if you can't, I will continue to support and create more software.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kalstong)

## Get Started
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm i @kalstong/fluentvalidation
```


### Example 1 - Standard rules
```javascript
import FluentValidation from '@kalstong/fluentvalidation';

const person = {
    name : 'John Doe',
    age : 'unknown'
}

const config = {
    breakOnFirstError : true // Stop at first error
}

const validation = new FluentValidation()
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
import FluentValidation from '@kalstong/fluentvalidation';

const model = {
    state : 'idle'
}

const config = {
    breakOnFirstError : true // Stop at first error
}

function BeActive(data) {
    return (data === 'active');
}

const validation = new FluentValidation()
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
