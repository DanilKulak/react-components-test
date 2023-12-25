import styled from "@emotion/styled";

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const StatItem = styled.li`
  text-align: center;
  list-style: none;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }

  .quantity {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
`;