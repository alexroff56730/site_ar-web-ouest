class ContactForm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="ContactForm">
                <form method="POST" className="WidthContactForm bg-light">
                    <div className="champContactForm">
                        <h2 className="text-dark">Contact</h2>
                    </div>
                    <div className="champContactForm">
                        <label for="Name">Nom:</label>
                        <input className="bg-dark text-light" type="text" name="Name" />
                    </div>
                    <div className="champContactForm">
                        <label for="Fname">Prenom:</label>
                        <input className="bg-dark text-light" type="text" name="Fname" />
                    </div>
                    <div className="champContactForm">
                        <label for="subject">Sujet de votre demande:</label>
                        <input className="bg-dark text-light" type="text" name="subject" />
                    </div>
                    <div className="champContactForm">
                        <label for="Mail">Mail:</label>
                        <input className="bg-dark text-light" type="email" name="Mail" />
                    </div>
                    <div className="champContactForm">
                        <label for="MSG">Message:</label>
                        <textarea className="bg-dark text-light" name="MSG"></textarea>
                    </div>
                    <div>
                        <input type="reset" className="btn btn-outline-danger" value="ANNULER" />
                        <input type="submit" name="sub" className="btn btn-outline-success contactBtn" value="ENVOYER" />
                    </div>
                </form>
            </div>
        );
    }
}

let domContainer3 = document.querySelector('#ContactForm');
ReactDOM.render(<ContactForm />, domContainer3);