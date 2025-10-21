import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  margin-top: 8px;
  margin-bottom: 20px;
  border-bottom: 1px solid #c4c4c4;
`;

export const Logo = styled.img`
  /* width: calc(14px + 2vw); */
  width: 55px;
  height: 24px;
  margin-right: 10px;
  margin-bottom: -3px;
  /* margin-top: 38px; */
`;

export const Sidebar = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const SidebarItem = styled.div<{ isActive: boolean }>`
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #223345;
  border-radius: 5px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;
