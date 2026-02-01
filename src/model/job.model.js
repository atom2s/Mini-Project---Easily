export default class JobModel{
    constructor(id, jobCatagory, jobDesignation, jobLocation, companyName, salary, applyBy, skillRequired, numberOfOpening, jobPosted){
        this.id = id;
        this.jobCatagory = jobCatagory;
        this.jobDesignation = jobDesignation;
        this.jobLocation = jobLocation;
        this.companyName = companyName;
        this.salary = salary;
        this.applyBy = applyBy;
        this.skillRequired = skillRequired;
        this.numberOfOpening = numberOfOpening;
        this.jobPosted = jobPosted;
        this.applicants = [];
    }
    addNewJob(){

    }
    getAllJobs(){

    }
    findJob(id){

    }
    updateJob(){

    }
    addNewApplicant(){

    }
    getAllApplicant(){

    }
    deleteJob(){

    }
}