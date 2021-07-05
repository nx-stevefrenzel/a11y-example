import React, { CSSProperties, ReactElement } from 'react';

interface Props {
  content: string;
  style: CSSProperties;
}

export default function ProgressBad({ content, style }: Props): ReactElement {
  return (
    <div className="progress-wrapper">
      <div className="progress-label">{content}</div>
      <div className="progress-bar">
        <span className="progress-value" style={style}></span>
      </div>
    </div>
  );
}
