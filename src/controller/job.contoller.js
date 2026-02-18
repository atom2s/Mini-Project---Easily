import JobModel from "../model/job.model.js";
const jobModel = new JobModel();
export default class JobController{
    createJob(){

    }
    updateJob(){

    }
    deleteJob(){

    }
    manageJobApplicant(){
        
    }
    getAllJobs(req, res){
        return res.render('list-all-jobs',{jobs: jobModel.getAllJobs()});
    }
    getJobById(req, res){
        const id = req.params.id;
        const data = jobModel.findJob(id);
        return res.render('job-details', {data: data, user: null});
    }
}