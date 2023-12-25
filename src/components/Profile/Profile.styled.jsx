import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    font-family: 'Arial', sans-serif;
  color: #333;

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .description {
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .tag {
    color: #666;
    margin-bottom: 5px;
  }

  .location {
    font-style: italic;
    color: #888;
  }
`;
