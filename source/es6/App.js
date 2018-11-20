import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './component/Header'
import Post from './component/Post'
import Footer from './component/Footer'
import Axios from 'axios'
import 'babel-polyfill';

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			post : "",
			avatar : "",
			nickname : ""
		}
	}

	componentWillMount(){
		let data = this.instagramPhotos()
	}

	async instagramPhotos () {
		// It will contain our photos' links
		const res = []

		try {
			const userInfoSource = await Axios.get('https://www.instagram.com/danilo_polani/')

			// userInfoSource.data contains the HTML from Axios
			const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

			const userInfo = JSON.parse(jsonObject)
			// Retrieve only the first 10 results
			let avatar = userInfo.entry_data.ProfilePage[0].graphql.user.profile_pic_url
			let nickname = userInfo.entry_data.ProfilePage[0].graphql.user.full_name
			console.log(userInfo.entry_data.ProfilePage[0].graphql.user)
			const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 10)
			for (let media of mediaArray) {
				const node = media.node
				// console.log(media)
				// Process only if is an image
				if ((node.__typename && node.__typename !== 'GraphImage')) {
					continue
				}


				let caption = node.edge_media_to_caption.edges[0].node.text
				let image = node.thumbnail_src
				// let nickname = node.owner.username
				let group = [caption,image]
				// Push the thumbnail src in the array
				res.push(group)
			}
			this.setState({
				post : res,
				avatar : avatar,
				nickname : nickname
			})
		} catch (e) {
			console.error('Unable to retrieve photos. Reason: ' + e.toString())
		}
		// console.log(avatar);
		// console.log(res)
		// let post;
		// for (let i in res) {
		// 	// console.log(res[i][0])
		// 	post.push(<Post nickname={nickname} avatar={image} caption={res[i][0]} image={res[i][1]}></Post>)
		// }

		return res
	}

	render(){
		let posts = this.state.post
		let {nickname, avatar} = this.state
		return(
			<React.Fragment>
				<Header></Header>
				<div id="article-frame">
					{posts !== ''
					? posts.map((post,index) => <Post nickname={nickname} avatar={avatar} image={post[1]} caption={post[0]} key={index}/>)
					: ''
					}
				</div>
				<Footer></Footer>
			</React.Fragment>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);