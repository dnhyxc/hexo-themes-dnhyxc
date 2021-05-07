// 样式
import '../css/main.scss'
// 上报
// import './report'
// 图片查看器
import Viewer from './viewer'
// 分享
import Share from './share'
// 边缘
import Aside from './aside'

import ChangeLight from './changelight'

import Setmargin from './setmargin'

import { addLoadEvent } from './util'

const cover = document.querySelector('.cover');
const hideCoverBtn = document.querySelector('.hideCoverBtn');

addLoadEvent(function () {
	// Share.init()
	Viewer.init();
	Aside.init();
	Setmargin.init();
	ChangeLight.init();
})

function stopTouchmove(e) {
	e.preventDefault();
}

document.onreadystatechange = function () {
	if (document.readyState === "complete") {
		// ChangeLight.init()
		cover.classList.add('hideCover');
		if (document.body.clientWidth <= 800) {
			document.body.style.position = 'relative';
			document.body.style.width = '100%';
			document.body.removeEventListener('touchmove', stopTouchmove, { passive: false });
		}
	} else if (document.readyState === "interactive") {
		hideCoverBtn.addEventListener('click', function () {
			cover.classList.add('hideCover');
			// setTimeout(() => {
			// }, 1000)
		})
	} else {
		document.body.addEventListener('touchmove', stopTouchmove, { passive: false });
	}
}