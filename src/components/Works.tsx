import React from "react";

export function Works() {
	return (
		<>
			<section className="works">
				<div className="container">
					<h2 className="works__title animated-item">My works</h2>
					<div className="works__row">
						<a
							href="http://46.41.137.197/"
							target="_blank"
							rel="noreferrer"
							className="works__item"
						>
							<div className="works__name animated-item">Social network</div>
							<div className="works__image animated-item"></div>
						</a>
						<a
							href="https://danilwladich.github.io/candles/"
							target="_blank"
							rel="noreferrer"
							className="works__item"
						>
							<div className="works__name animated-item">Candle shop</div>
							<div className="works__image animated-item">
								<img src="img/candles.jpg" alt="candles" />
							</div>
						</a>
						<a
							href="https://danilwladich.github.io/travel/"
							target="_blank"
							rel="noreferrer"
							className="works__item"
						>
							<div className="works__name animated-item">Travel blog</div>
							<div className="works__image animated-item">
								<img src="img/travel.jpg" alt="travel" />
							</div>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
