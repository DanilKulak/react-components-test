import styled from "@emotion/styled";

export const FriendListContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const FriendListSeparator = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 10px 0;
`;

export const FriendListItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  .status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .online {
    background-color: #2ecc71;
  }

  .offline {
    background-color: #e74c3c;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .name {
    font-size: 16px;
    color: #333;
  }
`;