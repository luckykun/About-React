'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}
var defaultTitles = ['源列表', '目的列表'];

var Transfer = function (_React$Component) {
    (0, _inherits3["default"])(Transfer, _React$Component);

    function Transfer(props) {
        (0, _classCallCheck3["default"])(this, Transfer);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.moveTo = function (direction) {
            var _this$props = _this.props;
            var _this$props$targetKey = _this$props.targetKeys;
            var targetKeys = _this$props$targetKey === undefined ? [] : _this$props$targetKey;
            var onChange = _this$props.onChange;
            var _this$state = _this.state;
            var leftCheckedKeys = _this$state.leftCheckedKeys;
            var rightCheckedKeys = _this$state.rightCheckedKeys;

            var moveKeys = direction === 'right' ? leftCheckedKeys : rightCheckedKeys;
            // move items to target box
            var newTargetKeys = direction === 'right' ? moveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
                return moveKeys.indexOf(targetKey) === -1;
            });
            // empty checked keys
            var oppositeDirection = direction === 'right' ? 'left' : 'right';
            _this.setState((0, _defineProperty3["default"])({}, oppositeDirection + 'CheckedKeys', []));
            _this.handleSelectChange(oppositeDirection, []);
            onChange(newTargetKeys, direction, moveKeys);
        };
        _this.moveToLeft = function () {
            return _this.moveTo('left');
        };
        _this.moveToRight = function () {
            return _this.moveTo('right');
        };
        _this.handleSelectAll = function (direction, filteredDataSource, checkAll) {
            var holder = checkAll ? [] : filteredDataSource.map(function (item) {
                return item.key;
            });
            _this.setState((0, _defineProperty3["default"])({}, direction + 'CheckedKeys', holder));
            _this.handleSelectChange(direction, holder);
        };
        _this.handleLeftSelectAll = function (filteredDataSource, checkAll) {
            return _this.handleSelectAll('left', filteredDataSource, checkAll);
        };
        _this.handleRightSelectAll = function (filteredDataSource, checkAll) {
            return _this.handleSelectAll('right', filteredDataSource, checkAll);
        };
        _this.handleFilter = function (direction, e) {
            _this.setState((0, _defineProperty3["default"])({}, direction + 'Filter', e.target.value));
        };
        _this.handleLeftFilter = function (e) {
            return _this.handleFilter('left', e);
        };
        _this.handleRightFilter = function (e) {
            return _this.handleFilter('right', e);
        };
        _this.handleClear = function (direction) {
            _this.setState((0, _defineProperty3["default"])({}, direction + 'Filter', ''));
        };
        _this.handleLeftClear = function () {
            return _this.handleClear('left');
        };
        _this.handleRightClear = function () {
            return _this.handleClear('right');
        };
        _this.handleSelect = function (direction, selectedItem, checked) {
            var _this$state2 = _this.state;
            var leftCheckedKeys = _this$state2.leftCheckedKeys;
            var rightCheckedKeys = _this$state2.rightCheckedKeys;

            var holder = direction === 'left' ? [].concat((0, _toConsumableArray3["default"])(leftCheckedKeys)) : [].concat((0, _toConsumableArray3["default"])(rightCheckedKeys));
            var index = void 0;
            holder.forEach(function (key, i) {
                if (key === selectedItem.key) {
                    index = i;
                }
            });
            if (index > -1) {
                holder.splice(index, 1);
            }
            if (checked) {
                holder.push(selectedItem.key);
            }
            _this.setState((0, _defineProperty3["default"])({}, direction + 'CheckedKeys', holder));
            _this.handleSelectChange(direction, holder);
        };
        _this.handleLeftSelect = function (selectedItem, checked) {
            return _this.handleSelect('left', selectedItem, checked);
        };
        _this.handleRightSelect = function (selectedItem, checked) {
            return _this.handleSelect('right', selectedItem, checked);
        };
        _this.state = {
            leftFilter: '',
            rightFilter: '',
            leftCheckedKeys: [],
            rightCheckedKeys: []
        };
        return _this;
    }

    Transfer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var _state = this.state;
        var leftCheckedKeys = _state.leftCheckedKeys;
        var rightCheckedKeys = _state.rightCheckedKeys;

        if (nextProps.targetKeys !== this.props.targetKeys || nextProps.dataSource !== this.props.dataSource) {
            (function () {
                var existInDateSourcekey = function existInDateSourcekey(key) {
                    return dataSource.filter(function (item) {
                        return item.key === key;
                    }).length;
                };
                // clear key nolonger existed
                // clear checkedKeys according to targetKeys


                // clear cached splited dataSource
                _this2.splitedDataSource = null;
                var dataSource = nextProps.dataSource;
                var _nextProps$targetKeys = nextProps.targetKeys;
                var targetKeys = _nextProps$targetKeys === undefined ? [] : _nextProps$targetKeys;
                _this2.setState({
                    leftCheckedKeys: leftCheckedKeys.filter(existInDateSourcekey).filter(function (data) {
                        return targetKeys.filter(function (key) {
                            return key === data;
                        }).length === 0;
                    }),
                    rightCheckedKeys: rightCheckedKeys.filter(existInDateSourcekey).filter(function (data) {
                        return targetKeys.filter(function (key) {
                            return key === data;
                        }).length > 0;
                    })
                });
            })();
        }
    };

    Transfer.prototype.splitDataSource = function splitDataSource(props) {
        if (this.splitedDataSource) {
            return this.splitedDataSource;
        }
        var dataSource = props.dataSource;
        var _props$targetKeys = props.targetKeys;
        var targetKeys = _props$targetKeys === undefined ? [] : _props$targetKeys;

        if (props.rowKey) {
            dataSource.forEach(function (record) {
                record.key = props.rowKey(record);
            });
        }
        var leftDataSource = dataSource.filter(function (_ref) {
            var key = _ref.key;
            return targetKeys.indexOf(key) === -1;
        });
        var rightDataSource = [];
        targetKeys.forEach(function (targetKey) {
            var targetItem = dataSource.filter(function (record) {
                return record.key === targetKey;
            })[0];
            if (targetItem) {
                rightDataSource.push(targetItem);
            }
        });
        this.splitedDataSource = {
            leftDataSource: leftDataSource,
            rightDataSource: rightDataSource
        };
        return this.splitedDataSource;
    };

    Transfer.prototype.handleSelectChange = function handleSelectChange(direction, holder) {
        var _state2 = this.state;
        var leftCheckedKeys = _state2.leftCheckedKeys;
        var rightCheckedKeys = _state2.rightCheckedKeys;

        var onSelectChange = this.props.onSelectChange;
        if (direction === 'left') {
            onSelectChange(holder, rightCheckedKeys);
        } else {
            onSelectChange(leftCheckedKeys, holder);
        }
    };

    Transfer.prototype.getTitles = function getTitles() {
        if (this.props.titles) {
            return this.props.titles;
        }
        if (this.context && this.context.antLocale && this.context.antLocale.Transfer) {
            return this.context.antLocale.Transfer.titles || [];
        }
        return defaultTitles;
    };

    Transfer.prototype.render = function render() {
        var _classNames;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var operations = _props.operations;
        var showSearch = _props.showSearch;
        var notFoundContent = _props.notFoundContent;
        var searchPlaceholder = _props.searchPlaceholder;
        var body = _props.body;
        var footer = _props.footer;
        var listStyle = _props.listStyle;
        var className = _props.className;
        var filterOption = _props.filterOption;
        var render = _props.render;
        var _state3 = this.state;
        var leftFilter = _state3.leftFilter;
        var rightFilter = _state3.rightFilter;
        var leftCheckedKeys = _state3.leftCheckedKeys;
        var rightCheckedKeys = _state3.rightCheckedKeys;

        var _splitDataSource = this.splitDataSource(this.props);

        var leftDataSource = _splitDataSource.leftDataSource;
        var rightDataSource = _splitDataSource.rightDataSource;

        var leftActive = rightCheckedKeys.length > 0;
        var rightActive = leftCheckedKeys.length > 0;
        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls, true), _classNames));
        var titles = this.getTitles();
        return _react2["default"].createElement(
            'div',
            { className: cls },
            _react2["default"].createElement(_list2["default"], { titleText: titles[0], dataSource: leftDataSource, filter: leftFilter, filterOption: filterOption, style: listStyle, checkedKeys: leftCheckedKeys, handleFilter: this.handleLeftFilter, handleClear: this.handleLeftClear, handleSelect: this.handleLeftSelect, handleSelectAll: this.handleLeftSelectAll, render: render, showSearch: showSearch, searchPlaceholder: searchPlaceholder, notFoundContent: notFoundContent, body: body, footer: footer, prefixCls: prefixCls + '-list' }),
            _react2["default"].createElement(_operation2["default"], { rightActive: rightActive, rightArrowText: operations[0], moveToRight: this.moveToRight, leftActive: leftActive, leftArrowText: operations[1], moveToLeft: this.moveToLeft, className: prefixCls + '-operation' }),
            _react2["default"].createElement(_list2["default"], { titleText: titles[1], dataSource: rightDataSource, filter: rightFilter, filterOption: filterOption, style: listStyle, checkedKeys: rightCheckedKeys, handleFilter: this.handleRightFilter, handleClear: this.handleRightClear, handleSelect: this.handleRightSelect, handleSelectAll: this.handleRightSelectAll, render: render, showSearch: showSearch, searchPlaceholder: searchPlaceholder, notFoundContent: notFoundContent, body: body, footer: footer, prefixCls: prefixCls + '-list' })
        );
    };

    return Transfer;
}(_react2["default"].Component);

exports["default"] = Transfer;

Transfer.List = _list2["default"];
Transfer.Operation = _operation2["default"];
Transfer.Search = _search2["default"];
Transfer.defaultProps = {
    prefixCls: 'ant-transfer',
    dataSource: [],
    render: noop,
    onChange: noop,
    onSelectChange: noop,
    operations: [],
    showSearch: false,
    body: noop,
    footer: noop
};
Transfer.propTypes = {
    prefixCls: _react.PropTypes.string,
    dataSource: _react.PropTypes.array,
    render: _react.PropTypes.func,
    targetKeys: _react.PropTypes.array,
    onChange: _react.PropTypes.func,
    height: _react.PropTypes.number,
    listStyle: _react.PropTypes.object,
    className: _react.PropTypes.string,
    titles: _react.PropTypes.array,
    operations: _react.PropTypes.array,
    showSearch: _react.PropTypes.bool,
    filterOption: _react.PropTypes.func,
    searchPlaceholder: _react.PropTypes.string,
    notFoundContent: _react.PropTypes.node,
    body: _react.PropTypes.func,
    footer: _react.PropTypes.func,
    rowKey: _react.PropTypes.func
};
Transfer.contextTypes = {
    antLocale: _react.PropTypes.object
};
module.exports = exports['default'];