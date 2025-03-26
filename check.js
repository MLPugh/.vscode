document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("main-one");
    
    // Load saved state from Local Storage
    if (localStorage.getItem("checkboxState") === "checked") {
        checkbox.checked = true;
    }

    // Listen for changes and update Local Storage
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            localStorage.setItem("checkboxState", "checked");
        } else {
            localStorage.setItem("checkboxState", "unchecked");
        }
    });
});