import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  jobTitle: { type: String, required: true },
  Department: { type: String, required: true },
}, { collection: 'employeeProfiles' }); // Specify the collection name

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
  