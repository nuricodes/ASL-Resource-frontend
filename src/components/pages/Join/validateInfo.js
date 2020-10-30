export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Username required"
    }

    // Password
    if (!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters of more'
    }

    // Confirm Password
    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match'
    }

    return errors;
}