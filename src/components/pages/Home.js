import React from 'react';
import '../../App.css'
import Hero from '../Hero'
import { Timeline } from 'react-twitter-widgets'
import Card from 'react-bootstrap/Card';
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Home() {
  return (
    <>
      <Hero />
      <div className="heading">
        <img src="https://i.imgur.com/0KsnPLk.png" height="100px" />
        <h1><b>What's the world saying about ASL?</b></h1>
      </div>
      <Container className="container">
        <Row className="row">
          <Col className="tweet">
            <Card className="card">
              <Card.Body>
                <Card.Header style={{
                  color: '#34B8FD'
                }}>#ASL tweets </Card.Header>
                <Card.Text>
                  <Timeline
                    dataSource={{
                      sourceType: 'list',
                      id: '1321683053203382272'
                    }}
                    options={{
                      chrome: 'noheader nofooter',
                      height: '350',
                      width: '5rem',
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="tweet-middle">
            <Card className="card-middle">
              <Card.Body>
                <Card.Header style={{
                  color: '#34B8FD'
                }}>Awareness on the 'feed</Card.Header>
                <Card.Text>
                  <Timeline
                    dataSource={{
                      sourceType: 'list',
                      id: '1321683053203382272'
                    }}
                    options={{
                      chrome: 'noheader nofooter',
                      height: '450',
                      width: '8rem',
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="tweet">
            <Card className="card">
              <Card.Body>
                <Card.Header style={{
                  color: '#34B8FD'
                }}>#ASLFacts</Card.Header>
                <Card.Text>
                  <Timeline
                    dataSource={{
                      sourceType: 'list',
                      id: '1321683053203382272'
                    }}
                    options={{
                      chrome: 'noheader nofooter',
                      height: '350',
                      width: '5rem',
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#"><i class="fab fa-facebook-square"></i></a>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-github-square"></i></a>
        </div>
        <div class="footer-left">
          <p>&copy; 2020</p>
        </div>
      </footer>

    </>
  )
}
export default Home;