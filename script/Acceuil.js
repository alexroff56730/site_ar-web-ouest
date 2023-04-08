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

            var closeBox = function closeBox() {
                document.getElementById("InfoBox").classList.remove("active");
                document.getElementById("InfoBox").style.display = "none";
            };

            return React.createElement(
                "div",
                { className: "acceuil" },
                React.createElement(
                    "div",
                    { className: "InfoBox", id: "InfoBox" },
                    React.createElement("input", { type: "button", value: "X", className: "btn btn-danger", onClick: closeBox }),
                    React.createElement(
                        "p",
                        null,
                        "Le site est en maintenance.",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "Si vous avez besoin de renseignements, veuillez me joindre :",
                        React.createElement("br", null),
                        React.createElement("br", null),
                        "par mail ",
                        React.createElement(
                            "a",
                            { href: "mailto:alexandreroffiaen@gmail.com", className: "btn btn-outline-primary mailinfo" },
                            "alexandreroffiaen@gmail.com"
                        ),
                        "ou par t\xE9l\xE9phone ",
                        React.createElement(
                            "a",
                            { href: "tel:+33766819382", className: "btn btn-outline-danger telinfo" },
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
                ),
                React.createElement(
                    "div",
                    { className: "TitleParallax" },
                    React.createElement(
                        "article",
                        { className: "TitleAndSlog" },
                        React.createElement(
                            "h1",
                            { className: "text-light" },
                            "AR-WEB-OUEST D\xE9veloppeur web"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                { className: "firstSlog" },
                                React.createElement(
                                    "span",
                                    { className: "text-primary" },
                                    "VOUS CONNA\xCETRE POUR"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "secondSlog" },
                                React.createElement(
                                    "span",
                                    { className: "text-danger" },
                                    "VOUS FAIRE CONNA\xCETRE\u2026"
                                )
                            )
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