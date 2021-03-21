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

const cover = document.querySelector('.cover');
const hideCoverBtn = document.querySelector('.hideCoverBtn');

addLoadEvent(function () {
	// Share.init()
	Viewer.init()
	Aside.init()
})

function stopTouchmove(e) {
	e.preventDefault();
}

document.onreadystatechange = function () {
	if (document.readyState === "complete") {
		ChangeLight.init()
		cover.classList.add('hideCover');
		document.body.style.position = 'relative';
		document.body.style.overflow = 'auto';
		document.body.removeEventListener('touchmove', stopTouchmove, { passive: false });
	} else {
		hideCoverBtn.addEventListener('click', function () {
			setTimeout(() => {
				cover.classList.add('hideCover');
			}, 1000)
			console.log(cover);
		})
		document.body.addEventListener('touchmove', stopTouchmove, { passive: false });
	}
}