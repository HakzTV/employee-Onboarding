import express from 'express';
import Employee from '../models/Employee.js';

const router = express.Router();

// Create new employee
router.post('/', async (req, res) => {
  console.log("Request body:", req.body); // Log the incoming request body
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    console.error("Error saving employee:", error); // Log error details
    res.status(400).send(error);
  }
});

// Get all employees

router.get('/', async (req, res) => {
  console.log("GET request to fetch all employees"); // Log request

  try {
    const employees = await Employee.find();
    console.log("Retrieved employees:", employees); // Log retrieved employees

    if (employees.length === 0) {
      console.log("No employees found in the collection.");
    }

    res.status(200).send(employees);
  } catch (error) {
    console.error("Error fetching employees:", error); // Log errors
    res.status(500).send(error);
  }
});

  

export default router;
