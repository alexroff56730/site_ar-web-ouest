class Acceuil extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="acceuil">
                <div className="parallax" style={{backgroundImage: "url('img/code-exemple.jpg')", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{backgroundColor: "rgba(2, 0, 0, 0.5)", width: "100%", height: "700px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <h2 className="text-light">Un service rapide</h2>
                        <ul className="listIcon">
                            <li className="text-light" style={{width: "15%", display: "flex", flexDirection: "column", alignItems: "center"}}><img src="img/carnet.gif" style={{width: "100%"}} alt="" /><p>Rédaction du cahier des charges</p></li>
                            <li className="text-light" style={{width: "15%", display: "flex", flexDirection: "column", alignItems: "center"}}><img src="img/la-physique.gif" style={{width: "100%"}} alt="" /><p>Développement du projet</p></li>
                            <li className="text-light" style={{width: "15%", display: "flex", flexDirection: "column", alignItems: "center"}}><img src="img/navigateur.gif" style={{width: "100%"}} alt="" /><p>Mise en service</p></li>
                        </ul>
                        <a href="devis.php" className="btn btn-outline-light">Demander un devis</a>
                    </div>
                </div>
            </div>
        )
    }
    
}

let domContainer4 = document.querySelector('#Index');
ReactDOM.render(<Acceuil />, domContainer4);