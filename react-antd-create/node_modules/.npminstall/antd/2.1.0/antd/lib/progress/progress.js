'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _rcProgress = require('rc-progress');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var statusColorMap = {
    normal: '#2db7f5',
    exception: '#ff5500',
    success: '#87d068'
};

var Progress = function (_React$Component) {
    (0, _inherits3["default"])(Progress, _React$Component);

    function Progress() {
        (0, _classCallCheck3["default"])(this, Progress);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Progress.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'status', 'format', 'percent', 'trailColor', 'type', 'strokeWidth', 'width', 'className', 'showInfo']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var status = _splitObject2$.status;
        var format = _splitObject2$.format;
        var percent = _splitObject2$.percent;
        var trailColor = _splitObject2$.trailColor;
        var type = _splitObject2$.type;
        var strokeWidth = _splitObject2$.strokeWidth;
        var width = _splitObject2$.width;
        var className = _splitObject2$.className;
        var showInfo = _splitObject2$.showInfo;
        var restProps = _splitObject2[1];

        var progressStatus = parseInt(percent, 10) >= 100 && !('status' in this.props) ? 'success' : status || 'normal';
        var progressInfo = void 0;
        var progress = void 0;
        var textFormatter = format || function (percentNumber) {
            return percentNumber + '%';
        };
        if (showInfo) {
            var text = void 0;
            var iconType = type === 'circle' ? '' : '-circle';
            if (progressStatus === 'exception') {
                text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'cross' + iconType });
            } else if (progressStatus === 'success') {
                text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'check' + iconType });
            } else {
                text = textFormatter(percent);
            }
            progressInfo = _react2["default"].createElement(
                'span',
                { className: prefixCls + '-text' },
                text
            );
        }
        if (type === 'line') {
            var percentStyle = {
                width: percent + '%',
                height: strokeWidth || 10
            };
            progress = _react2["default"].createElement(
                'div',
                null,
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-outer' },
                    _react2["default"].createElement(
                        'div',
                        { className: prefixCls + '-inner' },
                        _react2["default"].createElement('div', { className: prefixCls + '-bg', style: percentStyle })
                    )
                ),
                progressInfo
            );
        } else if (type === 'circle') {
            var circleSize = width || 132;
            var circleStyle = {
                width: circleSize,
                height: circleSize,
                fontSize: circleSize * 0.16 + 6
            };
            var circleWidth = strokeWidth || 6;
            progress = _react2["default"].createElement(
                'div',
                { className: prefixCls + '-inner', style: circleStyle },
                _react2["default"].createElement(_rcProgress.Circle, { percent: percent, strokeWidth: circleWidth, trailWidth: circleWidth, strokeColor: statusColorMap[progressStatus], trailColor: trailColor }),
                progressInfo
            );
        }
        var classString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-show-info', showInfo), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        return _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({}, restProps, { className: classString }),
            progress
        );
    };

    return Progress;
}(_react2["default"].Component);

exports["default"] = Progress;

Progress.defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'ant-progress'
};
Progress.propTypes = {
    status: _react.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    type: _react.PropTypes.oneOf(['line', 'circle']),
    showInfo: _react.PropTypes.bool,
    percent: _react.PropTypes.number,
    width: _react.PropTypes.number,
    strokeWidth: _react.PropTypes.number,
    trailColor: _react.PropTypes.string,
    format: _react.PropTypes.func
};
module.exports = exports['default'];