import React, { useState, useRef, useEffect } from "react";
import { Layout, Typography, Button, Input, Avatar, Card, Divider } from "antd";
import {
  RobotOutlined,
  UserOutlined,
  ArrowLeftOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./Chat.css";

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
    <Layout className="chat-layout">
      {/* Header */}
      <Header className="chat-header">
        <div className="header-left-section">
          <Button 
            type="text" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate("/dashboard")}
            className="back-button"
          >
            <span className="back-button-text">
              Back to Dashboard
            </span>
          </Button>
          
          <Divider type="vertical" className="header-divider" />
          
          <div className="header-title-section">
            <RobotOutlined className="header-logo" />
            <div className="header-title-content">
              <Title level={4} className="header-title">
                AI Chat Service
              </Title>
              <Text type="secondary" className="header-subtitle">
                Demo Mode
              </Text>
            </div>
          </div>
        </div>
        
        <div className="header-status">
          <div className="status-indicator" />
          <Text type="secondary" className="status-text">
            Online
          </Text>
        </div>
      </Header>

      {/* Chat Content */}
      <Content className="chat-content">
        {/* Chat Window */}
        <div className="chat-window">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-container ${message.sender}`}
            >
              <div className={`message-content ${message.sender}`}>
                <Avatar
                  icon={message.sender === "user" ? <UserOutlined /> : <RobotOutlined />}
                  className={`message-avatar ${message.sender}`}
                />
                <div className={`message-bubble ${message.sender}`}>
                  <Card
                    size="small"
                    className={`message-card ${message.sender}`}
                  >
                    <Paragraph className={`message-text ${message.sender}`}>
                      {message.text}
                    </Paragraph>
                  </Card>
                  <Text className={`message-time ${message.sender}`}>
                    {formatTime(message.timestamp)}
                  </Text>
                </div>
              </div>
            </div>
          ))}
          
          {/* AI Typing Animation */}
          {isTyping && (
            <div className="typing-container">
              <div className="typing-content">
                <Avatar
                  icon={<RobotOutlined />}
                  className="message-avatar ai"
                />
                <Card size="small" className="typing-card">
                  <div className="typing-dots">
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                  </div>
                </Card>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input Area */}
        <div className="input-area">
          <div className="input-container">
            <TextArea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              autoSize={{ minRows: 1, maxRows: 4 }}
              className="message-input"
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="send-button"
            />
          </div>
          <div className="input-footer">
            <Text type="secondary" className="input-hint">
              Press Enter to send, Shift+Enter for new line
            </Text>
            <Text type="secondary" className="message-count">
              {messages.length} messages
            </Text>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Chat;
