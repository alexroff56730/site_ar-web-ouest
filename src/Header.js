class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const closeNav = () => {
            document.getElementById("mySidenav").classList.remove("active");
        }

        const openNav = () => {
            document.getElementById("mySidenav").classList.add("active");
        }

        return(
                <nav className="menuResp">
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                        <a href="index.php">ACCUEIL</a>
                        <a href="devis.php">DEVIS</a>
                        <a href="contact.php">CONTACT</a>
                    </div>
                    <span className="BtnTopMenu" onClick={openNav}>&#9776;</span>
                </nav>
        )
    }
}

let domContainer5 = document.querySelector('#headerMenu');
ReactDOM.render(<Header />, domContainer5);