function init() {
  const container = document.querySelector('#container');
  const mobileProfilepic = document.querySelector('#profilepic');
  const toolsCol = document.querySelector('.tools-col');
  const btnctn = document.querySelector('.btnctn');
  const intrudeLess = document.querySelector('#intrude-less');
  const dark = document.querySelector('.dark');
  const mobileDark = document.querySelector('.mobileDark');

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
    if (dark.getAttribute('class').includes('light')) {
      dark.classList.remove('light');
      sessionStorage.removeItem('light');
    } else {
      dark.classList.add('light');
      sessionStorage.setItem('light', true);
    }
    if (mobileDark.getAttribute('class').includes('mobileLight')) {
      mobileDark.classList.remove('mobileLight');
      sessionStorage.removeItem('mobileLight');
    } else {
      mobileDark.classList.add('mobileLight');
      sessionStorage.setItem('mobileLight', true);
    }
  }
  // PC端头像
  dark.onclick = function () {
    toggleLight();
  }
  // 移动端头像
  mobileDark.onclick = function () {
    toggleLight();
  }

  if (sessionStorage.getItem('light')) {
    dark.classList.add('light');
  } else {
    dark.classList.remove('light');
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
  if (sessionStorage.getItem('mobileLight')) {
    mobileDark.classList.add('mobileLight');
  } else {
    mobileDark.classList.remove('mobileLight');
  }

  let timer;

  mobileDark.addEventListener('touchstart', function () {
    clearTimeout(timer);
    mobileDark.style.opacity = '1';
    mobileDark.style.transition = 'all 0.5s';
  })

  mobileDark.addEventListener('touchend', function () {
    clearTimeout(timer);
    mobileDark.style.opacity = '0';
    mobileDark.style.transition = 'all 0.5s';
  })

  document.body.onscroll = function () {
    mobileDark.style.opacity = '1';
    mobileDark.style.transition = 'all 0.5s';
    clearTimeout(timer);
    timer = setTimeout(() => {
      mobileDark.style.opacity = '0';
      mobileDark.style.transition = 'all 0.5s';
    }, 2000);
  }

}

module.exports = {
  init: init
}