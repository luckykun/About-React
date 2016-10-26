'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    mask: {
        backgroundColor: 'black',
        opacity: .5
    },
    content: {
        backgroundColor: 'white'
    },
    absolute: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});
var screen = _reactNative.Dimensions.get('window');
var RCModal = _react2["default"].createClass({
    displayName: 'RCModal',
    getDefaultProps: function getDefaultProps() {
        return {
            wrapStyle: styles.wrap,
            maskStyle: styles.mask,
            animationType: 'slide-up',
            animateAppear: false,
            animationDuration: 300,
            visible: false,
            maskClosable: true,
            onClose: function onClose() {},
            onAnimationEnd: function onAnimationEnd(visible) {}
        };
    },
    getInitialState: function getInitialState() {
        var visible = this.props.visible;

        return {
            position: new _reactNative.Animated.Value(this.getPosition(visible)),
            scale: new _reactNative.Animated.Value(this.getScale(visible)),
            opacity: new _reactNative.Animated.Value(this.getOpacity(visible)),
            modalVisible: visible
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (this.shouldComponentUpdate(nextProps)) {
            this.setState({
                modalVisible: true
            });
        }
    },
    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        if (this.props.visible || this.props.visible !== nextProps.visible) {
            return true;
        }
        if (nextState) {
            if (nextState.modalVisible !== this.state.modalVisible) {
                return true;
            }
        }
        return false;
    },
    componentDidMount: function componentDidMount() {
        if (this.props.animateAppear && this.props.animationType !== 'none') {
            this.componentDidUpdate({});
        }
    },
    componentDidUpdate: function componentDidUpdate(prevProps) {
        var props = this.props;

        if (prevProps.visible !== props.visible) {
            this.animateDialog(props.visible);
        }
    },
    animateMask: function animateMask(visible) {
        var _this = this;

        this.stopMaskAnim();
        this.state.opacity.setValue(this.getOpacity(!visible));
        this.animMask = _reactNative.Animated.timing(this.state.opacity, {
            toValue: this.getOpacity(visible),
            duration: this.props.animationDuration
        });
        this.animMask.start(function () {
            _this.animMask = null;
        });
    },
    stopMaskAnim: function stopMaskAnim() {
        if (this.animMask) {
            this.animMask.stop();
            this.animMask = null;
        }
    },
    stopDialogAnim: function stopDialogAnim() {
        if (this.animDialog) {
            this.animDialog.stop();
            this.animDialog = null;
        }
    },
    animateDialog: function animateDialog(visible) {
        var _this2 = this;

        this.stopDialogAnim();
        this.animateMask(visible);
        var animationType = this.props.animationType;

        if (animationType !== 'none') {
            if (animationType === 'slide-up' || animationType === 'slide-down') {
                this.state.position.setValue(this.getPosition(!visible));
                this.animDialog = _reactNative.Animated.timing(this.state.position, {
                    toValue: this.getPosition(visible),
                    duration: this.props.animationDuration,
                    easing: visible ? _reactNative.Easing.elastic(0.8) : undefined
                });
            } else if (animationType === 'fade') {
                this.animDialog = _reactNative.Animated.parallel([_reactNative.Animated.timing(this.state.opacity, {
                    toValue: this.getOpacity(visible),
                    duration: this.props.animationDuration,
                    easing: visible ? _reactNative.Easing.elastic(0.8) : undefined
                }), _reactNative.Animated.spring(this.state.scale, {
                    toValue: this.getScale(visible),
                    duration: this.props.animationDuration,
                    easing: visible ? _reactNative.Easing.elastic(0.8) : undefined
                })]);
            }
            this.animDialog.start(function () {
                _this2.animDialog = null;
                if (!visible) {
                    _this2.setState({
                        modalVisible: false
                    });
                }
                _this2.props.onAnimationEnd(visible);
            });
        } else {
            if (!visible) {
                this.setState({
                    modalVisible: false
                });
            }
        }
    },
    close: function close() {
        this.animateDialog(false);
    },
    onMaskClose: function onMaskClose() {
        if (this.props.maskClosable) {
            this.props.onClose();
        }
    },
    getPosition: function getPosition(visible) {
        if (visible) {
            return 0;
        }
        return this.props.animationType === 'slide-down' ? -screen.height : screen.height;
    },
    getScale: function getScale(visible) {
        return visible ? 1 : 1.05;
    },
    getOpacity: function getOpacity(visible) {
        return visible ? 1 : 0;
    },
    render: function render() {
        var props = this.props;

        if (!this.state.modalVisible) {
            return null;
        }
        var animationStyleMap = {
            'none': {},
            'slide-up': { transform: [{ translateY: this.state.position }] },
            'slide-down': { transform: [{ translateY: this.state.position }] },
            'fade': { transform: [{ scale: this.state.scale }], opacity: this.state.opacity }
        };
        return _react2["default"].createElement(_reactNative.Modal, { visible: true, transparent: true, onRequestClose: this.props.onClose }, _react2["default"].createElement(_reactNative.View, { style: [styles.wrap, props.wrapStyle] }, _react2["default"].createElement(_reactNative.TouchableWithoutFeedback, { onPress: this.onMaskClose }, _react2["default"].createElement(_reactNative.Animated.View, { style: [styles.absolute, { opacity: this.state.opacity }] }, _react2["default"].createElement(_reactNative.View, { style: [styles.absolute, props.maskStyle] }))), _react2["default"].createElement(_reactNative.Animated.View, { style: [styles.content, props.style, animationStyleMap[props.animationType]] }, this.props.children)));
    }
});
exports["default"] = RCModal;
module.exports = exports['default'];