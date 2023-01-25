var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "menuDesk" },
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { "class": "btn btn-outline-dark btn-perso", href: "index.php" },
                                "ACCUEIL"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { "class": "btn btn-outline-dark btn-perso", href: "devis.php" },
                                "DEVIS"
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { "class": "btn btn-outline-dark btn-perso", href: "contact.php" },
                                "CONTACT"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "menuResp" },
                    React.createElement(
                        "div",
                        { id: "mySidenav", className: "sidenav" },
                        React.createElement(
                            "a",
                            { href: "javascript:void(0)", className: "closebtn", onClick: closeNav = function closeNav() {
                                    document.getElementById("mySidenav").style.width = "0";
                                } },
                            "\xD7"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "About"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Services"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Clients"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Contact"
                        )
                    ),
                    React.createElement(
                        "span",
                        { style: { fontSize: "30px", cursor: "pointer" }, onClick: openNav = function openNav() {
                                document.getElementById("mySidenav").style.width = "250px";
                            } },
                        "\u2630"
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var domContainer5 = document.querySelector('#headerMenu');
ReactDOM.render(React.createElement(Header, null), domContainer5);