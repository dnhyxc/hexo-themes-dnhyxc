function init() {
  const container = document.querySelector('#container');
  const profilepic = document.querySelector('.profilepic');
  const mobileProfilepic = document.querySelector('#profilepic');
  const toolsCol = document.querySelector('.tools-col');
  const btnctn = document.querySelector('.btnctn');
  const intrudeLess = document.querySelector('#intrude-less');
  const tocContainer = document.querySelector('.toc-container');
  // PC端头像
  profilepic.onclick = function () {
    container.classList.toggle('container');
    toolsCol.classList.toggle('lightToolsCol');
  }
  // 移动端头像
  mobileProfilepic.onclick = function () {
    container.classList.toggle('container');
    btnctn.classList.toggle('lightBtnctn');
    intrudeLess.classList.toggle('lightIntrudeLess');
    console.log(intrudeLess);
    // tocContainer.classList.toggle('lightTocContainer');
  }
}

module.exports = {
  init: init
}