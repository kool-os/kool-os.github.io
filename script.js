// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
const body = document.body;
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    body.style.backgroundColor = '#121212';
    body.style.color = '#fff';
  } else {
    body.style.backgroundColor = '#fff';
    body.style.color = '#000';
  }
});

// Admin login
const loginBtn = document.getElementById('loginBtn');
const editor = document.getElementById('editor');
const loginDiv = document.getElementById('login');
const editorArea = document.getElementById('editorArea');
const saveBtn = document.getElementById('saveBtn');

loginBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === "admin" && password === "admin") {
    loginDiv.style.display = "none";
    editor.style.display = "block";
    editorArea.value = localStorage.getItem("siteContent") || document.body.innerHTML;
  } else {
    alert("Invalid credentials!");
  }
});

// Save edits
saveBtn.addEventListener('click', () => {
  localStorage.setItem("siteContent", editorArea.value);
  document.body.innerHTML = editorArea.value;
  alert("Changes saved!");
});
