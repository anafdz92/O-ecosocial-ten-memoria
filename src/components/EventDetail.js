import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const EventDetail = (props) => {
  console.log(props);

  const linksli = props.conflict.links.map((link, index) => {
    return (
      <li key={index}>
        <p>Enlaces:</p>
        <a href={link}>{link}</a>
      </li>
    );
  });
  return (
    <article className="modal">
      <div className="content">
        <Link to="/">
          <button className="close">
            <i class="fas fa-times"></i>
          </button>
        </Link>
        <img src={props.conflict.url} alt={props.conflict.name}></img>
        <div className="info">
          <h2>{props.conflict.name}</h2>
          <ul className="modalList">
            <li>Ano: {props.conflict.year}</li>
            <li>Lugar: {props.conflict.location}</li>
            <li>O que: {props.conflict.what}</li>
            <ul className="links">{linksli}</ul>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default withRouter(EventDetail);
