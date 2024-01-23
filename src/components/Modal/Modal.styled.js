import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: 10; */
  background-color: rgba(18, 20, 23, 0.5);
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalStyle = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* position: relative; */
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background: #fff;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Img = styled.img`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #f3f3f2;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const Title = styled.p`
  color: #121417;
  line-height: 1.5;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const AkcentTitle = styled.span`
  color: #3470ff;
`;
export const Descriptions = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 14px;
`;

export const SubTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-top: 24px;
  line-height: 1.42;
`;
