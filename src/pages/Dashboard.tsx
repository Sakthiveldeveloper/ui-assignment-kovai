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
import { getResponsiveValue, spacing, fontSizes, componentSizes } from "../utils/responsive";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet, screenWidth } = useResponsive();
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

  // Responsive values
  const headerHeight = getResponsiveValue(56, 60, 64);
  const headerPadding = getResponsiveValue(12, 14, 16);
  const contentMargin = getResponsiveValue(12, 16, 24);
  const contentPadding = getResponsiveValue(16, 20, 24);
  const cardPadding = getResponsiveValue(12, 16, 20);
  const cardBorderRadius = getResponsiveValue(8, 12, 16);
  const avatarSize = getResponsiveValue(32, 40, 48);
  const titleFontSize = getResponsiveValue(fontSizes.md, fontSizes.lg, fontSizes.xl);
  const subtitleFontSize = getResponsiveValue(fontSizes.sm, fontSizes.md, fontSizes.lg);
  const statFontSize = getResponsiveValue(fontSizes.lg, fontSizes.xl, fontSizes.xxl);
  const buttonHeight = getResponsiveValue(36, 40, 48);

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
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        width={getResponsiveValue(200, 220, 240)}
      >
        <div style={{ 
          height: headerHeight, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          borderBottom: "1px solid #1f1f1f",
          background: "#002140",
          padding: `0 ${getResponsiveValue(12, 14, 16)}px`
        }}>
          <RobotOutlined style={{ 
            fontSize: getResponsiveValue(20, 22, 24), 
            color: "#1890ff" 
          }} />
          {!collapsed && (
            <Title level={4} style={{ 
              color: "white", 
              margin: `0 0 0 ${getResponsiveValue(8, 10, 12)}px`,
              fontSize: getResponsiveValue(fontSizes.sm, fontSizes.md, fontSizes.lg)
            }}>
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
          padding: `0 ${headerPadding}px`, 
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          height: `${headerHeight}px`,
          lineHeight: `${headerHeight}px`
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: getResponsiveValue(12, 14, 16) }}>
            <Button 
              type="text" 
              icon={<DashboardOutlined />} 
              onClick={() => setCollapsed(!collapsed)}
              style={{ 
                fontSize: getResponsiveValue(14, 15, 16), 
                height: getResponsiveValue(32, 36, 40),
                display: isMobile || isTablet ? "flex" : "none"
              }}
            />
            <Title level={4} style={{ 
              margin: 0, 
              color: "#262626",
              fontSize: titleFontSize
            }}>
              Dashboard
            </Title>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: getResponsiveValue(12, 14, 16) }}>
            <Avatar 
              icon={<UserOutlined />} 
              style={{ 
                backgroundColor: "#1890ff",
                width: `${avatarSize}px`,
                height: `${avatarSize}px`
              }} 
            />
            <Text strong style={{ 
              color: "#262626",
              display: isMobile ? "none" : "inline",
              fontSize: subtitleFontSize
            }}>
              Welcome back, User!
            </Text>
          </div>
        </Header>
        
        <Content style={{ 
          margin: `${contentMargin}px`, 
          minHeight: 280,
          background: "transparent"
        }}>
          {/* User Stats Section */}
          <Row gutter={[getResponsiveValue(12, 14, 16), getResponsiveValue(12, 14, 16)]} 
               style={{ marginBottom: getResponsiveValue(20, 24, 32) }}>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable style={{ 
                borderRadius: `${cardBorderRadius}px`,
                padding: `${cardPadding}px`
              }}>
                <Statistic
                  title="Total Chats"
                  value={1247}
                  prefix={<MessageOutlined style={{ color: "#1890ff" }} />}
                  valueStyle={{ 
                    color: "#1890ff", 
                    fontSize: statFontSize
                  }}
                />
                <Progress percent={85} showInfo={false} style={{ marginTop: 12 }} strokeColor="#1890ff" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable style={{ 
                borderRadius: `${cardBorderRadius}px`,
                padding: `${cardPadding}px`
              }}>
                <Statistic
                  title="AI Accuracy"
                  value={94.2}
                  suffix="%"
                  prefix={<CheckCircleOutlined style={{ color: "#52c41a" }} />}
                  valueStyle={{ 
                    color: "#52c41a", 
                    fontSize: statFontSize
                  }}
                />
                <Progress percent={94} showInfo={false} style={{ marginTop: 12 }} strokeColor="#52c41a" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable style={{ 
                borderRadius: `${cardBorderRadius}px`,
                padding: `${cardPadding}px`
              }}>
                <Statistic
                  title="Response Time"
                  value={1.2}
                  suffix="s"
                  prefix={<ClockCircleOutlined style={{ color: "#faad14" }} />}
                  valueStyle={{ 
                    color: "#faad14", 
                    fontSize: statFontSize
                  }}
                />
                <Progress percent={78} showInfo={false} style={{ marginTop: 12 }} strokeColor="#faad14" />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable style={{ 
                borderRadius: `${cardBorderRadius}px`,
                padding: `${cardPadding}px`
              }}>
                <Statistic
                  title="Customer Rating"
                  value={4.8}
                  suffix={<StarOutlined style={{ color: "#722ed1" }} />}
                  prefix={<RiseOutlined style={{ color: "#722ed1" }} />}
                  valueStyle={{ 
                    color: "#722ed1", 
                    fontSize: statFontSize
                  }}
                />
                <Progress percent={96} showInfo={false} style={{ marginTop: 12 }} strokeColor="#722ed1" />
              </Card>
            </Col>
          </Row>

          {/* Service Overview Cards */}
          <Row gutter={[getResponsiveValue(12, 14, 16), getResponsiveValue(12, 14, 16)]} 
               style={{ marginBottom: getResponsiveValue(20, 24, 32) }}>
            <Col xs={24} lg={12}>
              <Card 
                title={<span style={{ 
                  fontSize: subtitleFontSize, 
                  fontWeight: 600 
                }}>
                  Active Services
                </span>}
                extra={<Button type="primary" size="small">View All</Button>}
                style={{ 
                  height: "100%", 
                  borderRadius: `${cardBorderRadius}px`,
                  padding: `${cardPadding}px`
                }}
                hoverable
              >
                <div style={{ display: "flex", flexDirection: "column", gap: getResponsiveValue(12, 14, 16) }}>
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: `${cardPadding}px`,
                    background: "#f8f9fa",
                    borderRadius: `${cardBorderRadius - 4}px`,
                    border: "1px solid #e8e8e8"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: getResponsiveValue(8, 10, 12) }}>
                      <RobotOutlined style={{ 
                        color: "#1890ff", 
                        fontSize: getResponsiveValue(16, 18, 20) 
                      }} />
                      <div>
                        <Text strong style={{ 
                          fontSize: subtitleFontSize
                        }}>
                          Customer Support Bot
                        </Text>
                        <br />
                        <Text type="secondary" style={{ 
                          fontSize: getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.md)
                        }}>
                          Online - 24/7
                        </Text>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Text strong style={{ 
                        fontSize: subtitleFontSize
                      }}>
                        1,247 chats
                      </Text>
                      <br />
                      <Text type="secondary" style={{ 
                        fontSize: getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.md)
                      }}>
                        This month
                      </Text>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: `${cardPadding}px`,
                    background: "#f8f9fa",
                    borderRadius: `${cardBorderRadius - 4}px`,
                    border: "1px solid #e8e8e8"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: getResponsiveValue(8, 10, 12) }}>
                      <RobotOutlined style={{ 
                        color: "#52c41a", 
                        fontSize: getResponsiveValue(16, 18, 20) 
                      }} />
                      <div>
                        <Text strong style={{ 
                          fontSize: subtitleFontSize
                        }}>
                          Sales Assistant
                        </Text>
                        <br />
                        <Text type="secondary" style={{ 
                          fontSize: getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.md)
                        }}>
                          Online - 9AM-6PM
                        </Text>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Text strong style={{ 
                        fontSize: subtitleFontSize
                      }}>
                        892 chats
                      </Text>
                      <br />
                      <Text type="secondary" style={{ 
                        fontSize: getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.md)
                      }}>
                        This month
                      </Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            
            <Col xs={24} lg={12}>
              <Card 
                title={<span style={{ 
                  fontSize: subtitleFontSize, 
                  fontWeight: 600 
                }}>
                  Quick Actions
                </span>}
                style={{ 
                  height: "100%", 
                  borderRadius: `${cardBorderRadius}px`,
                  padding: `${cardPadding}px`
                }}
                hoverable
              >
                <Space direction="vertical" style={{ width: "100%" }} size="middle">
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<MessageOutlined />}
                    onClick={handleTryDemo}
                    style={{ 
                      width: "100%", 
                      height: `${buttonHeight}px`, 
                      borderRadius: `${cardBorderRadius - 4}px`,
                      fontSize: subtitleFontSize
                    }}
                  >
                    Try Demo
                  </Button>
                  <Button 
                    size="large" 
                    icon={<SettingOutlined />}
                    style={{ 
                      width: "100%", 
                      height: `${buttonHeight}px`, 
                      borderRadius: `${cardBorderRadius - 4}px`,
                      fontSize: subtitleFontSize
                    }}
                  >
                    Configure New Bot
                  </Button>
                  <Button 
                    size="large" 
                    icon={<RiseOutlined />}
                    style={{ 
                      width: "100%", 
                      height: `${buttonHeight}px`, 
                      borderRadius: `${cardBorderRadius - 4}px`,
                      fontSize: subtitleFontSize
                    }}
                  >
                    View Analytics
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>

          {/* Demo Services Preview */}
          <Card 
            title={<span style={{ 
              fontSize: subtitleFontSize, 
              fontWeight: 600 
            }}>
              Demo Services Preview
            </span>}
            extra={<Button 
              type="primary" 
              onClick={handleStartChat} 
              size={isMobile ? "middle" : "large"}
              style={{
                height: `${buttonHeight}px`,
                fontSize: subtitleFontSize
              }}
            >
              Start Chat
            </Button>}
            style={{ 
              marginBottom: getResponsiveValue(16, 20, 24), 
              borderRadius: `${cardBorderRadius}px`,
              padding: `${cardPadding}px`
            }}
            hoverable
          >
            <Row gutter={[getResponsiveValue(12, 14, 16), getResponsiveValue(12, 14, 16)]}>
              <Col xs={24} sm={12} md={8}>
                <Card 
                  size="small" 
                  bordered={false}
                  style={{ 
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    textAlign: "center",
                    borderRadius: `${cardBorderRadius}px`,
                    cursor: "pointer",
                    padding: `${cardPadding}px`
                  }}
                  hoverable
                >
                  <RobotOutlined style={{ 
                    fontSize: getResponsiveValue(20, 24, 32), 
                    marginBottom: getResponsiveValue(12, 14, 16) 
                  }} />
                  <Title level={4} style={{ 
                    color: "white", 
                    marginBottom: getResponsiveValue(6, 7, 8),
                    fontSize: getResponsiveValue(fontSizes.sm, fontSizes.md, fontSizes.lg)
                  }}>
                    Customer Support
                  </Title>
                  <Paragraph style={{ 
                    color: "rgba(255,255,255,0.9)", 
                    margin: 0,
                    fontSize: getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.md)
                  }}>
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
                    borderRadius: `${cardBorderRadius}px`,
                    cursor: "pointer",
                    padding: `${cardPadding}px`
                  }}
                  hoverable
                >
                  <RobotOutlined style={{ 
                    fontSize: getResponsiveValue(20, 24, 32), 
                    marginBottom: getResponsiveValue(12, 14, 16) 
                  }} />
                  <Title level={4} style={{ 
                    color: "white", 
                    marginBottom: getResponsiveValue(6, 7, 8),
                    fontSize: getResponsiveValue(fontSizes.sm, fontSizes.md, fontSizes.lg)
                  }}>
                    Sales Assistant
                  </Title>
                  <Paragraph style={{ 
                    color: "rgba(255,255,255,0.9)", 
                    margin: 0,
                    fontSize: getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.md)
                  }}>
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
                    borderRadius: `${cardBorderRadius}px`,
                    cursor: "pointer",
                    padding: `${cardPadding}px`
                  }}
                  hoverable
                >
                  <RobotOutlined style={{ 
                    fontSize: getResponsiveValue(20, 24, 32), 
                    marginBottom: getResponsiveValue(12, 14, 16) 
                  }} />
                  <Title level={4} style={{ 
                    color: "white", 
                    marginBottom: getResponsiveValue(6, 7, 8),
                    fontSize: getResponsiveValue(fontSizes.sm, fontSizes.md, fontSizes.lg)
                  }}>
                    Technical Support
                  </Title>
                  <Paragraph style={{ 
                    color: "rgba(255,255,255,0.9)", 
                    margin: 0,
                    fontSize: getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.md)
                  }}>
                    Troubleshooting and technical help
                  </Paragraph>
                </Card>
              </Col>
            </Row>
            
            <div style={{ 
              marginTop: getResponsiveValue(16, 20, 24), 
              padding: `${cardPadding}px`, 
              background: "#f8f9fa", 
              borderRadius: `${cardBorderRadius}px`,
              textAlign: "center",
              border: "1px solid #e8e8e8"
            }}>
              <Paragraph style={{ 
                marginBottom: getResponsiveValue(12, 14, 16), 
                fontSize: getResponsiveValue(fontSizes.sm, fontSizes.md, fontSizes.md) 
              }}>
                Experience the power of our AI chat solutions with our interactive demo.
                Test different scenarios and see how our bots handle various customer inquiries.
              </Paragraph>
              <Button 
                type="primary" 
                size={isMobile ? "middle" : "large"}
                icon={<MessageOutlined />}
                onClick={handleStartChat}
                style={{ 
                  borderRadius: `${cardBorderRadius - 4}px`, 
                  height: `${buttonHeight}px`,
                  fontSize: subtitleFontSize
                }}
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
