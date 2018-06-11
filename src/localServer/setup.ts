const port = 13370;

import * as express from 'express';
import clientRouter from './client/clientRouter';
import payloadRouter from './payload/payloadRouter';
const app = express();

app.use('/client', clientRouter);
app.use('/payload', payloadRouter);

export default () => app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening on port ${port}`);
});
