export default function validator (comment, callback) { //validator will check comment arguments and if arguments wrong will call callback
    console.log(arguments);
    let nameValid = nameValidator(comment.name);
    callback({name: 'name', val: !nameValid});

    let emailValid = emailValidator(comment.email);
    callback({name: 'email',val: !emailValid});

    let descValid = descValidator(comment.description);
    callback({name: 'description', val: !descValid});

    return nameValid && emailValid && descValid;
}

function nameValidator(name) {
    if (name.length > 2 && name.length < 17) {
        let re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
        return re.test(name);
    }
    return false;
}
function emailValidator(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function descValidator(desc) {
    return desc.length > 30
}