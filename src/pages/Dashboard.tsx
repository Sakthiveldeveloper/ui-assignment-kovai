import React, { useState } from "react";
import { Layout, Menu, Card, Row, Col, Typography, Button, Avatar, Statistic, Progress, Space } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  MessageOutlined,
  SettingOutlined,
  LogoutOutlined,
  RobotOutlined,
  RiseOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (key: string) => {
    if (key === "demo-chat") {
      navigate("/chat");
    }
  };

  const handleTryDemo = () => {
    navigate("/chat");
  };

  const handleStartChat = () => {
    navigate("/chat");
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "account",
      icon: <UserOutlined />,
      label: "My Account",
    },
    {
      key: "demo-chat",
      icon: <MessageOutlined />,
      label: "Demo Chat Service",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        style={{ 
          background: "#001529",
          boxShadow: "2px 0 8px rgba(0,0,0,0.15)"
        }}
      >
        <div style={{ 
          height: 64, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          borderBottom: "1px solid #1f1f1f",
          background: "#002140"
        }}>
          <RobotOutlined style={{ fontSize: 24, color: "#1890ff" }} />
          {!collapsed && (
            <Title level={4} style={{ color: "white", margin: "0 0 0 12px" }}>
              AI Chat Pro
            </Title>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={menuItems}
          onClick={({ key }) => handleMenuClick(key)}
          style={{ borderRight: 0 }}
        />
      </Sider>
      
      <Layout>
        <Header style={{ 
          background: "#fff", 
          padding: "0 24px", 
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
        }}>
          <Title level={4} style={{ margin: 0, color: "#262626" }}>
            Dashboard
          </Title>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#1890ff" }} />
            <Text strong style={{ color: "#262626" }}>Welcome back, User!</Text>
          </div>
        </Header>
        
        <Content style={{ 
          margin: "24px", 
          minHeight: 280,
          background: "transparent"
        }}>
          {/* User Stats Section */}
          <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable style={{ borderRadius: "12px" }}>
                <Statistic
                  title="Total Chats"
                  value={1247}
                  prefix={<MessageOutlined style={{ color: "#1890ff" }} />}
                  valueStyle={{ color: "#1890ff", fontSize: "24px" }}
                />
                <Progress percent={85} showInfo={false} style={{ marginTop: 12 }} strokeColor="#1890ff" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable style={{ borderRadius: "12px" }}>
                <Statistic
                  title="AI Accuracy"
                  value={94.2}
                  suffix="%"
                  prefix={<CheckCircleOutlined style={{ color: "#52c41a" }} />}
                  valueStyle={{ color: "#52c41a", fontSize: "24px" }}
                />
                <Progress percent={94} showInfo={false} style={{ marginTop: 12 }} strokeColor="#52c41a" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable style={{ borderRadius: "12px" }}>
                <Statistic
                  title="Response Time"
                  value={1.2}
                  suffix="s"
                  prefix={<ClockCircleOutlined style={{ color: "#faad14" }} />}
                  valueStyle={{ color: "#faad14", fontSize: "24px" }}
                />
                <Progress percent={78} showInfo={false} style={{ marginTop: 12 }} strokeColor="#faad14" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable style={{ borderRadius: "12px" }}>
                <Statistic
                  title="Customer Rating"
                  value={4.8}
                  suffix={<StarOutlined style={{ color: "#722ed1" }} />}
                  prefix={<RiseOutlined style={{ color: "#722ed1" }} />}
                  valueStyle={{ color: "#722ed1", fontSize: "24px" }}
                />
                <Progress percent={96} showInfo={false} style={{ marginTop: 12 }} strokeColor="#722ed1" />
              </Card>
            </Col>
          </Row>

          {/* Service Overview Cards */}
          <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
            <Col xs={24} lg={12}>
              <Card 
                title={<span style={{ fontSize: "16px", fontWeight: 600 }}>Active Services</span>}
                extra={<Button type="primary" size="small">View All</Button>}
                style={{ height: "100%", borderRadius: "12px" }}
                hoverable
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: "16px",
                    background: "#f8f9fa",
                    borderRadius: "8px",
                    border: "1px solid #e8e8e8"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <RobotOutlined style={{ color: "#1890ff", fontSize: "18px" }} />
                      <div>
                        <Text strong style={{ fontSize: "14px" }}>Customer Support Bot</Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: "12px" }}>Online - 24/7</Text>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Text strong style={{ fontSize: "14px" }}>1,247 chats</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: "12px" }}>This month</Text>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: "16px",
                    background: "#f8f9fa",
                    borderRadius: "8px",
                    border: "1px solid #e8e8e8"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <RobotOutlined style={{ color: "#52c41a", fontSize: "18px" }} />
                      <div>
                        <Text strong style={{ fontSize: "14px" }}>Sales Assistant</Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: "12px" }}>Online - 9AM-6PM</Text>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Text strong style={{ fontSize: "14px" }}>892 chats</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: "12px" }}>This month</Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            
            <Col xs={24} lg={12}>
              <Card 
                title={<span style={{ fontSize: "16px", fontWeight: 600 }}>Quick Actions</span>}
                style={{ height: "100%", borderRadius: "12px" }}
                hoverable
              >
                <Space direction="vertical" style={{ width: "100%" }} size="middle">
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<MessageOutlined />}
                    onClick={handleTryDemo}
                    style={{ width: "100%", height: "48px", borderRadius: "8px" }}
                  >
                    Try Demo
                  </Button>
                  <Button 
                    size="large" 
                    icon={<SettingOutlined />}
                    style={{ width: "100%", height: "48px", borderRadius: "8px" }}
                  >
                    Configure New Bot
                  </Button>
                  <Button 
                    size="large" 
                    icon={<RiseOutlined />}
                    style={{ width: "100%", height: "48px", borderRadius: "8px" }}
                  >
                    View Analytics
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>

          {/* Demo Services Preview */}
          <Card 
            title={<span style={{ fontSize: "16px", fontWeight: 600 }}>Demo Services Preview</span>}
            extra={<Button type="primary" onClick={handleStartChat} size="large">Start Chat</Button>}
            style={{ marginBottom: 24, borderRadius: "12px" }}
            hoverable
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12} md={8}>
                <Card 
                  size="small" 
                  bordered={false}
                  style={{ 
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "12px",
                    cursor: "pointer"
                  }}
                  hoverable
                >
                  <RobotOutlined style={{ fontSize: 32, marginBottom: 16 }} />
                  <Title level={4} style={{ color: "white", marginBottom: 8 }}>
                    Customer Support
                  </Title>
                  <Paragraph style={{ color: "rgba(255,255,255,0.9)", margin: 0 }}>
                    AI-powered customer service bot
                  </Paragraph>
                </Card>
              </Col>
              
              <Col xs={24} sm={12} md={8}>
                <Card 
                  size="small" 
                  bordered={false}
                  style={{ 
                    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "12px",
                    cursor: "pointer"
                  }}
                  hoverable
                >
                  <RobotOutlined style={{ fontSize: 32, marginBottom: 16 }} />
                  <Title level={4} style={{ color: "white", marginBottom: 8 }}>
                    Sales Assistant
                  </Title>
                  <Paragraph style={{ color: "rgba(255,255,255,0.9)", margin: 0 }}>
                    Lead qualification and sales support
                  </Paragraph>
                </Card>
              </Col>
              
              <Col xs={24} sm={12} md={8}>
                <Card 
                  size="small" 
                  bordered={false}
                  style={{ 
                    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "12px",
                    cursor: "pointer"
                  }}
                  hoverable
                >
                  <RobotOutlined style={{ fontSize: 32, marginBottom: 16 }} />
                  <Title level={4} style={{ color: "white", marginBottom: 8 }}>
                    Technical Support
                  </Title>
                  <Paragraph style={{ color: "rgba(255,255,255,0.9)", margin: 0 }}>
                    Troubleshooting and technical help
                  </Paragraph>
                </Card>
              </Col>
            </Row>
            
            <div style={{ 
              marginTop: 24, 
              padding: "24px", 
              background: "#f8f9fa", 
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid #e8e8e8"
            }}>
              <Paragraph style={{ marginBottom: 16, fontSize: "14px" }}>
                Experience the power of our AI chat solutions with our interactive demo.
                Test different scenarios and see how our bots handle various customer inquiries.
              </Paragraph>
              <Button 
                type="primary" 
                size="large" 
                icon={<MessageOutlined />}
                onClick={handleStartChat}
                style={{ borderRadius: "8px", height: "48px" }}
              >
                Start Demo Chat
              </Button>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
