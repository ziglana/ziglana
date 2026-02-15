// Dark theme toggle
const body = document.querySelector('body');

// Check local storage for theme
const theme = localStorage.getItem('theme');
if (theme) {
    body.classList.add(theme);
}

// Example function (to be removed/implemented)
function someFunction() {
    console.log('Hello from Ziglana!');
}

someFunction();