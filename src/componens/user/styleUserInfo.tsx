import styled from "styled-components";
import { v } from "../../../src/styles/variables";

export const Wrapper = styled.div`
  border: ${v.borderMain};
  margin-bottom: 24px;
  h1 {
    margin-bottom: 0;
    padding: 17px 0 15px 14px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
 /* margin: auto; */

  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 18px;
  border-top: ${v.borderMain};
  &:not(:last-child) {
    border-right: ${v.borderMain};
  }
  padding: 10px 10px;
  width: 25%;
  text-align: center;

  @media (min-width: 1000px) {
    width: 25%;
  }

  @media (min-width: 480px) and (max-width: 1000px) {
    width: 50%;
    &:nth-child(2n) {
      border-right: none;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
