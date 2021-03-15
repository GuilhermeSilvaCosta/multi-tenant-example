import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnections = mongoose.createConnection(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true, useCreateIndex: true },
    );
  }
}

export default new Database();