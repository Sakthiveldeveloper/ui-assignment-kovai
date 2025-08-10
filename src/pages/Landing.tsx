import React from "react";
import { Typography, Button, Space, Avatar, Card, Row, Col } from "antd";
import {
  RobotOutlined,
  MessageOutlined,
  GlobalOutlined,
  ApiOutlined,
  CheckCircleOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const { Title, Paragraph, Text } = Typography;

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <Title level={1} className="hero-title">
            Transform Your Business with
            <br />
            <span className="hero-title-highlight">AI-Powered Chat</span>
          </Title>
          
          <Paragraph className="hero-subtitle">
            Experience the future of customer service with our intelligent AI chat solutions. 
            Provide 24/7 support, multilingual assistance, and seamless integration.
          </Paragraph>
          
          <Space size="large" wrap className="hero-buttons">
            <Button 
              type="primary" 
              size="large"
              onClick={handleGetStarted}
              className="hero-primary-btn"
            >
              Get Started
            </Button>
            <Button 
              size="large"
              className="hero-secondary-btn"
            >
              Watch Demo
            </Button>
          </Space>
        </div>
        
        {/* Floating Elements */}
        <div className="floating-element left">
          <RobotOutlined style={{ fontSize: 50 }} />
        </div>
        <div className="floating-element right">
          <MessageOutlined style={{ fontSize: 50 }} />
        </div>
      </section>

      {/* About Section */}
      <section className="section section-white">
        <div className="section-content">
          <Title level={2} className="section-title">
            Who We Are
          </Title>
          
          <Paragraph className="section-subtitle">
            We are pioneers in AI-powered customer service solutions, dedicated to helping businesses 
            deliver exceptional customer experiences through intelligent automation and human-like interactions.
          </Paragraph>
          
          <Row gutter={[32, 32]} className="about-grid">
            <Col xs={24} sm={12} md={8}>
              <div className="about-item">
                <Avatar 
                  size={80} 
                  icon={<RobotOutlined />} 
                  className="about-avatar"
                  style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                />
                <Title level={4} className="about-item-title">
                  Our Mission
                </Title>
                <Paragraph className="about-item-desc">
                  To democratize AI technology and make intelligent customer service accessible to businesses of all sizes.
                </Paragraph>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <div className="about-item">
                <Avatar 
                  size={80} 
                  icon={<MessageOutlined />} 
                  className="about-avatar"
                  style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}
                />
                <Title level={4} className="about-item-title">
                  How AI Chat Helps
                </Title>
                <Paragraph className="about-item-desc">
                  Automate responses, reduce wait times, and provide consistent support across multiple languages and time zones.
                </Paragraph>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <div className="about-item">
                <Avatar 
                  size={80} 
                  icon={<GlobalOutlined />} 
                  className="about-avatar"
                  style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}
                />
                <Title level={4} className="about-item-title">
                  Global Reach
                </Title>
                <Paragraph className="about-item-desc">
                  Serve customers worldwide with multilingual support and localized responses for better engagement.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-gray">
        <div className="section-content">
          <div style={{ marginBottom: 60 }}>
            <Title level={2} className="section-title">
              Key Benefits
            </Title>
            <Paragraph className="section-subtitle">
              Discover why leading businesses choose our AI chat solutions
            </Paragraph>
          </div>
          
          <Row gutter={[32, 32]} className="features-grid">
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <Avatar 
                  size={64} 
                  icon={<MessageOutlined />} 
                  className="feature-icon"
                  style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                />
                <Title level={4} className="feature-title">
                  24/7 Chat Support
                </Title>
                <Paragraph className="feature-desc">
                  Provide round-the-clock customer support without increasing your team size. 
                  Our AI handles inquiries instantly, any time of day.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <Avatar 
                  size={64} 
                  icon={<GlobalOutlined />} 
                  className="feature-icon"
                  style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}
                />
                <Title level={4} className="feature-title">
                  Multilingual AI
                </Title>
                <Paragraph className="feature-desc">
                  Break language barriers with AI that understands and responds in multiple languages. 
                  Serve global customers with localized experiences.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card">
                <Avatar 
                  size={64} 
                  icon={<ApiOutlined />} 
                  className="feature-icon"
                  style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}
                />
                <Title level={4} className="feature-title">
                  API Access
                </Title>
                <Paragraph className="feature-desc">
                  Integrate our AI chat seamlessly into your existing systems with our robust API. 
                  Customize and extend functionality as needed.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section-white">
        <div className="section-content">
          <div style={{ marginBottom: 60 }}>
            <Title level={2} className="section-title">
              Choose Your Plan
            </Title>
            <Paragraph className="section-subtitle">
              Start free and scale as you grow
            </Paragraph>
          </div>
          
          <Row gutter={[32, 32]} className="pricing-grid">
            <Col xs={24} sm={12} lg={8}>
              <Card className="pricing-card free">
                <Title level={3} className="pricing-title free">
                  Free
                </Title>
                <div className="pricing-amount">
                  <Text className="pricing-value">$0</Text>
                  <Text className="pricing-period">/month</Text>
                </div>
                <ul className="pricing-features">
                  <li>
                    <CheckCircleOutlined /> Up to 100 chats/month
                  </li>
                  <li>
                    <CheckCircleOutlined /> Basic AI responses
                  </li>
                  <li>
                    <CheckCircleOutlined /> Email support
                  </li>
                </ul>
                <Button 
                  type="default" 
                  size="large" 
                  className="pricing-button"
                >
                  Get Started Free
                </Button>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card className="pricing-card pro">
                <div className="popular-badge">
                  MOST POPULAR
                </div>
                <Title level={3} className="pricing-title pro">
                  Pro
                </Title>
                <div className="pricing-amount">
                  <Text className="pricing-value">$29</Text>
                  <Text className="pricing-period">/month</Text>
                </div>
                <ul className="pricing-features">
                  <li>
                    <CheckCircleOutlined /> Up to 1,000 chats/month
                  </li>
                  <li>
                    <CheckCircleOutlined /> Advanced AI responses
                  </li>
                  <li>
                    <CheckCircleOutlined /> Priority support
                  </li>
                  <li>
                    <CheckCircleOutlined /> Custom branding
                  </li>
                </ul>
                <Button 
                  type="primary" 
                  size="large" 
                  onClick={handleGetStarted}
                  className="pricing-button"
                >
                  Start Pro Trial
                </Button>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card className="pricing-card enterprise">
                <Title level={3} className="pricing-title enterprise">
                  Enterprise
                </Title>
                <div className="pricing-amount">
                  <Text className="pricing-value">Custom</Text>
                </div>
                <ul className="pricing-features">
                  <li>
                    <CheckCircleOutlined /> Unlimited chats
                  </li>
                  <li>
                    <CheckCircleOutlined /> Custom AI training
                  </li>
                  <li>
                    <CheckCircleOutlined /> Dedicated support
                  </li>
                  <li>
                    <CheckCircleOutlined /> White-label solution
                  </li>
                </ul>
                <Button 
                  type="default" 
                  size="large" 
                  className="pricing-button"
                >
                  Contact Sales
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={8}>
              <div style={{ marginBottom: 32 }}>
                <div className="footer-logo">
                  <RobotOutlined className="footer-logo-icon" />
                  <Title level={3} className="footer-logo-title">
                    AI Chat Pro
                  </Title>
                </div>
                <Paragraph className="footer-desc">
                  Transforming customer service with intelligent AI solutions that work 24/7, 
                  speak multiple languages, and integrate seamlessly with your business.
                </Paragraph>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <Title level={4} className="footer-section-title">
                Contact Info
              </Title>
              <div className="footer-contact-item">
                <PhoneOutlined className="footer-contact-icon" />
                <Text className="footer-contact-text">
                  +1 (555) 123-4567
                </Text>
              </div>
              <div className="footer-contact-item">
                <MailOutlined className="footer-contact-icon" />
                <Text className="footer-contact-text">
                  hello@aichatpro.com
                </Text>
              </div>
              <div className="footer-contact-item">
                <UserOutlined className="footer-contact-icon" />
                <Text className="footer-contact-text">
                  support@aichatpro.com
                </Text>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <Title level={4} className="footer-section-title">
                Follow Us
              </Title>
              <div className="footer-social">
                <LinkedinOutlined className="footer-social-icon" />
                <TwitterOutlined className="footer-social-icon" />
                <GithubOutlined className="footer-social-icon" />
              </div>
              <div>
                <Text className="footer-copyright">
                  © 2024 AI Chat Pro. All rights reserved.
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </footer>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="final-cta-content">
          <Title level={2} className="final-cta-title">
            Ready to Get Started?
          </Title>
          
          <Paragraph className="final-cta-desc">
            Join thousands of businesses already using AI Chat Pro to transform their customer service.
            Start your free trial today and see the difference AI can make.
          </Paragraph>
          
          <Button 
            type="primary" 
            size="large"
            onClick={handleGetStarted}
            className="final-cta-button"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
