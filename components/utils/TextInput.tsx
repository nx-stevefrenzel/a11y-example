import React, { ReactElement } from 'react';

interface Props {
  id: string;
  inputType: string;
  content: string;
  placeholder?: string;
}

export default function TextInput({ id, inputType, content, placeholder }: Props): ReactElement {
  return (
    <div className="text-input">
      <label htmlFor={id}>{content}</label>
      <input type={inputType} name={id} id={id} placeholder={placeholder} required />
    </div>
  );
}
