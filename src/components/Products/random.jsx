// import React, { Component } from "react";

// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// const Example = () => {
//   return (
//     <TransformWrapper>
//       <TransformComponent>
//         <img
//           src="src\components\Products\7_58a7b684-9035-48c1-9e09-ab01a0a6f660.webp"
//           alt="test"
//           className="w-[30%] h-[30%]"
//         />
//       </TransformComponent>
//     </TransformWrapper>
//   );
// };
// export default Example;




import React, { Component } from "react";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

const Example = () => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <Controls />
          <TransformComponent>
          <img
          src="src\components\Products\7_58a7b684-9035-48c1-9e09-ab01a0a6f660.webp"
          alt="test"
          className="w-[30%] h-[30%]"
        />
            <div>Example text</div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};
export default Example;
