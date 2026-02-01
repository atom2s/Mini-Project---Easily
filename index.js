import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import Path from 'path';
import User from './src/controller/user.controller.js'

const userController = new User();
//configs
const app = express();
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.set('views', Path.join(Path.resolve(), 'src','views'));
app.use(ejsLayouts);















//routings
app.get('/', userController.login.bind(userController));
app.listen(3000);