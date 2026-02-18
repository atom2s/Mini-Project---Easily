import UserModel from "../model/user.model.js";
export default class User{
    // register(req, res){
    //     UserModel.addUser(req.body);
    //     console.log('user registered successfully');
    //     return res.redirect('/');
    // }
    // signup(req, res){
    //     return res.render('user-signup');
    // }
    // getLogin(req, res){
    //     return res.render('user-login');
    // }
    // logout(req, res){
    //      res.clearCookie('lastLoggedIn');
    //      return res.redirect('/');
    // }
    // login(req, res){
    //     const confrim = UserModel.confirmLogin(req.body);
    //     if(confrim){
    //         const date = new Date().toISOString();
    //         res.cookie('lastLoggedIn',date, {
    //             maxAge: 24*60*60*1000,

    //         }) 
    //         return res.render('landing-page');
    //     }
    //     return res.redirect('/');
    // }
    landingPage(req, res){
        return res.render('landing-page');
    }
}