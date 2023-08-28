const Task = require("../models/task");
const getAll = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      status: "success",
      message: tasks,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const postAll = async (req, res) => {
  const task = await Task.create(req.body);
  console.log(task);
  try {
    res.status(201).json({
      status: "success",
      message: task,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const getOne = async (req, res) => {
  try {
    const { id: taskID } = await req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({
        status: "failed",
        message: "no such id exits",
      });
    }
    res.status(200).json({
      status: "success",
      message: task,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const updateData = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "successfully updated",
      message: task,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const deletaData = async (req, res) => {
  try {
    const { id: taskID } = await req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({
        status: "failed",
        message: "no such id exits",
      });
    }
    res.status(200).json({
      status: "successfully deleted",
      message: task,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

module.exports = {
  getAll,
  postAll,
  getOne,
  updateData,
  deletaData,
};
