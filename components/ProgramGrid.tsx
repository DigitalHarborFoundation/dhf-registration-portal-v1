import { Box, Grid } from "@chakra-ui/react";
import ProgramCard from "../components/ProgramCard";

const ProgramGrid = ({ data }) => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={6}
    >
      {data.map((item) => (
        <>
          <ProgramCard key={item.id} data={item} />
        </>
      ))}
    </Grid>
  );
};

export default ProgramGrid;
