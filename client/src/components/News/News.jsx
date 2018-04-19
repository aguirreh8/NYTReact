import React, {Component} from "react";
import API from "../../utils/API";

class News extends Component {

	state = {
		articles: [],
		topic: "",
		startYear: "",
		endYear: "",
	};

	componentDidMount() {
		const searchTerms = this.props.match.params.searchTerm.split("+");
		const topic = searchTerms[0], 
			startYear = searchTerms[1], 
			endYear = searchTerms[2];
		
		this.setState({ topic, startYear, endYear});
		this.getArticles(topic, startYear, endYear);
	}

	getArticles(topic, startYear, endYear) {
		API.getArticles(topic, startYear, endYear)
		.then(res => {
			this.setState({ articles: res.data.response.docs })
			console.log(this.state.articles);
		})
	}

	saveArticle(headline, link) {
		console.log("success!")
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					{this.state.articles.map((article, i) => {
						return (
							<li className="list-group-item" key={i}>
								<a href={article.web_url}>
									<span className="text-primary">{article.headline.main}</span>
								</a>
								<button style={{ position:"absolute", right:"5%", top:"10%" }} 
									className="btn btn-primary"
									onClick={() => this.saveArticle(article.headline.main, article.web_url)}> 
									 Save
								</button>
							</li>
						)
					})}
					
				</ul>
			</div>
		)
	}
}

export default News;