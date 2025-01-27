import React, { useRef } from 'react';
import { Tab, Nav, Row, Button } from 'react-bootstrap';
import ProjectEstudy from './ProjectEstudy';
import ProjectCard from './ProjectCard';

const Projects = ({ cursos, projects }) => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
      <h2>Informações</h2>
      <p>Informações pessoais que destacam minha trajetória e conquistas, refletindo meu compromisso com a excelência e a inovação. Cada detalhe aqui apresentado é uma peça fundamental na construção da minha jornada profissional e pessoal.</p>
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
          <Nav.Item>
            <Nav.Link eventKey="first">Formação acadêmica</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Projetos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Experiências profissionais</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content id="slideInUp">
          <Tab.Pane eventKey="first">
            <div className='ERAAQOPROBLEMA' ref={scrollRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
              <Button onClick={() => scroll(-100)}>Scroll Left</Button>
              <Button onClick={() => scroll(100)}>Scroll Right</Button>
              {
                cursos.map((project, index) => {
                  return (
                    <ProjectEstudy
                      key={index}
                      {...project}
                    />
                  )
                })
              }
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Row>
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  )
                })
              }
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            {/* Add content for third tab here */}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Projects;