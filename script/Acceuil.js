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

            document.addEventListener('DOMContentLoaded', function () {
                document.getElementById("InfoBox").classList.add("active");
            });

            return React.createElement(
                "div",
                { className: "acceuil" },
                React.createElement(
                    "div",
                    { className: "InfoBox", id: "InfoBox" },
                    "Le site est en maintenance.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    "Si vous avez besoin de renseignements, veuillez me joindre \xE0 l'adresse mail : ",
                    React.createElement(
                        "a",
                        { href: "mailto:alexandreroffiaen@gmail.com", className: "btn btn-outline-primary" },
                        "alexandreroffiaen@gmail.com"
                    ),
                    React.createElement("br", null),
                    "ou par t\xE9l\xE9phone : ",
                    React.createElement(
                        "a",
                        { href: "tel:+33766819382", className: "btn btn-outline-danger" },
                        "cliquez ici"
                    ),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "span",
                        { className: "maj" },
                        "merci pour votre compr\xE9hension."
                    )
                )
            );
        }
    }]);

    return Acceuil;
}(React.Component);

var domContainer4 = document.querySelector('#Index');
ReactDOM.render(React.createElement(Acceuil, null), domContainer4);