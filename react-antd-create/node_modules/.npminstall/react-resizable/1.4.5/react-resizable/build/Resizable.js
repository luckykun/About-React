'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDraggable = require('react-draggable');

var _cloneElement = require('./cloneElement');

var _cloneElement2 = _interopRequireDefault(_cloneElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*:: type Position = {

};*/
/*:: type State = {
  resizing: boolean,
  width: number, height: number,
  slackW: number, slackH: number
};*/
/*:: type DragCallbackData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number
};*/

var Resizable = function (_React$Component) {
  _inherits(Resizable, _React$Component);

  function Resizable() {
    var _temp, _this, _ret;

    _classCallCheck(this, Resizable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      resizing: false,
      width: _this.props.width, height: _this.props.height,
      slackW: 0, slackH: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Resizable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps /*: Object*/) {
    // If parent changes height/width, set that in our state.
    if (!this.state.resizing && (nextProps.width !== this.props.width || nextProps.height !== this.props.height)) {
      this.setState({
        width: nextProps.width,
        height: nextProps.height
      });
    }
  };

  Resizable.prototype.lockAspectRatio = function lockAspectRatio(width /*: number*/, height /*: number*/, aspectRatio /*: number*/) {
    height = width / aspectRatio;
    width = height * aspectRatio;
    return [width, height];
  };

  // If you do this, be careful of constraints


  Resizable.prototype.runConstraints = function runConstraints(width /*: number*/, height /*: number*/) {
    var min = this.props.minConstraints;
    var max = this.props.maxConstraints;


    if (this.props.lockAspectRatio) {
      var ratio = this.state.width / this.state.height;
      height = width / ratio;
      width = height * ratio;
    }

    if (!min && !max) return [width, height];

    var oldW = width;
    var oldH = height;

    // Add slack to the values used to calculate bound position. This will ensure that if
    // we start removing slack, the element won't react to it right away until it's been
    // completely removed.

    var _state = this.state;
    var slackW = _state.slackW;
    var slackH = _state.slackH;

    width += slackW;
    height += slackH;

    if (min) {
      width = Math.max(min[0], width);
      height = Math.max(min[1], height);
    }
    if (max) {
      width = Math.min(max[0], width);
      height = Math.min(max[1], height);
    }

    // If the numbers changed, we must have introduced some slack. Record it for the next iteration.
    slackW += oldW - width;
    slackH += oldH - height;
    if (slackW !== this.state.slackW || slackH !== this.state.slackH) {
      this.setState({ slackW: slackW, slackH: slackH });
    }

    return [width, height];
  };

  /**
   * Wrapper around drag events to provide more useful data.
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */


  Resizable.prototype.resizeHandler = function resizeHandler(handlerName /*: string*/) {
    var _this2 = this;

    return function (e /*: Event*/, _ref) {
      var node = _ref.node;
      var deltaX = _ref.deltaX;
      var deltaY = _ref.deltaY;

      var width = _this2.state.width + deltaX;
      var height = _this2.state.height + deltaY;

      // Early return if no change
      var widthChanged = width !== _this2.state.width,
          heightChanged = height !== _this2.state.height;
      if (handlerName === 'onResize' && !widthChanged && !heightChanged) return;

      // Set the appropriate state for this handler.
      var _runConstraints = _this2.runConstraints(width, height);

      width = _runConstraints[0];
      height = _runConstraints[1];
      var newState = {};
      if (handlerName === 'onResizeStart') {
        newState.resizing = true;
      } else if (handlerName === 'onResizeStop') {
        newState.resizing = false;
        newState.slackW = newState.slackH = 0;
      } else {
        // Early return if no change after constraints
        if (width === _this2.state.width && height === _this2.state.height) return;
        newState.width = width;
        newState.height = height;
      }

      _this2.setState(newState, function () {
        _this2.props[handlerName] && _this2.props[handlerName](e, { node: node, size: { width: width, height: height } });
      });
    };
  };

  Resizable.prototype.render = function render() {
    // eslint-disable-next-line no-unused-vars
    var _props = this.props;
    var children = _props.children;
    var draggableOpts = _props.draggableOpts;
    var width = _props.width;
    var height = _props.height;
    var handleSize = _props.handleSize;
    var lockAspectRatio = _props.lockAspectRatio;
    var minConstraints = _props.minConstraints;
    var maxConstraints = _props.maxConstraints;
    var onResize = _props.onResize;
    var onResizeStop = _props.onResizeStop;
    var onResizeStart = _props.onResizeStart;

    var p = _objectWithoutProperties(_props, ['children', 'draggableOpts', 'width', 'height', 'handleSize', 'lockAspectRatio', 'minConstraints', 'maxConstraints', 'onResize', 'onResizeStop', 'onResizeStart']);

    var className = p.className ? p.className + ' react-resizable' : 'react-resizable';

    // What we're doing here is getting the child of this element, and cloning it with this element's props.
    // We are then defining its children as:
    // Its original children (resizable's child's children), and
    // A draggable handle.
    return (0, _cloneElement2.default)(children, _extends({}, p, {
      className: className,
      children: [children.props.children, _react2.default.createElement(
        _reactDraggable.DraggableCore,
        _extends({}, draggableOpts, {
          key: 'resizableHandle',
          ref: 'draggable',
          onStop: this.resizeHandler('onResizeStop'),
          onStart: this.resizeHandler('onResizeStart'),
          onDrag: this.resizeHandler('onResize')
        }),
        _react2.default.createElement('span', { className: 'react-resizable-handle' })
      )]
    }));
  };

  return Resizable;
}(_react2.default.Component);

Resizable.propTypes = {
  //
  // Required Props
  //

  // Require that one and only one child be present.
  children: _react.PropTypes.element.isRequired,

  // Initial w/h
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,

  //
  // Optional props
  //

  // If you change this, be sure to update your css
  handleSize: _react.PropTypes.array,

  // If true, will only allow width/height to move in lockstep
  lockAspectRatio: _react.PropTypes.bool,

  // Min/max size
  minConstraints: _react.PropTypes.arrayOf(_react.PropTypes.number),
  maxConstraints: _react.PropTypes.arrayOf(_react.PropTypes.number),

  // Callbacks
  onResizeStop: _react.PropTypes.func,
  onResizeStart: _react.PropTypes.func,
  onResize: _react.PropTypes.func,

  // These will be passed wholesale to react-draggable's DraggableCore
  draggableOpts: _react.PropTypes.object
};
Resizable.defaultProps = {
  handleSize: [20, 20],
  lockAspectRatio: false,
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity]
};
exports.default = Resizable;