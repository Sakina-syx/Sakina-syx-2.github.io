// 获取所有图片元素
const images = document.querySelectorAll('.gallery img');

// 创建一个模态框容器，用于显示大图
const modal = document.createElement('div');
modal.id = 'myModal';
modal.innerHTML = `
  <span id="closeModal" class="close">&times;</span>
  <img class="modal-content" id="img01">
`;
document.body.appendChild(modal);

// 获取模态框中的图片元素
const modalImg = document.getElementById('img01');

// 获取关闭模态框的元素
const closeModal = document.getElementById('closeModal');

// 为每个图片添加点击事件
images.forEach(image => {
  image.onclick = function() {
    // 设置模态框中图片的src属性为被点击图片的src
    modalImg.src = this.src;
    // 显示模态框
    modal.style.display = "block";
  };
});

// 当用户点击关闭按钮时，隐藏模态框
closeModal.onclick = function() {
  modal.style.display = "none";
};

// 当用户点击模态框外部时，也隐藏模态框
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
