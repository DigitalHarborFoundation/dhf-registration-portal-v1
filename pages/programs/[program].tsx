import { Heading, Flex, Box, AspectRatio, Image } from "@chakra-ui/react";
const ReactMarkdown = require("react-markdown");
import { jsx, css } from "@emotion/react";

const ProgramLandingPage = ({ name, featuredImage, detailedDescription }) => {
  console.log({ name, featuredImage, detailedDescription });
  return (
    <Flex direction='column' justify='center' align='center '>
      <Box
        maxWidth='960px'
        bg='white'
        marginY={8}
        paddingX={8}
        marginX={[4, 4, 10, 12]}
        paddingY={4}
        rounded='md'
      >
        <Heading
          as='h2'
          size='xl'
          paddingY={4}
          textAlign='center'
          textColor='gray.900'
        >
          {name}
        </Heading>

        <AspectRatio width='100%' ratio={16 / 9}>
          <Image src={featuredImage[0].url} alt={name} objectFit='cover' />
        </AspectRatio>

        <Box paddingY={4} textColor='gray.900'>
          <ReactMarkdown
            css={css`
              > ul {
                padding-top: 1rem;
                padding-bottom: 1rem;
                padding-left: 2rem;
              }
              > p:first-of-type {
                padding-bottom: 1rem;

                > a {
                  color: #3182ce;
                  cursor: pointer;
                  text-decoration: none;
                  transition: all 0.15s ease-out;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            `}
            children={detailedDescription}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default ProgramLandingPage;

export async function getServerSideProps({ params, query }) {
  console.log("query", query.id);
  const airApiKey = process.env.AIR_API_KEY;
  const baseId = process.env.BASE_ID;
  const programsTable = process.env.PROGRAMS_TABLE_NAME;

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${programsTable}?filterByFormula=%7Bname_api_lookup%7D%3D%27${params.program}%27&api_key=${airApiKey}`,
    // `https://api.airtable.com/v0/${baseId}/${programsTable}/${query.id}?api_key=${airApiKey}`,
    // `https://api.airtable.com/v0/appKSaLsVtw29p6ld/Programs/recSaeUqXWGTz1XNT?api_key=keyIMrsUReqToqXRv`,

    { method: "GET", mode: "no-cors", credentials: "same-origin" }
  );
  const data = await res.json();

  if (data.records.length > 0) {
    return {
      props: {
        name: data.records[0].fields["Name"] || null,
        detailedDescription:
          data.records[0].fields["Detailed Program Information"] || null,
        featuredImage: data.records[0].fields["Featured Image"] || null,
      },
    };
  } else {
    return {
      props: {
        name: "empty",
      },
    };
  }
}
