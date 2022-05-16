import styleVariables from "../../styles/variables.module.scss";
import ProjectPageTemplate from "../../components/elements/ProjectPageTemplate";
import { IconRow, IconBox, NavLink, SubSubsectionTitle } from "../../components/elements/styledComponents";
import GlowingIcon from "../../components/elements/GlowingIcon";
import ReactLogo from "../../components/svgs/logos/colorless/react.svg";
import MaterialUILogo from "../../components/svgs/logos/colorless/material-ui.svg";

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
            <NavLink href='https://www.orbs.utoronto.ca/' target='_blank'>
                ORBS (Online Rotation & Base Hospital Scheduling)
            </NavLink>{" "}
            is a resident scheduling software for the{" "}
            <NavLink href='https://deptmedicine.utoronto.ca/' target='_blank'>
                University of Toronto's Department of Medicine
            </NavLink>
            . Prior to 2020 the application was almost exclusively used by the Internal Medicine program, but it was
            decided that the system should be expanded to for use by the whole department, and, along with that, came a
            redesign of the user interface.
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
        <p>The app takes as input 3 CSV files:</p>
        <ol>
            <li>
                Rotations exported from the{" "}
                <NavLink href='https://www.orbs.utoronto.ca/' target='_blank'>
                    Online Rotation & Base Hospital Scheduling (ORBS)
                </NavLink>
            </li>
            <li>A reference table for the Rotation Coordinators of the rotations listed in the rotations file</li>
            <li>A reference table for the EPAs to be completed on the rotations listed in the rotations file.</li>
        </ol>
        <p>The residents in the first input are grouped by:</p>
        <ul>
            <li>the rotation</li>
            <li>the hospital the roation is taking place at</li>
            <li>the residents' seniority (i.e. Juniors or Seniors)</li>
        </ul>
        <p>Four tables are produced:</p>
        <ol>
            <li>all of the residents, Rotation Coordinators, and EPAs matched by rotation and hospital</li>
            <li>the rotations and sites with exclusively Junior residents</li>
            <li>the rotations and sites with exclusively Senior residents</li>
            <li>the rotations and sites with both Junior and Senior residents</li>
        </ol>
        <p>
            All of the uploading and data manipulation is done <em>entirely</em> within the browser, and there is no
            outbound network traffic, so the data uploaded is secure.
        </p>
        <p>
            For CSV input there is an info panel that explains what headers are required, and specifically missing
            headers are highlighted for the user upon upload. Subsequent uploads are disallowed until the correct
            headers are included. A sample table of data is included with each explanation.
        </p>
        <p>
            Upon completion of the uploads (or at any point in between), the output-tables can be exported as a CSV. The
            completed tables can then be used directly as input for pre-constructed Mail Merge documents for emailing to
            the Rotation Coordinators.
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
                <GlowingIcon title='Material UI' glowColor={styleVariables.colorMaterialUI}>
                    <MaterialUILogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            Rotation Coordinator Report Formatter is designd entirely as a front-end app so that there are no security
            vulnerabilities associated with transmitting the data to a server for processing.
        </p>
        <SubSubsectionTitle>Front-End</SubSubsectionTitle>
        <p>
            The React front-end utilizes components from{" "}
            <NavLink href='https://mui.com/' target='_blank'>
                MUI v5
            </NavLink>
            , a component library implementing Google’s Material Design visual language. Custom styling in keeping with
            <NavLink
                href='https://www.utm.utoronto.ca/communications/sites/files/communications/public/shared/UofT%20Style%20Guide%20%2B%20Boundless%20Guide%20Feb%202012.pdf'
                target='_blank'
            >
                the University of Toronto's Visual Identity Style Guide
            </NavLink>{" "}
            is implemented using{" "}
            <NavLink href='https://mui.com/material-ui/guides/styled-engine/#main-content' target='_blank'>
                MUI's emotion CSS-in-JS API
            </NavLink>
            .
        </p>
        <p>
            A React implementation of the{" "}
            <NavLink href='https://www.papaparse.com/' target='_blank'>
                Papaparse
            </NavLink>{" "}
            in-browser CSV parsing library,{" "}
            <NavLink href='https://www.npmjs.com/package/react-papaparse' target='_blank'>
                react-papaparse v3
            </NavLink>
            , is used to parse the uploaded CSVs. Data grouping, filtering, and formatting are done with custom
            functions acting on the data held in React state hooks, which are then fed to components wrapping{" "}
            <NavLink href='https://mui.com/x/react-data-grid/' target='_blank'>
                MUI's DataGrid
            </NavLink>{" "}
            component.
        </p>
        <p>
            Animations are accomplished using{" "}
            <NavLink href='https://www.framer.com/motion/' target='_blank'>
                Framer Motion
            </NavLink>
        </p>
    </>
);

export default function ORBSRedesign() {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='ORBS-Redesign/torontoAerial'
            pageTitle='ORBS Redesign'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='ORBS-Redesign/calendarCorkboard'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage=''
            developmentBackgroundImageSmallScreenAlt=''
            developmentInfo={<DevelopmentInfo />}
        />
    );
}
