import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "../models/admin.js";
import { connectDB } from "../config/database.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB(process.env.ENVIROMENT);

    // Optional: Clear existing admins
    await Admin.deleteMany();

    const hashedPassword = await bcrypt.hash("12345678", 10);

    const adminData = {
      name: "Super Admin",
      email: "admin@yopmail.com",
      password: hashedPassword,
      role: "admin"
    };

    const admin = new Admin(adminData);
    await admin.save();

    console.log("Admin user seeded successfully");
    process.exit();
  } catch (err) {
    console.error("Seeding admin failed", err);
    process.exit(1);
  }
};

seedAdmin();
