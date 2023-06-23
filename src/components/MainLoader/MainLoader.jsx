import { Box, BoxWave, Wave } from "./MainLoader.styled";

export const MainLoader = () => {
  const waveElements = Array.from({ length: 20 }, (_, index) => (
    <Wave key={index} />
  ));

  return (
    <Box>
      <BoxWave>{waveElements}</BoxWave>
    </Box>
  );
};
