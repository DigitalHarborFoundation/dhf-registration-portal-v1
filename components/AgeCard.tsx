import Link from "next/link";
import kebabCase from "lodash.kebabcase";
import {
  AspectRatio,
  Image,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

interface AgeCardProps {
  img: string;
  alt: string;
  title: string;
  programType: string;
  children: React.ReactNode;
}

const AgeCard = ({ img, alt, title, programType, children }: AgeCardProps) => {
  const router = useRouter();

  return (
    <Box
      _hover={{ cursor: "pointer" }}
      h='auto'
      maxW='lg'
      overflow='hidden'
      rounded='lg'
      border='1px solid'
      borderColor='gray.300'
      bg='white'
      onClick={() => router.push(`/register?programType=${programType}`)}
    >
      <AspectRatio width='100%' height='300px' ratio={1 / 1}>
        <Image src={img} alt={alt} objectFit='cover' />
      </AspectRatio>
      <Flex direction='column' align='center' justify='center' marginY={4}>
        <Box
          as='h3'
          color='gray.600'
          fontWeight='semibold'
          letterSpacing='wide'
          textTransform='uppercase'
          fontSize='md'
          isTruncated
        >
          {title}
        </Box>
        <Badge
          borderRadius='md'
          backgroundColor='cyan.100'
          textColor='cyan.900'
          paddingX={2}
          paddingY={1}
          marginBottom={4}
        >
          {programType === "Elementary"
            ? "Nano Maker (6 - 12 years old)"
            : "Mega Maker (13 - 18 years old)"}
        </Badge>
        <Box paddingX={4}>{children}</Box>

        <Button
          marginY={2}
          colorScheme='green'
          variant='solid'
          onClick={() => router.push(`/register?programType=${programType}`)}
        >
          Choose
        </Button>
      </Flex>
    </Box>
  );
};

export default AgeCard;
