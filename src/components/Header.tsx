import React, { useRef } from 'react';
import { useBurger } from '../hooks/useBurger';
import { useHeaderAnimations } from '../hooks/useHeaderAnimations';

export function Header() {
	const headerRef = useRef<HTMLElement>(null)
	const fullScreenRef = useRef<HTMLImageElement>(null)
	const aboutRef = useRef<HTMLButtonElement>(null)
	const skillsRef = useRef<HTMLButtonElement>(null)
	const worksRef = useRef<HTMLButtonElement>(null)
	const hobbyRef = useRef<HTMLButtonElement>(null)


	const { ScrollTo } = useHeaderAnimations(headerRef, fullScreenRef, aboutRef, skillsRef, worksRef, hobbyRef)
	useBurger()


	return (
		<>
			<div className="header__full-screen"><img ref={fullScreenRef} src="img/main-page.jpg" alt="full-screen" /></div>
			<div className="header__bg"></div>
			<header ref={headerRef} className="header">
				<div className="container">
					<nav className="header__menu">
						<ul className="header__list">
							<li className='animated-item'><button ref={aboutRef} onClick={() => { ScrollTo('.about') }} className="header__link"><span>A</span>bout me</button></li>
							<li className='animated-item'><button ref={skillsRef} onClick={() => { ScrollTo('.skills') }} className="header__link"><span>S</span>kills</button></li>
							<li className='animated-item'><button ref={worksRef} onClick={() => { ScrollTo('.works') }} className="header__link"><span>M</span>y works</button></li>
							<li className='animated-item'><button ref={hobbyRef} onClick={() => { ScrollTo('.hobby') }} className="header__link"><span>H</span>obby</button></li>
						</ul>
						<div></div>
					</nav>
					<nav className="header__logo">
						<button onClick={() => { ScrollTo('.header__full-screen') }}>
							<h1><span>D</span>anil<span>W</span>ladich</h1>
						</button>
					</nav>
					<div className="header__burger">
						<span></span>
					</div>
				</div>
			</header>
		</>
	)
}