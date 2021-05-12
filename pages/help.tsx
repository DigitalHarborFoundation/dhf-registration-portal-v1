import { NextPage } from "next";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
  Icon,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const HelpPage: NextPage = () => {
  return (
    <Flex
      direction='column'
      align='center'
      justify='center'
      marginX={[4, 4, 10, 12]}
    >
      <Heading as='h2' textAlign='center' marginTop={4} textColor='gray.900'>
        Getting Help
      </Heading>
      <Box
        maxWidth='90vw'
        marginY={8}
        paddingX={[2, 2, 4, 4]}
        paddingY={4}
        bg='white'
        rounded='md'
      >
        <Stack spacing={4} maxWidth='960px'>
          <Text color='gray.800'>
            We're excited to offer registration for in person programs once
            again, but recognize that families may have questions and concerns
            about the registration process.{" "}
          </Text>
          <Text color='gray.800'>
            If you have a question, comment, or concern about registering for
            programs, please feel free to contact us:
            <List spacing={4} marginTop={2}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='cyan.400' />
                programs@digitalharbor.org
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='cyan.400' />
                443-833-6939
              </ListItem>
            </List>
          </Text>
          <Text color='gray.800'>
            We are updating our COVID safety protocols for summer and will reach
            out to registered families directly to provide more information and
            collect necessary paperwork. Families can be assured that our safety
            protocol will include the following for staff and youth:
            <List spacing={4} marginTop={2}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='cyan.400' />
                Mandated Personal Protective Equipment (PPE) Use
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='cyan.400' />
                Social Distancing
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='cyan.400' />
                Robust Cleaning Procedures
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='cyan.400' />
                Contact Tracing
              </ListItem>
            </List>
          </Text>
          <Text color='gray.800'>
            If you have any questions or concerns about this protocol before or
            after we share it widely, please reach out via the contact above.
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default HelpPage;
