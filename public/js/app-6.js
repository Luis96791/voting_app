
class ProductList extends React.Component {
	handleUpVote() {
		this.props.onVote(this.props.id);
	}
	render() {
		const productComponents = products.map((product) => (
			<Product
				key={'product-' + product.id}
				id={product.id}
				title={product.title}
				description={product.description}
				url={product.url}
				votes={product.votes}
				submitterAvatarUrl={product.submitterAvatarUrl}
				productImageUrl={product.productImageUrl}
				onVote={this.handleProductUpVote}
			/>
		));
	}
}

class Product extends React.Component {
	constructor(props) {
	super(props);
	this.handleUpVote = this.handleUpVote.bind(this);
}