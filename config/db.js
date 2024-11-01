const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {

  await mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("Database connected")
}