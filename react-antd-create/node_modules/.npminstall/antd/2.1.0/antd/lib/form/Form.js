'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = exports.FormComponent = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _createDOMForm = require('rc-form/lib/createDOMForm');

var _createDOMForm2 = _interopRequireDefault(_createDOMForm);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormComponent = exports.FormComponent = function (_React$Component) {
    (0, _inherits3["default"])(FormComponent, _React$Component);

    function FormComponent() {
        (0, _classCallCheck3["default"])(this, FormComponent);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    return FormComponent;
}(_react2["default"].Component);

var Form = function (_React$Component2) {
    (0, _inherits3["default"])(Form, _React$Component2);

    function Form(props) {
        (0, _classCallCheck3["default"])(this, Form);

        var _this2 = (0, _possibleConstructorReturn3["default"])(this, _React$Component2.call(this, props));

        (0, _warning2["default"])(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
        return _this2;
    }

    Form.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    Form.prototype.render = function render() {
        var _classNames;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var className = _props.className;
        var inline = _props.inline;
        var horizontal = _props.horizontal;
        var vertical = _props.vertical;

        var formClassName = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-horizontal', horizontal), (0, _defineProperty3["default"])(_classNames, prefixCls + '-vertical', vertical), (0, _defineProperty3["default"])(_classNames, prefixCls + '-inline', inline), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        var formProps = (0, _omit2["default"])(this.props, ['prefixCls', 'className', 'inline', 'horizontal', 'vertical', 'form']);
        return _react2["default"].createElement('form', (0, _extends3["default"])({}, formProps, { className: formClassName }));
    };

    return Form;
}(_react2["default"].Component);

exports["default"] = Form;

Form.defaultProps = {
    prefixCls: 'ant-form',
    onSubmit: function onSubmit(e) {
        e.preventDefault();
    }
};
Form.propTypes = {
    prefixCls: _react2["default"].PropTypes.string,
    vertical: _react2["default"].PropTypes.bool,
    horizontal: _react2["default"].PropTypes.bool,
    inline: _react2["default"].PropTypes.bool,
    children: _react2["default"].PropTypes.any,
    onSubmit: _react2["default"].PropTypes.func
};
Form.Item = _FormItem2["default"];
Form.create = function (options) {
    var formWrapper = (0, _createDOMForm2["default"])((0, _objectAssign2["default"])({}, options, {
        fieldNameProp: 'id',
        fieldMetaProp: _constants.FIELD_META_PROP
    }));
    /* eslint-disable react/prefer-es6-class */
    return function (Component) {
        return formWrapper(_react2["default"].createClass({
            propTypes: {
                form: _react.PropTypes.object.isRequired
            },
            childContextTypes: {
                form: _react.PropTypes.object.isRequired
            },
            getChildContext: function getChildContext() {
                return {
                    form: this.props.form
                };
            },
            render: function render() {
                var getFieldProps = this.props.form.getFieldProps;
                function deprecatedGetFieldProps(name, option) {
                    (0, _warning2["default"])(false, '`getFieldProps` is deprecated and will be removed in future, please use `getFieldDecorator` instead');
                    return getFieldProps(name, option);
                }
                this.props.form.getFieldProps = deprecatedGetFieldProps;
                var withRef = {};
                if (options && options.withRef) {
                    withRef.ref = 'formWrappedComponent';
                }
                return _react2["default"].createElement(Component, (0, _extends3["default"])({}, this.props, withRef));
            }
        }));
    };
};