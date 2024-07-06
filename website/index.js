let amp = document.getElementById("amp");
function displayname() {
  let d = new Date();
  let hours = d.getHours();
  let sec = padZero(d.getSeconds());
  let mins = padZero(d.getMinutes());
  if (hours > 12) {
    hours = hours - 12;
    amp.innerHTML = "PM";
  } else {
    amp.innerHTML = "AM";
  }

  document.querySelector("#hours").innerHTML = padZero(hours);
  document.querySelector("#mins").innerHTML = mins;
  document.getElementById("sec").innerHTML = sec;
}
setInterval(displayname, 500);
function padZero(num) {
  return num < 10 ? "0" + num : num;
}
var x = document.getElementById("views");
async function views() {
  let response = await fetch(
    " https://jkkcod3fjbrz6us2ok5mxnx3te0jzohj.lambda-url.ap-south-1.on.aws/"
  );
  let data = await response.json();
  x.innerHTML = `views count:${data}`;
}
views();
