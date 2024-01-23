import styled from "styled-components";

export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Title = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const AkcentTitle = styled.span`
  color: #3470ff;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`;
export const Text = styled.p`
  position: relative;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.25);
    margin: 0 6px;
  }
`;

export const Btn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  border: none;
  margin-top: 28px;

  &:hover,
  :focus {
    background: #0b44cd;
  }
`;
