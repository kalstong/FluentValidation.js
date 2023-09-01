# FluentValidation.js Documentation

*[Version 2.0.0](https://github.com/kalstong/FluentValidation.js/releases/tag/v2.0.0)*

## Validation Rules
- NotEmpty
- IsNumber
- IsIPV4
- IsIPV6
- IsNetworkPort
- IsNotNullOrWhitespace
- IsEmail
- IsBase64
- IsBigger
- IsSmaller
- IsBiggerThan
- IsSmallerThan

## How to create custom validation rules
- User-defined validations shall be used with the chain function Must().
- The user-defined function must accept a data as the value to be validates and shall return true if error and false if not.

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

## Contribution
To contribute please open a PR and make sure that the documentation are updated and there testes for new stuff and all tests are passing.

*New validations must be written is TS and shall be defined following this structure:*

``` javascript
export default function MY_VALIDATION_METHOD() {

    // Access the value to be validated with this.value 
    
    // Insert the validation logic here
    
    // this.hasError shall be true or false bases on the validation login
    
    // Return this is mandatory!!
    return this;
}
```

Go to the FluentValidation.js and require your validation:

``` javascript
import MY_VALIDATION_METHOD from './plugins/MY_VALIDATION_METHOD';
```

add the TS type:
```
MY_VALIDATION_METHOD: typeof MY_VALIDATION_METHOD;
```

and finally prototype the FluentValidation:

``` javascript
FluentValidation.prototype.MY_VALIDATION_METHOD = MY_VALIDATION_METHOD;
```

