import { DefaultSeo } from "next-seo";
import "../styles/globals.scss";
import "augmented-ui/augmented-ui.min.css";
import Footer from "../components/sections/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                title='MarshallRuse.com'
                description='Web Developer'
                openGraph={{
                    type: "website",
                    locale: "en_us",
                    url: "https://marshallruse.com",
                    site_name: "MarshallRuse.com",
                    title: "MarshallRuse.com",
                    description: "Web Developer",
                    images: [
                        {
                            url: "/images/ThisWebsite/header.png",
                            width: 1891,
                            height: 888,
                            alt: "Header section of MarshallRuse.com",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
            />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
