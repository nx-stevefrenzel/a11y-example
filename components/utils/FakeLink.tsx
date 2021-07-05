import React, { ReactElement } from 'react';

interface Props {
  url: string;
  content: string;
}

export default function FakeLink({ url, content }: Props): ReactElement {
  function openNewTab() {
    window.open(url);
  }

  return (
    <span className="fake-link" onClick={openNewTab}>
      {content}
    </span>
  );
}
