import React, { useEffect, useState } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import { ProjectEstudy } from './ProjectEstudy';

export const Projects = ({ status, message, onValidated }) => {
  const [cursos, setCursos] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cursosResponse = await fetch('/data/cursos.json');
        const cursosData = await cursosResponse.json();
        setCursos(cursosData);

        const projectsResponse = await fetch('/data/project.json');
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
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
                        <div className='ERAAQOPROBLEMA'>
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
                      <p>
                          Trabalhei 2 anos em escritórios com administração e agora estou em busca de me especializar na área de Computação <br />
                          <hr />
                          <strong>Recanto dos Doces Auxiliar administrativo</strong> minha tarefa diária era entrada de estoque e lançamento de contas a pagar, planilhas Excel para controle e relatório financeiro.<br />
                          <br /><strong>2024-2025</strong><br />
                          <hr />
                          <strong>Contabilidade Celina Estágio em administração</strong> minha rotina diária foi aprender e absorver o máximo de conhecimento sobre a área de contabilidade, lançamento de notas fiscais, controle de estoque e atendimento ao cliente.
                          <br /><strong>2023-2024</strong><br />
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};