const FluentValidation = require('../dist/FluentValidation');

test('Is Number', (done) => {
    const model = {
        name : 'John Doe',
        age : 'unknown'
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.name).NotEmpty().ErrorMessage("Name cannot be empty")
        .RuleFor(model.age).IsNumber().ErrorMessage("Age must be a number")
        .errors;

    expect(validation.length).toBe(1);
    done();
});

test('Is IPV4 address', (done) => {
    const model = {
        ip : '192.168.0.1'
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.ip).NotEmpty().ErrorMessage("IP cannot be empty")
        .RuleFor(model.ip).IsIPV4().ErrorMessage("IP must be a valid IPV4 address")
        .errors;

    expect(validation.length).toBe(0);
    done();
})

test('Is IPV6 address', (done) => {
    const model = {
        ip : '::1'
    }

    const config = {
        breakOnFirstError : true
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.ip).NotEmpty().ErrorMessage("IP cannot be empty")
        .RuleFor(model.ip).IsIPV6().ErrorMessage("IP must be a valid IPV6 address")
        .errors;

    expect(validation.length).toBe(0);
    done();
})

test('Is Network port', (done) => {
    const model = {
        port : 1024
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.port).IsNetworkPort().ErrorMessage("Port must be a valid network port")
        .errors;

    expect(validation.length).toBe(0);
    done();
})

test('Is not null or Whitespace', (done) => {
    const model = {
        region : ' ',
        state : undefined,
        province : null
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.region).IsNotNullOrWhitespace().ErrorMessage("Region cannot be empty")
        .RuleFor(model.state).IsNotNullOrWhitespace().ErrorMessage("State cannot be empty")
        .RuleFor(model.province).IsNotNullOrWhitespace().ErrorMessage("Province cannot be empty")
        .errors;

    expect(validation.length).toBe(3);
    done();
})

test('User-defined validation', (done) => {
    const model = {
        state : 'idle'
    }

    const config = {
        breakOnFirstError : true
    }

    function BeActive(data) {
        return (data === 'active');
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.state).IsNotNullOrWhitespace().ErrorMessage("State cannot be empty")
        .RuleFor(model.state).Must(BeActive).ErrorMessage("State is not Active")
        .errors;

    expect(validation.length).toBe(1);
    done();
})

test('Is Email', (done) => {
    const model = {
        email : 'john.doe@johndoe.com'
    }

    const config = {
        breakOnFirstError : true
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.email).NotEmpty().ErrorMessage("Email cannot be empty")
        .RuleFor(model.email).IsEmail().ErrorMessage("Email be a valid Email address")
        .errors;

    expect(validation.length).toBe(0);
    done();
})



test('Is a valid Base64 string', (done) => {
    const model = {
        base64String : 'QGthbHN0b25nL2ZsdWVudHZhbGlkYXRpb24='
    }

    const config = {
        breakOnFirstError : true
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.base64String).NotEmpty().ErrorMessage("Base64String cannot be empty")
        .RuleFor(model.base64String).IsBase64().ErrorMessage("Base64String must have a valid base64 encoding")
        .errors;

    expect(validation.length).toBe(0);
    done();
})

test('Is Greater/Smaller', (done) => {
    const model = {
        name : 'John Doe',
        age : 18
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.age).IsBiggerThan(18).ErrorMessage("Age must be bigger than 18")
        .RuleFor(model.age).IsSmallerThan(22).ErrorMessage("Age must be smaller than 20")
        .errors;

    expect(validation.length).toBe(1);
    done();
});

test('Is Greater/Smaller or Equal', (done) => {
    const model = {
        name : 'John Doe',
        age : 20
    }

    const config = {
        breakOnFirstError : true
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.age).IsBiggerOrEqualThan(18).ErrorMessage("Age must be bigger or equal than 18")
        .RuleFor(model.age).IsSmallerOrEqualThan(20).ErrorMessage("Age must be smaller or equal than 20")
        .errors;

    expect(validation.length).toBe(0);
    done();
});