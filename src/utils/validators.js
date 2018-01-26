export const validateUsername = (username, allUsers) => {
    if (allUsers.find((user) => {
        return user.username.toLowerCase() === username.toLowerCase();
    })) {
        return false;
    }
    return true;
}

export const validatePassword = (password) => {
    var regex = new Array();
    regex.push("[A-Z]"); //For Uppercase Alphabet
    regex.push("[a-z]"); //For Lowercase Alphabet
    regex.push("[0-9]"); //For Numeric Digits
    regex.push("[$@$!%*#?&]"); //For Special Characters

    var passed = 0;

    //Validation for each Regular Expression
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validation for Length of Password
    if(password.length >= 8){
        passed++;
    }

    if(passed < 2) {
        return "error";
    }
    else if (passed < 4) {
        return "warning";
    }

    return "success";
}

export const validateConfirmPassword = (password, confirmPassword) => {
    if (password && confirmPassword) {
        return password === confirmPassword ? "success" : "error"
    }
    return null;
}