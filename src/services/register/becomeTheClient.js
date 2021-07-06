export default class Register {

    createNewUser(user) {
        const children = user.children;
        const name = children[1].value;
        const surname = children[2].value;
        const age = children[3].value;
        const cash = children[4].value;

        const registeredUser = {
            name,
            surname,
            age,
            cash
        }

        if (!name.length) {
            return false
        } else {
            localStorage.setItem('user', JSON.stringify(registeredUser))
        }


    }

    checkUser() {
        return !!localStorage.getItem('user');
    }

}