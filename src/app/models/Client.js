import mongoose from 'mongoose';
import database from '../../database';

const ClientSchema = new mongoose.Schema({
  name: String
});

export default tenant => {
  const db = database.mongoConnections.useDb(tenant, { useCache: true });
  return db.model('Client', ClientSchema);
};
