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
import { useResponsive } from "../hooks/useResponsive";
import { getResponsiveValue, spacing, fontSizes, componentSizes } from "../utils/responsive";

const { Title, Paragraph, Text } = Typography;

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet, screenWidth } = useResponsive();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  // Responsive values
  const heroPadding = getResponsiveValue(40, 60, 100);
  const sectionPadding = getResponsiveValue(40, 60, 100);
  const contentMaxWidth = getResponsiveValue(1000, 1100, 1200);
  const heroTitleFontSize = getResponsiveValue(fontSizes.xxl, fontSizes.display, fontSizes.hero);
  const sectionTitleFontSize = getResponsiveValue(fontSizes.xl, fontSizes.xxl, fontSizes.display);
  const heroSubtitleFontSize = getResponsiveValue(fontSizes.md, fontSizes.lg, fontSizes.xl);
  const sectionSubtitleFontSize = getResponsiveValue(fontSizes.md, fontSizes.lg, fontSizes.xl);
  const bodyFontSize = getResponsiveValue(fontSizes.md, fontSizes.lg, fontSizes.lg);
  const buttonHeight = getResponsiveValue(44, 48, 56);
  const buttonFontSize = getResponsiveValue(fontSizes.md, fontSizes.lg, fontSizes.xl);
  const buttonPadding = getResponsiveValue(24, 28, 40);
  const avatarSize = getResponsiveValue(56, 64, 80);
  const cardPadding = getResponsiveValue(20, 24, 32);
  const cardBorderRadius = getResponsiveValue(12, 14, 16);
  const gridGutter = getResponsiveValue(20, 24, 32);

  return (
    <div style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: `${heroPadding}px ${getResponsiveValue(16, 20, 40)}px`,
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "relative", zIndex: 2, maxWidth: `${contentMaxWidth}px`, margin: "0 auto" }}>
          <Title 
            level={1} 
            style={{ 
              color: "white", 
              marginBottom: getResponsiveValue(16, 20, 24),
              fontSize: heroTitleFontSize,
              lineHeight: "1.2"
            }}
          >
            Transform Your Business with
            <br />
            <span style={{ color: "#ffd700" }}>AI-Powered Chat</span>
          </Title>
          
          <Paragraph style={{
            fontSize: heroSubtitleFontSize,
            marginBottom: getResponsiveValue(24, 32, 40),
            maxWidth: "600px",
            margin: `0 auto ${getResponsiveValue(24, 32, 40)}px`,
            opacity: 0.9,
            lineHeight: "1.6"
          }}>
            Experience the future of customer service with our intelligent AI chat solutions. 
            Provide 24/7 support, multilingual assistance, and seamless integration.
          </Paragraph>
          
          <Space size="large" wrap style={{ justifyContent: "center" }}>
            <Button 
              type="primary" 
              size="large"
              onClick={handleGetStarted}
              style={{
                height: `${buttonHeight}px`,
                fontSize: buttonFontSize,
                padding: `0 ${buttonPadding}px`,
                borderRadius: "8px",
                background: "#ffd700",
                border: "none",
                color: "#333"
              }}
            >
              Get Started
            </Button>
            <Button 
              size="large"
              style={{
                height: `${buttonHeight}px`,
                fontSize: buttonFontSize,
                padding: `0 ${buttonPadding}px`,
                borderRadius: "8px",
                border: "2px solid white",
                color: "white",
                background: "transparent"
              }}
            >
              Watch Demo
            </Button>
          </Space>
        </div>
        
        {/* Floating Elements */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          opacity: 0.1,
          animation: "float 6s ease-in-out infinite"
        }}>
          <RobotOutlined style={{ fontSize: getResponsiveValue(40, 50, 60) }} />
        </div>
        <div style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          opacity: 0.1,
          animation: "float 6s ease-in-out infinite reverse"
        }}>
          <MessageOutlined style={{ fontSize: getResponsiveValue(40, 50, 60) }} />
        </div>
      </section>

      {/* About Section */}
      <section style={{
        padding: `${sectionPadding}px ${getResponsiveValue(16, 20, 40)}px`,
        background: "white"
      }}>
        <div style={{ maxWidth: `${contentMaxWidth}px`, margin: "0 auto", textAlign: "center" }}>
          <Title 
            level={2} 
            style={{ 
              marginBottom: getResponsiveValue(16, 20, 24),
              fontSize: sectionTitleFontSize
            }}
          >
            Who We Are
          </Title>
          
          <Paragraph style={{
            fontSize: bodyFontSize,
            maxWidth: "800px",
            margin: `0 auto ${getResponsiveValue(40, 50, 60)}px`,
            lineHeight: "1.6",
            color: "#666"
          }}>
            We are pioneers in AI-powered customer service solutions, dedicated to helping businesses 
            deliver exceptional customer experiences through intelligent automation and human-like interactions.
          </Paragraph>
          
          <Row gutter={[gridGutter, gridGutter]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <div style={{ textAlign: "center", padding: `${getResponsiveValue(20, 24, 32)}px ${getResponsiveValue(16, 18, 20)}px` }}>
                <Avatar 
                  size={avatarSize} 
                  icon={<RobotOutlined />} 
                  style={{ 
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    marginBottom: getResponsiveValue(16, 20, 24)
                  }}
                />
                <Title level={4} style={{ 
                  marginBottom: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl)
                }}>
                  Our Mission
                </Title>
                <Paragraph style={{ 
                  color: "#666", 
                  lineHeight: "1.6",
                  fontSize: bodyFontSize
                }}>
                  To democratize AI technology and make intelligent customer service accessible to businesses of all sizes.
                </Paragraph>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <div style={{ textAlign: "center", padding: `${getResponsiveValue(20, 24, 32)}px ${getResponsiveValue(16, 18, 20)}px` }}>
                <Avatar 
                  size={avatarSize} 
                  icon={<MessageOutlined />} 
                  style={{ 
                    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    marginBottom: getResponsiveValue(16, 20, 24)
                  }}
                />
                <Title level={4} style={{ 
                  marginBottom: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl)
                }}>
                  How AI Chat Helps
                </Title>
                <Paragraph style={{ 
                  color: "#666", 
                  lineHeight: "1.6",
                  fontSize: bodyFontSize
                }}>
                  Automate responses, reduce wait times, and provide consistent support across multiple languages and time zones.
                </Paragraph>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <div style={{ textAlign: "center", padding: `${getResponsiveValue(20, 24, 32)}px ${getResponsiveValue(16, 18, 20)}px` }}>
                <Avatar 
                  size={avatarSize} 
                  icon={<GlobalOutlined />} 
                  style={{ 
                    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    marginBottom: getResponsiveValue(16, 20, 24)
                  }}
                />
                <Title level={4} style={{ 
                  marginBottom: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl)
                }}>
                  Global Reach
                </Title>
                <Paragraph style={{ 
                  color: "#666", 
                  lineHeight: "1.6",
                  fontSize: bodyFontSize
                }}>
                  Serve customers worldwide with multilingual support and localized responses for better engagement.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: `${sectionPadding}px ${getResponsiveValue(16, 20, 40)}px`,
        background: "#f8f9fa"
      }}>
        <div style={{ maxWidth: `${contentMaxWidth}px`, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: getResponsiveValue(40, 50, 60) }}>
            <Title 
              level={2} 
              style={{ 
                marginBottom: getResponsiveValue(16, 20, 24),
                fontSize: sectionTitleFontSize
              }}
            >
              Key Benefits
            </Title>
            <Paragraph style={{
              fontSize: bodyFontSize,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              color: "#666"
            }}>
              Discover why leading businesses choose our AI chat solutions
            </Paragraph>
          </div>
          
          <Row gutter={[gridGutter, gridGutter]}>
            <Col xs={24} sm={12} lg={8}>
              <Card 
                hoverable 
                style={{ 
                  height: "100%", 
                  borderRadius: `${cardBorderRadius}px`,
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  padding: `${cardPadding}px`
                }}
              >
                <Avatar 
                  size={getResponsiveValue(48, 56, 64)} 
                  icon={<MessageOutlined />} 
                  style={{ 
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    marginBottom: getResponsiveValue(16, 20, 24)
                  }}
                />
                <Title level={4} style={{ 
                  marginBottom: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl)
                }}>
                  24/7 Chat Support
                </Title>
                <Paragraph style={{ 
                  color: "#666", 
                  lineHeight: "1.6",
                  fontSize: bodyFontSize
                }}>
                  Provide round-the-clock customer support without increasing your team size. 
                  Our AI handles inquiries instantly, any time of day.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card 
                hoverable 
                style={{ 
                  height: "100%", 
                  borderRadius: `${cardBorderRadius}px`,
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  padding: `${cardPadding}px`
                }}
              >
                <Avatar 
                  size={getResponsiveValue(48, 56, 64)} 
                  icon={<GlobalOutlined />} 
                  style={{ 
                    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    marginBottom: getResponsiveValue(16, 20, 24)
                  }}
                />
                <Title level={4} style={{ 
                  marginBottom: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl)
                }}>
                  Multilingual AI
                </Title>
                <Paragraph style={{ 
                  color: "#666", 
                  lineHeight: "1.6",
                  fontSize: bodyFontSize
                }}>
                  Break language barriers with AI that understands and responds in multiple languages. 
                  Serve global customers with localized experiences.
                </Paragraph>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card 
                hoverable 
                style={{ 
                  height: "100%", 
                  borderRadius: `${cardBorderRadius}px`,
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  padding: `${cardPadding}px`
                }}
              >
                <Avatar 
                  size={getResponsiveValue(48, 56, 64)} 
                  icon={<ApiOutlined />} 
                  style={{ 
                    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    marginBottom: getResponsiveValue(16, 20, 24)
                  }}
                />
                <Title level={4} style={{ 
                  marginBottom: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl)
                }}>
                  API Access
                </Title>
                <Paragraph style={{ 
                  color: "#666", 
                  lineHeight: "1.6",
                  fontSize: bodyFontSize
                }}>
                  Integrate our AI chat seamlessly into your existing systems with our robust API. 
                  Customize and extend functionality as needed.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{
        padding: `${sectionPadding}px ${getResponsiveValue(16, 20, 40)}px`,
        background: "white"
      }}>
        <div style={{ maxWidth: `${contentMaxWidth}px`, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: getResponsiveValue(40, 50, 60) }}>
            <Title 
              level={2} 
              style={{ 
                marginBottom: getResponsiveValue(16, 20, 24),
                fontSize: sectionTitleFontSize
              }}
            >
              Choose Your Plan
            </Title>
            <Paragraph style={{
              fontSize: bodyFontSize,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              color: "#666"
            }}>
              Start free and scale as you grow
            </Paragraph>
          </div>
          
          <Row gutter={[gridGutter, gridGutter]} justify="center">
            <Col xs={24} sm={12} lg={8}>
              <Card 
                style={{ 
                  textAlign: "center", 
                  borderRadius: `${cardBorderRadius}px`,
                  border: "2px solid #e8e8e8",
                  height: "100%",
                  padding: `${cardPadding}px`
                }}
              >
                <Title level={3} style={{ 
                  color: "#1890ff", 
                  marginBottom: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.xl, fontSizes.xxl, fontSizes.xxxl)
                }}>
                  Free
                </Title>
                <div style={{ marginBottom: getResponsiveValue(24, 28, 32) }}>
                  <Text style={{ 
                    fontSize: getResponsiveValue(36, 42, 48), 
                    fontWeight: "bold" 
                  }}>
                    $0
                  </Text>
                  <Text style={{ 
                    fontSize: bodyFontSize, 
                    color: "#666" 
                  }}>
                    /month
                  </Text>
                </div>
                <ul style={{ 
                  listStyle: "none", 
                  padding: 0, 
                  margin: `0 0 ${getResponsiveValue(24, 28, 32)}px 0`,
                  textAlign: "left"
                }}>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Up to 100 chats/month
                  </li>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Basic AI responses
                  </li>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Email support
                  </li>
                </ul>
                <Button 
                  type="default" 
                  size="large" 
                  style={{ 
                    width: "100%", 
                    borderRadius: "8px",
                    height: `${buttonHeight}px`,
                    fontSize: buttonFontSize
                  }}
                >
                  Get Started Free
                </Button>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card 
                style={{ 
                  textAlign: "center", 
                  borderRadius: `${cardBorderRadius}px`,
                  border: "2px solid #1890ff",
                  height: "100%",
                  position: "relative",
                  padding: `${cardPadding}px`
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#1890ff",
                  color: "white",
                  padding: "4px 16px",
                  borderRadius: "20px",
                  fontSize: getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.sm),
                  fontWeight: "bold"
                }}>
                  MOST POPULAR
                </div>
                <Title level={3} style={{ 
                  color: "#1890ff", 
                  marginBottom: getResponsiveValue(12, 14, 16), 
                  marginTop: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.xl, fontSizes.xxl, fontSizes.xxxl)
                }}>
                  Pro
                </Title>
                <div style={{ marginBottom: getResponsiveValue(24, 28, 32) }}>
                  <Text style={{ 
                    fontSize: getResponsiveValue(36, 42, 48), 
                    fontWeight: "bold" 
                  }}>
                    $29
                  </Text>
                  <Text style={{ 
                    fontSize: bodyFontSize, 
                    color: "#666" 
                  }}>
                    /month
                  </Text>
                </div>
                <ul style={{ 
                  listStyle: "none", 
                  padding: 0, 
                  margin: `0 0 ${getResponsiveValue(24, 28, 32)}px 0`,
                  textAlign: "left"
                }}>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Up to 1,000 chats/month
                  </li>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Advanced AI responses
                  </li>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Priority support
                  </li>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Custom branding
                  </li>
                </ul>
                <Button 
                  type="primary" 
                  size="large" 
                  onClick={handleGetStarted}
                  style={{ 
                    width: "100%", 
                    borderRadius: "8px",
                    height: `${buttonHeight}px`,
                    fontSize: buttonFontSize
                  }}
                >
                  Start Pro Trial
                </Button>
              </Card>
            </Col>
            
            <Col xs={24} sm={12} lg={8}>
              <Card 
                style={{ 
                  textAlign: "center", 
                  borderRadius: `${cardBorderRadius}px`,
                  border: "2px solid #e8e8e8",
                  height: "100%",
                  padding: `${cardPadding}px`
                }}
              >
                <Title level={3} style={{ 
                  color: "#722ed1", 
                  marginBottom: getResponsiveValue(12, 14, 16),
                  fontSize: getResponsiveValue(fontSizes.xl, fontSizes.xxl, fontSizes.xxxl)
                }}>
                  Enterprise
                </Title>
                <div style={{ marginBottom: getResponsiveValue(24, 28, 32) }}>
                  <Text style={{ 
                    fontSize: getResponsiveValue(36, 42, 48), 
                    fontWeight: "bold" 
                  }}>
                    Custom
                  </Text>
                </div>
                <ul style={{ 
                  listStyle: "none", 
                  padding: 0, 
                  margin: `0 0 ${getResponsiveValue(24, 28, 32)}px 0`,
                  textAlign: "left"
                }}>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Unlimited chats
                  </li>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Custom AI training
                  </li>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    Dedicated support
                  </li>
                  <li style={{ marginBottom: getResponsiveValue(8, 10, 12) }}>
                    <CheckCircleOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
                    White-label solution
                  </li>
                </ul>
                <Button 
                  type="default" 
                  size="large" 
                  style={{ 
                    width: "100%", 
                    borderRadius: "8px",
                    height: `${buttonHeight}px`,
                    fontSize: buttonFontSize
                  }}
                >
                  Contact Sales
                </Button>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#001529",
        color: "white",
        padding: `${getResponsiveValue(30, 40, 60)}px ${getResponsiveValue(16, 20, 40)}px`
      }}>
        <div style={{ maxWidth: `${contentMaxWidth}px`, margin: "0 auto" }}>
          <Row gutter={[gridGutter, gridGutter]}>
            <Col xs={24} sm={12} md={8}>
              <div style={{ marginBottom: getResponsiveValue(24, 28, 32) }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: getResponsiveValue(16, 20, 24) }}>
                  <RobotOutlined style={{ 
                    fontSize: getResponsiveValue(24, 28, 32), 
                    color: "#1890ff", 
                    marginRight: getResponsiveValue(8, 10, 12) 
                  }} />
                  <Title level={3} style={{ 
                    color: "white", 
                    margin: 0,
                    fontSize: getResponsiveValue(fontSizes.xl, fontSizes.xxl, fontSizes.xxxl)
                  }}>
                    AI Chat Pro
                  </Title>
                </div>
                <Paragraph style={{ 
                  color: "#8c8c8c", 
                  lineHeight: "1.6",
                  fontSize: bodyFontSize
                }}>
                  Transforming customer service with intelligent AI solutions that work 24/7, 
                  speak multiple languages, and integrate seamlessly with your business.
                </Paragraph>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ 
                color: "white", 
                marginBottom: getResponsiveValue(16, 20, 24),
                fontSize: getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl)
              }}>
                Contact Info
              </Title>
              <div style={{ marginBottom: getResponsiveValue(12, 14, 16) }}>
                <PhoneOutlined style={{ marginRight: "8px", color: "#1890ff" }} />
                <Text style={{ 
                  color: "#8c8c8c",
                  fontSize: bodyFontSize
                }}>
                  +1 (555) 123-4567
                </Text>
              </div>
              <div style={{ marginBottom: getResponsiveValue(12, 14, 16) }}>
                <MailOutlined style={{ marginRight: "8px", color: "#1890ff" }} />
                <Text style={{ 
                  color: "#8c8c8c",
                  fontSize: bodyFontSize
                }}>
                  hello@aichatpro.com
                </Text>
              </div>
              <div style={{ marginBottom: getResponsiveValue(12, 14, 16) }}>
                <UserOutlined style={{ marginRight: "8px", color: "#1890ff" }} />
                <Text style={{ 
                  color: "#8c8c8c",
                  fontSize: bodyFontSize
                }}>
                  support@aichatpro.com
                </Text>
              </div>
            </Col>
            
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ 
                color: "white", 
                marginBottom: getResponsiveValue(16, 20, 24),
                fontSize: getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl)
              }}>
                Follow Us
              </Title>
              <Space size="large">
                <LinkedinOutlined style={{ 
                  fontSize: getResponsiveValue(20, 22, 24), 
                  color: "#1890ff", 
                  cursor: "pointer" 
                }} />
                <TwitterOutlined style={{ 
                  fontSize: getResponsiveValue(20, 22, 24), 
                  color: "#1890ff", 
                  cursor: "pointer" 
                }} />
                <GithubOutlined style={{ 
                  fontSize: getResponsiveValue(20, 22, 24), 
                  color: "#1890ff", 
                  cursor: "pointer" 
                }} />
              </Space>
              <div style={{ marginTop: getResponsiveValue(16, 20, 24) }}>
                <Text style={{ 
                  color: "#8c8c8c",
                  fontSize: bodyFontSize
                }}>
                  © 2024 AI Chat Pro. All rights reserved.
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </footer>

      {/* Final CTA Section */}
      <section style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: `${getResponsiveValue(40, 60, 80)}px ${getResponsiveValue(16, 20, 40)}px`,
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Title 
            level={2} 
            style={{ 
              color: "white", 
              marginBottom: getResponsiveValue(16, 20, 24),
              fontSize: sectionTitleFontSize
            }}
          >
            Ready to Get Started?
          </Title>
          
          <Paragraph style={{
            fontSize: bodyFontSize,
            marginBottom: getResponsiveValue(24, 32, 40),
            opacity: 0.9,
            lineHeight: "1.6"
          }}>
            Join thousands of businesses already using AI Chat Pro to transform their customer service.
            Start your free trial today and see the difference AI can make.
          </Paragraph>
          
          <Button 
            type="primary" 
            size="large"
            onClick={handleGetStarted}
            style={{
              height: `${buttonHeight}px`,
              fontSize: buttonFontSize,
              padding: `0 ${buttonPadding}px`,
              borderRadius: "8px",
              background: "#ffd700",
              border: "none",
              color: "#333"
            }}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
