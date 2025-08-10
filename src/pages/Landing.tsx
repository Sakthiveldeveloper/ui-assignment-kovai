import React from "react";
import { Layout, Typography, Button, Row, Col, Card, Divider, Space, Avatar } from "antd";
import {
  RobotOutlined,
  MessageOutlined,
  GlobalOutlined,
  ApiOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  StarOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          background: "#fff",
          padding: "0 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #f0f0f0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <RobotOutlined style={{ fontSize: 32, color: "#1890ff", marginRight: 12 }} />
          <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
            AI Chat Pro
          </Title>
        </div>
        <div>
          <Button type="text" style={{ marginRight: 16 }}>
            Features
          </Button>
          <Button type="text" style={{ marginRight: 16 }}>
            About
          </Button>
          <Button type="text" style={{ marginRight: 16 }}>
            Pricing
          </Button>
          <Button type="primary" onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>
      </Header>

      {/* Hero Section */}
      <Content style={{ padding: "80px 50px 50px" }}>
        <Row gutter={[40, 40]} align="middle" style={{ marginBottom: 80 }}>
          <Col xs={24} md={12}>
            <Title level={1} style={{ fontSize: "3.5rem", lineHeight: 1.2 }}>
              Transform Your Business with{" "}
              <span style={{ color: "#1890ff" }}>AI Chat</span>
            </Title>
            <Paragraph style={{ fontSize: 20, color: "#555", marginBottom: 32 }}>
              Empower your business with intelligent, 24/7 AI chat support. 
              Multilingual, scalable, and always ready to help your customers.
            </Paragraph>
            <Space size="large">
              <Button type="primary" size="large" onClick={handleGetStarted}>
                Get Started
              </Button>
              <Button size="large">Watch Demo</Button>
            </Space>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 20,
              padding: 40,
              textAlign: "center",
              color: "white"
            }}>
              <RobotOutlined style={{ fontSize: 120, marginBottom: 20 }} />
              <Title level={2} style={{ color: "white", marginBottom: 16 }}>
                AI-Powered Conversations
              </Title>
              <Paragraph style={{ color: "rgba(255,255,255,0.9)", fontSize: 16 }}>
                Natural language processing that understands and responds like a human
              </Paragraph>
            </div>
          </Col>
        </Row>

        {/* About Section */}
        <div style={{ marginBottom: 80 }}>
          <Row gutter={[40, 40]} align="middle">
            <Col xs={24} md={12}>
              <Title level={2}>Who We Are</Title>
              <Paragraph style={{ fontSize: 16, color: "#555", marginBottom: 24 }}>
                We are pioneers in AI-powered customer service solutions, dedicated to helping 
                businesses provide exceptional customer experiences through intelligent automation.
              </Paragraph>
              <Title level={4}>Our Mission</Title>
              <Paragraph style={{ fontSize: 16, color: "#555", marginBottom: 24 }}>
                To democratize AI technology and make advanced customer service accessible 
                to businesses of all sizes, enabling them to compete with industry giants.
              </Paragraph>
              <Title level={4}>How AI Chat Helps Businesses</Title>
              <Paragraph style={{ fontSize: 16, color: "#555" }}>
                Our AI chat solutions reduce response times, increase customer satisfaction, 
                and provide 24/7 support while significantly cutting operational costs.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ 
                background: "#f8f9fa",
                borderRadius: 16,
                padding: 40,
                textAlign: "center"
              }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
                <Title level={3}>Trusted by 10,000+ Companies</Title>
                <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 20 }}>
                  <Avatar size={64} style={{ backgroundColor: "#1890ff" }}>A</Avatar>
                  <Avatar size={64} style={{ backgroundColor: "#52c41a" }}>B</Avatar>
                  <Avatar size={64} style={{ backgroundColor: "#faad14" }}>C</Avatar>
                  <Avatar size={64} style={{ backgroundColor: "#f5222d" }}>D</Avatar>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Features Section */}
        <div style={{ marginBottom: 80 }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: 16 }}>
            Key Benefits
          </Title>
          <Paragraph style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px", fontSize: 16 }}>
            Discover why leading businesses choose our AI chat solutions
          </Paragraph>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ textAlign: "center", height: "100%", borderRadius: 16 }}
                hoverable
              >
                <ClockCircleOutlined style={{ fontSize: 48, color: "#1890ff", marginBottom: 16 }} />
                <Title level={4}>24/7 Chat Support</Title>
                <Paragraph>
                  Never miss a customer inquiry. Our AI provides instant responses 
                  around the clock, ensuring your business is always available.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ textAlign: "center", height: "100%", borderRadius: 16 }}
                hoverable
              >
                <GlobalOutlined style={{ fontSize: 48, color: "#52c41a", marginBottom: 16 }} />
                <Title level={4}>Multilingual AI</Title>
                <Paragraph>
                  Break language barriers with AI that speaks 50+ languages. 
                  Serve customers worldwide in their native language.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ textAlign: "center", height: "100%", borderRadius: 16 }}
                hoverable
              >
                <ApiOutlined style={{ fontSize: 48, color: "#faad14", marginBottom: 16 }} />
                <Title level={4}>API Access</Title>
                <Paragraph>
                  Integrate seamlessly with your existing systems through our 
                  powerful REST API and webhook support.
                </Paragraph>
              </Card>
            </Col>
          </Row>
          
          <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ textAlign: "center", height: "100%", borderRadius: 16 }}
                hoverable
              >
                <MessageOutlined style={{ fontSize: 48, color: "#722ed1", marginBottom: 16 }} />
                <Title level={4}>Smart Conversations</Title>
                <Paragraph>
                  Advanced NLP that understands context and provides 
                  human-like, intelligent responses to complex queries.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ textAlign: "center", height: "100%", borderRadius: 16 }}
                hoverable
              >
                <CheckCircleOutlined style={{ fontSize: 48, color: "#13c2c2", marginBottom: 16 }} />
                <Title level={4}>Easy Integration</Title>
                <Paragraph>
                  Simple setup process with pre-built templates and 
                  comprehensive documentation for quick deployment.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ textAlign: "center", height: "100%", borderRadius: 16 }}
                hoverable
              >
                <StarOutlined style={{ fontSize: 48, color: "#eb2f96", marginBottom: 16 }} />
                <Title level={4}>Analytics & Insights</Title>
                <Paragraph>
                  Detailed analytics and performance metrics to optimize 
                  your customer service and track AI effectiveness.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Pricing Section */}
        <div style={{ marginBottom: 80 }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: 16 }}>
            Choose Your Plan
          </Title>
          <Paragraph style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px", fontSize: 16 }}>
            Start free and scale as you grow
          </Paragraph>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ textAlign: "center", borderRadius: 16, border: "2px solid #f0f0f0" }}
                hoverable
              >
                <Title level={3}>Free</Title>
                <Title level={1} style={{ color: "#1890ff" }}>$0</Title>
                <Paragraph style={{ fontSize: 16 }}>Perfect for getting started</Paragraph>
                <Divider />
                <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                  <li>100 messages/month</li>
                  <li>Basic AI responses</li>
                  <li>Email support</li>
                  <li>Standard templates</li>
                </ul>
                <Button type="default" size="large" style={{ marginTop: 16 }}>
                  Start Free
                </Button>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ 
                  textAlign: "center", 
                  borderRadius: 16, 
                  border: "2px solid #1890ff",
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 25px rgba(24, 144, 255, 0.15)"
                }}
                hoverable
              >
                <div style={{ 
                  background: "#1890ff", 
                  color: "white", 
                  padding: "8px 16px", 
                  borderRadius: "20px", 
                  fontSize: 12,
                  marginBottom: 16,
                  display: "inline-block"
                }}>
                  MOST POPULAR
                </div>
                <Title level={3}>Pro</Title>
                <Title level={1} style={{ color: "#1890ff" }}>$29</Title>
                <Paragraph style={{ fontSize: 16 }}>For growing businesses</Paragraph>
                <Divider />
                <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                  <li>10,000 messages/month</li>
                  <li>Advanced AI with custom training</li>
                  <li>Priority support</li>
                  <li>Custom integrations</li>
                  <li>Analytics dashboard</li>
                </ul>
                <Button type="primary" size="large" style={{ marginTop: 16 }}>
                  Start Pro
                </Button>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ textAlign: "center", borderRadius: 16, border: "2px solid #f0f0f0" }}
                hoverable
              >
                <Title level={3}>Enterprise</Title>
                <Title level={1} style={{ color: "#1890ff" }}>Custom</Title>
                <Paragraph style={{ fontSize: 16 }}>For large organizations</Paragraph>
                <Divider />
                <ul style={{ textAlign: "left", paddingLeft: 20 }}>
                  <li>Unlimited messages</li>
                  <li>Custom AI models</li>
                  <li>Dedicated support</li>
                  <li>White-label solution</li>
                  <li>Advanced security</li>
                </ul>
                <Button type="default" size="large" style={{ marginTop: 16 }}>
                  Contact Sales
                </Button>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Final CTA Section */}
        <div style={{ 
          background: "linear-gradient(135deg, #1890ff 0%, #722ed1 100%)",
          borderRadius: 20,
          padding: 60,
          textAlign: "center",
          color: "white",
          marginBottom: 40
        }}>
          <Title level={2} style={{ color: "white", marginBottom: 16 }}>
            Ready to Transform Your Customer Service?
          </Title>
          <Paragraph style={{ color: "rgba(255,255,255,0.9)", fontSize: 18, marginBottom: 32 }}>
            Join thousands of businesses already using AI Chat Pro to delight their customers
          </Paragraph>
          <Button 
            type="primary" 
            size="large" 
            style={{ 
              background: "white", 
              color: "#1890ff", 
              border: "none",
              height: 48,
              padding: "0 32px",
              fontSize: 16
            }}
            onClick={handleGetStarted}
          >
            Get Started Now
          </Button>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ 
        background: "#001529", 
        color: "white", 
        padding: "60px 50px 30px"
      }}>
        <Row gutter={[40, 40]}>
          <Col xs={24} md={8}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
              <RobotOutlined style={{ fontSize: 32, color: "#1890ff", marginRight: 12 }} />
              <Title level={3} style={{ color: "white", margin: 0 }}>
                AI Chat Pro
              </Title>
            </div>
            <Paragraph style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>
              Empowering businesses with intelligent AI chat solutions for better customer experiences.
            </Paragraph>
            <Space size="large" style={{ marginTop: 16 }}>
              <GithubOutlined style={{ fontSize: 24, color: "rgba(255,255,255,0.7)" }} />
              <LinkedinOutlined style={{ fontSize: 24, color: "rgba(255,255,255,0.7)" }} />
              <TwitterOutlined style={{ fontSize: 24, color: "rgba(255,255,255,0.7)" }} />
            </Space>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: "white", marginBottom: 24 }}>
              Quick Links
            </Title>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Text style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>Features</Text>
              <Text style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>Pricing</Text>
              <Text style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>Documentation</Text>
              <Text style={{ color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>API Reference</Text>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: "white", marginBottom: 24 }}>
              Contact Info
            </Title>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MailOutlined style={{ color: "rgba(255,255,255,0.7)" }} />
                <Text style={{ color: "rgba(255,255,255,0.7)" }}>hello@aichatpro.com</Text>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <PhoneOutlined style={{ color: "rgba(255,255,255,0.7)" }} />
                <Text style={{ color: "rgba(255,255,255,0.7)" }}>+1 (555) 123-4567</Text>
              </div>
            </div>
          </Col>
        </Row>
        <Divider style={{ borderColor: "rgba(255,255,255,0.1)", margin: "40px 0 20px" }} />
        <div style={{ textAlign: "center", color: "rgba(255,255,255,0.7)" }}>
          © {new Date().getFullYear()} AI Chat Pro. All rights reserved.
        </div>
      </Footer>
    </Layout>
  );
};

export default LandingPage;
