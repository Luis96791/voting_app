
class Product extends React.Component {
	handleUpVote = () => (
		this.props.onVote(this.props.id)
	);
}

class ProductList extends React.Component {
	state = {
		products: [],
	};

	handleProductUpVote = (productId) => {
		const nextProducts = this.state.products.map((product) => {
		if (product.id === productId) {
			return Object.assign({}, product, {
				votes: product.votes + 1,
			});
		} else {
			return product;
		}
	});
	
	this.setState({
		products: nextProducts,
	});
}