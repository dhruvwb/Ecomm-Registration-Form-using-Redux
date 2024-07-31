import React, { useState } from "react";
import { Tab, Tabs, TabPane, Container } from "react-bootstrap";
export default function Tech() {
  const [activeTab, setActiveTab] = useState("mobile");
  return (
    <Container className="alignItems-center, justifyContent-center">
      <Tabs
        id="technologies-tabs"
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab)}
        className="w-100"
        style={{ width: "100%" }}
      >
        <Tab eventKey="mobile" title="Mobile">
          <TabPane eventKey="mobile">
            <h3>Mobile</h3>
            <ul>
              <li>Ios</li>
              <li>Android</li>
              <li>React Native</li>
              <li>Flutter</li>
              <li>Ionic</li>
            </ul>
          </TabPane>
        </Tab>
        <Tab eventKey="frontend" title="Frontend">
          <TabPane eventKey="frontend">
            <h3>Frontend</h3>
            <ul>
              <li>React Native</li>
            </ul>
          </TabPane>
        </Tab>
        <Tab eventKey="database" title="Database">
          <TabPane eventKey="database">
            <h3>Database</h3>
            <ul>{/* Add database technologies here */}</ul>
          </TabPane>
        </Tab>
        <Tab eventKey="backend" title="Backend">
          <TabPane eventKey="backend">
            <h3>Backend</h3>
            <ul>{/* Add backend technologies here */}</ul>
          </TabPane>
        </Tab>
        <Tab eventKey="cms" title="CMS">
          <TabPane eventKey="cms">
            <h3>CMS</h3>
            <ul>{/* Add CMS technologies here */}</ul>
          </TabPane>
        </Tab>
        <Tab eventKey="infra" title="Infra and DevOps">
          <TabPane eventKey="infra">
            <h3>Infra and DevOps</h3>
            <ul>
              <li>Flutter</li>
              <li>Ionic</li>
              <li>Swift</li>
            </ul>
          </TabPane>
        </Tab>
      </Tabs>
    </Container>
  );
}
