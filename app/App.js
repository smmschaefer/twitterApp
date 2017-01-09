import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GetTweet from './components/GetTweet'


class Main extends Component {
	render() {
		return(
			<div>
				Follow the commander-in-chief through his TWEETS <br />
				<GetTweet />
			</div>
		)
	}
}


ReactDOM.render(<Main />, document.getElementById('app'));



