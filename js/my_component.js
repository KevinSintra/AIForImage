
$(document).ready(function () {

    /* navbar js script - start */
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
    /* navbar js script - end */


    /* dropdown list js script - start */
    /**
     * 在指定的 element 建立下拉式選單
     * @param {*} container 指定的 element 通常是 div
     * @param {*} options 資料來源 json array
     * @param {*} callback 下拉式選單 change event 的 callback
     */
    function createSelectBox(container, options, callback) {
        var select = document.createElement("select");
        select.classList.add("select");

        options.forEach(function (option) {
            var optionElement = document.createElement("option");
            optionElement.text = option.name;
            optionElement.value = option.prompt;
            select.add(optionElement);
        });

        if(callback) {
            select.addEventListener("change", function () {
                var selectedOption = select.options[select.selectedIndex];
                callback(selectedOption);
            });
        }

        var selectBox = document.createElement("div");
        selectBox.classList.add("select-box");
        selectBox.appendChild(select);
        container.appendChild(selectBox);

        var event = new Event("change");
        select.dispatchEvent(event); // 觸發 change event
    }
    /* dropdown list js script - end */

});

/* js script - start */
/* js script - end */