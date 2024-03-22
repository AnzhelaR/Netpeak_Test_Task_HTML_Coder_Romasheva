const tabs = document.querySelectorAll(".tabs");
const tabsItems = document.querySelectorAll(".tabs_item");

tabs.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;

        let link = currentBtn.querySelector('li>a');

        let tabId = link.getAttribute("href");

        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("active")) {
            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            tabsItems.forEach(function (item) {
                item.classList.remove("active");
            });

            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }


    })
});

document.querySelector(".tabs").click();

let start = document.querySelector("li.third");
let end = document.querySelector("li.second");
let back = document.querySelector("li.back_ground");

start.addEventListener("click", function () {

    back.classList.remove("switch_left");
    back.classList.add("switch_right");

})

end.addEventListener("click", function () {

    back.classList.remove("switch_right");
    back.classList.add("switch_left");
    
})