const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("loginForm");
checkbox.checked = false;
if (localStorage.getItem("userName") && localStorage.getItem("passWord"))
  existingBtn.style.display = "block";

function loginAndSave(userName, passWord) {
  localStorage.setItem("userName", userName);
  localStorage.setItem("passWord", passWord);
  alert(`Logged in as ${userName}`);
  existingBtn.style.display = "block";
}
function loginNoSave(userName) {
  alert(`Logged in as ${userName}`);
  localStorage.clear();
  existingBtn.style.display = "none";
}
existingBtn.addEventListener("click", () => {
  alert(`Loged in as ${localStorage.getItem("userName")}`);
});
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = username.value.trim();
  const passWord = password.value.trim();
  if (!userName || !passWord) {
    alert("please enter username and password!");
    return;
  }
  if (checkbox.checked) loginAndSave(userName, passWord);
  else loginNoSave(userName);
  form.reset();
});
