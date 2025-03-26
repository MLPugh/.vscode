document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        const checkboxId = checkbox.id;
        const savedState = localStorage.getItem(`checkboxState_${checkboxId}`);

        if (savedState === "checked") {
            checkbox.checked = true;
        }

        checkbox.addEventListener("change", function () {
            localStorage.setItem(`checkboxState_${checkboxId}`, checkbox.checked ? "checked" : "unchecked");
        });
    });
});
