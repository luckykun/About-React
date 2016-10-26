'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noop = function noop() {};

var Popconfirm = function (_React$Component) {
    (0, _inherits3["default"])(Popconfirm, _React$Component);

    function Popconfirm(props) {
        (0, _classCallCheck3["default"])(this, Popconfirm);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.confirm = function () {
            _this.setVisible(false);
            _this.props.onConfirm.call(_this);
        };
        _this.cancel = function () {
            _this.setVisible(false);
            _this.props.onCancel.call(_this);
        };
        _this.onVisibleChange = function (visible) {
            _this.setVisible(visible);
        };
        _this.state = {
            visible: false
        };
        return _this;
    }

    Popconfirm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({ visible: nextProps.visible });
        }
    };

    Popconfirm.prototype.setVisible = function setVisible(visible) {
        if (!('visible' in this.props)) {
            this.setState({ visible: visible });
        }
        this.props.onVisibleChange(visible);
    };

    Popconfirm.prototype.render = function render() {
        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'title', 'placement']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var title = _splitObject2$.title;
        var placement = _splitObject2$.placement;
        var restProps = _splitObject2[1];
        var _props = this.props;
        var okText = _props.okText;
        var cancelText = _props.cancelText;

        if (this.context.antLocale && this.context.antLocale.Popconfirm) {
            okText = okText || this.context.antLocale.Popconfirm.okText;
            cancelText = cancelText || this.context.antLocale.Popconfirm.cancelText;
        }
        var overlay = _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-inner-content' },
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-message' },
                    _react2["default"].createElement(_icon2["default"], { type: 'exclamation-circle' }),
                    _react2["default"].createElement(
                        'div',
                        { className: prefixCls + '-message-title' },
                        title
                    )
                ),
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-buttons' },
                    _react2["default"].createElement(
                        _button2["default"],
                        { onClick: this.cancel, type: 'ghost', size: 'small' },
                        cancelText || '取消'
                    ),
                    _react2["default"].createElement(
                        _button2["default"],
                        { onClick: this.confirm, type: 'primary', size: 'small' },
                        okText || '确定'
                    )
                )
            )
        );
        return _react2["default"].createElement(_tooltip2["default"], (0, _extends3["default"])({}, restProps, { prefixCls: prefixCls, placement: placement, onVisibleChange: this.onVisibleChange, visible: this.state.visible, overlay: overlay }));
    };

    return Popconfirm;
}(_react2["default"].Component);

exports["default"] = Popconfirm;

Popconfirm.defaultProps = {
    prefixCls: 'ant-popover',
    transitionName: 'zoom-big',
    placement: 'top',
    trigger: 'click',
    onConfirm: noop,
    onCancel: noop,
    onVisibleChange: noop
};
Popconfirm.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];