const FluentValidation = require('../dist/FluentValidation');

test('Is Number', () => {
    const model = {
        name : 'John Doe',
        age : 'unknown'
    }

    const config = {
        useChain : true
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.name).NotEmpty().ErrorMessage("Name cannot be empty")
        .RuleFor(model.age).IsNumber().ErrorMessage("Age must be a number")
        .errors;

    expect(validation.length).toBe(1);
});

test('Is IPV4 address', () => {
    const model = {
        ip : '192.168.0.1'
    }

    const config = {
        useChain : true
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.ip).NotEmpty().ErrorMessage("IP cannot be empty")
        .RuleFor(model.ip).IsIPV4().ErrorMessage("IP must be a valid IPV4 address")
        .errors;

    expect(validation.length).toBe(0);
})

test('Is IPV6 address', () => {
    const model = {
        ip : '::1'
    }

    const config = {
        useChain : true
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.ip).NotEmpty().ErrorMessage("IP cannot be empty")
        .RuleFor(model.ip).IsIPV6().ErrorMessage("IP must be a valid IPV6 address")
        .errors;

    expect(validation.length).toBe(0);
})

test('Is Network port', () => {
    const model = {
        port : 1024
    }

    const config = {
        useChain : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.port).IsNetworkPort().ErrorMessage("Port must be a valid network port")
        .errors;

    console.log(validation);

    expect(validation.length).toBe(0);
})

test('Is not null or Whitespace', () => {
    const model = {
        region : ' ',
        state : undefined,
        province : null
    }

    const config = {
        useChain : true
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.region).IsNotNullOrWhitespace().ErrorMessage("Region cannot be empty")
        .RuleFor(model.state).IsNotNullOrWhitespace().ErrorMessage("State cannot be empty")
        .RuleFor(model.province).IsNotNullOrWhitespace().ErrorMessage("Province cannot be empty")
        .errors;

    expect(validation.length).toBe(3);
})