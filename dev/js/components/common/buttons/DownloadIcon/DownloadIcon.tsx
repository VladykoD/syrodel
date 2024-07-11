import React from 'react';
import {Link} from "react-router-dom";

type Props = {
  link: string;
  extension: string;
  text: string;
  size?: string;
}

export const DownloadIcon = ({link, extension, text, size}: Props) => {
  return <Link to={link} className="regular-link download-link" download>
    <span className="download-link__icon" datatype={extension}>
      <i className="arrow-icon"></i>
      <i className="arrow-icon--bottom"></i>
    </span>
    <span className="download-text">
      <span className="primary-text" dangerouslySetInnerHTML={{__html: text}}/>
      <span className="minor-text">{size}</span>
    </span>
  </Link>
}
