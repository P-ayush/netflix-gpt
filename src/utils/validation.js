const loginValidation = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!emailRegex.test(email)) {
        return 'Invalid email address';
    }

    if (!passwordRegex.test(password)) {
        return 'Invalid password. It must contain at least one letter, one digit, and one special character, and be at least 8 characters long.';
    }

    return null;
};

export default loginValidation;