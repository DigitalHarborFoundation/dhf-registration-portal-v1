import { Box, Grid } from "@chakra-ui/react";
import CapacityCard from "../components/CapacityCard";

const CapacityGrid = ({ data }) => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={4}
    >
      {data.map((item) => (
        <>
          <CapacityCard key={item.id} data={item} />
        </>
      ))}
    </Grid>
  );
};

export default CapacityGrid;
