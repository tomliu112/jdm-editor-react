import React, {useState} from "react";
import {Form, Input, Select, DatePicker, Button, Table, Card, Row, Col, Space, Transfer} from "antd";

const { RangePicker } = DatePicker;

const WorkQueueMonitor = () => {
  const [form] = Form.useForm();
  const [selectedFields, setSelectedFields] = useState([]);

  const columns = [
    { title: "Transaction Date", dataIndex: "transactionDate" },
    { title: "Client Code", dataIndex: "clientCode" },
    { title: "Policy No", dataIndex: "policyNo" },
    { title: "VIP", dataIndex: "vip" },
    { title: "Certificate No", dataIndex: "certificateNo" },
    { title: "Dependent", dataIndex: "dependent" },
    { title: "Reference No", dataIndex: "referenceNo" },
    { title: "Claimant", dataIndex: "claimant" },
    { title: "Claim No", dataIndex: "claimNo" },
    { title: "Incur Date", dataIndex: "incurDate" }
  ];

  const data = [];
  const fieldOptions = [
    'Field A', 'Field B', 'Field C', 'Field D', 'Field E','Field A1', 'Field B2', 'Field C1', 'Field D1', 'Field E1'
  ];

  const handleSearch = () => {
    console.log("查询条件:", form.getFieldsValue());
  };
  const leftFields = [
    'WF System', 'User Type', 'User ID', 'Queue ID', 'Workflow Status',
    'TX Code', 'Skill Set', 'Final QC', 'QC Reason', 'QC User ID', 'VIP'
  ];
  return (
    <div style={{ padding: 16 }}>
      <Card title="eClaim Work Queue Monitor" bordered={false}>
        <Row
          gutter={16}
          wrap={false}
          style={{ display: 'flex', alignItems: 'stretch', height: '500px' }} // 关键：上下对齐，等高
        >
          {/* 左侧 */}
          <Col xs={24} sm={12} md={6} style={{ display: 'flex', flexDirection: 'column' }}>
            <Card title="Filters" size="small" style={{ flex: 1 }}>
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                {leftFields.map((field, idx) => (
                  <Row key={idx} align="middle" gutter={8}>
                    <Col flex="100px" style={{ textAlign: 'right' }}>{field}:</Col>
                    <Col flex="auto">
                      <Select style={{ width: '100%' }}>
                        <Option value="option1">Option 1</Option>
                        <Option value="option2">Option 2</Option>
                      </Select>
                    </Col>
                  </Row>
                ))}
              </Space>
            </Card>
          </Col>

          {/* 中间 */}
          <Col xs={24} sm={24} md={9} style={{ display: 'flex', flexDirection: 'column' }}>
            <Card title="Date & Input" size="small" style={{ flex: 1 }}>
              <div style={{ marginBottom: 16 }}>
                <RangePicker style={{ width: '100%', marginBottom: 8 }} />
                <RangePicker style={{ width: '100%', marginBottom: 12 }} />
              </div>
              <Input placeholder="Client Code" style={{ marginBottom: 8 }} />
              <Input placeholder="Policy No" style={{ marginBottom: 8 }} />
              <Input placeholder="Cert No" style={{ marginBottom: 8 }} />
              <Input placeholder="MemID/InvNo" style={{ marginBottom: 8 }} />
              <Input placeholder="Family ID" style={{ marginBottom: 8 }} />
              <Input placeholder="Provider ID" />
            </Card>
          </Col>

          {/* 右侧 Field Chooser */}
          <Col xs={24} sm={24} md={9} style={{ display: 'flex', flexDirection: 'column' }}>
            <Card title="Field Chooser" size="small" style={{ flex: 1 }}>
              <Transfer
                dataSource={fieldOptions.map((item, index) => ({
                  key: index.toString(),
                  title: item,
                }))}
                titles={['Available Fields', 'Selected Fields']}
                targetKeys={selectedFields}
                onChange={setSelectedFields}
                render={item => item.title}
                listStyle={{
                  width: '45%',
                  height: 450,
                }}
                operations={['→', '←']}
              />
            </Card>
          </Col>
        </Row>
      </Card>

      <Card title="Work Detail Result" style={{ marginTop: 16 }}>
        <Table columns={columns} dataSource={data} rowKey="claimNo" />
      </Card>

      <Card title="Summary" style={{ marginTop: 16 }}>
        <Row gutter={16}>
          <Col>
            <Button>Report Generation</Button>
          </Col>
          <Col>
            <Button>Work Queue</Button>
          </Col>
          <Col>
            <Button>Work In Progress</Button>
          </Col>
          <Col>
            <Button>Not Processed</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default WorkQueueMonitor;
