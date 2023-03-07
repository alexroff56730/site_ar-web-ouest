class Acceuil extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById("InfoBox").classList.add("active");
        })

        return (
            <div className="acceuil">
                <div className="InfoBox" id="InfoBox">
                    Le site est en maintenance si vous avez besoin de renseignement veillez me joindre à l'adresse mail : <a href="mailto:alexandreroffiaen@gmail.com">alexandreroffiaen@gmail.com</a>
                    <br/>
                    Ou par téléphone : <a href="tel:+33766819382">cliquez ici pour appeler</a>
                </div>
            </div>
        )
    }
    
}

let domContainer4 = document.querySelector('#Index');
ReactDOM.render(<Acceuil />, domContainer4);