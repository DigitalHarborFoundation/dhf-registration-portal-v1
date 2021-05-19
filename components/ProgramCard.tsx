import Link from "next/link";
import kebabCase from "lodash.kebabcase";
import { AspectRatio, Image, Box, Button, Flex } from "@chakra-ui/react";
import { ProgramDataProps } from "../types/types";

const ProgramCard = ({ data }: ProgramDataProps) => {
  return (
    <Box
      h='auto'
      maxW='md'
      overflow='hidden'
      rounded='lg'
      border='1px solid'
      borderColor='gray.300'
    >
      <Link
        href={`/programs/${kebabCase(data.fields["Name"])}?id=${
          data.fields.record_id
        }`}
      >
        <Box _hover={{ cursor: "pointer" }}>
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
      </Link>
      <Box p='4' alignItems='center' justifyContent='center'>
        <Box d='flex' alignItems='baseline'>
          <Flex direction='row'>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
            >
              {data.fields["Age"]}
            </Box>
          </Flex>
        </Box>
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
            <Link
              href={`/programs/${kebabCase(data.fields["Name"])}?id=${
                data.fields.record_id
              }`}
            >
              {data.fields["Name"]}
            </Link>
          </Box>
          <Box
            as='p'
            color='gray.800'
            fontWeight='normal'
            letterSpacing='wide'
            fontSize='md'
            ml={0}
            paddingBottom={4}
          >
            {data.fields["Description"]}
          </Box>
          {/* <Link href={`/programs/${kebabCase(data.fields["Name"])}`}>
            <Button colorScheme='purple' variant='outline'>
              Explore Course
            </Button>
          </Link> */}
        </Box>
      </Box>
    </Box>
  );
};

export default ProgramCard;
