import React from 'react';

export function About() {
	return (
		<>
			<section className="about">
				<div className="container">
					<div className="about__row">
						<div className="about__image animated-item"><img src="img/me.jpg" alt="me" /></div>
						<div className="about__block">
							<h2 className="about__title animated-item">
								About me
							</h2>
							<div className="about__text animated-item">
								I am looking for an internship as a Front-end Developer. Currently I am a first year student at the University of Technology
								of Warsaw. At the moment I have knowledge in the field of React Redux, TypeScript and I want to start working in
								in the field of Front-end Web Development. I know very well
								Polish, Russian and English at B2 level.
							</div>
							<a href="https://www.facebook.com/danilwladich/" target='_blank' rel="noreferrer" className="about__link animated-item">contact</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}