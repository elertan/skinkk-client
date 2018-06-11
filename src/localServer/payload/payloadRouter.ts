import * as express from 'express';
const router = express.Router();

router.get('/skin-info', (req, res) => {
  res.send({
    example: 42,
    data: 1337,
    right: 'hell-yeah',
  });
});

export default router;
