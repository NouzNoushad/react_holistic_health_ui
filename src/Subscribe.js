import { useState } from "react";

const Subscribe = () => {
	const [email, setEmail] = useState('');

	const handleSubscription = (e) => {
		e.preventDefault();
		const emails = { email };

		fetch('http://localhost:8000/subscriptions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(emails)
		}).then(() => {
			console.log('Subscribed Successfully');
			setEmail('');
		})
	}
	return ( 
		<div className="hero-subscribe" id="subscribe">
			<h2>Subscribe</h2>
			<h4>Sign up to our newsletter</h4>
			<form onSubmit={handleSubscription}> 
				<input type="email" placeholder="Enter Email" value={email} onChange={ (e) => setEmail(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	 );
}
 
export default Subscribe;