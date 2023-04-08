class Acceuil extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById("InfoBox").classList.add("active");
        })

        const closeBox = () => {
            document.getElementById("InfoBox").classList.remove("active");
            document.getElementById("InfoBox").style.display = "none";
        }

        return (
            <div className="acceuil">
                <div className="InfoBox" id="InfoBox">
                    <input type="button" value="X" className="btn btn-danger" onClick={closeBox} />
                    <p>
                        Le site est en maintenance.<br/><br/>Si vous avez besoin de renseignements, veuillez me joindre :
                        <br/><br/>par mail <a href="mailto:alexandreroffiaen@gmail.com" className="btn btn-outline-primary mailinfo">alexandreroffiaen@gmail.com</a>
                        ou par téléphone <a href="tel:+33766819382" className="btn btn-outline-danger telinfo">cliquez ici</a><br/><br/>
                        <span className="maj">merci pour votre compréhension.</span>
                    </p>
                </div>
                <div className="TitleParallax">
                    <article className="TitleAndSlog">
                        <h1 className="text-light">AR-WEB-OUEST Développeur web</h1>
                        <ul>
                            <li className="firstSlog"><span className="text-primary">VOUS CONNAÎTRE POUR</span></li>
                            <li className="secondSlog"><span className="text-danger">VOUS FAIRE CONNAÎTRE…</span></li>
                        </ul>
                    </article>
                </div>
            </div>
        )
    }
    
}

let domContainer4 = document.querySelector('#Index');
ReactDOM.render(<Acceuil />, domContainer4);