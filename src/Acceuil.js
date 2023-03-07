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
                    <p>
                        Le site est en maintenance.<br/><br/>Si vous avez besoin de renseignements, veuillez me joindre :
                        <br/><br/>par mail <a href="mailto:alexandreroffiaen@gmail.com" className="btn btn-outline-primary mailinfo">alexandreroffiaen@gmail.com</a>
                        ou par téléphone <a href="tel:+33766819382" className="btn btn-outline-danger telinfo">cliquez ici</a><br/><br/>
                        <span className="maj">merci pour votre compréhension.</span>
                    </p>
                </div>
            </div>
        )
    }
    
}

let domContainer4 = document.querySelector('#Index');
ReactDOM.render(<Acceuil />, domContainer4);