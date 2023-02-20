import React from "react";

export function About() {
	return (
		<>
			<section className="about">
				<div className="container">
					<div className="about__row">
						<div className="about__image animated-item">
							<img src="img/me.jpg" alt="me" />
						</div>
						<div className="about__block">
							<h2 className="about__title animated-item">About me</h2>
							<div className="about__text animated-item">
								I'm looking for an internship as a Front-End Developer. I am
								currently studying part-time in Computer technology. I have good
								knowledge in React Redux, TypeScript and I want to start working
								in Front-End Development. I know very well Polish, Russian and
								English at B2 level.
							</div>
							<a
								href="https://www.facebook.com/danilwladich/"
								target="_blank"
								rel="noreferrer"
								className="about__link animated-item"
							>
								contact
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
