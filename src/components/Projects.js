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
                            Trabalhei 2 anos em escritórios com administração e agora estou em busca de me especializar na área de Computação.<br />
                            <hr />

                            <strong>Kodland Latinoamérica · Game Development Instructor (Freelance)</strong><br />
                            <em>mar de 2025 - o momento · 4 meses · Remoto</em><br />
                            Atuo como instrutor de desenvolvimento de jogos para alunos de 9 a 17 anos em toda a América Latina.<br />
                            👨‍🏫 Mais de 150 alunos ensinados usando Roblox Studio, Lua e Python introdutório, abordando lógica de jogos, scripting e design criativo.<br />
                            🛠️ Implementação de Unix3D em projetos colaborativos, promovendo trabalho em equipe, resolução de problemas e fluência digital.<br />
                            🎯 Aulas práticas desde o primeiro dia, incentivando criatividade, confiança e domínio tecnológico.<br />
                            <hr />

                            <strong>Guardião Pro · (PJ) VideoMaker (Tempo integral)</strong><br />
                            <em>dez de 2024 - mar de 2025 · 4 meses · Remoto</em><br />
                            🔧 Planejamento e montagem do estúdio de gravação (luz, som, câmera e cenário).<br />
                            Configuração profissional do OBS Studio para gravações e transmissões.<br />
                            Criação do site institucional e plataforma de cursos.<br />
                            Otimização de performance e usabilidade.<br />
                            💰 Redução de mais de 30% dos custos previstos com soluções técnicas eficientes.<br />
                            Entrega de infraestrutura pronta e funcional, garantindo qualidade de produção audiovisual.<br />
                            <hr />

                            <strong>Recanto dos Doces · Auxiliar administrativo (Tempo integral)</strong><br />
                            <em>mar de 2023 - dez de 2024 · 1 ano 10 meses · Híbrido</em><br />
                            Entrada de estoque, lançamento de contas a pagar, planilhas Excel para controle e relatório financeiro.<br />
                            <hr />

                            <strong>Contabilidade Celina · Estágio em administração</strong><br />
                            <em>2023-2024</em><br />
                            Lançamento de notas fiscais, controle de estoque e atendimento ao cliente.<br />
                            <hr />

                            <strong>Mcg Soluções Administrativa · Estágio (Meio período)</strong><br />
                            <em>2022 - dez de 2022 · 1 ano · Remoto</em><br />
                            Importação, assistência pessoal e outras competências.<br />
                            <hr />

                            <strong>Santander Brasil · Aprendiz (Meio período)</strong><br />
                            <em>jan de 2020 - out de 2021 · 1 ano 10 meses</em><br />
                            Aprendiz.<br />
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