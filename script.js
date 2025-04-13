const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

// 從 localStorage 取得點擊次數，若沒有則為 0
let noClickCount = parseInt(localStorage.getItem('noClickCount')) || 0;

// 定義願意按鈕的大小
const buttonSizes = ['1em', '1.2em', '1.5em', '1.8em', '2em'];

// 點擊「願意」按鈕時
yesButton.addEventListener('click', function () {
    localStorage.removeItem('noClickCount'); // 清除記錄（回歸初始）
    window.location.href = 'thank_you.html'; // 跳轉到感謝頁面
});

// 點擊「不要」按鈕時
noButton.addEventListener('click', function () {
    noClickCount++;
    localStorage.setItem('noClickCount', noClickCount); // 更新並保存點擊次數

    if (noClickCount <= 4) {
        window.location.href = `page_${noClickCount}.html`; // 跳轉到 page_1.html ~ page_4.html
    }

    if (noClickCount === 4) {
        noButton.style.display = 'none'; // 隱藏「不要」按鈕
    }
});

// 根據點擊次數調整「願意」按鈕大小
if (yesButton) {
    yesButton.style.fontSize = buttonSizes[Math.min(noClickCount, 4)];
}
