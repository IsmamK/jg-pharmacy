"use client"

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('today');
  const [earnings, setEarnings] = useState(0);
  const [stats, setStats] = useState({
    totalOrders: 0,
    processing: 0,
    delivered: 0,
    cancelled: 0,
    pending: 0
  });

  // Mock data - in a real app you would fetch this from an API
  useEffect(() => {
    // Simulate loading data based on time range
    const fetchData = () => {
      const earningsData = {
        today: 2543.75,
        yesterday: 1987.50,
        last5Days: 9876.25,
        lastMonth: 45210.00,
        lastYear: 548760.00,
        allTime: 1254870.50
      };
      
      const statsData = {
        totalOrders: 342,
        processing: 28,
        delivered: 287,
        cancelled: 15,
        pending: 12
      };
      
      setEarnings(earningsData[timeRange] || earningsData.today);
      setStats(statsData);
    };
    
    fetchData();
  }, [timeRange]);

  return (
    <DashboardContainer>
      <DashboardTitle>Dashboard Overview</DashboardTitle>
      <CardContainer>
        <EarningsCard>
          <CardHeader>
            <h3>Total Earnings</h3>
            <SelectDropdown value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
              <option value="today">Today{'s'} Earnings</option>
              <option value="yesterday">Yesterday{'s'} Earnings</option>
              <option value="last5Days">Last 5 Days Earnings</option>
              <option value="lastMonth">Last Month Earnings</option>
              <option value="lastYear">Last Year Earnings</option>
              <option value="allTime">All Time Earnings</option>
            </SelectDropdown>
          </CardHeader>
          <EarningsAmount>${earnings.toLocaleString()}</EarningsAmount>
          <EarningsFooter>
            <TrendIndicator positive={earnings > 2000}>
              {earnings > 2000 ? '↑' : '↓'} {earnings > 2000 ? '12%' : '5%'} from average
            </TrendIndicator>
          </EarningsFooter>
        </EarningsCard>

        <StatCard color="#22c55e">
          <StatValue>{stats.totalOrders}</StatValue>
          <StatLabel>Total Orders</StatLabel>
          <StatIcon>📦</StatIcon>
        </StatCard>

        <StatCard color="#beedcf">
          <StatValue>{stats.processing}</StatValue>
          <StatLabel>Processing</StatLabel>
          <StatIcon>⏳</StatIcon>
        </StatCard>

        <StatCard color="#2377fc">
          <StatValue>{stats.delivered}</StatValue>
          <StatLabel>Delivered</StatLabel>
          <StatIcon>🚚</StatIcon>
        </StatCard>

        <StatCard color="#ff5200">
          <StatValue>{stats.cancelled}</StatValue>
          <StatLabel>Cancelled</StatLabel>
          <StatIcon>❌</StatIcon>
        </StatCard>
      </CardContainer>
    </DashboardContainer>
  );
};

// Styled Components
const DashboardContainer = styled.div`
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const DashboardTitle = styled.h1`
  font-size: 1.8rem;
  color: #3b1111;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 24px;
    background: #2377fc;
    margin-right: 12px;
    border-radius: 4px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;

const EarningsCard = styled.div`
  flex: 3;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  border-left: 6px solid #3b1111;
`;

const StatCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-left: 6px solid ${props => props.color};
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.color};
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h3 {
    margin: 0;
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const SelectDropdown = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: white;
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #2377fc;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(35, 119, 252, 0.2);
  }
`;

const EarningsAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b1111;
  margin: 1rem 0;
`;

const EarningsFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TrendIndicator = styled.span`
  font-size: 0.9rem;
  color: ${props => props.positive ? '#22c55e' : '#ff5200'};
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const StatIcon = styled.div`
  font-size: 1.8rem;
  margin-top: auto;
  align-self: flex-end;
`;

export default Dashboard;