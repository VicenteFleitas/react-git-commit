import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { getCommits } from "./api/gitApi";

function App() {
  // ToastAlert vars
  const [commitList, setCommitList] = useState([]);
  useEffect(() => {
    getCommits().then((res) => {
      if (res.data) {
        setCommitList(res.data);
      }
    });
  }, []);
  // render
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {commitList.map((c) => (
              <div key={c.sha}>
                <Col className="p-2 mt-4 rounded shadow">
                  <Row className="ml-2 mb-1">
                    <h6>{c.commit.message}</h6>
                  </Row>
                  <Row className="ml-2">
                    <Col>
                      <img
                        style={{ width: "36px", borderRadius: "50%" }}
                        src={c.author.avatar_url}
                      ></img>
                    </Col>
                    <Col className="text-muted">
                      {c.commit.author.name} committed on {c.commit.author.date}
                    </Col>
                  </Row>
                </Col>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
