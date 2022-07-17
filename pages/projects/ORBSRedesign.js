import styleVariables from "../../styles/variables.module.scss";
import ProjectPageTemplate from "../../components/elements/ProjectPageTemplate";
import { IconRow, IconBox, NavLink, SubSubsectionTitle } from "../../components/elements/styledComponents";
import GlowingIcon from "../../components/elements/GlowingIcon";
import HTML5Logo from "../../components/svgs/logos/colorless/html5.svg";
import CSS3Logo from "../../components/svgs/logos/colorless/css3.svg";
import BootstrapLogo from "../../components/svgs/logos/colorless/bootstrap.svg";

const carouselImages = [
    {
        imageSrc: "ORBS-Redesign/ORBSRedesignTitleCard",
        description: "",
    },
    {
        imageSrc: "ORBS-Redesign/LoginSignupBefore",
        description: "The original landing page with login & signup",
    },
    {
        imageSrc: "ORBS-Redesign/LoginSignupAfter",
        description: "The redesigned landing page",
    },
    {
        imageSrc: "ORBS-Redesign/HomePageBefore",
        description: "The original Home Page once signed in",
    },
    {
        imageSrc: "ORBS-Redesign/HomePageAfter",
        description: "The redesigned Home Page, with more readable explanatory text, horizontal menu, and quick-links",
    },
    {
        imageSrc: "ORBS-Redesign/TraineeSelectionsBefore",
        description: "The original page listing links to various resident-selection pages",
    },
    {
        imageSrc: "ORBS-Redesign/TraineeSelectionsAfter",
        description: "The redesigned Trainee Selection page",
    },
    {
        imageSrc: "ORBS-Redesign/RotationSelectionsBefore",
        description: "The original page for which residents select their upcoming years' rotations",
    },
    {
        imageSrc: "ORBS-Redesign/RotationSelectionsAfter",
        description: "The redesigned page for which residents select their upcoming years' rotations",
    },
    {
        imageSrc: "ORBS-Redesign/RotationSelectionsAfter2",
        description: "Another tab of the Rotations Selections page showing more of the table",
    },
    {
        imageSrc: "ORBS-Redesign/ResidentScheduleAfter",
        description:
            "The Resident Schedule table now scrolls within its own container with a fixed header, horizontal scrolling with fixed initial columns shown",
    },
    {
        imageSrc: "ORBS-Redesign/MenuAfter",
        description: "Navigation menu is now a dropdown hover menu",
    },
];

const BackgroundInfo = () => (
    <>
        <p>
            <NavLink href='https://www.orbs.utoronto.ca/' target='_blank' rel='noopener noreferrer'>
                ORBS (Online Rotation & Base Hospital Scheduling)
            </NavLink>{" "}
            is a resident scheduling software for the{" "}
            <NavLink href='https://deptmedicine.utoronto.ca/' target='_blank' rel='noopener noreferrer'>
                University of Toronto&apos;s Department of Medicine
            </NavLink>
            . Prior to 2020 the application was almost exclusively used by the Internal Medicine program, but it was
            decided that the system should be expanded upon for use by the whole department, and, along with that, came
            a redesign of the user interface.
        </p>
        <p>
            While I take <strong style={{ textDecoration: "underline" }}>no credit</strong> for the functionality of the
            application, I was responsible for the redesign, prototyping, and testing of the front-end UI, as well as
            general testing of the system functionality, and verification of data being uploaded-to and generated-by the
            application.
        </p>
    </>
);

const FeaturesInfo = () => (
    <>
        <p>
            To increase consistency across services, I based the new design of ORBS off of the{" "}
            <NavLink href='https://deptmedicine.utoronto.ca/' target='_blank' rel='noopenner noreferred'>
                University of Toronto&apos;s Department of Medicine website
            </NavLink>{" "}
            (which of course got its own face-lift right after completion of ours &#128579;), taking design elements
            such as the horizontal Nav-menu with hoverable sub-menus, quick-link tiles, font, and color-scheme.
        </p>
        <p>
            I also introduced particular styling to make the application more user-friendly. For instance, much of the
            site is composed of pages containing tables with many static columns and rows, which necessitated scrolling
            the header-rows or identifying-columns off-screen. I introduced tables with sticky-headers and columns that
            wouldn&apos;t scroll off-screen so that one&apos;s place in the table would always be visible. To further
            this, I added row-highlighting on hover so that the user has an easier time tracking a particular row across
            large tables.
        </p>
        <p>
            Many elements of the site were updated to be consistent with a typical user&apos;s understanding of modern
            website tropes. These include:
        </p>
        <ul className='haloList'>
            <li>modern styling of buttons, links, and inputs;</li>
            <li>a greater number of success, warning, and error alerts;</li>
            <li>use of icons to more quickly communicate functionality;</li>
            <li>hover-animations on certain elements to add visual interest;</li>
            <li>
                and updates to spacing and element-sizing to establish a better visual hierarchy and ease user
                target-acquisition.
            </li>
        </ul>
    </>
);

const DevelopmentInfo = () => (
    <>
        <IconRow styling={{ marginBottom: "2rem" }}>
            <IconBox>
                <GlowingIcon title='HTML5' glowColor={styleVariables.colorHTML5}>
                    <HTML5Logo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='CSS3' glowColor={styleVariables.colorCSS3}>
                    <CSS3Logo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Bootstrap' glowColor={styleVariables.colorBootstrap}>
                    <BootstrapLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            My role in the development of this application (in addition to non-developmental regular testing of
            functionality and interface) was to redesign and prototype the front-end styling. The back-end (which I was
            not involved with) is built with ASP.NET WebForms connected via Entity Framework to a Microsoft SQL Server
            database. As our back-end team was not familiar with modern JS front-end frameworks (such as React), and
            because a quick redesign was desired, I opted to keep things simple and recreate all of the pages in basic
            HTML and CSS. To get things going more quickly, I brought in{" "}
            <NavLink href='https://getbootstrap.com/' target='_blank' rel='noopenner noreferred'>
                Bootstrap
            </NavLink>
            , &quot;the most popular HTML, CSS, and JS library in the world.&quot; Besides more quickly launching
            development, Bootstrap was brought in because it was easily integrated with the existing tech-stack (a CDN
            link can just be included in the head-tags), because it would ensure a modern, consistent styling of
            elements on every page, and because my colleagues working on the backend were familiar with it.
        </p>
    </>
);

export default function ORBSRedesign() {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='ORBS-Redesign/schedulingLandscape'
            pageTitle='ORBS Redesign'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='ORBS-Redesign/webdesign'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage='ORBS-Redesign/universityOfToronto'
            developmentBackgroundImageSmallScreenAlt=''
            developmentInfo={<DevelopmentInfo />}
            openGraphImages={[
                {
                    url: "https://res.cloudinary.com/marsh/image/upload/v1651070810/portfolio/ORBS-Redesign/HomePageAfter.png",
                    width: 1865,
                    height: 829,
                    alt: "Home page of the redesigned ORBS applications",
                    type: "image/png",
                },
            ]}
        />
    );
}
