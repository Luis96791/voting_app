class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		products: [],
	};
	this.handleProductUpVote = this.handleProductUpVote.bind(this);

	handleProductUpVote(productId) {
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
}