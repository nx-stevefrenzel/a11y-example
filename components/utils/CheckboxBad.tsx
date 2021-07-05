import React, { ReactElement } from 'react';

interface Props {
  content: string;
}

export default function CheckboxBad({ content }: Props): ReactElement {
  return (
    <div className="checkbox-bad-wrapper">
      <input type="checkbox" />
      <span>{content}</span>
    </div>
  );
}
