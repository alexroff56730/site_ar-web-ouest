var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TempDevis = function (_React$Component) {
    _inherits(TempDevis, _React$Component);

    function TempDevis(props) {
        _classCallCheck(this, TempDevis);

        return _possibleConstructorReturn(this, (TempDevis.__proto__ || Object.getPrototypeOf(TempDevis)).call(this, props));
    }

    _createClass(TempDevis, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "WidthTemp" },
                React.createElement(
                    "div",
                    { className: "HeaderTempDevis bg-primary" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "p",
                            null,
                            "AR-WEB-OUEST"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Alexandre ROFFIAEN"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "892 736 935 000 24"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "alexandreroffiaen@gmail.com"
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement("p", { id: "name" }),
                        React.createElement("p", { id: "Fname" }),
                        React.createElement("p", { id: "siret" }),
                        React.createElement("p", { id: "mail" })
                    )
                )
            );
        }
    }]);

    return TempDevis;
}(React.Component);

var domContainer2 = document.querySelector('#temp');
ReactDOM.render(React.createElement(TempDevis, null), domContainer2);