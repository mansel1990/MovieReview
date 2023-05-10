import React from "react";
import ReactWordcloud from "react-d3-cloud";

const WordCloud = () => {
  const data = [
    { text: "Lorem", value: 100 },
    { text: "ipsum", value: 300 },
    { text: "dolor", value: 500 },
    { text: "sit", value: 800 },
    { text: "amet", value: 200 },
    { text: "consectetur", value: 100 },
    { text: "adipiscing", value: 700 },
    { text: "elit", value: 900 },
  ];
  const fontSizeMapper = (word) => Math.log2(word.value) * 10;
  const rotate = (word) => word.value % 360;
  return (
    <div className="cloud-container">
      <ReactWordcloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        rotate={rotate}
        width={200}
        height={200}
      />
    </div>
  );
};

export default WordCloud;
