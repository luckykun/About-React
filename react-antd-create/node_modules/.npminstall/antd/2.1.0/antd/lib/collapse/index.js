'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = exports.CollapsePanel = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _rcCollapse = require('rc-collapse');

var _rcCollapse2 = _interopRequireDefault(_rcCollapse);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CollapsePanel = exports.CollapsePanel = function (_React$Component) {
    (0, _inherits3["default"])(CollapsePanel, _React$Component);

    function CollapsePanel() {
        (0, _classCallCheck3["default"])(this, CollapsePanel);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    return CollapsePanel;
}(_react2["default"].Component);

var Collapse = function (_React$Component2) {
    (0, _inherits3["default"])(Collapse, _React$Component2);

    function Collapse() {
        (0, _classCallCheck3["default"])(this, Collapse);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component2.apply(this, arguments));
    }

    Collapse.prototype.render = function render() {
        return _react2["default"].createElement(_rcCollapse2["default"], this.props);
    };

    return Collapse;
}(_react2["default"].Component);

exports["default"] = Collapse;

Collapse.Panel = _rcCollapse2["default"].Panel;
Collapse.defaultProps = {
    prefixCls: 'ant-collapse'
};