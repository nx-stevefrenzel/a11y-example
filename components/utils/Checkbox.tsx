import React, { ReactElement } from 'react';

interface Props {
  id: string;
  content: string;
}

export default function Checkbox({ id, content }: Props): ReactElement {
  return (
    <div className="checkbox-input">
      <input type="checkbox" name={id} id={id} />
      <label htmlFor={id}>{content}</label>
    </div>
  );
}
