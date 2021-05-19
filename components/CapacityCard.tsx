import Link from "next/link";
import kebabCase from "lodash.kebabcase";
import {
  AspectRatio,
  Image,
  Box,
  Button,
  Flex,
  Text,
  Badge,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CapacityCardProps } from "../types/data";

const CapacityCard = ({ data }: CapacityCardProps) => {
  return (
    <Box
      height='auto'
      maxW='md'
      overflow='hidden'
      rounded='lg'
      border='1px solid'
      borderColor='gray.300'
      paddingBottom={8}
    >
      <Box>
        {data.fields["Featured Image"] && (
          <AspectRatio width='100%' height='300px' ratio={4 / 3}>
            <Image
              src={data.fields["Featured Image"][0].url}
              alt={`${data.fields["Name"]} Course Featured Image`}
              objectFit='cover'
            />
          </AspectRatio>
        )}
      </Box>

      <Box paddingX={4} alignItems='center' justifyContent='center'>
        <Flex
          direction='row'
          align='baseline'
          justify='space-between'
          paddingTop={2}
        >
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
          >
            {data.fields["Age"]}
          </Box>
          <Badge
            borderRadius='md'
            backgroundColor={
              data.fields["Capacity"] === "Open" ? "cyan.100" : "gray.100"
            }
            textColor={
              data.fields["Capacity"] === "Open" ? "cyan.900" : "gray.900"
            }
            paddingX={2}
            paddingY={1}
            marginBottom={4}
          >
            {data.fields["Capacity"] ? data.fields["Capacity"] : null}
          </Badge>
        </Flex>

        <Box alignItems='center' justifyContent='center'>
          <Box
            as='h3'
            color='gray.600'
            fontWeight='semibold'
            letterSpacing='wide'
            textTransform='uppercase'
            fontSize='md'
            ml={0}
            paddingBottom={1}
          >
            {data.fields["Program Name"]}
          </Box>

          {data.fields["Dates"] ? (
            <Box
              as='p'
              color='gray.800'
              fontWeight='normal'
              letterSpacing='wide'
              fontSize='md'
            >
              <Text>{data.fields["Dates"]}</Text>
            </Box>
          ) : null}
          {data.fields["Days"] ? (
            <Box
              as='p'
              color='gray.800'
              fontWeight='light'
              letterSpacing='wide'
              fontSize='md'
              paddingBottom={4}
            >
              <Text>
                {data.fields["Days"]}{" "}
                {data.fields["Times"] ? data.fields["Times"] : null}
              </Text>
            </Box>
          ) : null}
          {data.fields["Seats Available"] ? (
            <Box
              color='gray.800'
              fontWeight='normal'
              letterSpacing='wide'
              fontSize='md'
              paddingBottom={4}
            >
              <Text color='gray.600'>
                Seats Available: {data.fields["Seats Available"]}/
                {data.fields["Total Seats"]}
              </Text>
            </Box>
          ) : (
            <Box
              color='gray.800'
              fontWeight='normal'
              letterSpacing='wide'
              fontSize='md'
              paddingBottom={4}
            >
              <Text color='gray.600'>This session is waitlisted.</Text>
            </Box>
          )}
          {data.fields["Capacity"] === "Open" ? (
            <ChakraLink
              href={data.fields["Registration Form URL"]}
              isExternal
              background='green.200'
              color='green.600'
              padding={2}
              rounded='md'
            >
              Register for Program
              <ExternalLinkIcon mx='2px' />
            </ChakraLink>
          ) : (
            <ChakraLink
              href={data.fields["Waitlist Form URL"]}
              isExternal
              background='gray.200'
              color='gray.600'
              padding={2}
              rounded='md'
            >
              Join the Waitlist
              <ExternalLinkIcon mx='2px' />
            </ChakraLink>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CapacityCard;
