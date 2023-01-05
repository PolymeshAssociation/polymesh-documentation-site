import React from 'react';

import './ActionCard.css';

export default function ActionCardWrapper(props) {
  return (
    <div className="wrapper">
      <h3 className="actionCardWrapperTitle">{props.title}</h3>
      <div className="content-wrapper">{props.children}</div>
    </div>
  );
}
