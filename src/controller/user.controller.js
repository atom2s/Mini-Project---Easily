import UserModel from "../model/user.model.js";
export default class User{
    landingPage(req, res){
        return res.render('landing-page');
    }
}