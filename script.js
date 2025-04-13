// 获取按钮元素
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
let noClickCount = localStorage.getItem('noClickCount') || 0;  // 获取存储的点击次数，默认0

// 设置按钮大小的初始值
const buttonSizes = ['1em', '1.2em', '1.5em', '1.8em', '2em'];

// 按钮点击事件：点击“愿意”
if (yesButton) {
    yesButton.addEventListener('click', function() {
        window.location.href = 'thank_you.html'; // 跳转到感谢页面
    });
}

// 按钮点击事件：点击“不要”
if (noButton) {
    noButton.addEventListener('click', function() {
        noClickCount++;

        // 存储点击次数
        localStorage.setItem('noClickCount', noClickCount);

        // 如果点击次数小于等于4，跳转到对应页面
        if (noClickCount <= 4) {
            window.location.href = `page_${noClickCount}.html`; // 跳转到 page_1.html 到 page_4.html
        }

        // 第四次点击后只显示“愿意”按钮，不显示“不要”
        if (noClickCount === 4) {
            noButton.style.display = 'none'; // 隐藏“不要”按钮
        }
    });
}

// 调整"愿意"按钮的大小
if (yesButton) {
    if (noClickCount < 4) {
        yesButton.style.fontSize = buttonSizes[noClickCount]; // 随着点击次数增大按钮
    } else {
        yesButton.style.fontSize = buttonSizes[4]; // 如果已经是第四个页面，最大按钮大小
    }
}
