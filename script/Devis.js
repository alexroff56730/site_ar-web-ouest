const e = React.createElement;


class Devis extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: ""
        }
    }

    render() {
        return e (
            "input",
            {type: "text"}
        )
    }
}


const domContainer = document.querySelector('#devis');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Devis));