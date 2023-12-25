import styled from "@emotion/styled";

export const StatisticContainer = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  .title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  .stat-list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }
`;

export const StatisticItemContainer = styled.li`
  text-align: center;
  padding: 10px;
  border-radius: 8px;

  .label {
    font-size: 14px;
    color: #fff;
  }

  .percentage {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
`;

export const getColorByIndex = index => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    return colors[index % colors.length];
  };