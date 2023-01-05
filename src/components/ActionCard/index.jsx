import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ActionCard.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function ActionCard(props) {
  return (
    <a href={props.href} className="actionCard">
      <h2 className="actionCardLinkText">
        {props.text}{' '}
        <FontAwesomeIcon icon="arrow-right" className="link-icon" />
      </h2>
      <div className="actionCardLinkDesc">{props.desc}</div>
    </a>
  );
}
