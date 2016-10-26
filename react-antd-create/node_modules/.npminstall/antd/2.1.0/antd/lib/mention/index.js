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

var _rcEditorMention = require('rc-editor-mention');

var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mention = function (_React$Component) {
    (0, _inherits3["default"])(Mention, _React$Component);

    function Mention(props) {
        (0, _classCallCheck3["default"])(this, Mention);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            suggestions: props.suggestions,
            focus: false
        };
        return _this;
    }

    Mention.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            suggestions: nextProps.suggestions
        });
    };

    Mention.prototype.onSearchChange = function onSearchChange(value) {
        if (this.props.onSearchChange) {
            return this.props.onSearchChange(value);
        }
        return this.defaultSearchChange(value);
    };

    Mention.prototype.onChange = function onChange(editorState) {
        if (this.props.onChange) {
            this.props.onChange(editorState);
        }
    };

    Mention.prototype.defaultSearchChange = function defaultSearchChange(value) {
        var searchValue = value.toLowerCase();
        var filteredSuggestions = this.props.suggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().indexOf(searchValue) !== -1;
        });
        this.setState({
            suggestions: filteredSuggestions
        });
    };

    Mention.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props;
        var className = _props.className;
        var prefixCls = _props.prefixCls;
        var style = _props.style;
        var multiLines = _props.multiLines;
        var defaultValue = _props.defaultValue;
        var notFoundContent = this.props.notFoundContent;
        var _state = this.state;
        var suggestions = _state.suggestions;
        var focus = _state.focus;

        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, 'active', focus), _classNames));
        if (this.props.loading) {
            notFoundContent = _react2["default"].createElement('i', { className: 'anticon anticon-loading' });
        }
        return _react2["default"].createElement(_rcEditorMention2["default"], (0, _extends3["default"])({}, this.props, { className: cls, prefixCls: prefixCls, style: style, defaultValue: defaultValue, multiLines: multiLines, onSearchChange: this.onSearchChange.bind(this), onChange: this.onChange.bind(this), onFocus: function onFocus() {
                return _this2.setState({ focus: true });
            }, onBlur: function onBlur() {
                return _this2.setState({ focus: false });
            }, suggestions: suggestions, notFoundContent: notFoundContent }));
    };

    return Mention;
}(_react2["default"].Component);

exports["default"] = Mention;

Mention.Nav = _rcEditorMention.Nav;
Mention.toString = _rcEditorMention.toString;
Mention.toEditorState = _rcEditorMention.toEditorState;
Mention.getMentions = _rcEditorMention.getMentions;
Mention.defaultProps = {
    prefixCls: 'ant-mention',
    suggestions: [],
    notFoundContent: '无匹配结果，轻敲空格完成输入',
    loading: false,
    multiLines: false
};
module.exports = exports['default'];