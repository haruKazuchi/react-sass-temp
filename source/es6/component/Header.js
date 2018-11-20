import React, {Component} from 'react';

export default class Header extends Component {
	render() {
		return (
			<header id="header">
				<nav className="nav">
					<div className="nav-menus">
						<div className="nav-brand">
							<a className="nav-brand-logo" href="/">
								Instagram
							</a>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}