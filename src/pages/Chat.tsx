import React, { useState, useRef, useEffect } from "react";
import { Layout, Typography, Button, Input, Avatar, Card, Divider } from "antd";
import {
  RobotOutlined,
  UserOutlined,
  ArrowLeftOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      {/* Header */}
      <Header style={{ 
        background: "#fff", 
        padding: "0 24px", 
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        height: "64px",
        lineHeight: "64px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Button 
            type="text" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate("/dashboard")}
            style={{ fontSize: 16, height: "40px" }}
          >
            Back to Dashboard
          </Button>
          <Divider type="vertical" style={{ height: "24px", margin: "0 8px" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <RobotOutlined style={{ fontSize: 24, color: "#1890ff" }} />
            <div>
              <Title level={4} style={{ margin: 0, color: "#262626" }}>
                AI Chat Service
              </Title>
              <Text type="secondary" style={{ fontSize: "12px" }}>Demo Mode</Text>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ 
            width: 8, 
            height: 8, 
            borderRadius: "50%", 
            background: "#52c41a",
            marginRight: 8
          }} />
          <Text type="secondary" style={{ fontSize: "12px" }}>Online</Text>
        </div>
      </Header>

      {/* Chat Content */}
      <Content style={{ 
        display: "flex", 
        flexDirection: "column", 
        height: "calc(100vh - 64px)",
        padding: "24px",
        background: "transparent"
      }}>
        {/* Chat Window */}
        <div style={{ 
          flex: 1, 
          overflowY: "auto", 
          marginBottom: "24px",
          padding: "20px",
          background: "#fff",
          borderRadius: "16px",
          border: "1px solid #e8e8e8",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: "flex",
                justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: "20px",
                width: "100%"
              }}
            >
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "12px",
                maxWidth: "75%",
                flexDirection: message.sender === "user" ? "row-reverse" : "row"
              }}>
                <Avatar
                  icon={message.sender === "user" ? <UserOutlined /> : <RobotOutlined />}
                  style={{
                    backgroundColor: message.sender === "user" ? "#1890ff" : "#52c41a",
                    flexShrink: 0,
                    width: "36px",
                    height: "36px"
                  }}
                />
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: message.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "calc(100% - 48px)"
                }}>
                  <Card
                    size="small"
                    style={{
                      background: message.sender === "user" ? "#1890ff" : "#f8f9fa",
                      color: message.sender === "user" ? "white" : "#262626",
                      borderRadius: "18px",
                      border: message.sender === "user" ? "none" : "1px solid #e8e8e8",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      maxWidth: "100%",
                      padding: "12px 16px"
                    }}
                  >
                    <Paragraph style={{ 
                      margin: 0, 
                      color: message.sender === "user" ? "white" : "#262626",
                      wordBreak: "break-word",
                      fontSize: "14px",
                      lineHeight: "1.5"
                    }}>
                      {message.text}
                    </Paragraph>
                  </Card>
                  <Text 
                    type="secondary" 
                    style={{ 
                      fontSize: "11px", 
                      marginTop: "6px",
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
            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Avatar
                  icon={<RobotOutlined />}
                  style={{ backgroundColor: "#52c41a", flexShrink: 0, width: "36px", height: "36px" }}
                />
                <Card
                  size="small"
                  style={{
                    background: "#f8f9fa",
                    borderRadius: "18px",
                    border: "1px solid #e8e8e8",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    padding: "16px 20px"
                  }}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#1890ff",
                      animation: "typing 1.4s infinite ease-in-out"
                    }} />
                    <div style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#1890ff",
                      animation: "typing 1.4s infinite ease-in-out",
                      animationDelay: "0.2s"
                    }} />
                    <div style={{
                      width: "8px",
                      height: "8px",
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
          padding: "20px", 
          borderRadius: "16px",
          border: "1px solid #e8e8e8",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}>
            <TextArea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              autoSize={{ minRows: 1, maxRows: 4 }}
              style={{
                borderRadius: "20px",
                border: "1px solid #d9d9d9",
                padding: "12px 20px",
                resize: "none",
                fontSize: "14px",
                lineHeight: "1.5"
              }}
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              style={{
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            />
          </div>
          <div style={{ 
            marginTop: "12px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center"
          }}>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              Press Enter to send, Shift+Enter for new line
            </Text>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {messages.length} messages
            </Text>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Chat;
