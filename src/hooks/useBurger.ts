import { useEffect } from 'react';

export function useBurger() {
	useEffect(() => {


		const body = document.querySelector('body');
		const menu = document.querySelector('.header__menu');
		const burger = document.querySelector('.header__burger');
		function burgerMenuToggle() {
			if (burger != null && menu != null && body != null) {
				burger.classList.toggle('active');
				menu.classList.toggle('active');
				body.classList.toggle('lock');
			}
		};
		function burgerMenuRemove() {
			if (burger != null && menu != null && body != null) {
				burger.classList.remove('active');
				menu.classList.remove('active');
				body.classList.remove('lock');
			}
		};

		document.addEventListener('click', function (event) {
			if (event.target != null) {
				if ((event.target as HTMLElement).closest('.header__burger')) {
					burgerMenuToggle()
				} else
					if ((event.target as HTMLElement).closest('.header__menu div') || (event.target as HTMLElement).closest('.header__link')) {
						burgerMenuRemove();
					}
			}
		});


	}, [])
}