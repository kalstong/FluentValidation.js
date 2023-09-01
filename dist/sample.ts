import FluentValidation from '../dist/FluentValidation';

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