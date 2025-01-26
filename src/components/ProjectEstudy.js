import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectEstudy = ({ title, subtitle, description, time, img }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-estudy">
        {img && <img src={img} alt={title} />}
        <div>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
          <p>{description}</p>
          <footer>{time}</footer>
        </div>
      </div>
    </Col>
  );
};