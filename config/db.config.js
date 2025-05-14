import mongoose from 'mongoose';
const connect = async () => {
  const url = process.env.MONGO_CONNECTION_STRING;

  try {
    await new Promise((resolve, reject) => {
      mongoose.set('strictQuery', true);
      mongoose.connect(url, { useNewUrlParser: true })
        .then(() => { console.log('Connected to DB'); resolve(); })
        .catch(err => reject(err));
    });
  } catch (err) {
    console.log('Error connecting to DB', err);
    throw err;
  }
};

// const disconnect = async () => {
//   if (!mongoose.connection) return;
//   await new Promise((resolve, reject) => {
//     mongoose.disconnect()
//       .then(() => {
//         logger.info('disconnected from DB');
//         resolve();
//       })
//       .catch((err) => {
//         logger.error('error while disconnecting from DB', err);
//         reject(err.message);
//       });
//   });
// };

export default connect;
