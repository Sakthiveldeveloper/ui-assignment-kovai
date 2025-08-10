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
import { useResponsive } from "../hooks/useResponsive";
import "../style/Dashboard.css";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
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
    <Layout className="dashboard-layout">
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        className="dashboard-sider"
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        width={240}
      >
        <div className="dashboard-sider-header">
          <RobotOutlined className="sider-logo" />
          {!collapsed && (
            <Title level={4} className="sider-title">
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
        />
      </Sider>
      
      <Layout>
        <Header className="dashboard-header">
          <div className="header-left">
            <Button 
              type="text" 
              icon={<DashboardOutlined />} 
              onClick={() => setCollapsed(!collapsed)}
              className={`menu-toggle-btn ${isMobile || isTablet ? 'mobile-only' : 'desktop-only'}`}
            />
            <Title level={4} className="dashboard-title">
              Dashboard
            </Title>
          </div>
          <div className="header-right">
            <Avatar 
              icon={<UserOutlined />} 
              className="user-avatar"
            />
            <Text strong className={`user-welcome ${isMobile ? 'mobile-hidden' : ''}`}>
              Welcome back, User!
            </Text>
          </div>
        </Header>
        
        <Content className="dashboard-content">
          <Row gutter={[16, 16]} className="stats-row">
            <Col xs={24} sm={12} md={6}>
              <Card hoverable className="stats-card">
                <Statistic
                  title="Total Chats"
                  value={1247}
                  prefix={<MessageOutlined className="stats-icon blue" />}
                  valueStyle={{ color: "#1890ff", fontSize: 24 }}
                />
                <Progress percent={85} showInfo={false} className="stats-progress" strokeColor="#1890ff" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable className="stats-card">
                <Statistic
                  title="AI Accuracy"
                  value={94.2}
                  suffix="%"
                  prefix={<CheckCircleOutlined className="stats-icon green" />}
                  valueStyle={{ color: "#52c41a", fontSize: 24 }}
                />
                <Progress percent={94} showInfo={false} className="stats-progress" strokeColor="#52c41a" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable className="stats-card">
                <Statistic
                  title="Response Time"
                  value={1.2}
                  suffix="s"
                  prefix={<ClockCircleOutlined style={{ color: "#faad14" }} />}
                  valueStyle={{ color: "#faad14", fontSize: 24 }}
                />
                <Progress percent={78} showInfo={false} style={{ marginTop: 12 }} strokeColor="#faad14" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable className="stats-card">
                <Statistic
                  title="Customer Rating"
                  value={4.8}
                  suffix={<StarOutlined style={{ color: "#722ed1" }} />}
                  prefix={<RiseOutlined style={{ color: "#722ed1" }} />}
                  valueStyle={{ color: "#722ed1", fontSize: 24 }}
                />
                <Progress percent={96} showInfo={false} style={{ marginTop: 12 }} strokeColor="#722ed1" />
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} className="service-row">
            <Col xs={24} lg={12}>
              <Card 
                title={<span className="service-card-title">
                  Active Services
                </span>}
                extra={<Button type="primary" size="small">View All</Button>}
                className="service-card"
                hoverable
              >
                <div className="service-items-container">
                  <div className="service-item">
                    <div className="service-info">
                                              <RobotOutlined className="service-icon blue" />
                      <div className="service-details">
                        <Text strong className="service-name">
                          Customer Support Bot
                        </Text>
                        <br />
                        <Text type="secondary" className="service-status">
                          Online - 24/7
                        </Text>
                      </div>
                    </div>
                    <div className="service-stats">
                      <Text strong className="service-count">
                        1,247 chats
                      </Text>
                      <br />
                      <Text type="secondary" className="service-period">
                        This month
                      </Text>
                    </div>
                  </div>
                  
                  <div className="service-item">
                    <div className="service-info">
                                              <RobotOutlined className="service-icon green" />
                      <div className="service-details">
                        <Text strong className="service-name">
                          Sales Assistant
                        </Text>
                        <br />
                        <Text type="secondary" className="service-status">
                          Online - 9AM-6PM
                        </Text>
                      </div>
                    </div>
                    <div className="service-stats">
                      <Text strong className="service-count">
                        892 chats
                      </Text>
                      <br />
                      <Text type="secondary" className="service-period">
                        This month
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            
            <Col xs={24} lg={12}>
              <Card 
                title={<span className="service-card-title">
                  Quick Actions
                </span>}
                className="quick-actions-card"
                hoverable
              >
                <Space direction="vertical" className="quick-actions-space" size="middle">
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<MessageOutlined />}
                    onClick={handleTryDemo}
                    className="action-button"
                  >
                    Try Demo
                  </Button>
                  <Button 
                    size="large" 
                    icon={<SettingOutlined />}
                    className="action-button"
                  >
                    Configure New Bot
                  </Button>
                  <Button 
                    size="large" 
                    icon={<RiseOutlined />}
                    className="action-button"
                  >
                    View Analytics
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>

          <Card 
            title={<span className="service-card-title">
              Demo Services Preview
            </span>}
            extra={<Button 
              type="primary" 
              onClick={handleStartChat} 
              size={isMobile ? "middle" : "large"}
              className="demo-start-btn"
            >
              Start Chat
            </Button>}
            className="demo-services-card"
            hoverable
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8}>
                <Card 
                  size="small" 
                  bordered={false}
                  className="demo-service-item"
                  hoverable
                >
                  <RobotOutlined className="demo-service-icon" />
                  <Title level={4} className="demo-service-title">
                    Customer Support
                  </Title>
                  <Paragraph className="demo-service-desc">
                    AI-powered customer service bot
                  </Paragraph>
                </Card>
              </Col>
              
              <Col xs={24} sm={12} md={8}>
                <Card 
                  size="small" 
                  bordered={false}
                  className="demo-service-item sales"
                  hoverable
                >
                  <RobotOutlined className="demo-service-icon" />
                  <Title level={4} className="demo-service-title">
                    Sales Assistant
                  </Title>
                  <Paragraph className="demo-service-desc">
                    Lead qualification and sales support
                  </Paragraph>
                </Card>
              </Col>
              
              <Col xs={24} sm={12} md={8}>
                <Card 
                  size="small" 
                  bordered={false}
                  className="demo-service-item technical"
                  hoverable
                >
                  <RobotOutlined className="demo-service-icon" />
                  <Title level={4} className="demo-service-title">
                    Technical Support
                  </Title>
                  <Paragraph className="demo-service-desc">
                    Troubleshooting and technical help
                  </Paragraph>
                </Card>
              </Col>
            </Row>
            
            <div className="demo-info-section">
              <Paragraph className="demo-description">
                Experience the power of our AI chat solutions with our interactive demo.
                Test different scenarios and see how our bots handle various customer inquiries.
              </Paragraph>
              <Button 
                type="primary" 
                size={isMobile ? "middle" : "large"}
                icon={<MessageOutlined />}
                onClick={handleStartChat}
                className="demo-start-btn"
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
