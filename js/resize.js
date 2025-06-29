// 获取要缩放的元素
const element = document.getElementById("app");

// 设置初始缩放比例
let scaleRatio = 1;

// 监听屏幕宽度变化
//   window.addEventListener("onload", function () {
// 获取屏幕宽度
const screenWidth = document.documentElement.clientWidth;

// 计算缩放比例
if (screenWidth <= 767) {
  // 当屏幕宽度小于等于 767px 时
  scaleRatio = screenWidth / 1280; // 1200px 为目标宽度
} else {
  // 当屏幕宽度大于 767px 时
  scaleRatio = 1; // 不需要缩放
}

// 应用缩放效果
element.style.transform = `scale(${scaleRatio})`;
element.style.transformOrigin = "top left";
//   });
