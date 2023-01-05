import React from 'react';
import './OverviewBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function OverviewBox(props) {
  if (props.floating) {
    return (
      <div className="overview-box-wrapper">
        <div className="content-floating">
          <img className="img-floating" src={props.imgSrc}></img>
          <h3 className="title">{props.title}</h3>
          {props.children}
          <a className="action-link" href={props.linkHref}>
            {props.linkText}{' '}
            <FontAwesomeIcon icon="arrow-right" className="link-icon" />
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="overview-box-wrapper">
        <div className="content-left">
          <h3 className="title">{props.title}</h3>
          {props.children}
          <a
            className="action-link"
            href={props.linkHref}
            target={props.external ? '_blank' : ''}
          >
            {props.linkText}{' '}
            <FontAwesomeIcon icon="arrow-right" className="link-icon" />
          </a>
        </div>
        <div className="img-right-container">
          <img className="img-right" src={props.imgSrc}></img>
        </div>
      </div>
    );
  }
}
