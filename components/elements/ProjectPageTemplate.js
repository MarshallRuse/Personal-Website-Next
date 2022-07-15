import Link from "next/link";
import styles from "../../styles/modules/ProjectPageTemplate.module.scss";
import styleVariables from "../../styles/variables.module.scss";
import GitHub from "@mui/icons-material/GitHub";
import Visibility from "@mui/icons-material/Visibility";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useMediaQuery from "../hooks/useMediaQuery";
import CloudinaryImage from "./CloudinaryImage";
import { SectionTitle, SubsectionTitle, TextContainer } from "./styledComponents";
import BackArrow from "./BackArrow";

const ProjectPageTemplate = ({
    carouselBackgroundImage,
    carouselBackgroundImageSmallScreenAlt,
    autoPlayCarousel = true,
    pageTitle,
    projectSourceLink = "",
    projectDemoLink = "",
    projectLiveLink = "",
    carouselImages = [],
    backgroundInfo,
    backgroundAltTitle = "",
    featuresAltTitle = "",
    featuresBackgroundImage,
    featuresBackgroundImageSmallScreenAlt,
    featuresInfo,
    developmentAltTitle = "",
    developmentBackgroundImage,
    developmentBackgroundImageSmallScreenAlt,
    developmentInfo,
}) => {
    const smallScreen = useMediaQuery(`(max-width: ${styleVariables.breakpointSm})`);

    return (
        <main className={styles.pageWrapper}>
            <BackArrow />
            <div className={`${styles.backgroundImageContainer} ${styles.carouselBackground}`}>
                {(carouselBackgroundImageSmallScreenAlt || carouselBackgroundImage) && (
                    <CloudinaryImage
                        fileName={
                            carouselBackgroundImageSmallScreenAlt && smallScreen
                                ? carouselBackgroundImageSmallScreenAlt
                                : carouselBackgroundImage
                        }
                        backgroundImage
                    />
                )}
                <section className={styles.sectionContainer}>
                    <TextContainer>
                        <SectionTitle
                            element='h1'
                            styling={{ padding: "60px", textShadow: "2px 2px var(--color-pink)" }}
                        >
                            {pageTitle}
                        </SectionTitle>
                    </TextContainer>
                </section>
                <div className={styles.projectLinksRow}>
                    {projectDemoLink && (
                        <a
                            className={`${styles.demoBtn} ${!projectDemoLink && styles.disabled}`}
                            href={projectDemoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Visibility style={{ marginRight: "5px" }} />
                            Demo
                        </a>
                    )}
                    {projectLiveLink && (
                        <a
                            className={`${styles.demoBtn} ${!projectLiveLink && styles.disabled}`}
                            href={projectLiveLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Visibility style={{ marginRight: "5px" }} />
                            Visit
                        </a>
                    )}
                    {projectSourceLink && (
                        <a
                            className={`${styles.sourceBtn} ${!projectSourceLink && styles.disabled}`}
                            href={projectSourceLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <GitHub style={{ marginRight: "5px" }} />
                            Source
                            {projectSourceLink === "private" && <span className={styles.private}> (Private)</span>}
                        </a>
                    )}
                </div>
                <TextContainer>
                    <Carousel
                        autoPlay={autoPlayCarousel}
                        interval={5000}
                        transitionTime={500}
                        infiniteLoop
                        preventMovementUntilSwipeScrollTolerance
                        swipeScrollTolerance={50}
                        showStatus={false}
                        showThumbs={false}
                    >
                        {carouselImages.map((imageObj, index) =>
                            imageObj.slideComponent ? (
                                <imageObj.slideComponent key={`carousel-slideComponent-${index}`} />
                            ) : (
                                <div className={styles.slideContainer} key={`carousel-image-${index}`}>
                                    <CloudinaryImage
                                        fileName={
                                            smallScreen && imageObj.smallScreenAltSrc
                                                ? imageObj.smallScreenAltSrc
                                                : imageObj.imageSrc
                                        }
                                        altText={imageObj.altText}
                                    />
                                    {imageObj.description && <p className='legend'>{imageObj.description}</p>}
                                </div>
                            )
                        )}
                    </Carousel>
                </TextContainer>
            </div>
            <section className={styles.sectionContainer} style={{ backgroundColor: "#FAFAFA" }}>
                <SubsectionTitle styling={{ color: "#000" }}>
                    {backgroundAltTitle !== "" ? backgroundAltTitle : "Background"}
                </SubsectionTitle>
                <TextContainer>{backgroundInfo}</TextContainer>
            </section>
            <div className={styles.backgroundImageContainer}>
                {(featuresBackgroundImageSmallScreenAlt || featuresBackgroundImage) && (
                    <CloudinaryImage
                        fileName={
                            featuresBackgroundImageSmallScreenAlt && smallScreen
                                ? featuresBackgroundImageSmallScreenAlt
                                : featuresBackgroundImage
                        }
                        backgroundImage
                    />
                )}
                <section className={styles.sectionContainer}>
                    <div className={styles.textBackground}>
                        <SubsectionTitle>{featuresAltTitle !== "" ? featuresAltTitle : "Features"}</SubsectionTitle>
                        <TextContainer>{featuresInfo}</TextContainer>
                    </div>
                </section>
            </div>
            <div className={styles.backgroundImageContainer}>
                {(developmentBackgroundImageSmallScreenAlt || developmentBackgroundImage) && (
                    <CloudinaryImage
                        fileName={
                            developmentBackgroundImageSmallScreenAlt && smallScreen
                                ? developmentBackgroundImageSmallScreenAlt
                                : developmentBackgroundImage
                        }
                        backgroundImage
                    />
                )}
                <section className={styles.sectionContainer}>
                    <div className={styles.textBackground}>
                        <SubsectionTitle>
                            {developmentAltTitle !== "" ? developmentAltTitle : "Development"}
                        </SubsectionTitle>
                        <TextContainer>{developmentInfo}</TextContainer>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ProjectPageTemplate;
