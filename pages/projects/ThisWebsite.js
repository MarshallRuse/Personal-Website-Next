import styleVariables from "../../styles/variables.module.scss";
import ProjectPageTemplate from "../../components/elements/ProjectPageTemplate";
import { IconRow, IconBox, NavLink, SubSubsectionTitle } from "../../components/elements/styledComponents";
import GlowingIcon from "../../components/elements/GlowingIcon";
import ReactLogo from "../../components/svgs/logos/colorless/react.svg";
import SassLogo from "../../components/svgs/logos/colorless/sass.svg";
import NextjsLogo from "../../components/svgs/logos/colorless/nextjs.svg";
import Link from "next/link";

const carouselImages = [
    {
        imageSrc: "ThisWebsite/headerOld",
        description: "The old header, complete with cheesy bounce-in photo",
    },
    {
        imageSrc: "ThisWebsite/headerNew",
        description: "The new header, sleek and cyberpunkey",
    },
    {
        imageSrc: "ThisWebsite/skillsSectionOld",
        description: "Plain Jane old skills section",
    },
    {
        imageSrc: "ThisWebsite/skillsSectionNew",
        description: <>Sexy neon icons glow-up when in view (much like my skills themselves have &#128521;)</>,
    },
    {
        imageSrc: "ThisWebsite/projectsSectionOld",
        description: "The old Project Cards, built with Material-UI cards",
    },
    {
        imageSrc: "ThisWebsite/projectsSectionNew",
        description: "The new Project Cards, built with CSS Grid and Augmented-UI",
    },
    {
        imageSrc: "ThisWebsite/aboutMeSectionOld",
        description: "Old, overly self-indulgent About Me section",
    },
    {
        imageSrc: "ThisWebsite/aboutMeSectionNew",
        description: "New About Me section, still self-indulgent, but hidden away in another tab, and with a TL;DR ",
    },
    {
        imageSrc: "ThisWebsite/projectPageOld",
        description: "Old project pages were each built individually",
    },
    {
        imageSrc: "ThisWebsite/projectPageNew",
        description: "New project pages are built on a template, and share the cyberpunk aesthetic",
    },
];

const BackgroundInfo = () => (
    <>
        <p>
            This website was recently given a new coat of paint. I&apos;m quite infatuated with the Cyberpunk /
            vaporwave aesthetic, so thought it would be fun to inject some of that into my portfolio.
        </p>
    </>
);

const FeaturesInfo = () => (
    <>
        <p>
            To be honest, &quot;Features&quot; are admittedly a bit of a strong term for what&apos;s going on here.
            It&apos;s a portfolio website, and it does what a portfolio website needs to - exhibit and explain things
            that I make. To that end, it&apos;s got:
        </p>
        <ul className='haloList'>
            <li>
                A Skills section, with pretty neon-glowing icons I&apos;m proud of that list languages / frameworks I
                have built apps in.
            </li>
            <li>
                A Projects section with links to live/demo versions of web-apps, links to their source code, and pages
                (like this) explaining them.
            </li>
            <li>A Blog section linking to some of my web-dev tutorials.</li>
            <li>An About Me section, where I give you the gist of what I&apos;m into.</li>
            <li>A Contact section, where you can find me.</li>
        </ul>
        <p>
            Fascinating and original, I know! In the future I plan on adding a couple of other sections, including a
            Photo Gallery to show off my nicer travel photos to <del>the masses</del> my family and cat, and a 3D Art
            section to show off my efforts in Blender and Unreal Engine.
        </p>
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
                <GlowingIcon title='Sass' glowColor={styleVariables.colorSass}>
                    <SassLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Next.js' glowColor={styleVariables.colorNextjs}>
                    <NextjsLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            This website was originally written in pure React (and as such was a client-rendered Single Page App),
            leaning heavily on{" "}
            <NavLink href='https://mui.com/' target='_blank' rel='noopenner noreferrer'>
                Material UI
            </NavLink>{" "}
            component library and{" "}
            <NavLink href='https://styled-components.com/' target='_blank' rel='noopenner noreferrer'>
                styled components
            </NavLink>{" "}
            for styling.
        </p>
        <p>
            In the recent renovation, I decided to port things over to{" "}
            <NavLink href='https://nextjs.org/' target='_blank' rel='noopenner noreferrer'>
                Next.js
            </NavLink>{" "}
            to reap the benefits of Static Site Generation (fast serving time, mostly of static HTML; automatic
            code-splitting to minimize bundle-sizes; CDN caching when deploying with{" "}
            <NavLink href='https://vercel.com/' target='_blank' rel='noopenner noreferrer'>
                Vercel
            </NavLink>
            ).
        </p>
        <p>
            I also decided to not rely so much on Material UI and to customize the site to reflect my own personality
            more. To this end I stripped out all of the MUI components, and rebuilt the components with a mix of{" "}
            <NavLink href='https://sass-lang.com/' target='_blank' rel='noopenner noreferrer'>
                SCSS
            </NavLink>{" "}
            modules and{" "}
            <NavLink href='https://www.framer.com/motion/' target='_blank' rel='noopenner noreferrer'>
                Framer Motion
            </NavLink>{" "}
            animations. I also made use of{" "}
            <NavLink href='https://augmented-ui.com' target='_blank' rel='noopenner noreferrer'>
                Augmented-UI
            </NavLink>
            , a brilliant CSS library that makes it super simple to cut odd angles out of your traditional HTML boxes,
            and thus really achieve that traditional sci-fi component look. Shout out to{" "}
            <NavLink href='https://twitter.com/Jane0ri' target='_blank' rel='noopenner noreferrer'>
                @Jane0ri
            </NavLink>{" "}
            for it, it&apos;s a seriously cool package.
        </p>
        <p>
            Lastly, I made use of{" "}
            <NavLink
                href='https://cloudinary.com/documentation/advanced_image_components_tutorial'
                target='_blank'
                rel='noopenner noreferrer'
            >
                Cloudinary&apos;s Adavanced Image component
            </NavLink>{" "}
            to smartly serve up my Cloudinary Media Library images quickly and responsively (and with a cool pixelation
            placeholder), and I used{" "}
            <NavLink
                href='https://www.npmjs.com/package/react-responsive-carousel'
                target='_blank'
                rel='noopenner noreferrer'
            >
                react-responsive-carousel
            </NavLink>{" "}
            for the project pages&apos; slideshows, and{" "}
            <NavLink href='https://www.npmjs.com/package/react-player' target='_blank' rel='noopenner noreferrer'>
                react-player
            </NavLink>{" "}
            for the video-player component on my{" "}
            <Link href='/projects/RoverFollower' passHref>
                <NavLink>Rover Follower</NavLink>
            </Link>{" "}
            page.
        </p>
    </>
);

export default function ThisWebsite() {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='ThisWebsite/genoaVaporwave'
            pageTitle='This Website'
            projectSourceLink='https://github.com/MarshallRuse/Personal-Website-Next'
            projectLiveLink='https://marshallruse.com'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='ThisWebsite/torontoHarborCyberpunk'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage='ThisWebsite/development'
            developmentBackgroundImageSmallScreenAlt=''
            developmentInfo={<DevelopmentInfo />}
        />
    );
}
