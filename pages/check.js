document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("rememberMe");
    
    // Load saved state from Local Storage
    if (localStorage.getItem("checkboxState") === "checked") {
        checkbox.checked = true;
        alert('remember checked')
    }

    // Listen for changes and update Local Storage
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            localStorage.setItem("checkboxState", "checked");
            alert('checked');
        } else {
            localStorage.setItem("checkboxState", "unchecked");
            alert('unchecked');
        }
    });
});