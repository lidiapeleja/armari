import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumb className="paragraph">
            <React.Fragment>
              {breadcrumbs.map(({ breadcrumb }) => (
                <Breadcrumb.Item key={breadcrumb.key} href={breadcrumb.key}>
                  {breadcrumb}
                </Breadcrumb.Item>
              ))}
            </React.Fragment>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default Breadcrumbs;
