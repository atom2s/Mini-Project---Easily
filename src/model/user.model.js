export default class User{
    users = [{
        id: 0,
        name: 'test',
        email: 'test@gmail.com',
        password: 'test'
    }];
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getUser(){

    }
    static addUser(){

    }
    static confirmLogin(){

    }
}