import styleVariables from "../../styles/variables.module.scss";
import styles from "../../styles/modules/SkillsSection.module.scss";
import BootstrapLogo from "../svgs/logos/colorless/bootstrap.svg";
import Css3Logo from "../svgs/logos/colorless/css3.svg";
import ExpressLogo from "../svgs/logos/colorless/express.svg";
import FirebaseLogo from "../svgs/logos/colorless/firebase.svg";
import Html5Logo from "../svgs/logos/colorless/html5.svg";
import JavaLogo from "../svgs/logos/colorless/java.svg";
import JavaScriptLogo from "../svgs/logos/colorless/javascript.svg";
import MySQLLogo from "../svgs/logos/colorless/mysql.svg";
import MaterialUILogo from "../svgs/logos/colorless/material-ui.svg";
import MongoDBLogo from "../svgs/logos/colorless/mongodb.svg";
import NextjsLogo from "../svgs/logos/colorless/nextjs.svg";
import NodejsLogo from "../svgs/logos/colorless/nodejs.svg";
import PythonLogo from "../svgs/logos/colorless/python.svg";
import ReactLogo from "../svgs/logos/colorless/react.svg";
import ReduxLogo from "../svgs/logos/colorless/redux.svg";
import SassLogo from "../svgs/logos/colorless/sass.svg";
import GlowingIcon from "../elements/GlowingIcon.js";
import { IconRow, IconBox, SectionTitle, SubSubsectionTitle } from "../elements/styledComponents";

const SkillsSection = () => {
    return (
        <section className={styles.skillsSectionContainer}>
            <SectionTitle
                className={styles.glowingText}
                id='skills-section'
                styling={{ "--glow-color": styleVariables.colorPink }}
            >
                Skills
            </SectionTitle>
            <IconRow>
                <SubSubsectionTitle element='h4'>Languages</SubSubsectionTitle>
                <IconBox>
                    <GlowingIcon title='HTML5' glowColor={styleVariables.colorHTML5}>
                        <Html5Logo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='CSS3' glowColor={styleVariables.colorCSS3}>
                        <Css3Logo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Sass' glowColor={styleVariables.colorSass}>
                        <SassLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='JavaScript' glowColor={styleVariables.colorJavaScript}>
                        <JavaScriptLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Python' glowColor={styleVariables.colorPython}>
                        <PythonLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Java' glowColor={styleVariables.colorJava}>
                        <JavaLogo />
                    </GlowingIcon>
                </IconBox>
            </IconRow>
            <IconRow>
                <SubSubsectionTitle element='h4'>Frameworks</SubSubsectionTitle>
                <IconBox>
                    <GlowingIcon title='React' glowColor={styleVariables.colorReact}>
                        <ReactLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Next.js' glowColor={styleVariables.colorNextjs}>
                        <NextjsLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Redux' glowColor={styleVariables.colorRedux} strokeWidth={4}>
                        <ReduxLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Bootstrap' glowColor={styleVariables.colorBootstrap}>
                        <BootstrapLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Express' glowColor={styleVariables.colorExpress}>
                        <ExpressLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='MySQL' glowColor={styleVariables.colorMySQL} strokeWidth={2}>
                        <MySQLLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='MongoDB' glowColor={styleVariables.colorMongoDB}>
                        <MongoDBLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='NodeJS' glowColor={styleVariables.colorNodeJS} strokeWidth={4}>
                        <NodejsLogo />
                    </GlowingIcon>
                </IconBox>
                <IconBox>
                    <GlowingIcon title='Firebase' glowColor={styleVariables.colorFirebase} strokeWidth={4}>
                        <FirebaseLogo />
                    </GlowingIcon>
                </IconBox>
            </IconRow>
            <IconRow>
                <SubSubsectionTitle element='h4'>Libraries</SubSubsectionTitle>
                <IconBox>
                    <GlowingIcon title='MUI' glowColor={styleVariables.colorMaterialUI}>
                        <MaterialUILogo />
                    </GlowingIcon>
                </IconBox>
            </IconRow>
        </section>
    );
};

export default SkillsSection;
