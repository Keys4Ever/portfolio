import React from 'react';

interface Props {
  fontSize: string;
}

const BlinkingUnderscore: React.FC<Props> = ({ fontSize }) => {
  return (
    <>
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            font-size: ${fontSize};
            line-height: 1;
            color: rgb(236, 72, 153);
            animation: blink 1s step-end infinite;
          }

          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
      <span className="blinking-cursor">_</span>
    </>
  );
};

export default BlinkingUnderscore;