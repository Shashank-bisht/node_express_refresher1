const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
  //   getting all jobs associated with particular user
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(200).json({ jobs, count: jobs.length });
};

// getting a single job
const getJob = async (req, res) => {
  const {
    // This code uses destructuring to extract the userId from token and the jobId from req.params.id
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    res.status(404);
  }
  console.log(req)
  res.status(200).json({ job });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(200).json({ job });
};
const updateJob = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req;

  if (company === "" || position === "") {
    console.log("provide both");
  }
  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!job) {
    console.log("error");
  }
  res.status(200).json({ job });
};
const deleteJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findByIdAndRemove({ _id: jobId, createdBy: userId });
  if (!job) {
    console.log("error");
  }
  res.status(200).json({ job });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
