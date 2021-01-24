module.exports = {
  env: getENV(process.env),
};

function getENV(envObj) {
  let rs = {};
  Object.keys(envObj).map((key, _i) => {
    if (key.includes(envObj["ENV_KEY"])) return (rs[key] = envObj[key]);
  });
  return rs
}
