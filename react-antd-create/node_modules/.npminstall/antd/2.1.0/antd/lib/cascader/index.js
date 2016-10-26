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

var _rcCascader = require('rc-cascader');

var _rcCascader2 = _interopRequireDefault(_rcCascader);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function highlightKeyword(str, keyword, prefixCls) {
    return str.split(keyword).map(function (node, index) {
        return index === 0 ? node : [_react2["default"].createElement(
            'span',
            { className: prefixCls + '-menu-item-keyword', key: 'seperator' },
            keyword
        ), node];
    });
}
function defaultFilterOption(inputValue, path) {
    return path.some(function (option) {
        return option.label.indexOf(inputValue) > -1;
    });
}
function defaultRenderFilteredOption(inputValue, path, prefixCls) {
    return path.map(function (_ref, index) {
        var label = _ref.label;

        var node = label.indexOf(inputValue) > -1 ? highlightKeyword(label, inputValue, prefixCls) : label;
        return index === 0 ? node : [' / ', node];
    });
}
function defaultSortFilteredOption(a, b, inputValue) {
    function callback(elem) {
        return elem.label.indexOf(inputValue) > -1;
    }
    return a.findIndex(callback) - b.findIndex(callback);
}

var Cascader = function (_React$Component) {
    (0, _inherits3["default"])(Cascader, _React$Component);

    function Cascader(props) {
        (0, _classCallCheck3["default"])(this, Cascader);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.handleChange = function (value, selectedOptions) {
            var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
            _this.setState({ inputValue: '' });
            _this.setValue(unwrappedValue, selectedOptions);
        };
        _this.handlePopupVisibleChange = function (popupVisible) {
            _this.setState({
                popupVisible: popupVisible,
                inputFocused: popupVisible,
                inputValue: popupVisible ? _this.state.inputValue : ''
            });
            _this.props.onPopupVisibleChange(popupVisible);
        };
        _this.handleInputBlur = function () {
            _this.setState({
                inputFocused: false
            });
        };
        _this.handleInputClick = function (e) {
            var _this$state = _this.state;
            var inputFocused = _this$state.inputFocused;
            var popupVisible = _this$state.popupVisible;
            // Prevent `Trigger` behaviour.

            if (inputFocused || popupVisible) {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }
        };
        _this.handleInputChange = function (e) {
            var inputValue = e.target.value;
            _this.setState({ inputValue: inputValue });
        };
        _this.setValue = function (value) {
            var selectedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            _this.props.onChange(value, selectedOptions);
        };
        _this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!_this.state.inputValue) {
                _this.setValue([]);
                _this.setState({ popupVisible: false });
            } else {
                _this.setState({ inputValue: '' });
            }
        };
        _this.state = {
            value: props.value || props.defautValue || [],
            inputValue: '',
            inputFocused: false,
            popupVisible: false,
            flattenOptions: props.showSearch && _this.flattenTree(props.options, props.changeOnSelect)
        };
        return _this;
    }

    Cascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({ value: nextProps.value || [] });
        }
        if (nextProps.showSearch && this.props.options !== nextProps.options) {
            this.setState({ flattenOptions: this.flattenTree(nextProps.options, nextProps.changeOnSelect) });
        }
    };

    Cascader.prototype.getLabel = function getLabel() {
        var _props = this.props;
        var options = _props.options;
        var displayRender = _props.displayRender;

        var value = this.state.value;
        var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
        var selectedOptions = (0, _arrayTreeFilter2["default"])(options, function (o, level) {
            return o.value === unwrappedValue[level];
        });
        var label = selectedOptions.map(function (o) {
            return o.label;
        });
        return displayRender(label, selectedOptions);
    };

    Cascader.prototype.flattenTree = function flattenTree(options, changeOnSelect) {
        var _this2 = this;

        var ancestor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var flattenOptions = [];
        options.forEach(function (option) {
            var path = ancestor.concat(option);
            if (changeOnSelect || !option.children) {
                flattenOptions.push(path);
            }
            if (option.children) {
                flattenOptions = flattenOptions.concat(_this2.flattenTree(option.children, changeOnSelect, path));
            }
        });
        return flattenOptions;
    };

    Cascader.prototype.generateFilteredOptions = function generateFilteredOptions(prefixCls) {
        var _this3 = this;

        var _props2 = this.props;
        var showSearch = _props2.showSearch;
        var notFoundContent = _props2.notFoundContent;
        var _showSearch$filter = showSearch.filter;
        var filter = _showSearch$filter === undefined ? defaultFilterOption : _showSearch$filter;
        var _showSearch$render = showSearch.render;
        var render = _showSearch$render === undefined ? defaultRenderFilteredOption : _showSearch$render;
        var _showSearch$sort = showSearch.sort;
        var sort = _showSearch$sort === undefined ? defaultSortFilteredOption : _showSearch$sort;
        var _state = this.state;
        var flattenOptions = _state.flattenOptions;
        var inputValue = _state.inputValue;

        var filtered = flattenOptions.filter(function (path) {
            return filter(_this3.state.inputValue, path);
        }).sort(function (a, b) {
            return sort(a, b, inputValue);
        });
        if (filtered.length > 0) {
            return filtered.map(function (path) {
                return {
                    label: render(inputValue, path, prefixCls),
                    value: path.map(function (o) {
                        return o.value;
                    })
                };
            });
        }
        return [{ label: notFoundContent, value: 'ANT_CASCADER_NOT_FOUND', disabled: true }];
    };

    Cascader.prototype.render = function render() {
        var _classNames, _classNames2, _classNames3;

        var props = this.props;
        var state = this.state;

        var _splitObject = (0, _splitObject4["default"])(props, ['prefixCls', 'inputPrefixCls', 'children', 'placeholder', 'size', 'disabled', 'className', 'style', 'allowClear', 'showSearch']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var inputPrefixCls = _splitObject2$.inputPrefixCls;
        var children = _splitObject2$.children;
        var placeholder = _splitObject2$.placeholder;
        var size = _splitObject2$.size;
        var disabled = _splitObject2$.disabled;
        var className = _splitObject2$.className;
        var style = _splitObject2$.style;
        var allowClear = _splitObject2$.allowClear;
        var showSearch = _splitObject2$.showSearch;
        var otherProps = _splitObject2[1];

        var value = state.value;
        var sizeCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, inputPrefixCls + '-lg', size === 'large'), (0, _defineProperty3["default"])(_classNames, inputPrefixCls + '-sm', size === 'small'), _classNames));
        var clearIcon = allowClear && !disabled && value.length > 0 || state.inputValue ? _react2["default"].createElement(_icon2["default"], { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
        var arrowCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-picker-arrow', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-picker-arrow-expand', state.popupVisible), _classNames2));
        var pickerCls = (0, _classnames2["default"])((_classNames3 = {}, (0, _defineProperty3["default"])(_classNames3, className, !!className), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-picker', true), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-picker-with-value', state.inputValue), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-picker-disabled', disabled), _classNames3));
        // Fix bug of https://github.com/facebook/react/pull/5004
        // and https://fb.me/react-unknown-prop
        var inputProps = (0, _omit2["default"])(otherProps, ['onChange', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'onPopupVisibleChange', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName', 'filterOption', 'renderFilteredOption', 'sortFilteredOption', 'notFoundContent']);
        var options = props.options;
        if (state.inputValue) {
            options = this.generateFilteredOptions(prefixCls);
        }
        // Dropdown menu should keep previous status until it is fully closed.
        if (!state.popupVisible) {
            options = this.cachedOptions;
        } else {
            this.cachedOptions = options;
        }
        var dropdownMenuColumnStyle = {
            width: undefined,
            height: undefined
        };
        var isNotFound = (options || []).length === 1 && options[0].value === 'ANT_CASCADER_NOT_FOUND';
        if (isNotFound) {
            dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
        }
        // The default value of `matchInputWidth` is `true`
        var resultListMatchInputWidth = showSearch.matchInputWidth === false ? false : true;
        if (resultListMatchInputWidth && state.inputValue && this.refs.input) {
            dropdownMenuColumnStyle.width = this.refs.input.refs.input.offsetWidth;
        }
        return _react2["default"].createElement(
            _rcCascader2["default"],
            (0, _extends3["default"])({}, props, { options: options, value: value, popupVisible: state.popupVisible, onPopupVisibleChange: this.handlePopupVisibleChange, onChange: this.handleChange, dropdownMenuColumnStyle: dropdownMenuColumnStyle }),
            children || _react2["default"].createElement(
                'span',
                { style: style, className: pickerCls },
                _react2["default"].createElement(_input2["default"], (0, _extends3["default"])({}, inputProps, { ref: 'input', placeholder: value && value.length > 0 ? null : placeholder, className: prefixCls + '-input ' + sizeCls, value: state.inputValue, disabled: disabled, readOnly: !showSearch, autoComplete: 'off', onClick: showSearch ? this.handleInputClick : null, onBlur: showSearch ? this.handleInputBlur : null, onChange: showSearch ? this.handleInputChange : null })),
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-picker-label' },
                    this.getLabel()
                ),
                clearIcon,
                _react2["default"].createElement(_icon2["default"], { type: 'down', className: arrowCls })
            )
        );
    };

    return Cascader;
}(_react2["default"].Component);

exports["default"] = Cascader;

Cascader.defaultProps = {
    prefixCls: 'ant-cascader',
    inputPrefixCls: 'ant-input',
    placeholder: 'Please select',
    transitionName: 'slide-up',
    popupPlacement: 'bottomLeft',
    onChange: function onChange() {},

    options: [],
    displayRender: function displayRender(label) {
        return label.join(' / ');
    },
    disabled: false,
    allowClear: true,
    showSearch: false,
    notFoundContent: 'Not Found',
    onPopupVisibleChange: function onPopupVisibleChange() {}
};
module.exports = exports['default'];