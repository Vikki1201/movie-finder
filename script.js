class MovieFinder extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            searchTerm : '',
            result : [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const {searchTerm, result} = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={this.handleSubmit} className="form-inline my-4">
                            <input 
                            type="text"
                            className="form-control mr-sm-2"
                            placeholder="frozen"
                            value={searchTerm}
                            onChange={this.handleChange}
                            />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        {result.map((movie) => {
                            return null;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MovieFinder />);