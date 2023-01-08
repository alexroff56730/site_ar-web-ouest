class Devis extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            Fname: "",
            siret: "",
            mail: ""
        };
    }

    render() {
        return (
            <div>
                <form method="POST">
                    <div className="champDevis">
                        <label for="Name">Nom:</label>
                        <input type="text" name="Name" onChange={
                                (e) => {
                                    this.setState({name: e.target.value}); 
                                    document.getElementById("test").innerText=e.target.value;
                                }
                            } 
                        />
                    </div>
                    <div className="champDevis">
                        <label for="Fname">Prenom:</label>
                        <input type="text" name="Fname" onChange={
                                (e) => {
                                    this.setState({Fname: e.target.value});
                                    document.getElementById("test").innerHTML=e.target.value;
                                }
                            }
                        />
                    </div>
                    <div className="champDevis">
                        <label for="siret">Siret:</label>
                        <input type="text" name="siret" onChange={
                                (e) => {
                                    this.setState({siret: e.target.value});
                                    document.getElementById("test").innerHTML=e.target.value;
                                }
                            }
                        />
                    </div>
                    <div className="champDevis">
                        <label for="Mail">Mail:</label>
                        <input type="text" name="Mail" onChange={
                                (e) => {
                                    this.setState({mail: e.target.value});
                                    document.getElementById("test").innerHTML=e.target.value;
                                }
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

let domContainer = document.querySelector('#devis');
ReactDOM.render(<Devis />, domContainer);