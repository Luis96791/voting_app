
class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}
	
	componentDidMount() {
		this.setState({ products: Seed.products });
	}
}