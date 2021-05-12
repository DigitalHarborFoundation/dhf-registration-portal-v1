import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { GiBookshelf } from "react-icons/gi";
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineLibrary } from "react-icons/hi";

const Header: React.FC = () => {
  return (
    <Flex
      as='nav'
      direction='column'
      justify='center'
      align='center'
      minWidth='100vw'
      height='8vh'
      bg='black'
      boxShadow='md'
      paddingY={8}
      paddingX={[2, 2, 8, 8]}
    >
      <Flex
        direction='row'
        justify='space-around'
        align='center'
        width={["100vw", "100vw", "80vw", "80vw"]}
        paddingX={[7, 4, 6, 8]}
      >
        <Link href='/' passHref>
          <a>
            <Flex direction='row' align='center'>
              {/* <Icon viewBox='0 0 288 288' marginRight={2}>
                <path
                  d='M0 0v288h288V0H0zm150.3 231.3l-.2-.1L61.9 151v-16.2l.1-.1 76.5 59.4V97.4v-4.9l-9.5-.1c.3 9.2-1.4 17.4-6.3 23.4-4.4 5.4-10.7 8.4-17.7 8.4-2.1 0-4.2-.3-6.3-.8-8.9-2.2-15.6-8.4-17-15.8-1.8-9.4 1.2-15.3 4.1-18.6 7.6-8.8 21.4-8.6 23.4-8.6h.8c1.2 4.2 1.9 7.9 2.2 11.8h-6.8c-8.3.2-12.6 4.5-12.6 10.1 0 1.1.2 2.2.6 3.2.1.7.5 1.5 1 2.2 1.8 2.7 5 4.5 9.4 4.7h.4c2.8.2 6.5-.4 9.3-3.9.7-.9 1.5-2.2 2.1-3.8.6-1.5 1-3 1.3-4.5.9-4.4.8-10.7-1.3-19.7-1-4.8-2.6-10-4.5-15.5l11-4.2c2.3 6.7 4.4 13.4 5.6 19.8l10.9.1c.1-9.6.4-18.5 1.3-26.7l12.6-4.8c-2 11-2.1 25-2.1 42.1v2.4h41.8v11.8h-41.8v125.8zm75.8-80.3l-59.6 56.9-4.8-23.1 64.4-50V151z'
                  fill='#1992d0'
                />
              </Icon> */}
              <Heading as='h1' size='md' color='white'>
                DHF Registration
              </Heading>
            </Flex>
          </a>
        </Link>
        <Flex direction='row' align='center' justify='center'>
          <Link href='/' passHref>
            <ChakraLink
              display={["none", "none", "inline-flex", "inline-flex"]}
            >
              <Text fontSize='lg' color='white' marginRight={4}>
                Register
              </Text>
            </ChakraLink>
          </Link>
          <Link href='/programs' passHref>
            <ChakraLink
              display={["none", "none", "inline-flex", "inline-flex"]}
            >
              <Text fontSize='lg' color='white' marginRight={4}>
                Programs
              </Text>
            </ChakraLink>
          </Link>
          {/* <Link href='/about' passHref>
            <ChakraLink
              display={["none", "none", "inline-flex", "inline-flex"]}
            >
              <Text fontSize='lg' color='white' marginRight={4}>
                About
              </Text>
            </ChakraLink>
          </Link> */}
          <Link href='/help' passHref>
            <ChakraLink>
              <Text fontSize='lg' color='white' marginRight={4}>
                Help
              </Text>
            </ChakraLink>
          </Link>
          {/* <ChakraLink
            href='https://github.com/jonathanprozzi/dhf-registration-portal'
            isExternal
          >
            <IconButton
              as={GoMarkGithub}
              size='sm'
              aria-label='Link to GitHub repository'
              color='white'
              variant='unstyled'
              _hover={{ bg: "black", color: "white" }}
              isRound
            ></IconButton>
          </ChakraLink> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
