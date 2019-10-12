const FluentValidation = require('../dist/FluentValidation');

test('Test model sampe', () => {

    const model = {
        name : 'Jon Dow',
        age : 'unknown'
    }

    const config = {
        useChain : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.name).NotEmpty().ErrorMessage("Name cannot be empty")
        .RuleFor(model.age).IsNumber().ErrorMessage("Age must be a number")
        .errors;

console.log(validation);

    expect(validation.length).toBe(1);
});