module.exports = {
  env: getENV(process.env),
};

function getENV(obj) {
  let rs = {};
  Object.keys(obj).map((key, _i) => {
    if (key.includes(process.env.ENV_KEY)) return (rs[key] = obj[key]);
  });
  return rs
}
