import React, { useState, useRef, useEffect } from "react";
import { Layout, Typography, Button, Input, Avatar, Card, Divider } from "antd";
import {
  RobotOutlined,
  UserOutlined,
  ArrowLeftOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "../hooks/useResponsive";
import { getResponsiveValue, spacing, fontSizes, componentSizes } from "../utils/responsive";

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const Chat: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet, screenWidth } = useResponsive();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse();
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (): string => {
    const responses = [
      "That's an interesting question! Let me help you with that.",
      "I understand your concern. Here's what I can tell you about that topic.",
      "Great question! Based on my knowledge, here's the information you're looking for.",
      "I'd be happy to assist you with that. Let me provide you with some helpful information.",
      "That's a common inquiry. Here's what you need to know about that subject.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Responsive values
  const headerHeight = getResponsiveValue(56, 60, 64);
  const headerPadding = getResponsiveValue(12, 14, 16);
  const contentPadding = getResponsiveValue(12, 14, 16);
  const chatWindowPadding = getResponsiveValue(12, 14, 16);
  const inputPadding = getResponsiveValue(12, 14, 16);
  const avatarSize = getResponsiveValue(32, 36, 40);
  const messageMaxWidth = getResponsiveValue("95%", "85%", "75%");
  const titleFontSize = getResponsiveValue(fontSizes.sm, fontSizes.md, fontSizes.lg);
  const subtitleFontSize = getResponsiveValue(fontSizes.xs, fontSizes.sm, fontSizes.md);
  const messageFontSize = getResponsiveValue(fontSizes.sm, fontSizes.md, fontSizes.md);
  const timeFontSize = getResponsiveValue(fontSizes.xs, fontSizes.xs, fontSizes.sm);

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      {/* Header */}
      <Header style={{ 
        background: "#fff", 
        padding: `0 ${headerPadding}px`, 
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        height: `${headerHeight}px`,
        lineHeight: `${headerHeight}px`,
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: getResponsiveValue(8, 10, 12),
          flex: 1,
          minWidth: 0
        }}>
          <Button 
            type="text" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate("/dashboard")}
            style={{ 
              fontSize: getResponsiveValue(14, 15, 16), 
              height: getResponsiveValue(36, 38, 40),
              padding: `0 ${getResponsiveValue(8, 10, 12)}px`,
              flexShrink: 0
            }}
          >
            <span style={{ display: isMobile ? "none" : "inline" }}>
              Back to Dashboard
            </span>
          </Button>
          
          <Divider type="vertical" style={{ 
            height: getResponsiveValue(20, 22, 24), 
            margin: `0 ${getResponsiveValue(6, 7, 8)}px`, 
            flexShrink: 0 
          }} />
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: getResponsiveValue(8, 10, 12),
            minWidth: 0,
            flex: 1
          }}>
            <RobotOutlined style={{ 
              fontSize: getResponsiveValue(20, 22, 24), 
              color: "#1890ff", 
              flexShrink: 0 
            }} />
            <div style={{ minWidth: 0, flex: 1 }}>
              <Title 
                level={4} 
                style={{ 
                  margin: 0, 
                  color: "#262626",
                  fontSize: titleFontSize,
                  lineHeight: "1.2"
                }}
              >
                AI Chat Service
              </Title>
              <Text 
                type="secondary" 
                style={{ 
                  fontSize: subtitleFontSize,
                  display: isMobile ? "none" : "block"
                }}
              >
                Demo Mode
              </Text>
            </div>
          </div>
        </div>
        
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: getResponsiveValue(6, 7, 8),
          flexShrink: 0
        }}>
          <div style={{ 
            width: 6, 
            height: 6, 
            borderRadius: "50%", 
            background: "#52c41a",
            marginRight: getResponsiveValue(6, 7, 8)
          }} />
          <Text 
            type="secondary" 
            style={{ 
              fontSize: subtitleFontSize,
              display: isMobile ? "none" : "inline"
            }}
          >
            Online
          </Text>
        </div>
      </Header>

      {/* Chat Content */}
      <Content style={{ 
        display: "flex", 
        flexDirection: "column", 
        height: `calc(100vh - ${headerHeight}px)`,
        padding: `${contentPadding}px`,
        background: "transparent"
      }}>
        {/* Chat Window */}
        <div style={{ 
          flex: 1, 
          overflowY: "auto", 
          marginBottom: `${contentPadding}px`,
          padding: `${chatWindowPadding}px`,
          background: "#fff",
          borderRadius: getResponsiveValue(12, 14, 16),
          border: "1px solid #e8e8e8",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: "flex",
                justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: getResponsiveValue(12, 14, 16),
                width: "100%"
              }}
            >
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: getResponsiveValue(6, 7, 8),
                maxWidth: messageMaxWidth,
                flexDirection: message.sender === "user" ? "row-reverse" : "row"
              }}>
                <Avatar
                  icon={message.sender === "user" ? <UserOutlined /> : <RobotOutlined />}
                  style={{
                    backgroundColor: message.sender === "user" ? "#1890ff" : "#52c41a",
                    flexShrink: 0,
                    width: `${avatarSize}px`,
                    height: `${avatarSize}px`
                  }}
                />
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: message.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: `calc(100% - ${avatarSize + 8}px)`,
                  minWidth: 0
                }}>
                  <Card
                    size="small"
                    style={{
                      background: message.sender === "user" ? "#1890ff" : "#f8f9fa",
                      color: message.sender === "user" ? "white" : "#262626",
                      borderRadius: getResponsiveValue(16, 18, 20),
                      border: message.sender === "user" ? "none" : "1px solid #e8e8e8",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      maxWidth: "100%",
                      padding: getResponsiveValue(8, 10, 12)
                    }}
                  >
                    <Paragraph style={{ 
                      margin: 0, 
                      color: message.sender === "user" ? "white" : "#262626",
                      wordBreak: "break-word",
                      fontSize: messageFontSize,
                      lineHeight: "1.5"
                    }}>
                      {message.text}
                    </Paragraph>
                  </Card>
                  <Text 
                    type="secondary" 
                    style={{ 
                      fontSize: timeFontSize, 
                      marginTop: getResponsiveValue(2, 3, 4),
                      color: message.sender === "user" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.45)"
                    }}
                  >
                    {formatTime(message.timestamp)}
                  </Text>
                </div>
              </div>
            </div>
          ))}
          
          {/* AI Typing Animation */}
          {isTyping && (
            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: getResponsiveValue(12, 14, 16), width: "100%" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: getResponsiveValue(6, 7, 8) }}>
                <Avatar
                  icon={<RobotOutlined />}
                  style={{ 
                    backgroundColor: "#52c41a", 
                    flexShrink: 0, 
                    width: `${avatarSize}px`, 
                    height: `${avatarSize}px` 
                  }}
                />
                <Card
                  size="small"
                  style={{
                    background: "#f8f9fa",
                    borderRadius: getResponsiveValue(16, 18, 20),
                    border: "1px solid #e8e8e8",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    padding: getResponsiveValue(10, 12, 14)
                  }}
                >
                  <div style={{ display: "flex", gap: getResponsiveValue(4, 5, 6) }}>
                    <div style={{
                      width: getResponsiveValue(6, 7, 8),
                      height: getResponsiveValue(6, 7, 8),
                      borderRadius: "50%",
                      background: "#1890ff",
                      animation: "typing 1.4s infinite ease-in-out"
                    }} />
                    <div style={{
                      width: getResponsiveValue(6, 7, 8),
                      height: getResponsiveValue(6, 7, 8),
                      borderRadius: "50%",
                      background: "#1890ff",
                      animation: "typing 1.4s infinite ease-in-out",
                      animationDelay: "0.2s"
                    }} />
                    <div style={{
                      width: getResponsiveValue(6, 7, 8),
                      height: getResponsiveValue(6, 7, 8),
                      borderRadius: "50%",
                      background: "#1890ff",
                      animation: "typing 1.4s infinite ease-in-out",
                      animationDelay: "0.4s"
                    }} />
                  </div>
                </Card>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input Area */}
        <div style={{ 
          background: "#fff", 
          padding: `${inputPadding}px`, 
          borderRadius: getResponsiveValue(12, 14, 16),
          border: "1px solid #e8e8e8",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
          <div style={{ display: "flex", gap: getResponsiveValue(8, 10, 12), alignItems: "flex-end" }}>
            <TextArea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              autoSize={{ minRows: 1, maxRows: 4 }}
              style={{
                borderRadius: getResponsiveValue(16, 18, 20),
                border: "1px solid #d9d9d9",
                padding: getResponsiveValue(8, 10, 12),
                resize: "none",
                fontSize: messageFontSize,
                lineHeight: "1.5",
                flex: 1
              }}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              style={{
                borderRadius: "50%",
                width: getResponsiveValue(36, 40, 44),
                height: getResponsiveValue(36, 40, 44),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            />
          </div>
          <div style={{ 
            marginTop: getResponsiveValue(6, 7, 8), 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center"
          }}>
            <Text 
              type="secondary" 
              style={{ 
                fontSize: timeFontSize,
                display: isMobile ? "none" : "inline"
              }}
            >
              Press Enter to send, Shift+Enter for new line
            </Text>
            <Text type="secondary" style={{ fontSize: timeFontSize }}>
              {messages.length} messages
            </Text>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Chat;
