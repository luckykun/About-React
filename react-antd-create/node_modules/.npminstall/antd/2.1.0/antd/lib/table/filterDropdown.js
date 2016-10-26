'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(_ref) {
    var onClick = _ref.onClick;
    var children = _ref.children;
    var className = _ref.className;
    return _react2["default"].createElement(
        'div',
        { className: className, onClick: onClick },
        children
    );
};

var FilterMenu = function (_React$Component) {
    (0, _inherits3["default"])(FilterMenu, _React$Component);

    function FilterMenu(props) {
        (0, _classCallCheck3["default"])(this, FilterMenu);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.setSelectedKeys = function (_ref2) {
            var selectedKeys = _ref2.selectedKeys;

            _this.setState({ selectedKeys: selectedKeys });
        };
        _this.handleClearFilters = function () {
            _this.setState({
                selectedKeys: []
            }, _this.handleConfirm);
        };
        _this.handleConfirm = function () {
            _this.setState({
                visible: false
            });
            _this.confirmFilter();
        };
        _this.onVisibleChange = function (visible) {
            _this.setState({
                visible: visible
            });
            if (!visible) {
                _this.confirmFilter();
            }
        };
        _this.handleMenuItemClick = function (info) {
            if (info.keyPath.length <= 1) {
                return;
            }
            var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;
            if (_this.state.selectedKeys.indexOf(info.key) >= 0) {
                // deselect SubMenu child
                delete keyPathOfSelectedItem[info.key];
            } else {
                // select SubMenu child
                keyPathOfSelectedItem[info.key] = info.keyPath;
            }
            _this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
        };
        _this.state = {
            selectedKeys: props.selectedKeys,
            keyPathOfSelectedItem: {},
            visible: false
        };
        return _this;
    }

    FilterMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.setState({
            selectedKeys: nextProps.selectedKeys
        });
    };

    FilterMenu.prototype.confirmFilter = function confirmFilter() {
        if (this.state.selectedKeys !== this.props.selectedKeys) {
            this.props.confirmFilter(this.props.column, this.state.selectedKeys);
        }
    };

    FilterMenu.prototype.renderMenuItem = function renderMenuItem(item) {
        var column = this.props.column;

        var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
        return _react2["default"].createElement(
            _rcMenu.Item,
            { key: item.value },
            multiple ? _react2["default"].createElement(_checkbox2["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : _react2["default"].createElement(_radio2["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }),
            _react2["default"].createElement(
                'span',
                null,
                item.text
            )
        );
    };

    FilterMenu.prototype.renderMenus = function renderMenus(items) {
        var _this2 = this;

        return items.map(function (item) {
            if (item.children && item.children.length > 0) {
                var _ret = function () {
                    var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

                    var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
                        return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
                    });
                    var subMenuCls = containSelected ? _this2.props.dropdownPrefixCls + '-submenu-contain-selected' : '';
                    return {
                        v: _react2["default"].createElement(
                            _rcMenu.SubMenu,
                            { title: item.text, className: subMenuCls, key: item.value.toString() },
                            item.children.map(function (child) {
                                return _this2.renderMenuItem(child);
                            })
                        )
                    };
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3["default"])(_ret)) === "object") return _ret.v;
            }
            return _this2.renderMenuItem(item);
        });
    };

    FilterMenu.prototype.render = function render() {
        var _props = this.props;
        var column = _props.column;
        var locale = _props.locale;
        var prefixCls = _props.prefixCls;
        var dropdownPrefixCls = _props.dropdownPrefixCls;
        // default multiple selection in filter dropdown

        var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
        var menus = column.filterDropdown ? column.filterDropdown : _react2["default"].createElement(
            FilterDropdownMenuWrapper,
            { className: prefixCls + '-dropdown' },
            _react2["default"].createElement(
                _rcMenu2["default"],
                { multiple: multiple, onClick: this.handleMenuItemClick, prefixCls: dropdownPrefixCls + '-menu', onSelect: this.setSelectedKeys, onDeselect: this.setSelectedKeys, selectedKeys: this.state.selectedKeys },
                this.renderMenus(column.filters)
            ),
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-dropdown-btns' },
                _react2["default"].createElement(
                    'a',
                    { className: prefixCls + '-dropdown-link confirm', onClick: this.handleConfirm },
                    locale.filterConfirm
                ),
                _react2["default"].createElement(
                    'a',
                    { className: prefixCls + '-dropdown-link clear', onClick: this.handleClearFilters },
                    locale.filterReset
                )
            )
        );
        var dropdownSelectedClass = this.props.selectedKeys.length > 0 ? prefixCls + '-selected' : '';
        return _react2["default"].createElement(
            _dropdown2["default"],
            { trigger: ['click'], overlay: menus, visible: this.state.visible, onVisibleChange: this.onVisibleChange },
            _react2["default"].createElement(_icon2["default"], { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass })
        );
    };

    return FilterMenu;
}(_react2["default"].Component);

exports["default"] = FilterMenu;

FilterMenu.defaultProps = {
    handleFilter: function handleFilter() {},

    column: null
};
module.exports = exports['default'];