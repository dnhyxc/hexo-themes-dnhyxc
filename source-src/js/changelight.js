function init() {
  const container = document.querySelector('#container');
  const profilepic = document.querySelector('.profilepic');
  const mobileProfilepic = document.querySelector('#profilepic');
  const toolsCol = document.querySelector('.tools-col');
  const btnctn = document.querySelector('.btnctn');
  const intrudeLess = document.querySelector('#intrude-less');
  const tocContainer = document.querySelector('.toc-container');

  function toggleLight() {
    container.classList.toggle('container');
    toolsCol.classList.toggle('lightToolsCol');
    btnctn.classList.toggle('lightBtnctn');
    intrudeLess.classList.toggle('lightIntrudeLess');
  }
  // PC端头像
  profilepic.onclick = function () {
    toggleLight();
  }
  // 移动端头像
  mobileProfilepic.onclick = function () {
    toggleLight();
  }
}

module.exports = {
  init: init
}