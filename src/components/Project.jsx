import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Todo from "../img/Todo list.png";
import "../css/project.css"

console.log(Todo);

function Project() {
     return (
        <div className="project-content">
            <div className="project-container">
                <div className="project-title">
                    <h1>Myproject</h1>
                </div>
                <div className="project-show">
                    <div className="project-card">
                    <Card style={{ width: '18rem' }}>
                        <img src={Todo} alt="Todo" />
                            <Card.Body>
                                <Card.Title>Todo List Project React</Card.Title>
                                <Card.Text>
                                  <p>project ini project react pertama saya yang saya buat untk mempelajari react js</p>
                                </Card.Text>
                                <Button variant="primary" href="https://qh5pw8.csb.app/" className="Buttonview">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-card">
                    <Card style={{ width: '18rem' }}>
                        <img src={Todo} alt="Todo" />
                            <Card.Body>
                                <Card.Title>Todo List Project React</Card.Title>
                                <Card.Text>
                                  <p>project ini project react pertama saya yang saya buat untk mempelajari react js</p>
                                </Card.Text>
                                <Button variant="primary" href="https://qh5pw8.csb.app/" className="Buttonview">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-card">
                    <Card style={{ width: '18rem' }}>
                        <img src={Todo} alt="Todo" />
                            <Card.Body>
                                <Card.Title>Todo List Project React</Card.Title>
                                <Card.Text>
                                  <p>project ini project react pertama saya yang saya buat untk mempelajari react js</p>
                                </Card.Text>
                                <Button variant="primary" href="https://qh5pw8.csb.app/" className="Buttonview">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="project-card">
                    <Card style={{ width: '18rem' }}>
                        <img src={Todo} alt="Todo" />
                            <Card.Body>
                                <Card.Title>Todo List Project React</Card.Title>
                                <Card.Text>
                                  <p>project ini project react pertama saya yang saya buat untk mempelajari react js</p>
                                </Card.Text>
                                <Button variant="primary" href="https://qh5pw8.csb.app/" className="Buttonview">view</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Project;