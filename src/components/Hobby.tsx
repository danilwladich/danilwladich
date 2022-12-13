import React from 'react';

export function Hobby() {
	return (
		<>
			<section className="hobby">
				<div className="container">
					<div className="hobby__row">
						<div className="hobby__block">
							<h2 className="hobby__title animated-item">Hobby</h2>
							<div className="hobby__text animated-item">
								Sports play a big role in my life. I'm inspired by streetlifting and it keeps me in a good mood. Also for extreme I am fond of fixed gear. I can't imagine my life without it
							</div>
						</div>
						<div className="hobby__image animated-item">
							<img src="img/hobby.jpg" alt="hobby" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}