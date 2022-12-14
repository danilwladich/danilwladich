import { useEffect, useState } from 'react';

export function useBurger() {
	const [active, setActive] = useState(false)
	useEffect(() => {


		const body = document.querySelector('body');
		const menu = document.querySelector('.header__menu');
		const burger = document.querySelector('.header__burger');


		document.addEventListener('click', function (event) {
			if (event.target != null) {
				if ((event.target as HTMLElement).closest('.header__menu div') || (event.target as HTMLElement).closest('.header__link')) {
					setActive(false)
				}
			}
		});
		if (active && burger != null && menu != null && body != null) {
			burger.classList.add('active');
			menu.classList.add('active');
			body.classList.add('lock');
		}
		if (!active && burger != null && menu != null && body != null) {
			burger.classList.remove('active');
			menu.classList.remove('active');
			body.classList.remove('lock');
		}


	}, [active])
	return {setActive}
}