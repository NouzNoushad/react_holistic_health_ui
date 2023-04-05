import { useState } from "react";

const Latest = () => {

	// create some article data

	const [articles, setArticle] = useState([
		{
			'id': 1,
			'image': '/images/leaf_article_1.webp',
			'content': 'How to use mindfullness in your everyday life',
		},
		{
			'id': 2,
			'image': '/images/leaf_article_2.jpg',
			'content': 'What are the best walking meditations',
		},
		{
			'id': 3,
			'image': '/images/leaf_article_3.jpg',
			'content': 'How to go deep into the mind of hope',
		},
	])

	return ( 
		<div className="hero-latest" id="article">
			<div className="container">
				<h2>Latest Articles</h2>
				<div className="articles">
					{
						articles.map((article) => (
							<div className="articles-card" key={article.id}>
								<img src={article.image} alt="" />
								<h4>{article.content }</h4>
							</div>
						))
					}
				</div>
			</div>
		</div>
	 );
}
 
export default Latest;