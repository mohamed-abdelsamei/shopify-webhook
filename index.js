const app = require('./src/app');
const db = require('./src/utils/db');
const config = require('./config');

const start = async () => {
  try {
    await db.connect();
    app.listen(config.port, () => console.log(`app started on port ${config.port}`));
  } catch (error) {
    console.log('failed to start server');
  }
};

start();
