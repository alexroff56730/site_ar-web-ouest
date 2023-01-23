class TempDevis extends React.Component {
    constructor(props) {
        super(props);
    }  
    
    render() {
        return (
            <div className="WidthTemp">
                <div className="HeaderTempDevis bg-dark">
                    <div>
                        <p className="text-light">AR-WEB-OUEST</p>
                        <p className="text-light">Alexandre ROFFIAEN</p>
                        <p className="text-light">892 736 935 000 24</p>
                        <p className="text-light">alexandreroffiaen@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-light" id="name"></p>
                        <p className="text-light" id="Fname"></p>
                        <p className="text-light" id="siret"></p>
                        <p className="text-light" id="mail"></p>
                    </div>
                </div>
                <div className="WidthTemp">
                    <div className="Product bg-dark" id="Product">
                        <p className="text-light" id="Techno"></p>
                        <p className="text-light" id="Techprice"></p>
                    </div>
                </div>
            </div>
        );
    }
}

let domContainer2 = document.querySelector('#temp');
ReactDOM.render(<TempDevis />, domContainer2);