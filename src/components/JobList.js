import '../index.css';
import React, {useState} from 'react';

const JobList = () => {
  const jobData = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'San Francisco',
      company: 'Tech Co.',
      jobType: 'Full-time',
      salary: '$80,000 - $100,000'
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'New York',
      company: 'Productive Inc.',
      jobType: 'Full-time',
      salary: '$90,000 - $120,000'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'Seattle',
      company: 'Design Co.',
      jobType: 'Part-time',
      salary: '$50,000 - $70,000'
    },
    {
      id: 4,
      title: 'Data Scinetist',
      location: 'New York',
      company: 'Tech Co.',
      jobType: 'Intern',
      salary: '$160,000'
    },
  ];

  const [JobTitleFilter, setJobTitleFilter] = useState('');
  const [LocationFilter, setLocationFilter] = useState('');
  const [IndustryFilter, setIndustryFilter] = useState('');
  const [JobTypeFilter, setJobTypeFilter] = useState('');
  const [SalaryRangeFilter, setSalaryRangeFilter] = useState('');
  const [showSalaryPopup, setShowSalaryPopup] = useState(false);
  const [showJobTitlePopup, setShowJobTitlePopup] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showIndustryPopup, setShowIndustryPopup] = useState(false);
  const [showJobTypePopup, setShowJobTypePopup] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobData);


  const handleFilter = () => {
    const filteredJobs = jobData.filter(job => {
    const JobTitleMatch = job.title.toLowerCase().includes(JobTitleFilter.toLowerCase());
    const LocationMatch = job.location.toLowerCase().includes(LocationFilter.toLowerCase());
    const IndustryMatch = job.company.toLowerCase().includes(IndustryFilter.toLowerCase());
    const JobTypeMatch = job.jobType.toLowerCase().includes(JobTypeFilter.toLowerCase());
    const SalaryRangeMatch = job.salary.includes(SalaryRangeFilter);
    return JobTitleMatch && LocationMatch && IndustryMatch && JobTypeMatch && SalaryRangeMatch;
    });
    setFilteredJobs(filteredJobs);
    
    setShowSalaryPopup(false);
    setShowJobTitlePopup(false);
    setShowLocationPopup(false);
    setShowIndustryPopup(false);
    setShowJobTypePopup(false);
  };

  const textCenter = {
    textAlign: "center"
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
    </div>

      <div className="col-xl">
	  <br/>
	  <img src="https://media.istockphoto.com/id/1394701218/photo/job-search-concept-find-your-career-woman-looking-at-online-website-by-laptop-computer-people.jpg?s=1024x1024&w=is&k=20&c=3Tq0OkY8gqx38uevM8EMNV0y95S_7AU7OKxi5LJ1K64=" class="rounded mx-auto d-block home-img" alt="job search concept find your career woman looking at online website by laptop computer people"/>
	  <p><a href="https://www.istockphoto.com/photo/job-search-concept-find-your-career-woman-looking-at-online-website-by-laptop-gm1394701218-450075777?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fjob%2F&utm_term=job+search">Image Source</a></p>
        <br/>
        <h1 style={textCenter}>Job Listings</h1>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search by Job Title"
            value={JobTitleFilter}
            onChange={e => setJobTitleFilter(e.target.value)}
            onClick={() => setShowJobTitlePopup(true)}
          />
          <br/>
          
          {showJobTitlePopup && (<div className="popup">
            <select onChange={e => setJobTitleFilter(e.target.value)}
                    className="form-control">
              <option value="Software Engineer">Software Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Data Scinetist">Data Scinetist</option>
            </select>
            <br/>
          </div>)}


          <input
            type="text"
            className="form-control"
            placeholder="Search by Location"
            value={LocationFilter}
            onChange={e => setLocationFilter(e.target.value)}
            onClick={() => setShowLocationPopup(true)}
          />
          <br/>
          {showLocationPopup && (<div className="popup">
            <select onChange={e => setLocationFilter(e.target.value)}
                    className="form-control">
              <option value="San Francisco">San Francisco</option>
              <option value="New York">New York</option>
              <option value="Seattle">Seattle</option>
              <option value="Boston">Boston</option>
              <option value="Chicago">Chicago</option>
            </select>
            <br/>
          </div>)}

          <input
            type="text"
            className="form-control"
            placeholder="Search by Industry"
            value={IndustryFilter}
            onChange={e => setIndustryFilter(e.target.value)}
            onClick={() => setShowIndustryPopup(true)}
          />
          <br/>
          {showIndustryPopup && (<div className="popup">
            <select onChange={e => setIndustryFilter(e.target.value)}
                    className="form-control">
              <option value="Tech">Tech</option>
              <option value="Health Care">Health Care</option>
              <option value="Finance">Finance</option>
              <option value="Bio">Bio</option>
              <option value="Law">Law</option>
            </select>
            <br/>
          </div>)}


          <input
            type="text"
            className="form-control"
            placeholder="Search by Job Type"
            value={JobTypeFilter}
            onChange={e => setJobTypeFilter(e.target.value)}
            onClick={() => setShowJobTypePopup(true)}
          />
          <br/>
          {showJobTypePopup && (<div className="popup">
            <select onChange={e => setJobTypeFilter(e.target.value)}
                    className="form-control">
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Intern</option>
            </select>
            <br/>
          </div>)}

          <input
            type="text"
            className="form-control"
            placeholder="Search by Salary Range"
            value={SalaryRangeFilter}
            onChange={e => setSalaryRangeFilter(e.target.value)}
            onClick={() => setShowSalaryPopup(true)}
          />
          <br/>
          {showSalaryPopup && (<div className="popup">
            <select onChange={e => setSalaryRangeFilter(e.target.value)}
                    className="form-control">
              <option value="$3000 - $10,000">$3000 - $10,000</option>
              <option value="$10,000 - $50,000">$10,000 - $50,000</option>
              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
              <option value="$100,000+">$100,000+</option>
            </select>
            <br/>
          </div>)}


          <button className="btn btn-primary" onClick={handleFilter}>Apply Filters</button>
        </div>
		
		<br/>
		<br/>
		<br/>
		
        <div className="row job-card-container">
        {filteredJobs.map(job => (
          <div key={job.id} className="col-md-6 mb-4">
            <div className="card job-card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">Location: {job.location}</p>
                <p className="card-text">Company: {job.company}</p>
                <p className="card-text">Job Type: {job.jobType}</p>
                <p className="card-text">Salary Range: {job.salary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      <div className="col-sm">
      </div>

    </div>
  </div>);
};

export {JobList};