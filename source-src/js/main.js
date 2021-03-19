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

import { addLoadEvent } from './util'

addLoadEvent(function () {
	// Share.init()
	// Viewer.init()
	Aside.init()
})

const cover = document.querySelector('.cover');

function stopTouchmove(e) {
	e.preventDefault();
}

document.onreadystatechange = function () {
	ChangeLight.init()
	if (document.readyState === "complete") {
		cover.classList.add('hideCover');
		document.body.style.position = 'relative';
		document.body.removeEventListener('touchmove', stopTouchmove, { passive: false });
	} else {
		document.body.addEventListener('touchmove', stopTouchmove, { passive: false });
	}
}