
$(document).ready(function () {

    // navbar click change active class
    const links = document.querySelectorAll("#navbar a");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
        // 阻止默认行为
        // event.preventDefault();
        
        // 删除当前 active 元素中的 "active" class
        const currentActive = document.querySelector("#navbar a.active");
        currentActive.classList.remove("active");

        // 向单击的元素添加 "active" class
        link.classList.add("active");
        });
    });
});