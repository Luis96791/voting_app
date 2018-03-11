
class ProductList extends React.Component {
	render() {
		const products = Seed.products.sort((a, b) => (
			b.votes - a.votes
		));
	}
}