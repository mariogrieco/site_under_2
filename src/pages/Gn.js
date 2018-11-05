import React from 'react';
import {
  Button,
  Row,
  Col,
  Icon,
  InputNumber,
  // Calendar
} from 'antd';

export default () => (
  <div>
    {/* <Calendar /> */}
    <InputNumber />
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Row gutter={16}>
      <Col span={6}>
        Last updated by <strong>{ 'entry.lastUpdatedBy' }</strong>, <em>{ 'entry.updatedAt' }</em>
      </Col>
      <Col span={18}>
        <h2>{ 'entry.title' }</h2>
        <p><Icon type="tags-o" style={{ fontSize: '15px' }} /> { 'tagLinks' }</p>
        <p>{ 'entry.body' }</p>
      </Col>
    </Row>
  </div>
);

