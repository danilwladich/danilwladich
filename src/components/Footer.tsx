import React from 'react';

export function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer__row">
						<div className="footer__copy">
							<p>Daniel Władyczewski</p>
							<p>frosbutte1@gmail.com</p>
							<p>Warsaw 2022</p>
						</div>
						<nav className="footer__social">
							<a href="https://www.instagram.com/danil_wladich/" target='_blank' rel="noreferrer" ><img src="img/icons/instagram.svg" alt="instagram" /></a>
							<a href="https://www.facebook.com/danilwladich/" target='_blank' rel="noreferrer" ><img src="img/icons/facebook.svg" alt="facebook" /></a>
							<a href="https://github.com/danilwladich" target='_blank' rel="noreferrer" ><img src="img/icons/github.svg" alt="github" /></a>
						</nav>
					</div>
				</div>
			</footer>
		</>
	)
}