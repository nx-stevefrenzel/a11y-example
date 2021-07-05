import React, { ReactElement } from 'react';

interface Props {
  content: string;
}

export default function RadioButtonBad({ content }: Props): ReactElement {
  return (
    <div className="radio-button-bad-wrapper">
      <input type="radio" />
      <span>{content}</span>
    </div>
  );
}
