import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import clsx from 'clsx';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

var createBlockStyleButton = function(_ref) {
  var _temp;

  var blockType = _ref.blockType,
    children = _ref.children;
  return (
    (_temp =
      /*#__PURE__*/
      (function(_Component) {
        _inherits(BlockStyleButton, _Component);

        function BlockStyleButton() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BlockStyleButton);

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(
            this,
            (_getPrototypeOf2 = _getPrototypeOf(BlockStyleButton)).call.apply(
              _getPrototypeOf2,
              [this].concat(args)
            )
          );

          _defineProperty(
            _assertThisInitialized(_this),
            'toggleStyle',
            function(event) {
              event.preventDefault();

              _this.props.setEditorState(
                RichUtils.toggleBlockType(
                  _this.props.getEditorState(),
                  blockType
                )
              );
            }
          );

          _defineProperty(
            _assertThisInitialized(_this),
            'preventBubblingUp',
            function(event) {
              event.preventDefault();
            }
          );

          _defineProperty(
            _assertThisInitialized(_this),
            'blockTypeIsActive',
            function() {
              // if the button is rendered before the editor
              if (!_this.props.getEditorState) {
                return false;
              }

              var editorState = _this.props.getEditorState();

              var type = editorState
                .getCurrentContent()
                .getBlockForKey(editorState.getSelection().getStartKey())
                .getType();
              return type === blockType;
            }
          );

          return _this;
        }

        _createClass(BlockStyleButton, [
          {
            key: 'render',
            value: function render() {
              var theme = this.props.theme;
              var className = this.blockTypeIsActive()
                ? clsx(theme.button, theme.active)
                : theme.button;
              return React.createElement(
                'div',
                {
                  className: theme.buttonWrapper,
                  onMouseDown: this.preventBubblingUp,
                },
                React.createElement('button', {
                  className: className,
                  onClick: this.toggleStyle,
                  type: 'button',
                  children: children,
                })
              );
            },
          },
        ]);

        return BlockStyleButton;
      })(Component)),
    _temp
  );
};

var createInlineStyleButton = function(_ref) {
  var _temp;

  var style = _ref.style,
    children = _ref.children;
  return (
    (_temp =
      /*#__PURE__*/
      (function(_Component) {
        _inherits(InlineStyleButton, _Component);

        function InlineStyleButton() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, InlineStyleButton);

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(
            this,
            (_getPrototypeOf2 = _getPrototypeOf(InlineStyleButton)).call.apply(
              _getPrototypeOf2,
              [this].concat(args)
            )
          );

          _defineProperty(
            _assertThisInitialized(_this),
            'toggleStyle',
            function(event) {
              event.preventDefault();

              _this.props.setEditorState(
                RichUtils.toggleInlineStyle(_this.props.getEditorState(), style)
              );
            }
          );

          _defineProperty(
            _assertThisInitialized(_this),
            'preventBubblingUp',
            function(event) {
              event.preventDefault();
            }
          );

          _defineProperty(
            _assertThisInitialized(_this),
            'styleIsActive',
            function() {
              return (
                _this.props.getEditorState &&
                _this.props
                  .getEditorState()
                  .getCurrentInlineStyle()
                  .has(style)
              );
            }
          );

          return _this;
        }

        _createClass(InlineStyleButton, [
          {
            key: 'render',
            value: function render() {
              var theme = this.props.theme;
              var className = this.styleIsActive()
                ? clsx(theme.button, theme.active)
                : theme.button;
              return React.createElement(
                'div',
                {
                  className: theme.buttonWrapper,
                  onMouseDown: this.preventBubblingUp,
                },
                React.createElement('button', {
                  className: className,
                  onClick: this.toggleStyle,
                  type: 'button',
                  children: children,
                })
              );
            },
          },
        ]);

        return InlineStyleButton;
      })(Component)),
    _temp
  );
};

var index = createInlineStyleButton({
  style: 'ITALIC',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    }),
    React.createElement('path', {
      d: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
    })
  ),
});

var index$1 = createInlineStyleButton({
  style: 'BOLD',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
    }),
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    })
  ),
});

var index$2 = createInlineStyleButton({
  style: 'CODE',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d: 'M0 0h24v24H0V0z',
      fill: 'none',
    }),
    React.createElement('path', {
      d:
        'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    })
  ),
});

var index$3 = createInlineStyleButton({
  style: 'UNDERLINE',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    }),
    React.createElement('path', {
      d:
        'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
    })
  ),
});

var index$4 = createBlockStyleButton({
  blockType: 'header-one',
  children: 'H1',
});

var index$5 = createBlockStyleButton({
  blockType: 'header-two',
  children: 'H2',
});

var index$6 = createBlockStyleButton({
  blockType: 'header-three',
  children: 'H3',
});

var index$7 = createBlockStyleButton({
  blockType: 'unordered-list-item',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
    }),
    React.createElement('path', {
      d: 'M0 0h24v24H0V0z',
      fill: 'none',
    })
  ),
});

var index$8 = createBlockStyleButton({
  blockType: 'ordered-list-item',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
    }),
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    })
  ),
});

var index$9 = createBlockStyleButton({
  blockType: 'blockquote',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
    }),
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    })
  ),
});

var index$a = createBlockStyleButton({
  blockType: 'code-block',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d: 'M0 0h24v24H0V0z',
      fill: 'none',
    }),
    React.createElement('path', {
      d:
        'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    })
  ),
});

var createBlockAlignmentButton = function(_ref) {
  var _temp;

  var alignment = _ref.alignment,
    children = _ref.children;
  return (
    (_temp =
      /*#__PURE__*/
      (function(_Component) {
        _inherits(BlockAlignmentButton, _Component);

        function BlockAlignmentButton() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BlockAlignmentButton);

          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(
            this,
            (_getPrototypeOf2 = _getPrototypeOf(
              BlockAlignmentButton
            )).call.apply(_getPrototypeOf2, [this].concat(args))
          );

          _defineProperty(_assertThisInitialized(_this), 'activate', function(
            event
          ) {
            event.preventDefault();

            _this.props.setAlignment({
              alignment: alignment,
            });
          });

          _defineProperty(
            _assertThisInitialized(_this),
            'preventBubblingUp',
            function(event) {
              event.preventDefault();
            }
          );

          _defineProperty(
            _assertThisInitialized(_this),
            'isActive',
            function() {
              return _this.props.alignment === alignment;
            }
          );

          return _this;
        }

        _createClass(BlockAlignmentButton, [
          {
            key: 'render',
            value: function render() {
              var theme = this.props.theme;
              var className = this.isActive()
                ? clsx(theme.button, theme.active)
                : theme.button;
              return React.createElement(
                'div',
                {
                  className: theme.buttonWrapper,
                  onMouseDown: this.preventBubblingUp,
                },
                React.createElement('button', {
                  className: className,
                  onClick: this.activate,
                  type: 'button',
                  children: children,
                })
              );
            },
          },
        ]);

        return BlockAlignmentButton;
      })(Component)),
    _temp
  );
};

var index$b = createBlockAlignmentButton({
  alignment: 'default',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z',
    }),
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    })
  ),
});

var index$c = createBlockAlignmentButton({
  alignment: 'center',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z',
    }),
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    })
  ),
});

var index$d = createBlockAlignmentButton({
  alignment: 'left',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z',
    }),
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    })
  ),
});

var index$e = createBlockAlignmentButton({
  alignment: 'right',
  children: React.createElement(
    'svg',
    {
      height: '24',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d:
        'M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z',
    }),
    React.createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none',
    })
  ),
});

var index$f = createInlineStyleButton({
  style: 'SUBSCRIPT',
  children: React.createElement(
    'div',
    null,
    'x',
    React.createElement('sub', null, '2')
  ),
});

var index$g = createInlineStyleButton({
  style: 'SUPERSCRIPT',
  children: React.createElement(
    'div',
    null,
    'x',
    React.createElement('sup', null, '2')
  ),
});

export {
  index$c as AlignBlockCenterButton,
  index$b as AlignBlockDefaultButton,
  index$d as AlignBlockLeftButton,
  index$e as AlignBlockRightButton,
  index$9 as BlockquoteButton,
  index$1 as BoldButton,
  index$a as CodeBlockButton,
  index$2 as CodeButton,
  index$4 as HeadlineOneButton,
  index$6 as HeadlineThreeButton,
  index$5 as HeadlineTwoButton,
  index as ItalicButton,
  index$8 as OrderedListButton,
  index$f as SubButton,
  index$g as SupButton,
  index$3 as UnderlineButton,
  index$7 as UnorderedListButton,
  createBlockStyleButton,
  createInlineStyleButton,
};
