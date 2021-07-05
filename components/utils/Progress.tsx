import React, { ReactElement } from 'react';

interface Props {
  id: string;
  value: string;
  content: string;
}

export default function Progress({ id, content, value }: Props): ReactElement {
  return (
    <div className="progress-bar">
      <label htmlFor={id}>{content}</label>
      <progress id={id} max="100" value={value} aria-hidden="true" />
    </div>
  );
}
