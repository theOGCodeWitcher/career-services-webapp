import React, { useEffect, useState } from 'react';
import JobCard from '../components/Jobcard';
import { getAllJobs } from '../api/StudentApi';

const JobList = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const authToken = JSON.parse(localStorage.getItem('user')).accessToken;
    getAllJobs(authToken)
    .then((candidates)=>{
      setJobs(candidates)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  console.log(jobs);

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-bold m-4 text-center">Job Listings</h2>
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          jobTitle={job.jobTitle}
          companyName={job.companyName}
          location={job.companyLocation}
          dateAdded={job.dateAdded}
          workLocation = {job.workLocation}
          totalOpenings={job.totalOpenings}
          jobDescription={job.jobDesc}
        />
      ))}
    </div>
  );
};

export default JobList;
