'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Devis = function (_React$Component) {
    _inherits(Devis, _React$Component);

    function Devis(props) {
        _classCallCheck(this, Devis);

        var _this = _possibleConstructorReturn(this, (Devis.__proto__ || Object.getPrototypeOf(Devis)).call(this, props));

        _this.state = {
            name: ""
        };
        return _this;
    }

    _createClass(Devis, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "label",
                    null,
                    "Name:"
                ),
                React.createElement("input", { type: "text", onChange: function onChange(e) {
                        _this2.setState({ name: e.target.value });
                    } })
            );
        }
    }]);

    return Devis;
}(React.Component);

var domContainer = document.querySelector('#devis');
ReactDOM.render(React.createElement(Devis, null), domContainer);