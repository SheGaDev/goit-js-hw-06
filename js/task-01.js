(() => {
    const mainCategory = document.querySelector("ul#categories");
    const categories = mainCategory.querySelectorAll("li.item");
    console.log("Number of categories:", categories.length);
    categories.forEach(el => {
        const categoryName = el.querySelector("h2").textContent;
        const categoryItems = el.querySelectorAll("ul>li").length;
        console.log("Category:", categoryName, "\nElements:", categoryItems);
    })

})()