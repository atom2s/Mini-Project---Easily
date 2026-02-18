import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import Path from 'path';
import User from './src/controller/user.controller.js'
import JobController from './src/controller/job.contoller.js';
import session from 'express-session';
import auth from './src/middleware/auth.middleware.js';
import cookieParser from 'cookie-parser';
const userController = new User();
const jobController = new JobController();

//configs
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false}
}));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');
app.set('views', Path.join(Path.resolve(), 'src','views'));
app.use(ejsLayouts);
app.use(express.static(Path.join(Path.resolve(), 'src', 'views')));
app.use(cookieParser());













//routings
// User Register routes
app.get('/', userController.landingPage);
app.get('/jobs', jobController.getAllJobs)
app.get('/job/:id', jobController.getJobById)
//


















app.listen(3000);