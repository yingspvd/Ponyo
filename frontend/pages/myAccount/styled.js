import styled from "styled-components";
import COLORS from "../../public/constant/colors";
import { Modal } from "antd";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.PRIMARY_LIGHT};
  min-height: 100vh;
`;

export const ProfilePicture = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-self: center;
`;

export const Menu = styled.div.attrs((props) => {
  const isActive = props.isSelected;
  const borderStyle = isActive ? `2px solid ${COLORS.PRIMARY_BLUE}` : "none";
  const textColor = isActive ? COLORS.PRIMARY_BLUE : "rgba(2, 133, 143, 0.5)";
  return { borderStyle, textColor };
})`
  border-bottom: ${(props) => props.borderStyle};
  font-size: 1rem;
  width: 50%;
  text-align: center;
  color: ${(props) => props.textColor};
  cursor: pointer;
`;

export const List = styled.div`
  background: ${COLORS.PRIMARY_DARK};
  color: white;
  padding: 20px;
`;

export const Popup = styled(Modal)`
  .ant-modal-header {
    border: 0;
  }
  .ant-modal-title {
    font-size: 24px;
    margin: 10px 0;
  }
  .ant-modal-body {
    // padding: 0 20px;
  }
`;