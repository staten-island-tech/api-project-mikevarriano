import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

function mv(name) {
  const mvPromise = new Promise(function (resolve, reject) {
    resolve("hello ${name}");
  });
  return mvPromise;
}
const suzie = mv("suzie");

suzie.then((result) => {
  console.log(result);
});
