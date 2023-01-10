class TempDevis extends React.Component {
    constructor(props) {
        super(props);
    }  
    
    render() {
        return (
            <div className="WidthTemp">
                <div className="HeaderTempDevis bg-primary">
                    <div>
                        <p>AR-WEB-OUEST</p>
                        <p>Alexandre ROFFIAEN</p>
                        <p>892 736 935 000 24</p>
                        <p>alexandreroffiaen@gmail.com</p>
                    </div>
                    <div>
                        <p id="name"></p>
                        <p id="Fname"></p>
                        <p id="siret"></p>
                        <p id="mail"></p>
                    </div>
                </div>
            </div>
        );
    }
}

let domContainer2 = document.querySelector('#temp');
ReactDOM.render(<TempDevis />, domContainer2);