
// 當畫面元素（靜態元素）載入完成後才執行程式
// TODO: 1 啟用WOW.js
new WOW().init();
//function(){要執行的動作}
$().click(function () {
    // 畫面元素載入完成後要執行的程式

    // TODO: 2-1 設定.nav-link的點擊事件
    // 選擇.navbar裡面所有的.nav-link ''文字字串
    $('.navbar .nav-link').click(function){
        // TODO: 2-2 取得移動目標
        // $(this): 被點擊的.nav-link
        //取得屬性元素屬性的值
        //const(為常數，宣告後不能被改變)
        //target(目標)
        //attr(獲取匹配元素集中第一個元素的屬性值)
        //console.log(顯示數值)
        const target = $(this).attr('herf');
        console.log(target);
        // #introSection
        // TODO: 2-3 取得移動目標的座標
        // .offset() => { top: 200, left: 0 }
        //offset(相對於html上邊界的偏移量)
        const position = $(target).offset().top;
        console.log(position);
        // TODO: 2-4 使用動畫移動到目標的座標
        // 導覽列的高度
        const navbarHeight = 56;
        //    先停止目前有在執行的動畫.stop()，再執行新的動畫
        // .animate({物件}, 動畫秒數-單位為千分之一秒)
        //scrollTop(可見內容的最頂端之間的距離)
        $('.html .body').animate({
            scrollTop: position - navbarHeight
        }, 500)
    });
})