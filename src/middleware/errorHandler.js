module.exports = async (err, req, res, next) => {
  console.log(err);
  const message = err.message || 'server error';
  const status = err.status || 500;
  return res.status(status).json({ msg: message, status });
};
