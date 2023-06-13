//page switching
function navigate(path) {
    window.location.href = path;
}

//logout
function logout() {
    localStorage.removeItem('programaster-jwt');
    navigate("index.html");
}