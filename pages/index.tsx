import { useState } from "react";
import { useRouter } from "next/router";
import SiteLayout from "../components/SiteLayout";
import {
  Heading,
  Flex,
  Alert,
  Spinner,
  Stack,
  Box,
  Text,
  Grid,
  AspectRatio,
  Image,
  Button,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import useSWR from "swr";
import AgeCard from "../components/AgeCard";
import CapacityGrid from "../components/CapacityGrid";

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    credentials: "same-origin",
  });
  if (!res.ok) {
    throw Error("There is problem with the data request.");
  }
  const data = await res.json();

  return data;
};

const Home = () => {
  const [programAge, setProgramAge] = useState("");
  const [selectedProgramAge, setSelectedProgramAge] = useState(false);
  const router = useRouter();
  const { data, error } = useSWR(`/api/get-all-program-instances`, fetcher, {});
  const handleProgramAgeSelect = (age) => {
    setProgramAge(age);
    router.push(`?${age}`);
    setSelectedProgramAge(true);
  };

  if (error) {
    return (
      <Flex
        direction='column'
        justify='center'
        align='center'
        minHeight='100vh'
      >
        <Alert status='error'>
          Failed to load data: {error.message}. Please reach out to
          contact@digitalharbor.org
        </Alert>
      </Flex>
    );
  }

  if (!data) {
    return (
      <Flex
        direction='column'
        justify='center'
        align='center'
        minHeight='100vh'
      >
        <Flex direction='column' align='center' justify='center'>
          <Alert status='info'>Loading...</Alert>
          <Spinner
            size='xl'
            thickness='2px'
            emptyColor='cyan.100'
            color='cyan.300'
            margin={4}
          />
        </Flex>
      </Flex>
    );
  }

  if (data.length === 0) {
    return (
      <Flex
        direction='column'
        justify='center'
        align='center'
        minHeight='100vh'
      >
        <Flex direction='column' align='center' justify='center'>
          <Alert status='info'>
            There don't appear to be any programs currently available.
          </Alert>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      marginX={[4, 4, 10, 12]}
    >
      {" "}
      <Heading as='h2' marginTop={4} color='gray.800'>
        Program Registration
      </Heading>
      <Box
        maxWidth='80vw'
        marginY={8}
        paddingX={[2, 2, 4, 4]}
        paddingY={4}
        bg='white'
        rounded='md'
      >
        <Flex direction='column' justify='center' align='center' width='80vw'>
          <Heading as='h2' textColor='gray.900'>
            I am interested in...
          </Heading>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            marginTop={4}
            gap={6}
          >
            <AgeCard
              title='Elementary Programs'
              img='/gamemaker-elem-key-image-reduced.jpeg'
              alt='DHF youth in an Elementary program'
              programType='Elementary'
            >
              <Stack spacing={4}>
                <Text textColor='gray.900'>
                  Our elementary maker camps are exploratory introductions to
                  new technology. These programs offer plenty of opportunities
                  for play and problem solving. All youth with interests in
                  making are welcome, regardless of prior experience.
                </Text>

                <Text textColor='gray.900'>
                  Our Elementary Maker Camps are open to{" "}
                  <Text as='strong'>participants ages 6 - 10 years old</Text>.
                </Text>

                <Text textColor='gray.900'>
                  This year, our Maker Camps are operating at a limited capacity
                  to allow for social distancing. We appreciate your patience
                  and understanding throughout the registration process.
                </Text>
                <br />
              </Stack>
            </AgeCard>
            <AgeCard
              title='Middle and High School Programs'
              img='/2d-to-3d-mh-key-image-reduced.jpeg'
              alt='DHF youth in a Middle and High School program'
              programType='Middle/High'
            >
              <Stack spacing={4}>
                <Text textColor='gray.900'>
                  Our middle and high school maker camps are fun introductions
                  to new technology. We aim to provide youth with fundamental
                  skills in our core pathways, allowing them to further their
                  interests in STEM and making. All youth are welcome regardless
                  of prior experience.
                </Text>

                <Text textColor='gray.900'>
                  Our Middle-High Maker Camps are open to{" "}
                  <Text as='strong'>participants ages 11 - 14 years old</Text>.
                </Text>

                <Text textColor='gray.900'>
                  This year, our Maker Camps are operating at a limited capacity
                  to allow for social distancing. We appreciate your patience
                  and understanding throughout the registration process.
                </Text>
              </Stack>
            </AgeCard>
          </Grid>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
