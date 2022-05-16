import { useState, useEffect } from "react";
import styles from "../../styles/modules/BlogSection.module.scss";
import { useInView } from "react-intersection-observer";
import CloudinaryImage from "../elements/CloudinaryImage";
import { NavLink } from "../elements/styledComponents";
import dynamic from "next/dynamic";
const GlitchingTypingText = dynamic(() => import("../elements/GlitchingTypingText"), { ssr: false });

const BlogPostSubsection = (props) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.3,
        triggerOnce: true,
        fallbackInView: true,
    });
    const { title, url, date, keywords, bannerImage } = props;
    const [elementVisibility, setElementVisibility] = useState({
        title: false,
        details: {
            url: false,
            date: false,
            keywords: false,
        },
        banner: {
            loadingText: false,
            bannerImage: false,
        },
    });
    const [titleTypingDone, setTitleTypingDone] = useState(false);

    const titleTypingDelay = 1000;
    const titleTypingDuration = 500;
    const titleEnterDelay = 500;
    const bannerLoadingTextDelay = titleTypingDelay + titleTypingDuration + titleEnterDelay;
    const bannerLoadingDuration = 1000;
    const bannerImageDelay = bannerLoadingTextDelay + bannerLoadingDuration;
    const detailsSectionDisplayDelay = bannerImageDelay + 250;
    const detailDelay = 125;

    const flagDoneTypingTitle = () => setTimeout(() => setTitleTypingDone(true), titleEnterDelay);

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                const visibility = { ...elementVisibility };
                visibility.title = true;
                setElementVisibility(visibility);
            }, titleTypingDelay);

            setTimeout(() => {
                const visibility = { ...elementVisibility };
                visibility.banner.loadingText = true;
                setElementVisibility(visibility);
            }, bannerLoadingTextDelay);

            setTimeout(() => {
                const visibility = { ...elementVisibility };
                visibility.banner.bannerImage = true;
                setElementVisibility(visibility);
            }, bannerImageDelay);

            setTimeout(() => {
                Object.keys(elementVisibility.details).forEach((key, index) => {
                    setTimeout(() => {
                        const visibility = { ...elementVisibility };
                        visibility.details[key] = true;
                        setElementVisibility(visibility);
                    }, detailDelay * index);
                });
            }, detailsSectionDisplayDelay);
        }
    }, [inView]);

    return (
        <div className={styles.subsection} ref={ref}>
            <div className={styles.blogTitleLine}>
                <GlitchingTypingText
                    element='h3'
                    className={styles.blogTitlePrefix}
                    glitchProbability={0.1}
                    typingPermitted={elementVisibility.title}
                    typingDuration={-1}
                    displayCaret={false}
                >
                    ~/Blog/posts:
                </GlitchingTypingText>
                <GlitchingTypingText
                    element='h3'
                    className={styles.blogTitle}
                    glitchProbability={0}
                    typingPermitted={elementVisibility.title}
                    typingDuration={titleTypingDuration}
                    displayCaret={!titleTypingDone}
                    flagDoneTyping={flagDoneTypingTitle}
                >
                    {title}
                </GlitchingTypingText>
            </div>
            <div
                className={styles.detailLine}
                style={{ opacity: elementVisibility.banner.loadingText ? 1 : 0, flexWrap: "nowrap" }}
            >
                <p className={styles.detailProperty}>Banner:</p>
                <p className={`${styles.detailValue} ${styles.inline}`}>Loading</p>
                <GlitchingTypingText
                    element='p'
                    className={`${styles.detailValue} ${styles.inline}`}
                    typingPermitted={elementVisibility.banner.loadingText}
                    typingDuration={bannerLoadingDuration}
                    displayCaret={false}
                    glitchProbability={0}
                >
                    ...
                </GlitchingTypingText>
                {elementVisibility.banner.bannerImage && (
                    <p className={`${styles.detailValue} ${styles.inline}`}> Done.</p>
                )}
            </div>
            <div
                className={styles.detailLine}
                style={{ opacity: elementVisibility.banner.bannerImage ? 1 : 0, justifyContent: "center" }}
            >
                {bannerImage.directSrc ? (
                    <img
                        src={bannerImage.directSrc}
                        style={{ border: "6px double var(--color-yellow)", width: "clamp(300px, 70%, 1250px)" }}
                    />
                ) : (
                    <CloudinaryImage
                        fileName={bannerImage.src}
                        styling={{ border: "6px double var(--color-yellow)", width: "clamp(300px, 70%, 1250px)" }}
                    />
                )}
            </div>
            <div className={styles.detailLine} style={{ opacity: elementVisibility.details.url ? 1 : 0 }}>
                <p className={styles.detailProperty}>URL:</p>
                <NavLink href={url} target='_blank'>
                    {url}
                </NavLink>
            </div>
            <div className={styles.detailLine} style={{ opacity: elementVisibility.details.date ? 1 : 0 }}>
                <p className={styles.detailProperty}>Date:</p>
                <p className={styles.detailValue}>{date}</p>
            </div>
            <div className={styles.detailLine} style={{ opacity: elementVisibility.details.keywords ? 1 : 0 }}>
                <p className={styles.detailProperty}>Keywords:</p>
                <p className={styles.detailValue}>{`[${keywords.map((word) => ` "${word}"`)}]`}</p>
            </div>
        </div>
    );
};

const posts = [
    {
        title: "Creating a Glitching Typing Animation in React",
        url: "https://medium.com/@ruse.marshall/creating-a-glitching-typing-animation-in-react-1317c251fd0f",
        date: "2022-03-16",
        keywords: ["React", "JavaScript", "Canvas", "Animation", "Tutorial"],
        bannerImage: {
            directSrc:
                "https://res.cloudinary.com/marsh/image/upload/v1649330135/portfolio/Home/Banner_GlitchingTypingAnimation.gif",
            alt: "A banner gif for the tutorial",
        },
    },
    {
        title: "Converting a Vanilla JS Canvas Animation to React",
        url: "https://medium.com/@ruse.marshall/converting-a-vanilla-js-canvas-animation-to-react-78443bad6d7b",
        date: "2022-03-03",
        keywords: ["React", "Animation", "Web Development", "Styled Components", "Front End Development"],
        bannerImage: {
            directSrc:
                "https://res.cloudinary.com/marsh/image/upload/v1649334867/portfolio/Home/Banner_MatrixRainfallReact.gif",
            alt: "A banner gif for the tutorial",
        },
    },
];

const BlogSection = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1,
    });
    const [blogTypingDone, setBlogTypingDone] = useState(false);

    const headlineTypingDuration = 500;
    const headlineEnterDelay = 1000;

    const flagDoneTypingBlog = () => setTimeout(() => setBlogTypingDone(true), headlineEnterDelay);

    return (
        <section className={styles.blogSectionContainer} id='blog-section' ref={ref}>
            <GlitchingTypingText
                element='h3'
                className={styles.sectionHeader}
                glitchProbability={0.1}
                typingPermitted={inView}
                typingDuration={headlineTypingDuration}
                displayCaret={!blogTypingDone}
                flagDoneTyping={flagDoneTypingBlog}
            >
                Blog
            </GlitchingTypingText>
            {posts.map((post) => (
                <BlogPostSubsection
                    key={post.title}
                    title={post.title}
                    url={post.url}
                    date={post.date}
                    keywords={post.keywords}
                    bannerImage={post.bannerImage}
                />
            ))}
        </section>
    );
};

export default BlogSection;
