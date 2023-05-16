const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);
categories.forEach(el => {
    const categoryName = `Categpry: ${el.firstElementChild.textContent}`;
    const categoryItems = `\nElements: ${el.lastElementChild.children.length}`;
    console.log(categoryName, categoryItems);
});