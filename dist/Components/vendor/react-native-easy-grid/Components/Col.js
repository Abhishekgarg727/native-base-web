'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNativeWebExtended = require('react-native-web-extended');

var _computeProps = require('../Utils/computeProps');

var _computeProps2 = _interopRequireDefault(_computeProps);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColunmNB = function (_Component) {
    _inherits(ColunmNB, _Component);

    function ColunmNB() {
        _classCallCheck(this, ColunmNB);

        return _possibleConstructorReturn(this, (ColunmNB.__proto__ || Object.getPrototypeOf(ColunmNB)).apply(this, arguments));
    }

    _createClass(ColunmNB, [{
        key: 'prepareRootProps',
        value: function prepareRootProps() {

            var type = {
                flexDirection: 'column',
                flex: this.props.size ? this.props.size : this.props.style && this.props.style.width ? 0 : 1
            };

            var defaultProps = {
                style: type
            };
            return (0, _computeProps2.default)(this.props, defaultProps);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNativeWebExtended.View,
                this.prepareRootProps(),
                this.props.children
            );
        }
    }]);

    return ColunmNB;
}(_react.Component);

exports.default = ColunmNB;