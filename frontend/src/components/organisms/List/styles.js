import styled from "styled-components";
import Text from "@components/atoms/Text";

export const Wrapper = styled.div``;

export const Card = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  margin: 8px 20px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 4px;
`;

export const Description = styled(Text)`
  color: #222;
  font-size: 14px;
`;
