const $loginForm = document.querySelector(".form-login");
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");

function cargarJSON(callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", "admitidos_key.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  cargarJSON(function (response) {
    const data = JSON.parse(response);
    const users = data.users;
    const emailValue = $email.value;
    const passwordValue = $password.value;

    const user = users.find(
      (user) => user.email === emailValue && user.password === passwordValue
    );

    if (user) {
      localStorage.setItem("userLogeado", JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      console.log("Invalid email or password");
      // Aquí puedes mostrar un mensaje de error
    }
  });
});
