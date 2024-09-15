function validation(values) {
    let error = []
    const email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const password_pattern = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/

    if (values.name === "") {        
        return error.name = "Name should not be empty!"
    }   

    if (values.email === "") {
        return error.email = "Email should not be empty"
    }
    if (!email_pattern.test(values.email)) {
        return error.email = "Email doesn't match"
    }
        
    if (values.password === "") {
        return error.password = "Password should not be empty!"
    }
    if (!password_pattern.test(values.password)) {
        return error.password = "Password should contain at least 8 characters, uppercase and lowercase letters, digit and a special character!"
    }

    if (!values.checkboxChecked) {
        error.checkboxChecked = "You must agree to the terms and conditions!";
    }
}

export default validation;