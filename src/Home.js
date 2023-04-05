import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Latest from "./Latest";
import Subscribe from "./Subscribe";

const Home = () => {
	return ( 
		<div>
			<Header />
			<div className="hero-section">
				<h1>Lombok</h1>
				<h2>Holistic Health</h2>
			</div>
			<Latest />
			<About />
			<Subscribe />
			<Footer/>
		</div>
		
	 );
}
 
export default Home;