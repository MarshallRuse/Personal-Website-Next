import Head from "next/head";
import styles from "../styles/modules/Home.module.scss";
import HeaderSection from "../components/sections/HeaderSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import BlogSection from "../components/sections/BlogSection";
import AboutMeSection from "../components/sections/AboutMeSection";

export default function Home() {
    return (
        <div>
            <Head>
                <title>MarshallRuse.com</title>
                <meta name='description' content='The portfolio site for Marshall Ruse' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <HeaderSection />
                <SkillsSection />
                <ProjectsSection />
                <BlogSection />
                <AboutMeSection />
            </main>
        </div>
    );
}
