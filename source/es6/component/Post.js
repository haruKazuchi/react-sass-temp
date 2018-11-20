import React, {Component} from 'react'

export default class Post extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;
		return(
			<article className="post" ref="post">
				<div className="container">
					<div className="post-header">
						<div className="post-user">
							<div className="post-user-avatar">
								<img src={avatar} alt={nickname} />
							</div>
							<div className="post-user-nickname">
								<span>{nickname}</span>
							</div>
						</div>
					</div>
					<div className="post-image">
						<div className="post-image-bg">
							<img alt="Icon Living" src={image} />
						</div>
					</div>
					<div className="post-caption">
						{caption}
					</div>
				</div>
			</article>
		)
	}
}