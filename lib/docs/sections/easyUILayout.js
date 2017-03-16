'use strict';

require('../../easyui-jsx');

var easyuilayout = require('easyui-layout'),
    VerticalSplitter = easyuilayout.VerticalSplitter,
    HorizontalSplitter = easyuilayout.HorizontalSplitter,
    SizeableElement = easyuilayout.SizeableElement,
    options = easyuilayout.options;


var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var EasyUILayout = function EasyUILayout() {
  var situated = options.situated,
      ABOVE = situated.ABOVE,
      TO_THE_LEFT_OF = situated.TO_THE_LEFT_OF,
      TO_THE_RIGHT_OF = situated.TO_THE_RIGHT_OF;


  var bottomSizeableElement = React.createElement(SizeableElement, { className: 'bottom sizeable' }),
      bottomLeftDiv = React.createElement('div', { className: 'red bottom left' }),
      leftSizeableElement = React.createElement(
    SizeableElement,
    { className: 'left sizeable rows' },
    React.createElement('div', { className: 'yellow row' }),
    React.createElement('div', { className: 'left horizontal splitter' }),
    bottomLeftDiv
  ),
      rightSizeableElement = React.createElement(
    SizeableElement,
    { className: 'rows right sizeable' },
    React.createElement('div', { className: 'top right' }),
    React.createElement('div', { className: 'right horizontal splitter' }),
    React.createElement('div', { className: 'blue row' })
  );

  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUIDragAndDrop' },
        'EasyUI DragAndDrop'
      ),
      React.createElement(
        Previous,
        { href: '#moreEasyUIElements' },
        'More EasyUI elements'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI Layout'
    ),
    React.createElement(
      BlockCode,
      null,
      'const { situated } = options,\n      { ABOVE, TO_THE_LEFT_OF, TO_THE_RIGHT_OF } = situated;\n\nconst leftSizeableElement =\n\n        <SizeableElement className="left sizeable rows">\n          <div className="yellow row" />\n          <div className="left horizontal splitter" />\n          {bottomLeftDiv}\n        </SizeableElement>,\n\n      rightSizeableElement =\n\n        <SizeableElement className="rows right sizeable">\n          <div className="top right" />\n          <div className="right horizontal splitter" />\n          <div className="blue row" />\n        </SizeableElement>,\n\n      bottomSizeableElement =\n\n        <SizeableElement className="bottom sizeable"/>,\n\n      bottomLeftDiv =\n\n        <div className="red bottom left" />,\n\n      ;\n\n<div className="white container columns">\n  {leftSizeableElement}\n  <VerticalSplitter className="left vertical splitter"\n                    situated={TO_THE_RIGHT_OF}\n                    sizeableElement={leftSizeableElement}\n  />\n  <div className="column rows">\n    <div className="row columns">\n      <div className="column rows" />\n      <VerticalSplitter className="right vertical splitter"\n                        situated={TO_THE_LEFT_OF}\n                        sizeableElement={rightSizeableElement}\n      />\n      {rightSizeableElement}\n    </div>\n    <HorizontalSplitter className="main horizontal splitter"\n                        situated={ABOVE}\n                        sizeableElement={bottomSizeableElement}\n                        onDrag={(height) => {\n\n                          bottomLeftDiv.setHeight(height);\n\n                        }}\n    />\n    {bottomSizeableElement}\n  </div>\n</div>'
    ),
    React.createElement(
      'p',
      null,
      'There are three elements:a sizeable element together with horizontal and vertical splitters.'
    ),
    React.createElement(
      'p',
      null,
      'These elements require a working knowledge of CSS flexbox and since flexbox can be tricky, it is recommended that you start from this example. The basic CSS that must be included in order to get things working is here:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: 'https://github.com/djalbat/EasyUI-Layout/blob/master/dist/easyui-layout.css' },
          'easyui-layout.css'
        )
      )
    ),
    React.createElement(
      'p',
      null,
      'Note The CSS to set the splitter dimensions isn\'t strictly needed. The rest is mandatory unless a better way can be found. The CSS necessary to get the example working, which includes the above, is ',
      React.createElement(
        'a',
        { href: 'css/easyui-layout.css' },
        'here'
      ),
      '.'
    ),
    React.createElement(
      'p',
      null,
      'The basic idea is that vertical splitters sit to one side of a sizeable element, the width of which they change as they are dragged. Horizontal splitters have the equivalent effect on sizeable elements they sit above or below of. Flexbox makes sure that other elements are resized accordingly, so that only one sizeable element needs to be referenced by any one splitter.'
    ),
    React.createElement(
      'p',
      null,
      'These arrangements can be nested, and drag handlers make it easy to cheat a little and give the impression that splitters can intersect.'
    ),
    React.createElement(
      'p',
      null,
      'Another helpful feature is that sizeable elements will take honour their ',
      React.createElement(
        InlineCode,
        null,
        'min-width'
      ),
      ', ',
      React.createElement(
        InlineCode,
        null,
        'max-width'
      ),
      ', ',
      React.createElement(
        InlineCode,
        null,
        'min-height'
      ),
      ' and',
      React.createElement(
        InlineCode,
        null,
        'max-height'
      ),
      ' CSS properties in the sense that dragging a splitter will not resize them past these limits.'
    ),
    React.createElement(
      'p',
      null,
      'The ',
      React.createElement(
        InlineCode,
        null,
        'situated'
      ),
      ' and ',
      React.createElement(
        InlineCode,
        null,
        'sizeableElement'
      ),
      ' attributes are hopefully self-explanatory. The constants available for the former can be gotten by deconstructing the ',
      React.createElement(
        InlineCode,
        null,
        'situated'
      ),
      ' property of the ',
      React.createElement(
        InlineCode,
        null,
        'options'
      ),
      ' object, as shown at the top of the example.'
    ),
    React.createElement(
      'div',
      { className: 'white container columns' },
      leftSizeableElement,
      React.createElement(VerticalSplitter, { className: 'left vertical splitter',
        situated: TO_THE_RIGHT_OF,
        sizeableElement: leftSizeableElement
      }),
      React.createElement(
        'div',
        { className: 'column rows' },
        React.createElement(
          'div',
          { className: 'row columns' },
          React.createElement('div', { className: 'column rows' }),
          React.createElement(VerticalSplitter, { className: 'right vertical splitter',
            situated: TO_THE_LEFT_OF,
            sizeableElement: rightSizeableElement
          }),
          rightSizeableElement
        ),
        React.createElement(HorizontalSplitter, { className: 'main horizontal splitter',
          situated: ABOVE,
          sizeableElement: bottomSizeableElement,
          onDrag: function onDrag(height) {

            bottomLeftDiv.setHeight(height);
          }
        }),
        bottomSizeableElement
      )
    )
  );
};

module.exports = EasyUILayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2Vhc3lVSUxheW91dC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiVmVydGljYWxTcGxpdHRlciIsImVhc3l1aWxheW91dCIsIkhvcml6b250YWxTcGxpdHRlciIsIlNpemVhYmxlRWxlbWVudCIsIm9wdGlvbnMiLCJOZXh0IiwiUHJldmlvdXMiLCJDb250ZW50cyIsIkJsb2NrQ29kZSIsIklubGluZUNvZGUiLCJFYXN5VUlMYXlvdXQiLCJzaXR1YXRlZCIsIkFCT1ZFIiwiVE9fVEhFX0xFRlRfT0YiLCJUT19USEVfUklHSFRfT0YiLCJib3R0b21TaXplYWJsZUVsZW1lbnQiLCJib3R0b21MZWZ0RGl2IiwibGVmdFNpemVhYmxlRWxlbWVudCIsInJpZ2h0U2l6ZWFibGVFbGVtZW50IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsa0JBQVI7O0FBRU0sbUJBQWVBLFFBQVEsZUFBUixDQUFmO0FBQUEsSUFDRUMsZ0JBREYsR0FDcUVDLFlBRHJFLENBQ0VELGdCQURGO0FBQUEsSUFDb0JFLGtCQURwQixHQUNxRUQsWUFEckUsQ0FDb0JDLGtCQURwQjtBQUFBLElBQ3dDQyxlQUR4QyxHQUNxRUYsWUFEckUsQ0FDd0NFLGVBRHhDO0FBQUEsSUFDeURDLE9BRHpELEdBQ3FFSCxZQURyRSxDQUN5REcsT0FEekQ7OztBQUdOLElBQU1DLE9BQU9OLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTU8sV0FBV1AsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTVEsV0FBV1IsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTVMsWUFBWVQsUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTVUsYUFBYVYsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU1XLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ25CLE1BQUVDLFFBQUYsR0FBZVAsT0FBZixDQUFFTyxRQUFGO0FB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QUFDSSxNQUFELEVBQVk7O0FBRWxCSCwwQkFBY0ksU0FBZCxDQUF3QkQsTUFBeEI7QUFFRDtBQVByQixVQVRGO0FBa0JHSjtBQWxCSDtBQU5GO0FBakdGLEdBRkY7QUFpSUQsQ0EvSkQ7O0FBaUtBTSxPQUFPQyxPQUFQLEdBQWlCWixZQUFqQiIsImZpbGUiOiJlYXN5VUlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpbGF5b3V0ID0gcmVxdWlyZSgnZWFzeXVpLWxheW91dCcpLFxuICAgICAgeyBWZXJ0aWNhbFNwbGl0dGVyLCBIb3Jpem9udGFsU3BsaXR0ZXIsIFNpemVhYmxlRWxlbWVudCwgb3B0aW9ucyB9ID0gZWFzeXVpbGF5b3V0O1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgQmxvY2tDb2RlID0gcmVxdWlyZSgnLi4vYmxvY2tDb2RlJyksXG4gICAgICBJbmxpbmVDb2RlID0gcmVxdWlyZSgnLi4vaW5saW5lQ29kZScpO1xuXG5jb25zdCBFYXN5VUlMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2l0dWF0ZWQgfSA9IG9wdGlvbnMsXG4gICAgICAgIHsgQUJPVkUsIFRPX1RIRV9MRUZUX09GLCBUT19USEVfUklHSFRfT0YgfSA9IHNpdHVhdGVkO1xuXG4gIGNvbnN0IGJvdHRvbVNpemVhYmxlRWxlbWVudCA9XG5cbiAgICAgICAgICA8U2l6ZWFibGVFbGVtZW50IGNsYXNzTmFtZT1cImJvdHRvbSBzaXplYWJsZVwiLz4sXG4gICAgICBcbiAgICAgICAgYm90dG9tTGVmdERpdiA9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZCBib3R0b20gbGVmdFwiIC8+LFxuICAgICAgXG4gICAgICAgIGxlZnRTaXplYWJsZUVsZW1lbnQgPVxuXG4gICAgICAgICAgPFNpemVhYmxlRWxlbWVudCBjbGFzc05hbWU9XCJsZWZ0IHNpemVhYmxlIHJvd3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieWVsbG93IHJvd1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgaG9yaXpvbnRhbCBzcGxpdHRlclwiIC8+XG4gICAgICAgICAgICB7Ym90dG9tTGVmdERpdn1cbiAgICAgICAgICA8L1NpemVhYmxlRWxlbWVudD4sXG5cbiAgICAgICAgcmlnaHRTaXplYWJsZUVsZW1lbnQgPVxuXG4gICAgICAgICAgPFNpemVhYmxlRWxlbWVudCBjbGFzc05hbWU9XCJyb3dzIHJpZ2h0IHNpemVhYmxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcCByaWdodFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGhvcml6b250YWwgc3BsaXR0ZXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlIHJvd1wiIC8+XG4gICAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjZWFzeVVJRHJhZ0FuZERyb3BcIj5FYXN5VUkgRHJhZ0FuZERyb3A8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI21vcmVFYXN5VUlFbGVtZW50c1wiPk1vcmUgRWFzeVVJIGVsZW1lbnRzPC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5FYXN5VUkgTGF5b3V0PC9oMj5cbiAgICAgIDxCbG9ja0NvZGU+e2Bjb25zdCB7IHNpdHVhdGVkIH0gPSBvcHRpb25zLFxuICAgICAgeyBBQk9WRSwgVE9fVEhFX0xFRlRfT0YsIFRPX1RIRV9SSUdIVF9PRiB9ID0gc2l0dWF0ZWQ7XG5cbmNvbnN0IGxlZnRTaXplYWJsZUVsZW1lbnQgPVxuXG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQgY2xhc3NOYW1lPVwibGVmdCBzaXplYWJsZSByb3dzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5ZWxsb3cgcm93XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgaG9yaXpvbnRhbCBzcGxpdHRlclwiIC8+XG4gICAgICAgICAge2JvdHRvbUxlZnREaXZ9XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PixcblxuICAgICAgcmlnaHRTaXplYWJsZUVsZW1lbnQgPVxuXG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQgY2xhc3NOYW1lPVwicm93cyByaWdodCBzaXplYWJsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wIHJpZ2h0XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGhvcml6b250YWwgc3BsaXR0ZXJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZSByb3dcIiAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD4sXG5cbiAgICAgIGJvdHRvbVNpemVhYmxlRWxlbWVudCA9XG5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudCBjbGFzc05hbWU9XCJib3R0b20gc2l6ZWFibGVcIi8+LFxuXG4gICAgICBib3R0b21MZWZ0RGl2ID1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZCBib3R0b20gbGVmdFwiIC8+LFxuXG4gICAgICA7XG5cbjxkaXYgY2xhc3NOYW1lPVwid2hpdGUgY29udGFpbmVyIGNvbHVtbnNcIj5cbiAge2xlZnRTaXplYWJsZUVsZW1lbnR9XG4gIDxWZXJ0aWNhbFNwbGl0dGVyIGNsYXNzTmFtZT1cImxlZnQgdmVydGljYWwgc3BsaXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzaXR1YXRlZD17VE9fVEhFX1JJR0hUX09GfVxuICAgICAgICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQ9e2xlZnRTaXplYWJsZUVsZW1lbnR9XG4gIC8+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHJvd3NcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2x1bW5zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiByb3dzXCIgLz5cbiAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyIGNsYXNzTmFtZT1cInJpZ2h0IHZlcnRpY2FsIHNwbGl0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdHVhdGVkPXtUT19USEVfTEVGVF9PRn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudD17cmlnaHRTaXplYWJsZUVsZW1lbnR9XG4gICAgICAvPlxuICAgICAge3JpZ2h0U2l6ZWFibGVFbGVtZW50fVxuICAgIDwvZGl2PlxuICAgIDxIb3Jpem9udGFsU3BsaXR0ZXIgY2xhc3NOYW1lPVwibWFpbiBob3Jpem9udGFsIHNwbGl0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdHVhdGVkPXtBQk9WRX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudD17Ym90dG9tU2l6ZWFibGVFbGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnPXsoaGVpZ2h0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tTGVmdERpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAvPlxuICAgIHtib3R0b21TaXplYWJsZUVsZW1lbnR9XG4gIDwvZGl2PlxuPC9kaXY+YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGVyZSBhcmUgdGhyZWUgZWxlbWVudHM6YSBzaXplYWJsZSBlbGVtZW50IHRvZ2V0aGVyIHdpdGggaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgc3BsaXR0ZXJzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXNlIGVsZW1lbnRzIHJlcXVpcmUgYSB3b3JraW5nIGtub3dsZWRnZSBvZiBDU1MgZmxleGJveCBhbmQgc2luY2UgZmxleGJveCBjYW4gYmUgdHJpY2t5LCBpdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSBzdGFydCBmcm9tIHRoaXMgZXhhbXBsZS5cbiAgICAgICAgVGhlIGJhc2ljIENTUyB0aGF0IG11c3QgYmUgaW5jbHVkZWQgaW4gb3JkZXIgdG8gZ2V0IHRoaW5ncyB3b3JraW5nIGlzIGhlcmU6XG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJLUxheW91dC9ibG9iL21hc3Rlci9kaXN0L2Vhc3l1aS1sYXlvdXQuY3NzXCI+ZWFzeXVpLWxheW91dC5jc3M8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHA+XG4gICAgICAgIE5vdGUgVGhlIENTUyB0byBzZXQgdGhlIHNwbGl0dGVyIGRpbWVuc2lvbnMgaXNuJ3Qgc3RyaWN0bHkgbmVlZGVkLlxuICAgICAgICBUaGUgcmVzdCBpcyBtYW5kYXRvcnkgdW5sZXNzIGEgYmV0dGVyIHdheSBjYW4gYmUgZm91bmQuXG4gICAgICAgIFRoZSBDU1MgbmVjZXNzYXJ5IHRvIGdldCB0aGUgZXhhbXBsZSB3b3JraW5nLCB3aGljaCBpbmNsdWRlcyB0aGUgYWJvdmUsIGlzIDxhIGhyZWY9XCJjc3MvZWFzeXVpLWxheW91dC5jc3NcIj5oZXJlPC9hPi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgYmFzaWMgaWRlYSBpcyB0aGF0IHZlcnRpY2FsIHNwbGl0dGVycyBzaXQgdG8gb25lIHNpZGUgb2YgYSBzaXplYWJsZSBlbGVtZW50LCB0aGUgd2lkdGggb2Ygd2hpY2ggdGhleSBjaGFuZ2UgYXMgdGhleSBhcmUgZHJhZ2dlZC5cbiAgICAgICAgSG9yaXpvbnRhbCBzcGxpdHRlcnMgaGF2ZSB0aGUgZXF1aXZhbGVudCBlZmZlY3Qgb24gc2l6ZWFibGUgZWxlbWVudHMgdGhleSBzaXQgYWJvdmUgb3IgYmVsb3cgb2YuXG4gICAgICAgIEZsZXhib3ggbWFrZXMgc3VyZSB0aGF0IG90aGVyIGVsZW1lbnRzIGFyZSByZXNpemVkIGFjY29yZGluZ2x5LCBzbyB0aGF0IG9ubHkgb25lIHNpemVhYmxlIGVsZW1lbnQgbmVlZHMgdG8gYmUgcmVmZXJlbmNlZCBieSBhbnkgb25lIHNwbGl0dGVyLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXNlIGFycmFuZ2VtZW50cyBjYW4gYmUgbmVzdGVkLCBhbmQgZHJhZyBoYW5kbGVycyBtYWtlIGl0IGVhc3kgdG8gY2hlYXQgYSBsaXR0bGUgYW5kIGdpdmUgdGhlIGltcHJlc3Npb24gdGhhdCBzcGxpdHRlcnMgY2FuIGludGVyc2VjdC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBBbm90aGVyIGhlbHBmdWwgZmVhdHVyZSBpcyB0aGF0IHNpemVhYmxlIGVsZW1lbnRzIHdpbGwgdGFrZSBob25vdXIgdGhlaXIgPElubGluZUNvZGU+bWluLXdpZHRoPC9JbmxpbmVDb2RlPiwgPElubGluZUNvZGU+bWF4LXdpZHRoPC9JbmxpbmVDb2RlPiwgPElubGluZUNvZGU+bWluLWhlaWdodDwvSW5saW5lQ29kZT4gYW5kXG4gICAgICAgIDxJbmxpbmVDb2RlPm1heC1oZWlnaHQ8L0lubGluZUNvZGU+IENTUyBwcm9wZXJ0aWVzIGluIHRoZSBzZW5zZSB0aGF0IGRyYWdnaW5nIGEgc3BsaXR0ZXIgd2lsbCBub3QgcmVzaXplIHRoZW0gcGFzdCB0aGVzZSBsaW1pdHMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIDxJbmxpbmVDb2RlPnNpdHVhdGVkPC9JbmxpbmVDb2RlPiBhbmQgPElubGluZUNvZGU+c2l6ZWFibGVFbGVtZW50PC9JbmxpbmVDb2RlPiBhdHRyaWJ1dGVzIGFyZSBob3BlZnVsbHkgc2VsZi1leHBsYW5hdG9yeS5cbiAgICAgICAgVGhlIGNvbnN0YW50cyBhdmFpbGFibGUgZm9yIHRoZSBmb3JtZXIgY2FuIGJlIGdvdHRlbiBieSBkZWNvbnN0cnVjdGluZyB0aGUgPElubGluZUNvZGU+c2l0dWF0ZWQ8L0lubGluZUNvZGU+IHByb3BlcnR5IG9mIHRoZSA8SW5saW5lQ29kZT5vcHRpb25zPC9JbmxpbmVDb2RlPiBvYmplY3QsIGFzIHNob3duIGF0IHRoZSB0b3Agb2YgdGhlIGV4YW1wbGUuXG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUgY29udGFpbmVyIGNvbHVtbnNcIj5cbiAgICAgICAge2xlZnRTaXplYWJsZUVsZW1lbnR9XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyIGNsYXNzTmFtZT1cImxlZnQgdmVydGljYWwgc3BsaXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXR1YXRlZD17VE9fVEhFX1JJR0hUX09GfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQ9e2xlZnRTaXplYWJsZUVsZW1lbnR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHJvd3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2x1bW5zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiByb3dzXCIgLz5cbiAgICAgICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyIGNsYXNzTmFtZT1cInJpZ2h0IHZlcnRpY2FsIHNwbGl0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdHVhdGVkPXtUT19USEVfTEVGVF9PRn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudD17cmlnaHRTaXplYWJsZUVsZW1lbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3JpZ2h0U2l6ZWFibGVFbGVtZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXIgY2xhc3NOYW1lPVwibWFpbiBob3Jpem9udGFsIHNwbGl0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdHVhdGVkPXtBQk9WRX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudD17Ym90dG9tU2l6ZWFibGVFbGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnPXsoaGVpZ2h0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tTGVmdERpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtib3R0b21TaXplYWJsZUVsZW1lbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc3lVSUxheW91dDtcbiJdfQ==