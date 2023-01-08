'use strict';

class Devis extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: ""
        };
    }

    render() {
        return (
            <div>
                <label>Name:</label>
                <input type="text" onChange={(e) => {this.setState({name: e.target.value})}} />
            </div>
        );
    }
}

let domContainer = document.querySelector('#devis');
ReactDOM.render(<Devis />, domContainer);