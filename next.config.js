const fs = require("fs");
const env = fs
  .readFileSync("./.env", { encoding: "utf-8" })
  .replace(/"|'|\r/gim, "")
  .trim()
  .split("\n")
  .filter((str) => str && !str.includes("#"))
  .map((v) => {
    return v.replace("=", '":"');
  })
  .reduce((next, cur) => {
    return Object.assign(next, JSON.parse('{"' + cur + '"}'));
  }, {});

module.exports = {
  env: env,
};

// function getENV(envObj) {
//   let rs = {};
//   console.log(envObj);
//   Object.keys(envObj).map((key, _i) => {
//     if (key.includes(envObj["ENV_KEY"])) return (rs[key] = envObj[key]);
//   });
//   return rs;
// }

// const fs = require("fs");
// const data = fs
//   .readFileSync("./.env", { encoding: "utf-8" })
//   .replace(/"|'|\r/gim, "")
//   .trim()
//   .split("\n")
//   .filter((str) => str && !str.includes("#"))
//   .map((v) => {
//     return v.replace("=", '":"');
//   })
//   .reduce((next, cur) => {
//     return Object.assign(next, JSON.parse('{"' + cur + '"}'));
//   }, {});
// console.log(data)
// async function loadENV() {
//   fs.readFile("./.env", "utf8", function (err, data) {
//     if (err) throw err;
//     let obj = data
//       .replace(/\r/gim, "")
//       .trim()
//       .split("\n")
//       .filter((str) => str && !str.includes("#"))
//       .map((v) => {
//         return v.replace("=", '":"');
//       })
//       .reduce((next, cur) => {
//         return Object.assign(next, JSON.parse('{"' + cur + '"}'));
//       }, {});
//     return obj;
//   });
// }