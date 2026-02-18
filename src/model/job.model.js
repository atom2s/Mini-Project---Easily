
export default class JobModel{
    constructor(id, jobCatagory, jobDesignation, jobLocation, companyName, salary, applyBy, skillRequired, numberOfOpening, jobPosted, logo){
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
        this.logo = logo;
        this.applicants = [];
    }
    addNewJob(){

    }
    getAllJobs(){
        // console.log(jobs)
        return jobs;
    }
    findJob(id){
        const found = jobs.find(u => u.id == id);
        return found;
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

const jobData = [
  {
    "id": 1,
    "jobCategory": "Software Development",
    "jobDesignation": "Senior Full Stack Engineer",
    "jobLocation": "Remote",
    "companyName": "Tech Innovations Inc.",
    "logo": "https://cdn.worldvectorlogo.com/logos/apple-1.svg",
    "salary": "$120,000 - $160,000",
    "applyBy": "2026-03-15",
    "skillRequired": ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
    "numberOfOpening": 2,
    "jobPosted": "2026-01-20"
  },
  {
    "id": 2,
    "jobCategory": "Data Science",
    "jobDesignation": "Data Scientist",
    "jobLocation": "San Francisco, CA",
    "companyName": "Data Insights Co.",
    "logo": "https://cdn.worldvectorlogo.com/logos/microsoft-1.svg",
    "salary": "$110,000 - $145,000",
    "applyBy": "2026-03-10",
    "skillRequired": ["Python", "R", "Machine Learning", "SQL", "TensorFlow"],
    "numberOfOpening": 3,
    "jobPosted": "2026-01-25"
  },
  {
    "id": 3,
    "jobCategory": "Marketing",
    "jobDesignation": "Digital Marketing Manager",
    "jobLocation": "New York, NY",
    "companyName": "Global Brands Ltd.",
    "logo": "https://cdn.worldvectorlogo.com/logos/amazon-1.svg",
    "salary": "$80,000 - $100,000",
    "applyBy": "2026-02-28",
    "skillRequired": ["SEO", "SEM", "Content Marketing", "Social Media", "Google Analytics"],
    "numberOfOpening": 1,
    "jobPosted": "2026-01-10"
  },
  {
    "id": 4,
    "jobCategory": "Human Resources",
    "jobDesignation": "HR Business Partner",
    "jobLocation": "London, UK",
    "companyName": "People First Solutions",
    "logo": "https://cdn.worldvectorlogo.com/logos/facebook-1.svg",
    "salary": "£50,000 - £65,000",
    "applyBy": "2026-03-20",
    "skillRequired": ["Recruitment", "Employee Relations", "HRIS", "Performance Management"],
    "numberOfOpening": 1,
    "jobPosted": "2026-01-18"
  },
  {
    "id": 5,
    "jobCategory": "Design",
    "jobDesignation": "UX/UI Designer",
    "jobLocation": "Remote",
    "companyName": "Creative Minds Studio",
    "logo": "https://cdn.worldvectorlogo.com/logos/twitter-1.svg",
    "salary": "$90,000 - $115,000",
    "applyBy": "2026-03-05",
    "skillRequired": ["Figma", "Sketch", "User Research", "Prototyping", "Adobe XD"],
    "numberOfOpening": 2,
    "jobPosted": "2026-01-30"
  },
  {
    "id": 6,
    "jobCategory": "Sales",
    "jobDesignation": "Account Executive",
    "jobLocation": "Chicago, IL",
    "companyName": "SalesForce Pro",
    "logo": "https://cdn.worldvectorlogo.com/logos/linkedin-1.svg",
    "salary": "$70,000 - $90,000 + Commission",
    "applyBy": "2026-03-25",
    "skillRequired": ["CRM", "Lead Generation", "Negotiation", "Sales Strategy"],
    "numberOfOpening": 4,
    "jobPosted": "2026-01-15"
  },
  {
    "id": 7,
    "jobCategory": "Software Development",
    "jobDesignation": "Junior Frontend Developer",
    "jobLocation": "Austin, TX",
    "companyName": "Web Solutions LLC",
    "logo": "https://cdn.worldvectorlogo.com/logos/github-1.svg",
    "salary": "$60,000 - $80,000",
    "applyBy": "2026-03-01",
    "skillRequired": ["HTML", "CSS", "JavaScript", "React"],
    "numberOfOpening": 3,
    "jobPosted": "2026-01-22"
  },
  {
    "id": 8,
    "jobCategory": "IT Operations",
    "jobDesignation": "DevOps Engineer",
    "jobLocation": "Seattle, WA",
    "companyName": "CloudOps Inc.",
    "logo": "https://cdn.worldvectorlogo.com/logos/docker-1.svg",
    "salary": "$100,000 - $130,000",
    "applyBy": "2026-03-18",
    "skillRequired": ["Docker", "Kubernetes", "CI/CD", "Ansible", "AWS"],
    "numberOfOpening": 2,
    "jobPosted": "2026-01-28"
  },
  {
    "id": 9,
    "jobCategory": "Finance",
    "jobDesignation": "Financial Analyst",
    "jobLocation": "Boston, MA",
    "companyName": "Capital Growth Partners",
    "logo": "https://cdn.worldvectorlogo.com/logos/stripe-1.svg",
    "salary": "$75,000 - $95,000",
    "applyBy": "2026-03-08",
    "skillRequired": ["Financial Modeling", "Excel", "Data Analysis", "GAAP"],
    "numberOfOpening": 1,
    "jobPosted": "2026-01-12"
  },
  {
    "id": 10,
    "jobCategory": "Healthcare",
    "jobDesignation": "Registered Nurse",
    "jobLocation": "Los Angeles, CA",
    "companyName": "City General Hospital",
    "logo": "https://cdn.worldvectorlogo.com/logos/red-cross-1.svg",
    "salary": "$85,000 - $105,000",
    "applyBy": "2026-03-30",
    "skillRequired": ["Patient Care", "BLS", "ACLS", "Electronic Health Records"],
    "numberOfOpening": 5,
    "jobPosted": "2026-01-05"
  },
  {
    "id": 11,
    "jobCategory": "Education",
    "jobDesignation": "High School Math Teacher",
    "jobLocation": "Denver, CO",
    "companyName": "Mountain View High School",
    "logo": "https://cdn.worldvectorlogo.com/logos/harvard-university.svg",
    "salary": "$55,000 - $70,000",
    "applyBy": "2026-04-01",
    "skillRequired": ["Curriculum Development", "Classroom Management", "Algebra", "Calculus"],
    "numberOfOpening": 2,
    "jobPosted": "2026-01-01"
  },
  {
    "id": 12,
    "jobCategory": "Customer Service",
    "jobDesignation": "Customer Support Specialist",
    "jobLocation": "Remote",
    "companyName": "HelpDesk Solutions",
    "logo": "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg",
    "salary": "$40,000 - $50,000",
    "applyBy": "2026-02-20",
    "skillRequired": ["Communication", "Problem-solving", "CRM Software", "Technical Support"],
    "numberOfOpening": 10,
    "jobPosted": "2026-01-10"
  },
  {
    "id": 13,
    "jobCategory": "Software Development",
    "jobDesignation": "Backend Engineer (Python)",
    "jobLocation": "Dublin, Ireland",
    "companyName": "Global Tech Solutions",
    "logo": "https://cdn.worldvectorlogo.com/logos/python-1.svg",
    "salary": "€60,000 - €80,000",
    "applyBy": "2026-03-22",
    "skillRequired": ["Python", "Django", "REST APIs", "PostgreSQL", "Docker"],
    "numberOfOpening": 2,
    "jobPosted": "2026-01-29"
  },
  {
    "id": 14,
    "jobCategory": "Data Science",
    "jobDesignation": "Machine Learning Engineer",
    "jobLocation": "Bengaluru, India",
    "companyName": "AI Innovations Pvt. Ltd.",
    "logo": "https://cdn.worldvectorlogo.com/logos/nvidia-1.svg",
    "salary": "₹1,500,000 - ₹2,500,000",
    "applyBy": "2026-03-17",
    "skillRequired": ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    "numberOfOpening": 3,
    "jobPosted": "2026-01-24"
  },
  {
    "id": 15,
    "jobCategory": "Marketing",
    "jobDesignation": "Content Strategist",
    "jobLocation": "Remote",
    "companyName": "Storytellers Agency",
    "logo": "https://cdn.worldvectorlogo.com/logos/medium-1.svg",
    "salary": "$70,000 - $90,000",
    "applyBy": "2026-03-03",
    "skillRequired": ["Content Creation", "SEO", "Copywriting", "Brand Strategy"],
    "numberOfOpening": 1,
    "jobPosted": "2026-01-11"
  },
  {
    "id": 16,
    "jobCategory": "Human Resources",
    "jobDesignation": "Talent Acquisition Specialist",
    "jobLocation": "Sydney, Australia",
    "companyName": "Talent Connect",
    "logo": "https://cdn.worldvectorlogo.com/logos/indeed-1.svg",
    "salary": "AUD 70,000 - AUD 90,000",
    "applyBy": "2026-03-28",
    "skillRequired": ["Recruitment", "Applicant Tracking Systems", "Interviewing"],
    "numberOfOpening": 2,
    "jobPosted": "2026-01-19"
  },
  {
    "id": 17,
    "jobCategory": "Design",
    "jobDesignation": "Graphic Designer",
    "jobLocation": "Toronto, Canada",
    "companyName": "Visual Impact Co.",
    "logo": "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc.svg",
    "salary": "CAD 55,000 - CAD 70,000",
    "applyBy": "2026-03-12",
    "skillRequired": ["Adobe Creative Suite", "Branding", "Typography", "Print Design"],
    "numberOfOpening": 1,
    "jobPosted": "2026-01-26"
  },
  {
    "id": 18,
    "jobCategory": "Sales",
    "jobDesignation": "Inside Sales Representative",
    "jobLocation": "Dallas, TX", 
    "companyName": "Growth Solutions Inc.", 
    "logo": "https://cdn.worldvectorlogo.com/logos/google-messages.svg",
    "salary": "$50,000 - $65,000 + Commission",
    "applyBy": "2026-03-07",
    "skillRequired": ["Cold Calling", "Sales Presentations", "CRM"],
    "numberOfOpening": 5,
    "jobPosted": "2026-01-14"
  },
  {
    "id": 19,
    "jobCategory": "Software Development",
    "jobDesignation": "Mobile App Developer (iOS)",
    "jobLocation": "San Jose, CA",
    "companyName": "AppGenius Labs",
    "logo": "https://cdn.worldvectorlogo.com/logos/apple-app-store.svg",
    "salary": "$110,000 - $150,000",
    "applyBy": "2026-03-29",
    "skillRequired": ["Swift", "Xcode", "iOS SDK", "RESTful APIs"],
    "numberOfOpening": 2,
    "jobPosted": "2026-01-21"
  },
  {
    "id": 20,
    "jobCategory": "Data Science",
    "jobDesignation": "Data Engineer",
    "jobLocation": "Remote",
    "companyName": "DataFlow Systems",
    "logo": "https://cdn.worldvectorlogo.com/logos/apache-spark.svg",
    "salary": "$105,000 - $135,000",
    "applyBy": "2026-03-14",
    "skillRequired": ["Python", "SQL", "Spark", "ETL", "Cloud Platforms"],
    "numberOfOpening": 2,
    "jobPosted": "2026-01-27"
  },
  {
    "id": 21,
    "jobCategory": "Marketing",
    "jobDesignation": "Product Marketing Manager",
    "jobLocation": "San Francisco, CA",
    "companyName": "Innovate Products Inc.",
    "logo": "https://cdn.worldvectorlogo.com/logos/product-hunt.svg",
    "salary": "$95,000 - $120,000",
    "applyBy": "2026-03-06",
    "skillRequired": ["Product Launch", "Market Research", "Go-to-Market Strategy"],
    "numberOfOpening": 1,
    "jobPosted": "2026-01-13"
  }
];

const jobs = jobData.map(job => new JobModel(
  job.id,
  job.jobCategory,
  job.jobDesignation,
  job.jobLocation,
  job.companyName,
  job.salary,
  job.applyBy,
  job.skillRequired,
  job.numberOfOpening,
  job.jobPosted,
  job.logo
));
