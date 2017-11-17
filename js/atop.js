import React,{Component} from 'react'

export default class Top extends Component {
	constructor (){
		super()
	}
	componentDidMount() {

	}

	render (){
		return(
			<div className="Atophead">
				<img className="Atopheadimg" src="img/logo2.png" />
				<a href="/login" className="Atopexit">登录</a>
			</div>
		)
	}
}