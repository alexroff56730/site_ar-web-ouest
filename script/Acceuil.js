var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Acceuil = function (_React$Component) {
    _inherits(Acceuil, _React$Component);

    function Acceuil(props) {
        _classCallCheck(this, Acceuil);

        return _possibleConstructorReturn(this, (Acceuil.__proto__ || Object.getPrototypeOf(Acceuil)).call(this, props));
    }

    _createClass(Acceuil, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "acceuil" },
                React.createElement(
                    "div",
                    { className: "parallax", style: { backgroundImage: "url('img/code-exemple.jpg')", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                    React.createElement(
                        "div",
                        { style: { backgroundColor: "rgba(2, 0, 0, 0.5)", width: "100%", height: "700px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } },
                        React.createElement(
                            "h2",
                            { className: "text-light" },
                            "Un service rapide"
                        ),
                        React.createElement(
                            "ul",
                            { className: "listIcon" },
                            React.createElement(
                                "li",
                                { className: "text-light", style: { width: "15%", display: "flex", flexDirection: "column", alignItems: "center" } },
                                React.createElement("img", { src: "img/carnet.gif", style: { width: "100%" }, alt: "" }),
                                React.createElement(
                                    "p",
                                    null,
                                    "R\xE9daction du cahier des charges"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "text-light", style: { width: "15%", display: "flex", flexDirection: "column", alignItems: "center" } },
                                React.createElement("img", { src: "img/la-physique.gif", style: { width: "100%" }, alt: "" }),
                                React.createElement(
                                    "p",
                                    null,
                                    "D\xE9veloppement du projet"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "text-light", style: { width: "15%", display: "flex", flexDirection: "column", alignItems: "center" } },
                                React.createElement("img", { src: "img/navigateur.gif", style: { width: "100%" }, alt: "" }),
                                React.createElement(
                                    "p",
                                    null,
                                    "Mise en service"
                                )
                            )
                        ),
                        React.createElement(
                            "a",
                            { href: "devis.php", className: "btn btn-outline-light" },
                            "Demander un devis"
                        )
                    )
                )
            );
        }
    }]);

    return Acceuil;
}(React.Component);

var domContainer4 = document.querySelector('#Index');
ReactDOM.render(React.createElement(Acceuil, null), domContainer4);