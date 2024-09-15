function validation(values) {
    let error = {}
    const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const password_pattern = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/ 
    
    if (values.email === "") {
        error.email = "Email should not be empty!"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email doesn't match"
    }
    else{
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty!"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password should contain least 8 characters"
        error.password = "Password must contain at leat a digit"
        error.password = "Password must contain at leat lower and uppercase letters"
    } 
    else{
        error.password = ""
    }
    if (!values.checkboxChecked) {
        error.checkboxChecked = "You must agree to the terms and conditions!";
    }
    else{
        error.checkboxChecked = ""
    }
    return error;
}

export default validation;