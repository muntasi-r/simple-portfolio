var input = document.getElementById("user_input");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button_input").click();
    }
});