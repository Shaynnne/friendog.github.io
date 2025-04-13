// script.js

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

// 使用 localStorage 保存 noClickCount
let noClickCount = parseInt(localStorage.getItem('noClickCount')) || 0;

// 按鈕大小對應表
const buttonSizes = ['1em', '1.2em', '1.5em', '1.8em', '2em'];

// 點擊「願意」按鈕
yesButton?.addEventListener('click', () => {
    localStorage.removeItem('noClickCount'); // 清除記錄
    window.location.href = 'thank_you.html';
});

// 點擊「不要」按鈕
noButton?.addEventListener('click', () => {
    noClickCount++;
    localStorage.setItem('noClickCount', noClickCount);

    if (noClickCount <= 4) {
        window.location.href = `page_${noClickCount}.html`;
    }

    if (noClickCount === 4) {
        noButton.style.display = 'none';
    }
});

// 根據點擊次數調整願意按鈕大小
if (yesButton) {
    const size = noClickCount >= 4 ? buttonSizes[4] : buttonSizes[noClickCount];
    yesButton.style.fontSize = size;
}
