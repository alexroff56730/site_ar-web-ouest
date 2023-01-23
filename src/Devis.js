class Devis extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            Fname: "",
            siret: "",
            mail: "",
            Techno: ""
        };
    }

    render() {
        return (
            <div>
                <form method="POST">
                    <div className="champDevis">
                        <label for="Name" className="text-light">Nom:</label>
                        <input type="text" name="Name" onChange={
                                (e) => {
                                    this.setState({name: e.target.value}); 
                                    document.getElementById("name").innerText=e.target.value;
                                }
                            } 
                        />
                    </div>
                    <div className="champDevis">
                        <label for="Fname" className="text-light">Prenom:</label>
                        <input type="text" name="Fname" onChange={
                                (e) => {
                                    this.setState({Fname: e.target.value});
                                    document.getElementById("Fname").innerHTML=e.target.value;
                                }
                            }
                        />
                    </div>
                    <div className="champDevis">
                        <label for="siret" className="text-light">Siret:</label>
                        <input type="text" name="siret" onChange={
                                (e) => {
                                    this.setState({siret: e.target.value});
                                    document.getElementById("siret").innerHTML=e.target.value;
                                }
                            }
                        />
                    </div>
                    <div className="champDevis">
                        <label for="Mail" className="text-light">Mail:</label>
                        <input type="text" name="Mail" onChange={
                                (e) => {
                                    this.setState({mail: e.target.value});
                                    document.getElementById("mail").innerHTML=e.target.value;
                                }
                            }
                        />
                    </div>
                    <div className="champDevis">
                        <label for="Techno" className="text-light">Technologie</label>
                        <select name="Techno" className="btn btn-light" onChange={
                            (e) => {
                                this.setState({Techno: e.target.value});
                                if(e.target.value == "Wordpress") {
                                    document.getElementById("Techno").innerHTML=e.target.value;
                                    document.getElementById("Techprice").innerHTML="800 €";
                                    document.getElementById("Product").style.visibility="visible";
                                } else if(e.target.value == "Prestashop") {
                                    document.getElementById("Techno").innerHTML=e.target.value;
                                    document.getElementById("Techprice").innerHTML="1200 €";
                                    document.getElementById("Product").style.visibility="visible";
                                } else if(e.target.value == "Choisir une Technologie") {
                                    document.getElementById("Techno").innerHTML="Veuillez remplir le champ technologie";
                                    document.getElementById("Techprice").innerHTML="0 €";
                                    document.getElementById("Product").style.visibility="visible";
                                } else {
                                    document.getElementById("Product").style.visibility="hidden";
                                }
                            }
                        }>
                            <option value="Choisir une Technologie">Choisir une Technologie</option>
                            <option value="Wordpress">Wordpress</option>
                            <option value="Prestashop">Prestashop</option>
                        </select>
                    </div>
                    <div className="BoutonSection">
                        <input type="reset" className="btn btn-outline-danger" value="ANNULER" />
                        <input type="submit" name="sub" className="btn btn-outline-success" value="ENVOYER" />
                    </div>
                </form>
            </div>
        );
    }
}

let domContainer = document.querySelector('#devis');
ReactDOM.render(<Devis />, domContainer);