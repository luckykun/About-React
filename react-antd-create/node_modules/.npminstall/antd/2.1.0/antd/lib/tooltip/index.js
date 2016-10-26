'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tooltip = function (_React$Component) {
    (0, _inherits3["default"])(Tooltip, _React$Component);

    function Tooltip(props) {
        (0, _classCallCheck3["default"])(this, Tooltip);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onVisibleChange = function (visible) {
            _this.setState({ visible: visible });
            _this.props.onVisibleChange(visible);
        };
        // 动态设置动画点
        _this.onPopupAlign = function (domNode, align) {
            var placements = _this.getPlacements();
            // 当前返回的位置
            var placement = Object.keys(placements).filter(function (key) {
                return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
            })[0];
            if (!placement) {
                return;
            }
            // 根据当前坐标设置动画点
            var rect = domNode.getBoundingClientRect();
            var transformOrigin = {
                top: '50%',
                left: '50%'
            };
            if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
                transformOrigin.top = rect.height - align.offset[1] + 'px';
            } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
                transformOrigin.top = -align.offset[1] + 'px';
            }
            if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
                transformOrigin.left = rect.width - align.offset[0] + 'px';
            } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
                transformOrigin.left = -align.offset[0] + 'px';
            }
            domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
        };
        _this.state = {
            visible: false
        };
        return _this;
    }

    Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
        return this.refs.tooltip.getPopupDomNode();
    };

    Tooltip.prototype.getPlacements = function getPlacements() {
        var _props = this.props;
        var builtinPlacements = _props.builtinPlacements;
        var arrowPointAtCenter = _props.arrowPointAtCenter;

        return builtinPlacements || (0, _placements2["default"])({
            arrowPointAtCenter: arrowPointAtCenter,
            verticalArrowShift: 8
        });
    };

    Tooltip.prototype.render = function render() {
        var _classNames;

        var _props2 = this.props;
        var prefixCls = _props2.prefixCls;
        var title = _props2.title;
        var overlay = _props2.overlay;
        var children = _props2.children;
        // Hide tooltip when there is no title

        var visible = this.state.visible;
        if (!title && !overlay) {
            visible = false;
        }
        if ('visible' in this.props) {
            visible = this.props.visible;
        }
        var childrenProps = children ? children.props : {};
        var childrenCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, childrenProps.className, !!childrenProps.className), (0, _defineProperty3["default"])(_classNames, this.props.openClassName || prefixCls + '-open', true), _classNames));
        return _react2["default"].createElement(
            _rcTooltip2["default"],
            (0, _extends3["default"])({ overlay: title, visible: visible, onPopupAlign: this.onPopupAlign, ref: 'tooltip' }, this.props, { builtinPlacements: this.getPlacements(), onVisibleChange: this.onVisibleChange }),
            visible ? (0, _react.cloneElement)(children, { className: childrenCls }) : children
        );
    };

    return Tooltip;
}(_react2["default"].Component);

exports["default"] = Tooltip;

Tooltip.defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    onVisibleChange: function onVisibleChange() {},

    arrowPointAtCenter: false
};
module.exports = exports['default'];