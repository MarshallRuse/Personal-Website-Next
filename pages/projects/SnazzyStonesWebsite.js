import styleVariables from "../../styles/variables.module.scss";
import ProjectPageTemplate from "../../components/elements/ProjectPageTemplate";
import { IconRow, IconBox, NavLink, SubSubsectionTitle } from "../../components/elements/styledComponents";
import GlowingIcon from "../../components/elements/GlowingIcon";
import ReactLogo from "../../components/svgs/logos/colorless/react.svg";
import MaterialUILogo from "../../components/svgs/logos/colorless/material-ui.svg";
import TailwindCSSLogo from "../../components/svgs/logos/colorless/tailwindcss.svg";
import NextjsLogo from "../../components/svgs/logos/colorless/nextjs.svg";

const carouselImages = [
    {
        imageSrc: "SnazzyStonesWebsite/SnazzyStonesHomeDesktop",
        description: "The landing page for the website",
    },
    {
        imageSrc: "SnazzyStonesWebsite/InstagramFeedDesktop",
        description: "A feed of SnazzyStones' latest Instagram posts from Instagram's Basic Display API",
    },
    {
        imageSrc: "SnazzyStonesWebsite/SnazzyStonesAutocompleteDesktop",
        description: "An autocompleting search bar for any products on the website",
    },
    {
        imageSrc: "SnazzyStonesWebsite/SnazzyStonesProductListDesktop",
        description: "The catalog page for the website's products, modelled photos on hover",
    },
    {
        imageSrc: "SnazzyStonesWebsite/SnazzyStonesProductPageDesktop",
        description:
            "The product page - Framer Motion image carousel, Etsy API data, social-sharing buttons, link to Etsy page",
    },
    {
        imageSrc: "SnazzyStonesWebsite/SnazzyStonesProductPageReviewsDesktop",
        description: "Product reviews drawn from Etsy, images included",
    },
    {
        imageSrc: "SnazzyStonesWebsite/SnazzyStonesOurShowsDesktop",
        description: "A page with embedded Google Maps showing in-person market locations",
    },
    {
        imageSrc: "SnazzyStonesWebsite/SnazzyStonesContactFormDesktop",
        description: "Contact form page, uses SendGrid to send inquiries from custom-domain email address",
    },
];

const BackgroundInfo = () => (
    <>
        <p>
            <NavLink href='https://snazzystones.ca' target='_blank' rel='noopener noreferrer'>
                Snazzystones.ca
            </NavLink>{" "}
            is an e-commerce themed front-end for{" "}
            <NavLink href='https://www.etsy.com/ca/shop/SnazzyStonesJewelry' target='_blank' rel='noopener noreferrer'>
                the Etsy page, SnazzyStonesJewelry
            </NavLink>
            . Previously, Snazzystones.ca was a Wordpress site using Woocommerce for independent e-commerce activity,
            but the difficulties of inventory management caused by the disconnectedness between Woocommerce and Etsy, as
            well as the latter&apos;s disproportionate popularity, necessitated a de-listing of products on the
            Wordpress site. Rather than removing this sales channel, an alternative solution was proposed, which was to
            build a{" "}
            <NavLink href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
                Next.js
            </NavLink>{" "}
            front-end that pulls data from{" "}
            <NavLink href='https://developer.etsy.com/documentation/' target='_blank' rel='noopener noreferrer'>
                Etsy&apos;s API
            </NavLink>{" "}
            and funnels users to the Etsy page.
        </p>
    </>
);

const FeaturesInfo = () => (
    <>
        <p>
            The website is designed and built to appear as a typical e-commerce store front, right up until the point
            that the user checks out, at which point they are sent to the store&apos;s Etsy page. Backed by data pulled
            from Etsy&apos;s API (every 12 hours), the website contains a number of features, such as:
        </p>
        <ul className='haloList'>
            <li>Title, description, origin-country, and price of all products actively listed on the site / Etsy.</li>
            <li>An autocompleting search of all products actively listed on the site / Etsy.</li>
            <li>Category catalogue pages that can be sorted by date-added, popularity, and price.</li>
            <li>Number of product favorites.</li>
            <li>Number of units in stock of product.</li>
            <li>Reviews of a product (with images).</li>
            <li>A link to a product&apos;s page on Etsy, so that products can be purchased there.</li>
        </ul>
        <p>In addition, the website has a few features not directly powered by Etsy:</p>
        <ul className='haloList'>
            <li>
                A paginated Instagram feed of{" "}
                <NavLink href='https://www.instagram.com/snazzystones' target='_blank' rel='noopener noreferrer'>
                    SnazzyStone&apos;s latest Instagram posts
                </NavLink>
                .
            </li>
            <li>
                Social sharing buttons on each product&apos;s page for sharing to Facebook, Twitter, WhatsApp, and
                email.
            </li>
            <li>A page with emdedded Google Maps for SnazzyStone&apos;s various in-person markets.</li>
            <li>A Contact page for sending inquiries.</li>
        </ul>
    </>
);

const DevelopmentInfo = () => (
    <>
        <IconRow styling={{ marginBottom: "2rem" }}>
            <IconBox>
                <GlowingIcon title='React' glowColor={styleVariables.colorReact}>
                    <ReactLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Material UI' glowColor={styleVariables.colorMaterialUI}>
                    <MaterialUILogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Tailwind CSS' glowColor={styleVariables.colorTailwindCSS}>
                    <TailwindCSSLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Next.js' glowColor={styleVariables.colorNextjs}>
                    <NextjsLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            Snazzystones.ca is a Next.js website using a mix of{" "}
            <NavLink
                href='https://nextjs.org/docs/basic-features/data-fetching/get-static-props'
                target='_blank'
                rel='noopener noreferrer'
            >
                statically-generated
            </NavLink>{" "}
            and{" "}
            <NavLink
                href='https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration'
                target='_blank'
                rel='noopener noreferrer'
            >
                incrementally statically regenerated
            </NavLink>{" "}
            pages.
        </p>
        <SubSubsectionTitle>Front-End</SubSubsectionTitle>
        <p>
            Being a Next.js application, the website is built using React components. Most of these components are
            hand-written, but the MUI component library is used to bootstrap some of the more complex components, such
            as the autocompleting Site-Search.
        </p>
        <p>
            Styling for the website primarily uses{" "}
            <NavLink href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>
                Tailwind CSS
            </NavLink>
            , a popular utility-first CSS framework that allowed rapid styling of the front-end with minimal duplication
            of class functionality. SCSS classes are used for background images (hosted on Cloudinary) of headers, and
            are separated into modules relevant to each page to optimize the CSS payload size for each page. Complex
            animations, such as the opening of the mobile nav-menu and the playful hovering of the Social Share icons,
            use{" "}
            <NavLink href='https://www.framer.com/motion/' target='_blank' rel='noopener noreferrer'>
                Framer-Motion
            </NavLink>
            .
        </p>
        <SubSubsectionTitle>Back-End / APIs</SubSubsectionTitle>
        <p>
            The website doesn&apos;t have a typical back-end, as the motivation for re-creating the website was for it
            to serve as a facade / additional funnel for the Etsy shop, which handles the product database and
            e-commerce functionality. As such,{" "}
            <NavLink href='https://developer.etsy.com/documentation/' target='_blank' rel='noopener noreferrer'>
                Etsy&apos;s public API
            </NavLink>{" "}
            is the source of data for the products, as noted in the Features section.
        </p>
        <p>Additionally, a few other APIs are in use for various sections of the website:</p>
        <ul className='haloList'>
            <li>
                <NavLink
                    href='https://developers.google.com/maps/documentation/embed/get-started'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Embedded Google Maps
                </NavLink>{" "}
                to the in-person market locations are in use on the{" "}
                <NavLink href='https://snazzystones.ca/our-shows' target='_blank' rel='noopener noreferrer'>
                    Our Shows
                </NavLink>{" "}
                page.
            </li>
            <li>
                <NavLink
                    href='https://developers.facebook.com/docs/instagram-basic-display-api/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    The Instagram Basic Display API
                </NavLink>{" "}
                is used to generate an up-to-date Instagram-post feed on the Home page.
            </li>
            <li>
                <NavLink href='https://sendgrid.com/solutions/email-api/' target='_blank' rel='noopener noreferrer'>
                    SendGrid&apos;s Email API
                </NavLink>
                , along with their{" "}
                <NavLink href='https://www.npmjs.com/package/@sendgrid/mail' target='_blank' rel='noopener noreferrer'>
                    @sendgrid/mail Node.js package
                </NavLink>{" "}
                is used on the{" "}
                <NavLink href='https://snazzystones.ca/contact-us' target='_blank' rel='noopener noreferrer'>
                    Contact Us
                </NavLink>{" "}
                page to send inquiry emails to the site owner through a branded domain email.
            </li>
        </ul>
    </>
);

export default function SnazzyStonesWebsite() {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='SnazzyStonesWebsite/chainBracelets_2020-10-12'
            pageTitle={<>Snazzy&shy;Stones.ca</>}
            projectSourceLink='https://github.com/MarshallRuse/SnazzyStones-Next'
            projectLiveLink='https://snazzystones.ca'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='SnazzyStonesWebsite/calendarCorkboard'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage=''
            developmentBackgroundImageSmallScreenAlt=''
            developmentInfo={<DevelopmentInfo />}
        />
    );
}
