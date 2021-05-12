import { Box, Grid } from "@chakra-ui/react";
import RegistrationCard from "./AgeCard";

const RegistrationGrid = ({ data }) => {
  return (
    <Box marginY={4} marginX={[2, 4, 10, 12]}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={6}
      >
        {data.map((item) => (
          <>{/* <RegistrationCard key={item.id} /> */}</>
        ))}
      </Grid>
    </Box>
  );
};

export default RegistrationGrid;
