import React, {Component} from "react";
import API from "../../utils/API";

class SavedArticles extends Component {
	state = {
		articles: []
	}

	componentDidMount() {
		API.getSavedArticles()
		.then(res => {
			this.setState({ articles: res.data });
		})
	}

	removeArticle(id) {
		API.removeArticle(id)
		.then(res => {
			API.getSavedArticles()
				.then(res => {
				this.setState({ articles: res.data });
			})		
		})
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					{this.state.articles.map((article, i) => {
						return (
							<li className="list-group-item" key={i}>
								<a href={article.link} target="_blank">
									<span className="text-primary">{article.title}</span>
								</a>
								<button style={{ position:"absolute", right:"5%", top:"10%" }} 
									className="btn btn-danger"
									onClick={() => this.removeArticle(article._id)}
									> 
									 Remove
								</button>
							</li>
						)
					})}
					
				</ul>
			</div>
		)
	}

}

export default SavedArticles;