//get user input and save into array
function handleForm(event) {
  event.preventDefault();
  const grocerySelections = document.querySelectorAll("input:checked");
  const grocerySelectionsArray = Array.from(grocerySelections);

  const resultsHeading = document.createElement("h2");
  resultsHeading.append("Your Selections:");
  document.body.append(resultsHeading);

  grocerySelectionsArray.forEach(function (element) {
    const resultsParagraph = document.createElement("p");
    resultsParagraph.append(element.value);
    document.body.append(resultsParagraph);
  });
}


window.addEventListener("load", function () {
  document.querySelector("form#grocery_list").addEventListener("submit", handleForm);
});

