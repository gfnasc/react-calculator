import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  width: 100%;
  height: 100vh;
  background-color: #CACACA;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  background-color: #FFF;
  width: 80%;
  border-radius: 16px;
  padding: 12px;
`;

export const Title = styled.h1`
  font-size: 36px;
  padding-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;


