import { Container, Ball, Box, Shadow } from "./Ball.styled";

export const Balls = () => {
  return (
    <Container>
      <Box>
        <Ball></Ball>
        <Ball></Ball>
        <Ball></Ball>
        <Shadow></Shadow>
        <Shadow></Shadow>
        <Shadow></Shadow>
      </Box>
    </Container>
  );
};
