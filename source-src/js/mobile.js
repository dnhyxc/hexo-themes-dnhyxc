import addClass from 'dom101/add-class'
import removeClass from 'dom101/remove-class'
import after from 'dom101/after'
// 浏览器判断
import Browser from './browser'
// fix hexo 不支持的配置
import Fix from './fix'

import { addLoadEvent } from './util'

const btnctnname = document.querySelector('.btnctn-name');

let path = location.pathname;
if (decodeURIComponent(path)) {
	btnctnname.innerHTML = 'Informal Essay';
	if (path !== '/') {
		const res = decodeURIComponent(path).substr(decodeURIComponent(path).lastIndexOf('/', decodeURIComponent(path).lastIndexOf('/') - 1) + 1);
		const subPath = res.slice(0, res.length - 1);
		if (subPath === 'tags') {
			btnctnname.innerHTML = 'Informal Essay';
		} else {
			btnctnname.innerHTML = 'Article-' + subPath[0].toUpperCase() + subPath.slice(1);
		}
	} else {
		btnctnname.innerHTML = 'HOME'
	}
}

function isPathMatch(path, href) {
	let reg = /\/|index.html/g
	return (path.replace(reg, '')) === (href.replace(reg, ''))
}

function tabActive() {
	let $tabs = document.querySelectorAll('.js-header-menu li a')
	let path = window.location.pathname

	for (var i = 0, len = $tabs.length; i < len; i++) {
		let $tab = $tabs[i]
		if (isPathMatch(path, $tab.getAttribute('href'))) {
			addClass($tab, 'active')
		}
	}
}

function getElementLeft(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while (current !== null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}
function getElementTop(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while (current !== null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}

function scrollStop($dom, top, limit, zIndex, diff) {
	let nowLeft = getElementLeft($dom)
	let nowTop = getElementTop($dom) - top

	if (nowTop - limit <= diff) {
		let $newDom = $dom.$newDom
		if (!$newDom) {
			$newDom = $dom.cloneNode(true)
			after($dom, $newDom)
			$dom.$newDom = $newDom
			$newDom.style.position = 'fixed'
			$newDom.style.top = (limit || nowTop) + 'px'
			$newDom.style.left = nowLeft + 'px'
			$newDom.style.zIndex = zIndex || 2
			$newDom.style.width = '100%'
			$newDom.style.color = '#fff'
		}
		$newDom.style.visibility = 'visible'
		$dom.style.visibility = 'hidden'
	} else {
		$dom.style.visibility = 'visible'
		let $newDom = $dom.$newDom
		if ($newDom) {
			$newDom.style.visibility = 'hidden'
		}
	}
}

function handleScroll() {
	let $overlay = document.querySelector('.js-overlay')
	let $menu = document.querySelector('.js-header-menu')
	scrollStop($overlay, document.body.scrollTop, -63, 2, 0)
	scrollStop($menu, document.body.scrollTop, 1, 3, 0)
}

function bindScroll() {
	document.querySelector('#container').addEventListener('scroll', (e) => {
		handleScroll()
	})

	window.addEventListener('scroll', (e) => {
		handleScroll()
	})
	handleScroll()
}

function init() {
	if (Browser.versions.mobile && window.screen.width < 800) {
		tabActive()
		bindScroll()
	}
}

init();

addLoadEvent(function () {
	Fix.init()
})

module.exports = {
}