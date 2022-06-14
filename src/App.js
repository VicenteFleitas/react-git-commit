import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
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
      <Row>
        <Col>
          {commitList.map((c) => (
            <div key={c.sha}>{c.commit.message}</div>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default App;
