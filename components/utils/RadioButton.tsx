import React, { ReactElement } from 'react';

interface Props {
  id: string;
  name: string;
  content: string;
}

export default function RadioButton({ id, name, content }: Props): ReactElement {
  return (
    <div className="radio-input">
      <input type="radio" id={id} name={name} value={id} />
      <label htmlFor={id}>{content}</label>
    </div>
  );
}
