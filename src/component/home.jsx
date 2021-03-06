import React, { Component } from 'react'
import HKUPA from '../logos/HKUPA.png'
import SFOC from '../logos/SFOC.png'
import LCSD from '../logos/LCSD.png'
import Yikun from '../logos/Yikun.png'
import CJ from '../logos/CJ.png'
import TipTop from '../logos/TipTop.png'
import title from '../logos/title.png'
import Grove from '../logos/grove.png'
import Weuse from '../logos/weuse.png'

const sponsors = [
	{ name: 'Yikun img-fluid', src: Yikun, alt: 'Yikun' },
	{ name: 'Grove img-fluid', src: Grove, alt: 'Grove' },
	{ name: 'CJ img-fluid', src: CJ, alt: 'CJ' },
	{ name: 'Weuse img-fluid', src: Weuse, alt: 'Weuse' },
	{ name: 'TipTop img-fluid', src: TipTop, alt: 'TipTop' },
]
class Home extends Component {
	render() {
		return (
			<div>
				<div className="container title">
					<div className="row">
						<div className="col">
							<img className="title img-fluid" src={title} alt="title" />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h5>Co-Organized By:</h5>
							<img className="logo1 img-fluid" src={HKUPA} alt="HKUPA" />
						</div>
						<div className="col">
							<h5>Organized By:</h5>
							<img className="logo1 img-fluid" src={SFOC} alt="SFOC" />
						</div>
						<div className="col">
							<h5>Subvented By:</h5>
							<img className="logo1 img-fluid" src={LCSD} alt="LCSD" />
						</div>
					</div>
					<div className="row">
						<div className="col home">
							<h5>Thank you to our sponsors!</h5>
							{sponsors.map(sponsor => (
								<img
									className={sponsor.name}
									src={sponsor.src}
									alt={sponsor.alt}
								/>
							))}
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h5>Follow HKUPA for more info about our future events!</h5>
							<a href="https://www.facebook.com/hkupa/">
								<i class="fab fa-facebook-square fa-2x icon" />
							</a>
							<a href="https://www.instagram.com/hkupa/?hl=en">
								<i class="fab fa-instagram fa-2x icon" />
							</a>
							<a href="http://www.hkupa.com/">
								<i class="fas fa-home fa-2x icon" />
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
