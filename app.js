var number = prompt("Enter a number:");
if (number) {
    var outputContainer = document.getElementById("output-container");
    outputContainer.innerHTML = "";
    var heading = document.createElement("h2");
    heading.textContent = "Multiplication Table for " + number;
    outputContainer.appendChild(heading);
    var list = document.createElement("ul");
    for (var i = 1; i <= 10; i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<span>" + number + " x " + i + "</span> = " + (number * i);
        list.appendChild(listItem);
    }
    outputContainer.appendChild(list);
} else {
    alert("Please enter a valid number");
}