import React, {Component} from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<nav className="nav">
					<div className="nav-menus">
						<ul>
							<li><a href="">Instagramについて</a></li>
							<li><a href="">サポート</a></li>
							<li><a href="">プレス</a></li>
							<li><a href="">API</a></li>
							<li><a href="">求人</a></li>
							<li><a href="">プライバシー</a></li>
							<li><a href="">利用規約</a></li>
						</ul>
					</div>
					<div className="nav-copy">
						© 2018 ME
					</div>
				</nav>
			</footer>
		)
	}
}