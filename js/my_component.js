
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

        if (callback) {
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

/* show loading spinner - start */
/**
 * 顯示 loading spinner, 並禁用所有 input, textarea, button, select.
 * 會在 html 中加入 loadingOverlay & loadingSpinner 元素  
 * loadingOverlay: 用來遮蔽畫面的 div  
 * loadingSpinner: 用來顯示 loading spinner 的 div  
 * sample: `<div id="loadingOverlay"><div id="loadingSpinner"></div></div>`
 */
function showLoading() {
    document.querySelectorAll('input, textarea, button, select').forEach(el => {
        el.disabled = true;
    });

    const loadingOverlayDiv = document.createElement("div");
    loadingOverlayDiv.setAttribute("id", "loadingOverlay")
    const loadingSpinnerDiv = document.createElement("div");
    loadingSpinnerDiv.setAttribute("id", "loadingSpinner")
    loadingOverlayDiv.appendChild(loadingSpinnerDiv);
    document.body.appendChild(loadingOverlayDiv);

    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';
}

/**
 * 隱藏 loading spinner, 並啟用所有 input, textarea, button, select.
 * 會移除 html 中的 loadingOverlay & loadingSpinner 元素
 */
function disableLoading() {
    document.querySelectorAll('input, textarea, button, select').forEach(el => {
        el.disabled = false;
    });

    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingOverlay.style.display = 'none';
    loadingSpinner.remove();    
    loadingOverlay.remove();
}
/* show loading spinner - end */

/* - start */
/* - end */