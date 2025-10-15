import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  padding: 12px;
  margin-bottom: 12px;
  font-size: 24px;
  background-color: #AAFFAA;
  border: 2px solid #CDCDCD;
  border-radius: 16px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  input {
    width: 100%;
    height: 75px;
    background-color: #AAFFAA;
    border: 0;
    float: right;
    clear: both;
    font-size: 42px;
    font-weight: 700;
    text-align: right;
    outline: none
  }
`