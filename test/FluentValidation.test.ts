import FluentValidation from '../dist/FluentValidation';

test('Is Array', (done) => {
    const model = {
        array : [],
        notArray : {}
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.array).IsArray().ErrorMessage("Model array must be an array")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
    .Config(config)
    .RuleFor(model.notArray).IsArray().ErrorMessage("Model notArray must be an array")
    .errors;

    expect(validation.length).toBe(0);

    done();
});

test('Is Number', (done) => {
    const model = {
        name : 'John Doe',
        age : 'unknown'
    }

    const config = {
        breakOnFirstError : false
    }

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
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

    const validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.age).IsBiggerOrEqualThan(18).ErrorMessage("Age must be bigger or equal than 18")
        .RuleFor(model.age).IsSmallerOrEqualThan(20).ErrorMessage("Age must be smaller or equal than 20")
        .errors;

    expect(validation.length).toBe(0);
    done();
});

test('Is Bool', (done) => {
    const model = {
        boolean1 : true,
        boolean2 : 1,
        boolean3: "1"
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.boolean1).IsBool().ErrorMessage("Model property must be a boolean")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
    .Config(config)
    .RuleFor(model.boolean2).IsBool().ErrorMessage("Model property must be a boolean")
    .errors;

    expect(validation.length).toBe(0);

    validation = new FluentValidation()
    .Config(config)
    .RuleFor(model.boolean3).IsBool().ErrorMessage("Model property must be a boolean")
    .errors;

    expect(validation.length).toBe(0);

    done();
});

test('Is Integer', (done) => { 
    const model = {
        integer1 : 1,
        integer2 : 1.1,
        integer3 : "1"
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.integer1).IsInteger().ErrorMessage("Model property must be an integer")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.integer2).IsInteger().ErrorMessage("Model property must be an integer")
        .errors;

    expect(validation.length).toBe(0);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.integer3).IsInteger().ErrorMessage("Model property must be an integer")
        .errors;

    expect(validation.length).toBe(0);

    done();
});

test('Is Object', (done) => { 
    const model = {
        obj1 : {},
        obj2 : [],
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.obj1).IsObject().ErrorMessage("Model property must be an object")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.obj2).IsObject().ErrorMessage("Model property must be an object")
        .errors;

    expect(validation.length).toBe(0);

    done();
});

test('Is Date', (done) => { 
    const model = {
        dt1 : "2023-04-15",
        dt2 : "Invalid date string",
        dt3 : new Date(),
        dt4: "2023-04-15T00:00:00.000Z",
        dt5: "2023-04-15T00:00:00.000",
        dt6: "2023-04-15T00:00:00",
        dt7: "2023-04-15T00:00",
        dt8: "2023-04-15T00",
        dt9: "2023-04-15T00:00:00.000+00:00",
    }

    const config = {
        breakOnFirstError : false
    }

    let validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt1).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt2).IsObject().ErrorMessage("Model property must be an object")
        .errors;

    expect(validation.length).toBe(0);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt3).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt4).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt4).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt5).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt6).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt7).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(1);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt8).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(0);

    validation = new FluentValidation()
        .Config(config)
        .RuleFor(model.dt9).IsDate().ErrorMessage("Model property must be an date")
        .errors;

    expect(validation.length).toBe(1);

    done();
});