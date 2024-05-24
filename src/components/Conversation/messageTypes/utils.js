import React from "react";

const URL_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

function DetectURLFromText({ content, linkColor }) {
  const words = content.split(" ");

  return (
    <span>
      {words.map((word, index) => {
        return word.match(URL_REGEX) ? (
          <React.Fragment key={index}>
            <a
              href={`//${
                word.split("//")[1] === undefined ? word : word.split("//")[1]
              }`}
              target="_black"
              style={{
                color: linkColor,
              }}
            >
              {word}
            </a>{" "}
          </React.Fragment>
        ) : (
          word + " "
        );
      })}
    </span>
  );
}

export { DetectURLFromText }
