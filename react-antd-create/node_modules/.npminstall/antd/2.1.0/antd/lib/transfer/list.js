'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.isRenderResultPlainObject = isRenderResultPlainObject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}
function isRenderResultPlainObject(result) {
    return result && !_react2["default"].isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

var TransferList = function (_React$Component) {
    (0, _inherits3["default"])(TransferList, _React$Component);

    function TransferList(props) {
        (0, _classCallCheck3["default"])(this, TransferList);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.handleSelect = function (selectedItem) {
            var checkedKeys = _this.props.checkedKeys;

            var result = checkedKeys.some(function (key) {
                return key === selectedItem.key;
            });
            _this.props.handleSelect(selectedItem, !result);
        };
        _this.handleFilter = function (e) {
            _this.props.handleFilter(e);
        };
        _this.handleClear = function () {
            _this.props.handleClear();
        };
        _this.state = {
            mounted: false
        };
        return _this;
    }

    TransferList.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.timer = setTimeout(function () {
            _this2.setState({
                mounted: true
            });
        }, 0);
    };

    TransferList.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.timer);
    };

    TransferList.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    TransferList.prototype.getCheckStatus = function getCheckStatus(filteredDataSource) {
        var checkedKeys = this.props.checkedKeys;

        if (checkedKeys.length === 0) {
            return 'none';
        } else if (filteredDataSource.every(function (item) {
            return checkedKeys.indexOf(item.key) >= 0;
        })) {
            return 'all';
        }
        return 'part';
    };

    TransferList.prototype.renderCheckbox = function renderCheckbox(_ref) {
        var _classNames,
            _this3 = this;

        var prefixCls = _ref.prefixCls;
        var filteredDataSource = _ref.filteredDataSource;
        var checked = _ref.checked;
        var checkPart = _ref.checkPart;
        var disabled = _ref.disabled;
        var checkable = _ref.checkable;

        var checkAll = !checkPart && checked;
        var checkboxCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-checkbox', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-checkbox-indeterminate', checkPart), (0, _defineProperty3["default"])(_classNames, prefixCls + '-checkbox-checked', checkAll), (0, _defineProperty3["default"])(_classNames, prefixCls + '-checkbox-disabled', disabled), _classNames));
        return _react2["default"].createElement(
            'span',
            { ref: 'checkbox', className: checkboxCls, onClick: function onClick() {
                    return _this3.props.handleSelectAll(filteredDataSource, checkAll);
                } },
            typeof checkable !== 'boolean' ? checkable : null
        );
    };

    TransferList.prototype.matchFilter = function matchFilter(filterText, item, text) {
        var filterOption = this.props.filterOption;
        if (filterOption) {
            return filterOption(filterText, item);
        }
        return text.indexOf(filterText) >= 0;
    };

    TransferList.prototype.render = function render() {
        var _classNames2,
            _this4 = this;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var dataSource = _props.dataSource;
        var titleText = _props.titleText;
        var filter = _props.filter;
        var checkedKeys = _props.checkedKeys;
        var body = _props.body;
        var footer = _props.footer;
        var showSearch = _props.showSearch;
        var render = _props.render;
        var style = _props.style;
        var _props2 = this.props;
        var searchPlaceholder = _props2.searchPlaceholder;
        var notFoundContent = _props2.notFoundContent;
        // Custom Layout

        var footerDom = footer((0, _objectAssign2["default"])({}, this.props));
        var bodyDom = body((0, _objectAssign2["default"])({}, this.props));
        var listCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls, true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-with-footer', !!footerDom), _classNames2));
        var filteredDataSource = [];
        var showItems = dataSource.map(function (item) {
            var renderResult = render(item);
            if (isRenderResultPlainObject(renderResult)) {
                return {
                    item: item,
                    renderedText: renderResult.value,
                    renderedEl: renderResult.label
                };
            }
            return {
                item: item,
                renderedText: renderResult,
                renderedEl: renderResult
            };
        }).filter(function (_ref2) {
            var item = _ref2.item;
            var renderedText = _ref2.renderedText;

            return !(filter && filter.trim() && !_this4.matchFilter(filter, item, renderedText));
        }).map(function (_ref3) {
            var _classNames3;

            var item = _ref3.item;
            var renderedText = _ref3.renderedText;
            var renderedEl = _ref3.renderedEl;

            if (!item.disabled) {
                filteredDataSource.push(item);
            }
            var className = (0, _classnames2["default"])((_classNames3 = {}, (0, _defineProperty3["default"])(_classNames3, prefixCls + '-content-item', true), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-content-item-disabled', item.disabled), _classNames3));
            return _react2["default"].createElement(
                'li',
                { key: item.key, className: className, title: renderedText, onClick: item.disabled ? null : function () {
                        return _this4.handleSelect(item);
                    } },
                _react2["default"].createElement(_checkbox2["default"], { checked: checkedKeys.some(function (key) {
                        return key === item.key;
                    }), disabled: item.disabled }),
                _react2["default"].createElement(
                    'span',
                    null,
                    renderedEl
                )
            );
        });
        var unit = '条';
        var antLocale = this.context.antLocale;
        if (antLocale && antLocale.Transfer) {
            var transferLocale = antLocale.Transfer;
            unit = dataSource.length > 1 ? transferLocale.itemsUnit : transferLocale.itemUnit;
            searchPlaceholder = searchPlaceholder || transferLocale.searchPlaceholder;
            notFoundContent = notFoundContent || transferLocale.notFoundContent;
        }
        var checkStatus = this.getCheckStatus(filteredDataSource);
        var outerPrefixCls = prefixCls.replace('-list', '');
        return _react2["default"].createElement(
            'div',
            { className: listCls, style: style },
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-header' },
                this.renderCheckbox({
                    prefixCls: outerPrefixCls,
                    checked: checkStatus === 'all',
                    checkPart: checkStatus === 'part',
                    checkable: _react2["default"].createElement('span', { className: outerPrefixCls + '-checkbox-inner' }),
                    filteredDataSource: filteredDataSource,
                    disabled: false
                }),
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-header-selected' },
                    _react2["default"].createElement(
                        'span',
                        null,
                        (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') + dataSource.length,
                        ' ',
                        unit
                    ),
                    _react2["default"].createElement(
                        'span',
                        { className: prefixCls + '-header-title' },
                        titleText
                    )
                )
            ),
            bodyDom || _react2["default"].createElement(
                'div',
                { className: showSearch ? prefixCls + '-body ' + prefixCls + '-body-with-search' : prefixCls + '-body' },
                showSearch ? _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-body-search-wrapper' },
                    _react2["default"].createElement(_search2["default"], { prefixCls: prefixCls + '-search', onChange: this.handleFilter, handleClear: this.handleClear, placeholder: searchPlaceholder || '请输入搜索内容', value: filter })
                ) : null,
                _react2["default"].createElement(
                    _rcAnimate2["default"],
                    { component: 'ul', className: prefixCls + '-content', transitionName: this.state.mounted ? prefixCls + '-content-item-highlight' : '', transitionLeave: false },
                    showItems.length > 0 ? showItems : _react2["default"].createElement(
                        'div',
                        { className: prefixCls + '-body-not-found' },
                        notFoundContent || '列表为空'
                    )
                )
            ),
            footerDom ? _react2["default"].createElement(
                'div',
                { className: prefixCls + '-footer' },
                footerDom
            ) : null
        );
    };

    return TransferList;
}(_react2["default"].Component);

exports["default"] = TransferList;

TransferList.defaultProps = {
    dataSource: [],
    titleText: '',
    showSearch: false,
    handleClear: noop,
    handleFilter: noop,
    handleSelect: noop,
    handleSelectAll: noop,
    render: noop,
    // advanced
    body: noop,
    footer: noop
};
TransferList.propTypes = {
    prefixCls: _react.PropTypes.string,
    dataSource: _react.PropTypes.array,
    showSearch: _react.PropTypes.bool,
    filterOption: _react.PropTypes.func,
    searchPlaceholder: _react.PropTypes.string,
    titleText: _react.PropTypes.string,
    style: _react.PropTypes.object,
    handleClear: _react.PropTypes.func,
    handleFilter: _react.PropTypes.func,
    handleSelect: _react.PropTypes.func,
    handleSelectAll: _react.PropTypes.func,
    render: _react.PropTypes.func,
    body: _react.PropTypes.func,
    footer: _react.PropTypes.func
};
TransferList.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};