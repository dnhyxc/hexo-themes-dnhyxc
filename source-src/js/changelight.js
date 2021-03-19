function init() {
  const container = document.querySelector('#container');
  const profilepic = document.querySelector('.profilepic');
  const mobileProfilepic = document.querySelector('#profilepic');
  const toolsCol = document.querySelector('.tools-col');
  const btnctn = document.querySelector('.btnctn');
  const intrudeLess = document.querySelector('#intrude-less');

  function toggleLight() {
    if (container.getAttribute('class') === 'container') {
      container.classList.remove('container');
      sessionStorage.removeItem('container');
    } else {
      container.classList.add('container');
      sessionStorage.setItem('container', true);
    }
    if (toolsCol.getAttribute('class').includes('lightToolsCol')) {
      toolsCol.classList.remove('lightToolsCol');
      sessionStorage.removeItem('lightToolsCol');
    } else {
      toolsCol.classList.add('lightToolsCol');
      sessionStorage.setItem('lightToolsCol', true);
    }
    if (btnctn.getAttribute('class').includes('lightBtnctn')) {
      btnctn.classList.remove('lightBtnctn');
      sessionStorage.removeItem('lightBtnctn');
    } else {
      btnctn.classList.add('lightBtnctn');
      sessionStorage.setItem('lightBtnctn', true);
    }
    if (intrudeLess.getAttribute('class').includes('lightIntrudeLess')) {
      intrudeLess.classList.remove('lightIntrudeLess');
      sessionStorage.removeItem('lightIntrudeLess');
    } else {
      intrudeLess.classList.add('lightIntrudeLess');
      sessionStorage.setItem('lightIntrudeLess', true);
    }
  }
  // PC端头像
  profilepic.onclick = function () {
    toggleLight();
  }
  // 移动端头像
  mobileProfilepic.onclick = function () {
    toggleLight();
  }

  if (sessionStorage.getItem('container')) {
    container.classList.add('container');
  } else {
    container.classList.remove('container');
  }
  if (sessionStorage.getItem('lightBtnctn')) {
    btnctn.classList.add('lightBtnctn');
  } else {
    btnctn.classList.remove('lightBtnctn');
  }
  if (sessionStorage.getItem('lightToolsCol')) {
    toolsCol.classList.add('lightToolsCol');
  } else {
    toolsCol.classList.remove('lightToolsCol');
  }
  if (sessionStorage.getItem('lightIntrudeLess')) {
    intrudeLess.classList.add('lightIntrudeLess');
  } else {
    intrudeLess.classList.remove('lightIntrudeLess');
  }
}

module.exports = {
  init: init
}