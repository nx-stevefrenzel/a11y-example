import React, { ReactElement } from 'react';

interface Props {
  value: string;
  content: string;
}

export default function Progress({ content, value }: Props): ReactElement {
  return (
    <div className="progress-bar">
      <span>{content}</span>
      <progress max="100" value={value} aria-hidden="true" />
    </div>
  );
}
