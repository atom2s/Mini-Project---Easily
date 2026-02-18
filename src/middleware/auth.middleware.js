export default function auth(req, res, next){
    if(!req.session.lastLoggedIn){
        return res.redirect('/');
    }
    next();
}
