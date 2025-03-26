document.addEventListener("DOMContentLoaded", function () {
    const mainOneCheck = document.getElementById("main-one");
    const mainTwoCheck = document.getElementById("main-two");
    
    // Load saved state from Local Storage
    if (localStorage.getItem("checkboxState") === "checked") {
        mainOneCheck.checked = true;
        mainTwoCheck.checked = true;
    }

    // Listen for changes and update Local Storage
    mainOneCheck.addEventListener("change", function () {
        if (mainOneCheck.checked) {
            localStorage.setItem("checkboxState", "checked");
        } else {
            localStorage.setItem("checkboxState", "unchecked");
        }
    });

    mainTwoCheck.addEventListener("change", function () {
        if (mainTwoCheck.checked) {
            localStorage.setItem("checkboxState", "checked");
        } else {
            localStorage.setItem("checkboxState", "unchecked");
        }
    });
});