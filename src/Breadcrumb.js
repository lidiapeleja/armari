import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumb className="paragraph">
            <React.Fragment>
              {breadcrumbs.map(({ breadcrumb }) => (
                <div key={breadcrumb.key} className="breadcrumb-item">
                  <Link to={breadcrumb.key}>{breadcrumb}</Link>
                </div>
              ))}
            </React.Fragment>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default Breadcrumbs;
