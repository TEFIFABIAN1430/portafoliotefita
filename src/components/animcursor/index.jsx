import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicAnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimCursor = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    isBrowser && (
      <DynamicAnimatedCursor
        innerSize={10}
        outerSize={32}
        outerAlpha={0.2}
        innerScale={0.9}
        outerStyle={{
          border: "3px solid #fff",
        }}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerScale={1.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    )
  );
};

export default AnimCursor;
