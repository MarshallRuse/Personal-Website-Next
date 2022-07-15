import { useState, useEffect } from "react";
import styles from "../../styles/modules/AboutMeSection.module.scss";
import styleVariables from "../../styles/variables.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "../hooks/useMediaQuery";
import { NavLink } from "../elements/styledComponents";
import dynamic from "next/dynamic";
const SectionTitle = dynamic(() => import("../elements/styledComponents").then((imp) => imp.SectionTitle), {
    ssr: false,
});
const SubsectionTitle = dynamic(() => import("../elements/styledComponents").then((imp) => imp.SubsectionTitle), {
    ssr: false,
});
const TextContainer = dynamic(() => import("../elements/styledComponents").then((imp) => imp.TextContainer), {
    ssr: false,
});

//const SubsectionTitleMotion = motion(SubsectionTitle, { forwardMotionProps: true });
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const FadeDownText = ({ children, motionKey }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <motion.span
            ref={ref}
            key={motionKey}
            variants={variants}
            initial='closed'
            animate={inView ? "open" : "closed"}
            exit={{ opacity: 0, x: -50 }}
            style={{ display: "block" }}
        >
            {children}
        </motion.span>
    );
};

const Tabs = ({ tabSelected, handleTabClick, sizeVariant }) => (
    <div
        className={`${styles.tabs} ${sizeVariant === "small" ? styles.hideLargeScreen : styles.hideSmallScreen}`}
        data-augmented-ui-reset
    >
        <div
            className={`${styles.glassPanelTab} ${tabSelected === 0 && styles.active}`}
            style={{ letterSpacing: "2px" }}
            data-augmented-ui='both'
            onClick={() => handleTabClick(0)}
        >
            TL;DR
        </div>
        <div
            className={`${styles.glassPanelTab} ${styles.rightTab} ${tabSelected === 1 && styles.active}`}
            data-augmented-ui={`${sizeVariant === "large" && "br-clip"} both`}
            onClick={() => handleTabClick(1)}
        >
            Self-Indulgent
        </div>
    </div>
);

const AboutMeSection = () => {
    const largeScreen = useMediaQuery(`(min-width: ${styleVariables.breakpointSm})`);
    const [tabSelected, setTabSelected] = useState(0);
    const [glassTLCorner, setGlassTLCorner] = useState("");

    const handleTabClick = (tabNum) => setTabSelected(tabNum);

    useEffect(() => {
        if (largeScreen) {
            setGlassTLCorner("tl-clip-inset");
        } else {
            setGlassTLCorner("tl-2-clip-x");
        }
    }, [largeScreen]);

    return (
        <section className={styles.background} id='about-me-section'>
            <div className={styles.glassPanelWrapper}>
                <Tabs tabSelected={tabSelected} handleTabClick={handleTabClick} sizeVariant='large' />
                <div
                    className={styles.glassPanel}
                    data-augmented-ui={`${glassTLCorner} tr-2-clip-x b-clip-xy bl-2-clip-y br-2-clip-y both`}
                >
                    <SectionTitle element='h3' styling={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
                        About Me
                    </SectionTitle>
                    <Tabs tabSelected={tabSelected} handleTabClick={handleTabClick} sizeVariant='small' />
                    <TextContainer
                        styling={{
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.5)",
                            maxWidth: "90%",
                        }}
                    >
                        <AnimatePresence>
                            {tabSelected === 0 ? (
                                <>
                                    <FadeDownText motionKey='fd-text-title-education-0'>
                                        <SubsectionTitle styling={{ textAlign: "left" }}>Education</SubsectionTitle>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-education-0-0'>
                                        <p className={styles.datedLine}>
                                            Queen&apos;s University - Kingston, Ontario{" "}
                                            <span className={styles.date}>09/2012 - 04/2016</span>
                                        </p>
                                        <NavLink
                                            href='https://www.queensu.ca/artsci/programs-and-degrees/natural-physical-sciences/life-sciences'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            styling={{
                                                marginLeft: "2em",
                                                marginBottom: "2em",
                                            }}
                                        >
                                            Bachelor of Sciences, Honours - Life Science
                                        </NavLink>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-education-0-1'>
                                        <p className={styles.datedLine}>
                                            Queen&apos;s University - Kingston, Ontario
                                            <span className={styles.date}>09/2016 - 04/2019</span>
                                        </p>
                                        <NavLink
                                            href='https://www.cs.queensu.ca/undergraduate/programs/specializations/biomedical-computing.php'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            styling={{
                                                marginLeft: "2em",
                                                marginBottom: "2em",
                                            }}
                                        >
                                            Bachelor of Computing, Honours - Biomedical Computing
                                        </NavLink>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-title-skills-and-projects-0'>
                                        <SubsectionTitle styling={{ textAlign: "left", pointerEvents: "all" }}>
                                            <NavLink href='#skills-section' styling={{ fontFamily: "inherit" }}>
                                                Skills
                                            </NavLink>{" "}
                                            and{" "}
                                            <NavLink href='#projects-section' styling={{ fontFamily: "inherit" }}>
                                                Projects
                                            </NavLink>
                                        </SubsectionTitle>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-title-whats-next-0'>
                                        <SubsectionTitle styling={{ textAlign: "left" }}>
                                            What&apos;s Next?
                                        </SubsectionTitle>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-whats-next-0-0'>
                                        <p>
                                            I&apos;m always looking to learn new things. For the near future, I&apos;ve
                                            got my eye on:
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-whats-next-0-1'>
                                        <ul className='haloList'>
                                            <li>
                                                <NavLink
                                                    href='https://www.typescriptlang.org/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    TypeScript
                                                </NavLink>{" "}
                                                for type-safe, more easily collaborative and refactorable code
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://graphql.org/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    GraphQL
                                                </NavLink>{" "}
                                                for more efficient and flexible APIs
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://svelte.dev/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Svelte
                                                </NavLink>{" "}
                                                - embrace the excitement of{" "}
                                                <NavLink
                                                    href='https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    this most beloved new framework
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://kit.svelte.dev/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    SvelteKit
                                                </NavLink>{" "}
                                                for Svelte SSR and SSG
                                            </li>
                                            <li>
                                                Completion of{" "}
                                                <NavLink
                                                    href='https://threejs-journey.com/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Bruno Simon&apos;s Three.js Journey
                                                </NavLink>{" "}
                                                to bring my love of 3D modelling and art into the browser
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    React Three Fiber
                                                </NavLink>{" "}
                                                for intergrating Three.js into React
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://www.blender.org/download/releases/3-1/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Blender 3
                                                </NavLink>{" "}
                                                for 3D modelling
                                            </li>
                                            <li>
                                                <NavLink
                                                    href='https://www.unrealengine.com/en-US/unreal-engine-5'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    Unreal Engine 5
                                                </NavLink>{" "}
                                                for video making
                                            </li>
                                        </ul>
                                    </FadeDownText>
                                </>
                            ) : (
                                <>
                                    <FadeDownText motionKey='fd-text-title-education-1'>
                                        <SubsectionTitle styling={{ textAlign: "left" }}>Education</SubsectionTitle>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-education-1-0'>
                                        <p>
                                            I attended Queen&apos;s University in Kingston, Ontario from 2012 to 2019.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-education-1-1'>
                                        <p>
                                            In the first four years I obtained a{" "}
                                            <NavLink
                                                href='https://www.queensu.ca/artsci/programs-and-degrees/natural-physical-sciences/life-sciences'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                BScH in Life Sciences
                                            </NavLink>
                                            , with my primary focus being on neurology. In the last year of that degree
                                            I took a couple of introductory computer science courses, and ended up
                                            falling in love with programming. Finding myself completely engrossed, the
                                            time slipping-by unnoticed as I became enthralled by writing and piecing
                                            together functions to build small programs. I had studied neurotransmitters,
                                            but learning about them hadn&apos;t quite given me the dopamine-rush that
                                            squashing that last bug and having a working final product did. So, in my
                                            last year of that degree, I decided I needed to change course and pursue a
                                            career in software development.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-education-1-2'>
                                        <p>
                                            Queen&apos;s offered an Honours degree in Computing with a Biomedical
                                            Computing specialization. I saw this as a great oppurtunity to combine my
                                            previous love with my new passion, and to contextualize and reinforce my new
                                            learning with past domain-knowledge. For the next three years, I took
                                            primarily computer science courses focused on algorithms, data-structures,
                                            and programming paradigms, as well as a few with cool life science
                                            inflections (Bioinformatics and Computer-Integrated Surgery come to mind).
                                            In 2019, I graduated with a{" "}
                                            <NavLink
                                                href='https://www.cs.queensu.ca/undergraduate/programs/specializations/biomedical-computing.php'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                BCmpH in Biomedical Computing
                                            </NavLink>
                                            .
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-title-skills-and-projects-1'>
                                        <SubsectionTitle styling={{ textAlign: "left" }}>
                                            Skills and Projects
                                        </SubsectionTitle>
                                        <p>
                                            <NavLink href='#skills-section'>They&apos;re right above this</NavLink>, in
                                            case you somehow missed them. I&apos;m not being snide, they just took some
                                            effort to put together so I&apos;m shamelessly redirecting you there.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-title-whats-next-1'>
                                        <SubsectionTitle styling={{ textAlign: "left" }}>
                                            What&apos;s Next?
                                        </SubsectionTitle>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-whats-next-1-0'>
                                        <p>
                                            One of the things I love about web development is that there are constant
                                            advancements in the languages and frameworks, and there are always
                                            opportunities to learn new and improved ways of doing things.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-whats-next-1-1'>
                                        <p>
                                            Two of the most immediate skills I&apos;ll be acquiring are{" "}
                                            <NavLink
                                                href='https://www.typescriptlang.org/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                TypeScript
                                            </NavLink>{" "}
                                            and
                                            <NavLink
                                                href='https://graphql.org/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                GraphQL
                                            </NavLink>{" "}
                                            to modernize my JavaScript writing and API-querying skills. I&apos;m looking
                                            forward to learning how to make my JavaScript code more type-safe,
                                            shareable, and refactorable, and similarly how to make my API quesries more
                                            type-safe, but also flexible and light-weight.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-whats-next-1-2'>
                                        <p>
                                            I have also heard really good things about{" "}
                                            <NavLink
                                                href='https://svelte.dev/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Svelte
                                            </NavLink>{" "}
                                            and{" "}
                                            <NavLink
                                                href='https://kit.svelte.dev/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                SvelteKit
                                            </NavLink>{" "}
                                            from former predominantly-React developers, so want to give that a shot as
                                            the buzz around is that it&apos;s the next big framework.
                                        </p>
                                    </FadeDownText>
                                    <FadeDownText motionKey='fd-text-whats-next-1-3'>
                                        <p>
                                            On the more fun and purely-aesthetic side of things, I am enrolled in{" "}
                                            <NavLink
                                                href='https://threejs-journey.com/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Bruno Simon&apos;s Three.js Journey
                                            </NavLink>{" "}
                                            course to learn to master 3D visuals and animations in JavaScript. I&apos;m
                                            sure following that I&apos;ll want to learn how to integrate it into React
                                            using{" "}
                                            <NavLink
                                                href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                React Three Fiber
                                            </NavLink>
                                            . Relatedly (but not directly to web development),{" "}
                                            <NavLink
                                                href='https://www.blender.org/download/releases/3-1/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Blender 3
                                            </NavLink>{" "}
                                            and{" "}
                                            <NavLink
                                                href='https://www.unrealengine.com/en-US/unreal-engine-5'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Unreal Engine 5
                                            </NavLink>{" "}
                                            just came out, and I&apos;m super-excited to lose myself for a while
                                            learning and playing around with those to explore my 3D modelling and art
                                            hobby.
                                        </p>
                                    </FadeDownText>
                                </>
                            )}
                        </AnimatePresence>
                    </TextContainer>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
