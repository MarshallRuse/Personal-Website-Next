import dynamic from "next/dynamic";
import { Suspense } from "react";
import styleVariables from "../../styles/variables.module.scss";
import styles from "../../styles/modules/Rover.module.scss";
import ProjectPageTemplate from "../../components/elements/ProjectPageTemplate";
import { IconRow, IconBox, NavLink } from "../../components/elements/styledComponents";
import GlowingIcon from "../../components/elements/GlowingIcon";
import CloudinaryImage from "../../components/elements/CloudinaryImage";
import PythonLogo from "../../components/svgs/logos/colorless/python.svg";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
    ssr: false,
});

const carouselImages = [
    {
        slideComponent: ({ ...props }) => (
            <ReactPlayer
                url='https://www.youtube.com/embed/mospnG-yyUk'
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                playing
                width={"100%"}
                height={"100%"}
                volume={0}
                light='/images/RoverFollower/rover-thumbnail-min.png'
                {...props}
            />
        ),
    },
    {
        src: "RoverFollower/RoverFollowerOneFollower",
        description: "A scenario with one Follower Rover",
        width: 1526,
        height: 950,
    },
    {
        src: "RoverFollower/RoverFollowerPerformanceAnalysis",
        description: "The Matplotlib performance analysis of the Follower, post-run",
        width: 1530,
        height: 958,
    },
    {
        src: "RoverFollower/RoverFollowerMultipleFollowers",
        description: "A convoy of daisy-chained Leader-Followers",
        width: 1533,
        height: 954,
    },
];

const BackgroundInfo = () => (
    <p>
        My final undergraduate project was to build an autonomous following program, which would direct a
        leader-follower pair of rovers in a simulated environment. The leader&apos;s velocity was randomly changed at
        various intervals of time, and the follower had to maintain a precise distance with relatively small room for
        error. The extension to this project was to accomplish the same following behaviour with multiple rovers.
    </p>
);

const FeaturesInfo = () => (
    <CloudinaryImage
        fileName='RoverFollower/RoverFollowerPoster'
        width={3600}
        height={5400}
        altText='The final poster for the Rover Follower project'
        styling={{ width: "100%" }}
    />
);

const DevelopmentInfo = () => (
    <>
        <IconRow>
            <IconBox>
                <GlowingIcon title='Python' glowColor={styleVariables.colorPython}>
                    <PythonLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            The full{" "}
            <NavLink
                href='/pdf/RoverFollower/499FinalReport-MarshallRuse.pdf'
                target='_blank'
                rel='noopener noreferrer'
            >
                Undergraduate Thesis Report
            </NavLink>{" "}
            can be found here.
        </p>
        <p>
            The TL;DR is that the autonomous following function is run by a class-based Python program, in which each
            Rover is assigned a data-collection <em> Rover </em>class, and each pair of these classes reports to a{" "}
            <em>Supervisor</em> class, which coordinates the response based on their relative positions and velocities.
            It sends instructions back to the Follower, directing it to stay at a precise distance from its leader.
            Sensory input and communication is achieved through a <strong>TCP Socket communication</strong> protocol.
            This structure can be daisy-chained to an arbitrary number of leader-follower pairs, resulting in autonomous
            convoy behaviour. Tracking and post-run analysis classes were also made to monitor the performance of the
            pairs, the data from which was processed via the <strong>NumPy</strong> library, with{" "}
            <strong>Matplotlib</strong> visualiztions.
        </p>
    </>
);

export default function RoverFollower() {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage={{ src: "RoverFollower/marsBackground", width: 1280, height: 720 }}
            autoPlayCarousel={false}
            pageTitle='Rover Follower'
            projectSourceLink='https://github.com/MarshallRuse/Rover-Follower-Challenge'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage={{
                src: "RoverFollower/marsStriationsBackground",
                width: 2880,
                height: 1800,
                srcSmall: "RoverFollower/marsCliffBackground",
                widthSmall: 2020,
                heightSmall: 3042,
            }}
            featuresInfo={<FeaturesInfo />}
            featuresAltTitle='Poster'
            developmentInfo={<DevelopmentInfo />}
            developmentAltTitle='Report'
            openGraphImages={[
                {
                    url: "https://res.cloudinary.com/marsh/image/upload/v1649330025/portfolio/RoverFollower/RoverFollowerOneFollower.png",
                    width: 1526,
                    height: 950,
                    alt: "One of the rovers following its leader",
                    type: "image/png",
                },
            ]}
        />
    );
}
