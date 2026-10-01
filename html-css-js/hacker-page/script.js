const input = document.getElementById("commandInput");
const output = document.getElementById("output");

input.addEventListener("keydown", function(event) {
    if (event.key !== "Enter") return;

    const command = input.value.trim().toLowerCase();

    if (command === "help") {
        output.textContent =
            "Available commands:\n" +
            "help    - show commands\n" +
            "about   - about this page\n" +
            "clear   - clear terminal\n" +
            "status  - system status";
    }

    else if (command === "about") {
        output.textContent =
            "Cyber Terminal\n" +
            "Built with HTML, CSS and JavaScript.";
    }

    else if (command === "status") {
        output.textContent =
            "SYSTEM: ONLINE\n" +
            "NETWORK: SECURE\n" +
            "STATUS: RUNNING";
    }

    else if (command === "clear") {
        output.textContent = "";
    }

    else if (command !== "") {
        output.textContent = "Command not found. Type 'help'.";
    }

    input.value = "";
});