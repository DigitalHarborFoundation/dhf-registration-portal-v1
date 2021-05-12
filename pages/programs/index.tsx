import Head from "next/head";
import SiteLayout from "../../components/SiteLayout";
import {
  Heading,
  Flex,
  Alert,
  Spinner,
  Stack,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import useSWR from "swr";
import ProgramGrid from "../../components/ProgramGrid";

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

const ProgramsPage = () => {
  const { data, error } = useSWR(`/api/get-all-programs`, fetcher, {});
  if (error) {
    return (
      <Flex
        direction='column'
        justify='center'
        align='center'
        minHeight='100vh'
      >
        <Alert status='error'>
          Failed to load programs: {error.message}. Please reach out to
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
    <>
      <Head>
        <title>DHF Registration Portal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        direction='column'
        justify='center'
        align='center'
        marginX={[4, 4, 10, 12]}
      >
        <Heading as='h2' marginTop={4} color='gray.800'>
          Current Programs
        </Heading>
        <Box
          maxWidth='80vw'
          marginY={8}
          paddingX={[2, 2, 2, 2]}
          paddingY={4}
          bg='white'
          rounded='md'
        >
          <Stack spacing={4} paddingX={2} marginX={[2, 4, 10, 12]}>
            <Text color='gray.800'>
              We are excited to offer in-person programming once again to our
              Baltimore community. This summer, we are offering two courses,
              both available to Elementary and Middle-High school aged youth:
              <List spacing={4} marginTop={2}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='cyan.400' />
                  2D Design to 3D Printing
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='cyan.400' />
                  Game Maker
                </ListItem>
              </List>
            </Text>
            <Text color='gray.800'>
              Each of these courses has been adapted for our age groups
              (Elementary and Mid-High). You may see similar projects and
              descriptions for both courses, but can rest assured that each
              course will be age appropriate in terms of complexity and fun.
            </Text>
            <Text color='gray.800'>
              We will offer each camp on alternating weeks so that our coaches
              can teach each age group. Offering camps this way allows us to
              offer consistent programming despite the challenges that COVID has
              placed upon us and the world at large.
            </Text>
          </Stack>
          <Box marginY={4} marginX={[2, 4, 10, 12]}>
            <ProgramGrid data={data} />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default ProgramsPage;
