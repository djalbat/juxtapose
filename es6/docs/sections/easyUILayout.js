'use strict';

require('../../easyui-jsx');

const easyuilayout = require('easyui-layout'),
      { VerticalSplitter, HorizontalSplitter, SizeableElement, options } = easyuilayout;

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');

const EasyUILayout = () => {
  const { situated } = options,
        { ABOVE, TO_THE_LEFT_OF, TO_THE_RIGHT_OF } = situated;

  const bottomSizeableElement =

          <SizeableElement className="bottom sizeable"/>,
      
        bottomLeftDiv =

          <div className="red bottom left" />,
      
        leftSizeableElement =

          <SizeableElement className="left sizeable rows">
            <div className="yellow row" />
            <div className="left horizontal splitter" />
            {bottomLeftDiv}
          </SizeableElement>,

        rightSizeableElement =

          <SizeableElement className="rows right sizeable">
            <div className="top right" />
            <div className="right horizontal splitter" />
            <div className="blue row" />
          </SizeableElement>

        ;

  return (

    <section>
      <nav>
        <Next href="#easyUIDragAndDrop">EasyUI DragAndDrop</Next>
        <Previous href="#moreEasyUIElements">More EasyUI elements</Previous>
        <Contents />
      </nav>
      <h2>EasyUI Layout</h2>
      <BlockCode>{`const { situated } = options,
      { ABOVE, TO_THE_LEFT_OF, TO_THE_RIGHT_OF } = situated;

const leftSizeableElement =

        <SizeableElement className="left sizeable rows">
          <div className="yellow row" />
          <div className="left horizontal splitter" />
          {bottomLeftDiv}
        </SizeableElement>,

      rightSizeableElement =

        <SizeableElement className="rows right sizeable">
          <div className="top right" />
          <div className="right horizontal splitter" />
          <div className="blue row" />
        </SizeableElement>,

      bottomSizeableElement =

        <SizeableElement className="bottom sizeable"/>,

      bottomLeftDiv =

        <div className="red bottom left" />,

      ;

<div className="white container columns">
  {leftSizeableElement}
  <VerticalSplitter className="left vertical splitter"
                    situated={TO_THE_RIGHT_OF}
                    sizeableElement={leftSizeableElement}
  />
  <div className="column rows">
    <div className="row columns">
      <div className="column rows" />
      <VerticalSplitter className="right vertical splitter"
                        situated={TO_THE_LEFT_OF}
                        sizeableElement={rightSizeableElement}
      />
      {rightSizeableElement}
    </div>
    <HorizontalSplitter className="main horizontal splitter"
                        situated={ABOVE}
                        sizeableElement={bottomSizeableElement}
                        onDrag={(height) => {

                          bottomLeftDiv.setHeight(height);

                        }}
    />
    {bottomSizeableElement}
  </div>
</div>`}</BlockCode>
      <p>
        There are three elements:a sizeable element together with horizontal and vertical splitters.
      </p>
      <p>
        These elements require a working knowledge of CSS flexbox and since flexbox can be tricky, it is recommended that you start from this example.
        The basic CSS that must be included in order to get things working is here:
      </p>
      <ul>
        <li>
          <a href="https://github.com/djalbat/EasyUI-Layout/blob/master/dist/easyui-layout.css">easyui-layout.css</a>
        </li>
      </ul>
      <p>
        Note The CSS to set the splitter dimensions isn't strictly needed.
        The rest is mandatory unless a better way can be found.
        The CSS necessary to get the example working, which includes the above, is <a href="css/easyui-layout.css">here</a>.
      </p>
      <p>
        The basic idea is that vertical splitters sit to one side of a sizeable element, the width of which they change as they are dragged.
        Horizontal splitters have the equivalent effect on sizeable elements they sit above or below of.
        Flexbox makes sure that other elements are resized accordingly, so that only one sizeable element needs to be referenced by any one splitter.
      </p>
      <p>
        These arrangements can be nested, and drag handlers make it easy to cheat a little and give the impression that splitters can intersect.
      </p>
      <p>
        Another helpful feature is that sizeable elements will take honour their <InlineCode>min-width</InlineCode>, <InlineCode>max-width</InlineCode>, <InlineCode>min-height</InlineCode> and
        <InlineCode>max-height</InlineCode> CSS properties in the sense that dragging a splitter will not resize them past these limits.
      </p>
      <p>
        The <InlineCode>situated</InlineCode> and <InlineCode>sizeableElement</InlineCode> attributes are hopefully self-explanatory.
        The constants available for the former can be gotten by deconstructing the <InlineCode>situated</InlineCode> property of the <InlineCode>options</InlineCode> object, as shown at the top of the example.
      </p>

      <div className="white container columns">
        {leftSizeableElement}
        <VerticalSplitter className="left vertical splitter"
                          situated={TO_THE_RIGHT_OF}
                          sizeableElement={leftSizeableElement}
        />
        <div className="column rows">
          <div className="row columns">
            <div className="column rows" />
            <VerticalSplitter className="right vertical splitter"
                              situated={TO_THE_LEFT_OF}
                              sizeableElement={rightSizeableElement}
            />
            {rightSizeableElement}
          </div>
          <HorizontalSplitter className="main horizontal splitter"
                              situated={ABOVE}
                              sizeableElement={bottomSizeableElement}
                              onDrag={(height) => {

                                bottomLeftDiv.setHeight(height);

                              }}
          />
          {bottomSizeableElement}
        </div>
      </div>
    </section>

  );
};

module.exports = EasyUILayout;
