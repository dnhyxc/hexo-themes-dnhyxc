function init() {
  let path = location.pathname;
  const archivesWrap = document.querySelector('.archives-wrap');
  const wh = window.screen.height;
  const bh = document.body.clientHeight;
  const res = decodeURIComponent(path).substr(decodeURIComponent(path));
  if (res.includes('tags') || res.includes('categories') && document.body.clientWidth <= 800) {
    archivesWrap.style.marginBottom = (wh - bh + 10) + 'px';
  }

  const mobileDark = document.querySelector('.mobileDark');
  const toTopDark = document.querySelector('.toTopDark');

  let timer;
  document.body.onscroll = function () {
    console.log(document.documentElement.scrollTop);
    mobileDark.style.visibility = 'visible';
    mobileDark.style.transition = 'all 0.5s';
    toTopDark.style.visibility = 'visible';
    toTopDark.style.transition = 'all 0.5s';
    clearTimeout(timer);
    timer = setTimeout(() => {
      mobileDark.style.visibility = 'hidden';
      mobileDark.style.transition = 'all 0.5s';
      toTopDark.style.visibility = 'hidden';
      toTopDark.style.transition = 'all 0.5s';
    }, 2000);
  }
}

module.exports = {
  init: init
}