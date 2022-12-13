import { useEffect } from 'react';

export function useSkills() {
	useEffect(() => {


		const levels = document.querySelectorAll('.skills__level');
		levels.forEach((e) => {
			if (e.childNodes[1].textContent != null) {
				const level = +e.childNodes[1].textContent;
				const span  = e.childNodes[1] as HTMLElement
				span.style.width = level * 100 / 5 + 10 + '%';
			}
		})



	}, [])
}