import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import SiteLayout from "../components/SiteLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS>
      <SiteLayout>
        <DefaultSeo
          title='DHF Registration Portal'
          description='This is the registration portal for the Digital Harbor Foundation programs.'
          canonical='https://register.digitalharbor.org'
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://register.digitalharbor.org",
            site_name: "DHF Registration Portal",
            title: "DHF Registration Portal",
            description:
              "This is the registration portal for the Digital Harbor Foundation programs.",
            images: [
              {
                url: "/dhf-library-social-scaled.jpg",
                width: 1200,
                height: 630,
                alt: "A whiteboard with descriptions of a makerspace",
              },
            ],
          }}
        />
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  );
};

export default MyApp;
