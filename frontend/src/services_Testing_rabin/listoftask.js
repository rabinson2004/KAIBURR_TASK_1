import axios from "axios";

const baseURL = "http://localhost:8080"; // Replace with your actual base URL

export const getListOfTasks = async () => {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data; // Assuming the API returns a JSON array of tasks
  } catch (error) {
    console.error("Error fetching list of tasks:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}
export const getTaskById = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${baseURL}/delete/${id}`);
  return response.data;
};

export const updateTask = async (task) => {

  const response = await axios.put(baseURL, task);
  return response.data;
};
