class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <nav>
                <div className="menuResp">
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav = () => {
                            document.getElementById("mySidenav").style.width = "0";
                        }}>&times;</a>
                        <a href="index.php">ACCUEIL</a>
                        <a href="devis.php">DEVIS</a>
                        <a href="contact.php">CONTACT</a>
                    </div>
                    <span style={{fontSize: "30px", cursor: "pointer"}} onClick={openNav = () => {
                        document.getElementById("mySidenav").style.width = "250px";
                    }}>&#9776;</span>
                </div>
            </nav>
        )
    }
}

let domContainer5 = document.querySelector('#headerMenu');
ReactDOM.render(<Header />, domContainer5);