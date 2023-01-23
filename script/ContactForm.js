var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_React$Component) {
    _inherits(ContactForm, _React$Component);

    function ContactForm(props) {
        _classCallCheck(this, ContactForm);

        return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call(this, props));
    }

    _createClass(ContactForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "ContactForm" },
                React.createElement(
                    "form",
                    { method: "POST", className: "WidthContactForm bg-light" },
                    React.createElement(
                        "div",
                        { className: "champContactForm" },
                        React.createElement(
                            "h2",
                            { className: "text-dark" },
                            "Contact"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "champContactForm" },
                        React.createElement(
                            "label",
                            { "for": "Name" },
                            "Nom:"
                        ),
                        React.createElement("input", { className: "bg-dark text-light", type: "text", name: "Name" })
                    ),
                    React.createElement(
                        "div",
                        { className: "champContactForm" },
                        React.createElement(
                            "label",
                            { "for": "Fname" },
                            "Prenom:"
                        ),
                        React.createElement("input", { className: "bg-dark text-light", type: "text", name: "Fname" })
                    ),
                    React.createElement(
                        "div",
                        { className: "champContactForm" },
                        React.createElement(
                            "label",
                            { "for": "subject" },
                            "Sujet de votre demande:"
                        ),
                        React.createElement("input", { className: "bg-dark text-light", type: "text", name: "subject" })
                    ),
                    React.createElement(
                        "div",
                        { className: "champContactForm" },
                        React.createElement(
                            "label",
                            { "for": "Mail" },
                            "Mail:"
                        ),
                        React.createElement("input", { className: "bg-dark text-light", type: "email", name: "Mail" })
                    ),
                    React.createElement(
                        "div",
                        { className: "champContactForm" },
                        React.createElement(
                            "label",
                            { "for": "MSG" },
                            "Message:"
                        ),
                        React.createElement("textarea", { className: "bg-dark text-light", name: "MSG" })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement("input", { type: "reset", className: "btn btn-outline-danger contactBtn", value: "ANNULER" }),
                        React.createElement("input", { type: "submit", name: "sub", className: "btn btn-outline-success contactBtn", value: "ENVOYER" })
                    )
                )
            );
        }
    }]);

    return ContactForm;
}(React.Component);

var domContainer3 = document.querySelector('#ContactForm');
ReactDOM.render(React.createElement(ContactForm, null), domContainer3);