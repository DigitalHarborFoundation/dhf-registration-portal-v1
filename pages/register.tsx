import { useState } from "react";
import Head from "next/head";
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
} from "@chakra-ui/react";
import useSWR from "swr";
import AgeCard from "../components/AgeCard";
import CapacityGrid from "../components/CapacityGrid";
import { GiConsoleController } from "react-icons/gi";

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

const RegisterPage = () => {
  const [programAge, setProgramAge] = useState("");
  const router = useRouter();
  const { data, error } = useSWR(`/api/get-all-program-instances`, fetcher, {});
  console.log("data from swr", data);

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

  if (!router.query.programType) {
    router.push("/");
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
        <Box
          width='90vw'
          marginY={8}
          paddingX={[2, 2, 2, 2]}
          paddingY={4}
          bg='white'
          rounded='md'
        >
          <Flex direction='column' justify='center' align='center' width='80vw'>
            <Heading as='h2' color='gray.900'>
              {router.query.programType} Programs
            </Heading>

            <Box marginY={4} marginX={[2, 4, 10, 12]}>
              <Flex
                direction={["column", "column", "row", "row"]}
                align='center'
                justify='flex-start'
                marginBottom={4}
              >
                <Button
                  colorScheme='cyan'
                  variant='outline'
                  onClick={() => router.push(`/`)}
                  marginRight={2}
                >
                  Back to Age Selection
                </Button>
                {router.query.programType === "Elementary" ? (
                  <Button
                    colorScheme='purple'
                    variant='ghost'
                    onClick={() =>
                      router.push(`/register?programType=Middle/High`)
                    }
                  >
                    View Mid/High Programs
                  </Button>
                ) : (
                  <Button
                    colorScheme='purple'
                    variant='outline'
                    onClick={() =>
                      router.push(`/register?programType=Elementary`)
                    }
                  >
                    View Elementary Programs
                  </Button>
                )}
              </Flex>
              <CapacityGrid
                data={data.filter(
                  (program) =>
                    program.fields["Age"][0] === router.query.programType
                )}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default RegisterPage;
