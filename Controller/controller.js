const staff =  require("../model/model")
//const router = express.Router();
// Create a function to get all employees
const getAllStaff = async (req, res, next) => {
  try {
    let query ={}
    const { status } = req.query;
    if(status){
      query.isActive=status
    }
    const data = await staff.find(query);
    if (!data.length){
      res.status(200).send("No Data Found")
    }
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};
// Create a function to get an employee by ID
const getStaffById = async (req, res, next) => {
  try {
    const data = await staff.findById(req.params.id);
    if (data) {
      res.status(200).send(data);
    } else {
      return res.status(200).json({message:"No User Found"});
    }
  } catch (err) {
    next(err);
  }
};

const createStaff = async (req, res, next) => {
  const { id } = req.body;
  const newData = req.body;

  try {
    let data;

    if (id) {
      // Update operation
      data = await staff.findByIdAndUpdate(id, newData);
    } else {
      // Create operation
      data = await staff.create(newData);
    }

    if (data) {
      const message = id ? "Updated Successfully" : "Created Successfully";
      res.status(201).send(message);
    } else {
      res.status(400).send("Request Failed");
    }
  } catch (err) {
    next(err);
  }
};

/*
// Create a function to create an employee
const createStaff = async (req, res, next) => {
  try {
    const data = await staff.create(req.body);
    res.status(201).send(data);
  } catch (err) {
    next(err);
  }
};
// Create a function to update an employee
const updateStaff = async (req, res, next) => {
  try {
    const data = await staff.findByIdAndUpdate(req.params.id, req.body);
    if (data) {
      res.status(200).send("Updated Successfully");
    } else {
      raiseRecord404Error(req, res);
    }
  } catch (err) {
    next(err);
  }
};
*/

// Create a function to delete an employee
const deleteStaff = async (req, res, next) => {
  try {
    const data = await staff.findByIdAndDelete(req.params.id);
    if (data) {
      res.status(200).send("deleted successfully");
    } else {
      res.status(200).send("No User Found");
    }
  } catch (err) {
    next(err);
  }
};
// Call the functions using the router
module.exports = {getAllStaff,
                  getStaffById,
                deleteStaff,
            createStaff, }