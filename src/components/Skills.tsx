import { useSkills } from './../hooks/useSkills';

export function Skills() {
	useSkills()
	return (
		<>
			<section className="skills">
				<div className="container">
					<h2 className="skills__title animated-item">Skills</h2>
					<div className="skills__blocks">
						<div className="skills__block animated-item">
							<div className="skills__name">HTML</div>
							<div className="skills__level animated-item"><div></div><span>4.5</span></div>
						</div>
						<div className="skills__block animated-item">
							<div className="skills__name">CSS / SCSS</div>
							<div className="skills__level animated-item"><div></div><span>4</span></div>
						</div>
						<div className="skills__block animated-item">
							<div className="skills__name">JavaScript</div>
							<div className="skills__level animated-item"><div></div><span>4</span></div>
						</div>
						<div className="skills__block animated-item">
							<div className="skills__name">TypeScript</div>
							<div className="skills__level animated-item"><div></div><span>3</span></div>
						</div>
						<div className="skills__block animated-item">
							<div className="skills__name">React</div>
							<div className="skills__level animated-item"><div></div><span>3</span></div>
						</div>
						<div className="skills__block animated-item">
							<div className="skills__name">Python</div>
							<div className="skills__level animated-item"><div></div><span>4</span></div>
						</div>
						<div className="skills__block animated-item">
							<div className="skills__name">SQL</div>
							<div className="skills__level animated-item"><div></div><span>3.5</span></div>
						</div>
						<div className="skills__block animated-item">
							<div className="skills__name">Git</div>
							<div className="skills__level animated-item"><div></div><span>3</span></div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}