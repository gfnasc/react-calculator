import {Container, Content, Title, Row, Column} from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  return (
    <Container>
      <Title>React Calculator</Title>
      <Content>
        <Input />
          <Row>
              <Button />
              <Button />
              <Button />
              <Button />
          </Row>
        <Button />
      </Content>
    </Container>
  );
}

export default App;
