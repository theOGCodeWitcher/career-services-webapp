import axios from "axios";

export const getAllCandidates = async (authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      "https://careerservices-backend.onrender.com/api/test/employer/getCandidates",
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
    return error;
  }
};

export const getEmployerProfile = async (authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      "https://careerservices-backend.onrender.com/api/test/employer/getEmployerProfile",
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};

export const updateEmployerProfile = async (formData, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.put(
      "https://careerservices-backend.onrender.com/api/test/employer/updateEmployerProfile",
      formData,
      { headers }
    );
    // console.log('Data successfully updated in the database:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data in the database:", error);
  }
};

export const postJob = async (formData, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.post(
      "https://careerservices-backend.onrender.com/api/test/employer/postJob",
      formData,
      { headers }
    );
    // console.log('Data successfully updated in the database:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data in the database:", error);
  }
};

export const getJobsAdded = async (authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      "https://careerservices-backend.onrender.com/api/test/employer/getJobs",
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};

export const getApplicants = async (id, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      `https://careerservices-backend.onrender.com/api/test/employer/getApplicants?jobID=${id}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};

export const deleteJob = async (id, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.delete(
      `https://careerservices-backend.onrender.com/api/test/employer/deleteJobPosting?jobID=${id}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};

export const updateJob = async (id, formData, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };
  console.log(id);
  try {
    const response = await axios.put(
      `https://careerservices-backend.onrender.com/api/test/employer/updateJobPosting?jobID=${id}`,
      formData,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Update", error);
  }
};

export const callInterview = async (candidateId, jobId, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };
  try {
    const response = await axios.put(
      `https://careerservices-backend.onrender.com/api/test/employer/putInterview?jobID=${jobId}&candidateID=${candidateId}`,
      {},
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Update", error);
  }
};
