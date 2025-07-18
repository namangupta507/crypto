import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: 'admin'
  },
  profileImage:{
    type:String
  },
  sessionToken:{
    type:String,
    default:''
  }
}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
