//Program Title
document.getElementById("login-btn").addEventListener("click", btnClicked);
outputE1 = document.getElementById("login-info");

function btnClicked() {
  //INPUT
  let user = document.getElementById("user-in").value;
  let pass = document.getElementById("pass-in").value;
  //PROCESS
  if (user === "admin" && pass === "1234") {
    outputE1.innerHTML = `<h2>Login Successsful</h2>`;
  } else if (user === "admin" && pass !== "1234") {
    outputE1.innerHTML = `<h2>Invalid Password</h2>`;
  } else if (user !== "admin" && pass === "1234") {
    outputE1.innerHTML = `<h2>Invalid Username</h2>`;
  } else {
    outputE1.innerHTML = `<h2>Invalid Login</h2>`;
  }
  //OUTPUT
}

//} else if (user !== "admin" && pass === "1234") {
//  outputE1.innerHTML = `<h2>Invalid Username</h2>`;
//}
