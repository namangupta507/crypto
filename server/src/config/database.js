import mongoose from "mongoose";

const connectDB = async (enviroment) => {
  try {
    let uri='';
    switch (enviroment) {
        case 'development':
            uri=process.env.DB_DEV_URI
            break;
     case 'production':
            uri=process.env.DB_PROD_URI
            break;
        default:
            uri=process.env.DB_DEV_URI
            break;
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database Connected`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1); 
  }
};

export {connectDB};
