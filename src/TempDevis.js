class TempDevis extends React.Component {
    constructor(props) {
        super(props);
    }  
    
    render() {
        return <p id="test"></p>
    }
}

let domContainer2 = document.querySelector('#temp');
ReactDOM.render(<TempDevis />, domContainer2);