import axios from "axios";

export const updateProfile = async (formData, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.put(
      "https://careerservices-backend.onrender.com/api/test/candidate/updateUserProfile",
      formData,
      { headers }
    );
    console.log("Data successfully updated in the database:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data in the database:", error);
  }
};

export const getProfile = async (authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      "https://careerservices-backend.onrender.com/api/test/candidate/getUserProfile",
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};

export const getAllJobs = async (authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      "https://careerservices-backend.onrender.com/api/test/candidate/browseJobs",
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};

export const updateResume = async (formData, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };
  try {
    const response = await axios.post(
      "https://careerservices-backend.onrender.com/api/test/candidate/postResume",
      formData,
      { headers }
    );
    //   console.log('Data successfully updated in the database:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data in the database:", error);
  }
};

export const getResume = async (id, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      `https://careerservices-backend.onrender.com/api/test/candidate/getResume?candidateID=${id}`,
      { headers, responseType: "blob" }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};

export const buildResume = async (authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      `https://careerservices-backend.onrender.com/api/test/candidate/resume`,
      { headers, responseType: "blob" }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};

export const applyJob = async (id, authToken) => {
  const headers = {
    "x-access-token": authToken,
  };
  try {
    const response = await axios.post(
      `https://careerservices-backend.onrender.com/api/test/candidate/applyJob?jobID=${id}`,
      {},
      { headers }
    );
    //   console.log('Data successfully updated in the database:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data in the database:", error);
  }
};

export const getApplications = async (authToken) => {
  const headers = {
    "x-access-token": authToken,
  };

  try {
    const response = await axios.get(
      "https://careerservices-backend.onrender.com/api/test/candidate/getApplications",
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error in Fetching", error);
  }
};
