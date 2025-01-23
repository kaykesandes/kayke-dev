import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav, Alert } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projDip1 from "../assets/img/project-img-diplomas1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({ status, message, onValidated }) => {

  const projects = [
    {
      title: "LibFt",
      description: "Recriando a libc",
      imgUrl: projImg1,
      url: "https://github.com/kaykesandes/libft_kg",
    },
    {
      title: "CodeWars",
      description: "Desafios de logica",
      imgUrl: projImg2,
      url: "https://github.com/kaykesandes/codewars",
    },
    {
      title: "Get_nex_line",
      description: "Função complexa de char",
      imgUrl: projImg3,
      url: "https://github.com/kaykesandes/get_next_line",
    },

  ];




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projetos</h2>
                  <p>Lista de projetos prontos, desde os mais complexos até os mais simples.</p>
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
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <div className="project-container">
                          <h3 className="title-project-diploma">Diploma de ensino superior</h3>
                          <img src={projDip1} className="img-project" alt="Diploma de ensino superior"></img>
                          <h4 className="project-title-curso">Ciência da Computação</h4>
                          <p className="p-project-text">
                            5 semestres de estudo, com foco em programação, matemática e lógica de programação.
                          </p>
                          <p className="p-project-date">Previsão de conclusão: 12/2026</p>
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
                        Trabalhei 2 anos em escritórios com administração e agora estou em busca de me especializar na área de Computação <br/>
                        <hr/>
                          <strong>Recanto dos Doces Auxiliar administrativo</strong>, minha tarefa diária era entrada de estoque e lançamento de contas a pagar, planilhas excel para controle e relatorio de financeiro.<br/>
                          <br/><strong>2024-2025</strong><br/>
                          <hr/>
                          <strong>Contabilidade Celina Estagio em administração</strong>, minha rotinia diária foi aprender e abosrver o maximo de conhecimento sobre a area de contabilidade, lançamento de notas fiscais, controle de estoque e atendimento ao cliente.
                          <br/><strong>2023-2024</strong><br/>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
