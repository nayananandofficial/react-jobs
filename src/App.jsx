import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleJobPage, { jobLoader } from "./pages/SingleJobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import axios from "axios";

const App = () => {
  //Add Job Page
  const addJob = async (newJob) => {
    try {
      await axios.post("/api/jobs", newJob);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  // Delete Job
  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // Update Job
  const updateJob = async (job) => {
    try {
      await axios.put(`/api/jobs/${job.id}`, job);
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/jobs" element={<JobsPage />} />

        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        <Route
          path="/jobs/:id"
          element={<SingleJobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
