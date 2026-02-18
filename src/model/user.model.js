export default class UserModel{
    
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getUser(){

    }
    static addUser(data){
        const newUser = new UserModel(users.length +1, data.name, data.email, data.password);
        users.push(newUser);
        console.log(users);
    }
    static confirmLogin(data){
        const found = users.find((u) => u.email == data.email && u.password == data.password)
        if(found){
            return true;
        }
        return false;
    }
}
const users = [ new UserModel(0, 'test', 'sardarswarnava@gmail.com', 'test')];