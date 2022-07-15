import styleVariables from "../../styles/variables.module.scss";
import ProjectPageTemplate from "../../components/elements/ProjectPageTemplate";
import { IconRow, IconBox, SubSubsectionTitle } from "../../components/elements/styledComponents";
import GlowingIcon from "../../components/elements/GlowingIcon";
import ReactLogo from "../../components/svgs/logos/colorless/react.svg";
import MaterialUILogo from "../../components/svgs/logos/colorless/material-ui.svg";
import FirebaseLogo from "../../components/svgs/logos/colorless/firebase.svg";

const carouselImages = [
    {
        imageSrc: "WorkoutLogger/WorkoutLoggerAuthPageLandscape",
        smallScreenAltSrc: "WorkoutLogger/WorkoutLoggerAuthPage",
        description: "The Sign-Up and Login Page for the app",
    },
    {
        imageSrc: "WorkoutLogger/WorkoutLoggerWorkoutsPageLandscape",
        smallScreenAltSrc: "WorkoutLogger/WorkoutLoggerWorkoutsPage",
        description: "All of your workouts, sorted by date",
    },
    {
        imageSrc: "WorkoutLogger/WorkoutLoggerWorkoutInstancePageLandscape",
        smallScreenAltSrc: "WorkoutLogger/WorkoutLoggerWorkoutInstancePage",
        description: "The page displaying exercises completed for each workout",
    },
    {
        imageSrc: "WorkoutLogger/WorkoutLoggerExerciseInstancePageUnilateralLandscape",
        smallScreenAltSrc: "WorkoutLogger/WorkoutLoggerExerciseInstancePageUnilateral",
        description:
            "The page for each exercise instance - this example is a unilateral exercise (both left- and right-side sets)",
    },
    {
        imageSrc: "WorkoutLogger/WorkoutLoggerExerciseInstancePageOptionsLandscape",
        smallScreenAltSrc: "WorkoutLogger/WorkoutLoggerExerciseInstancePageOptions",
        description: "Each set can be labelled left and right, and the units can be changed on the fly",
    },
    {
        imageSrc: "WorkoutLogger/WorkoutLoggerExercisesPageLandscape",
        smallScreenAltSrc: "WorkoutLogger/WorkoutLoggerExercisesPage",
        description:
            "Each account starts with a default set of exercises that can be edited, added to, and deleted from",
    },
    {
        imageSrc: "WorkoutLogger/WorkoutLoggerExerciseCreationLandscape",
        smallScreenAltSrc: "WorkoutLogger/WorkoutLoggerExerciseCreation",
        description: "Add new exercises, customized to your needs",
    },
];

const BackgroundInfo = () => (
    <p>
        I&apos;ve used a number of different workout logging apps (and even physical workout journals, once upon a
        time), and, while they all have their pros and cons, they’ve never been quite perfect for me. Situations like
        needing to easily identify which side of the body some exercises were performed on, or being able to switch
        easily between weights in pounds and kilos, often require cumbersome workarounds. Its been a goal of mine since
        beginning my web-development journey to build an app that fits my needs on a day-to-day basis. This app is (the
        beginning of) my attempt to craft that myself.
    </p>
);

const FeaturesInfo = () => (
    <>
        <p>
            <em>Workout Logger</em> is a no-frills, straight-forward, strength-training record-keeping app. Version 1.0
            of the app is admittedly a bit bare-bones at the moment, but it performs its primary functions, and, since I
            plan to make use of this app (and eventually port it to a native-mobile application), it will continue to be
            updated with new features.
            <br />
            <br />
            The list of current features include:
        </p>
        <ul className='haloList'>
            <li>Add to and customize a provided list of exercises, sorted by muscle group.</li>
            <li>
                Distinguish between unilateral and bilateral exercises, tracking the weight and reps for each side of
                the exercise performed.
            </li>
            <li>Change on the fly between imperial and metric weight units.</li>
            <li>
                View at a glance the number of exercises performed for each exercise, as well as its total duration.
            </li>
        </ul>
        <p>The list of planned features include:</p>
        <ul className='haloList'>
            <li>
                View your previous workouts stats for each exercise, per set, on its sets-page, to immediately know your
                goal to beat.
            </li>
            <li>Search exercises by title.</li>
            <li>Visualize your progress with each exercise, by One-Rep Max or by total volume.</li>
            <li>
                Sort by most and least used exercises per muscle-group to see which are your favourite exercises, and
                how to add some variation to your workouts.
            </li>
            <li>Add, edit, and delete muscle-groups and equipment.</li>
            <li>
                A robust user account section, in which users can view stats such as their total number of workouts,
                number of unique exercises performed, largest weight and volume per muscle-group, etc.
            </li>
        </ul>
    </>
);

const DevelopmentInfo = () => (
    <>
        <IconRow>
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
                <GlowingIcon title='Firebase' glowColor={styleVariables.colorFirebase} strokeWidth={4}>
                    <FirebaseLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            <em>Workout Logger</em> is developed as a <strong>React</strong> app using Google&apos;s{" "}
            <strong>Firebase</strong> web and mobile platform as a backend for authentication and storage (
            <strong>Cloud Firestore</strong>).
        </p>
        <SubSubsectionTitle>Front-End</SubSubsectionTitle>
        <p>
            The React front-end primarily utilizes components from <strong>Material UI</strong>, a component library
            implementing Google’s Material Design visual language. Where components need more custom styling, Material
            UI’s supported <strong>JSS</strong> styling solutions are used. The front-end combines the use of Reacts
            traditional class structure (for the pages) and <strong>React Hooks</strong> for the more elemental
            components. <strong>React’s Context API</strong> is used for routing flags and to provide lateral
            communication amongst nested components.
            <em>Workout Logger</em> is a <strong>single-page application</strong>, as it uses{" "}
            <strong>React Router</strong> as its routing solution, only fetching the index HTML page on initial loading.
            <br />
        </p>
        <SubSubsectionTitle>Back-End</SubSubsectionTitle>
        <p>
            The back-end is a bare-bones <strong>Node.js</strong> server that returns the index.html file from any
            location, making <em>Workout Logger </em>a single-page application. Google&apos;s <strong>Firebase</strong>{" "}
            web and mobile development service is used for the authentication middleware, and for storage via their{" "}
            <strong>Cloud Firestore</strong> service. The services are interacted with directly from the front-end, with
            the component pages and elements using Firebase&apos;s web and mobile client SDK. The data structure of the
            Firestore storage is a combination of the <em>subcollection</em> and <em>root-level collection</em> patterns
            <a
                href='https://firebase.google.com/docs/firestore/manage-data/structure-data'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: "cornflowerblue", textDecoration: "none" }}
            >
                &nbsp;described by the Firestore documentation
            </a>
            , depending on which pattern makes contextual sense. For instance, all collections are subcollections of the
            particular <em>user</em> documents to which they are assigned, and <em>sets</em> are subcollections of the{" "}
            <em>exercise instances </em>
            to which they are assigned, but <em>workouts</em>, <em>exercises</em>, and <em>exercise instances</em> are
            root-level collections that refer to each other for ease of access and manipulation.
        </p>
    </>
);

export default function WorkoutLogger() {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='WorkoutLogger/dumbbellsBackground'
            pageTitle='Workout Logger App'
            projectSourceLink='https://github.com/MarshallRuse/workout-logger'
            projectDemoLink='https://marshalls-workout-logger.herokuapp.com/'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='WorkoutLogger/gymBackground'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage='WorkoutLogger/workoutBackground'
            developmentBackgroundImageSmallScreenAlt='WorkoutLogger/curlBackground'
            developmentInfo={<DevelopmentInfo />}
        />
    );
}
