import { useState } from "react";
import styles from "../../styles/modules/BlogSection.module.scss";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
const GlitchingTypingText = dynamic(() => import("../elements/GlitchingTypingText"), { ssr: false });
import BlogCard from "../elements/BlogCard";

const posts = [
    {
        title: "Creating a Glitching Typing Animation in React",
        description: "Build a typing animation of randomly flipping letters using React hooks and styled-components",
        url: "https://medium.com/@ruse.marshall/creating-a-glitching-typing-animation-in-react-1317c251fd0f",
        date: "2022-03-16",
        keywords: ["React", "JavaScript", "Canvas", "Animation", "Tutorial"],
        bannerImage: {
            src: "/gifs/Glitching-Typing-Text-1-1-Card - Opt.gif",
            alt: "A banner gif for the tutorial",
        },
    },
    {
        title: "Converting a Vanilla JS Canvas Animation to React",
        description: "Convert an HTML5 canvas animation into a React component, and make it interactable",
        url: "https://medium.com/@ruse.marshall/converting-a-vanilla-js-canvas-animation-to-react-78443bad6d7b",
        date: "2022-03-03",
        keywords: ["React", "Animation", "Web Development", "Styled Components", "Front End Development"],
        bannerImage: {
            src: "/gifs/Matrix-Rainfall-React-TitleCard-1-1 - Opt.gif",
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
                <BlogCard
                    key={post.title}
                    title={post.title}
                    description={post.description}
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
