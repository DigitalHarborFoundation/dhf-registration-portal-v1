import Link from "next/link";
import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { HiOutlineCollection, HiOutlineAnnotation } from "react-icons/hi";

const BottomNavigation = () => {
  return (
    <Flex
      as='nav'
      display={["flex", "flex", "none", "none"]}
      direction='column'
      justify='center'
      align='center'
      minWidth='100vw'
      height='8vh'
      bg='black'
      position='fixed'
      bottom='0'
      zIndex='10'
      boxShadow='md'
      paddingY={10}
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
          <ChakraLink color='white'>
            <Flex direction='column' align='center' justify='center'>
              <IconButton
                variant='outline'
                size='sm'
                colorScheme='white'
                aria-label='Go to registration page'
                icon={<HiOutlineCollection />}
              />
              <Text fontSize='md' color='white'>
                Register
              </Text>
            </Flex>
          </ChakraLink>
        </Link>

        <Link href='/programs' passHref>
          <ChakraLink color='white'>
            <Flex direction='column' align='center' justify='center'>
              <IconButton
                variant='outline'
                size='sm'
                colorScheme='white'
                aria-label='Go to programs page'
                icon={<HiOutlineAnnotation />}
              />
              <Text fontSize='md' color='white'>
                Programs
              </Text>
            </Flex>
          </ChakraLink>
        </Link>
      </Flex>
    </Flex>
  );
};

export default BottomNavigation;
