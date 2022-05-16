import Link from "next/link";
import styles from "../../styles/modules/NavBar.module.scss";
import { motion, useViewportScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { NavLink } from "./styledComponents";

const NavBar = () => {
    // Choose at what point the image opacity becomes 0
    // E.G: 50px from the top
    const offsetHeight = 200;
    // Vertical scroll distance in pixels.
    const { scrollY } = useViewportScroll();
    // Transforms scroll and image height values to opacity values
    const yRange = useTransform(scrollY, [0, offsetHeight], [0, 0.5]);
    const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });
    const bg = useMotionTemplate`rgba(var(--color-blue-dark-raw), ${opacity})`;

    return (
        <motion.nav className={styles.navList} style={{ backgroundColor: bg }}>
            <Link href='#skills-section' passHref>
                <NavLink color='#fff'>Skills</NavLink>
            </Link>
            <Link href='#projects-section-title' passHref>
                <NavLink color='#fff'>Projects</NavLink>
            </Link>
            <Link href='#blog-section' passHref>
                <NavLink color='#fff'>Blog</NavLink>
            </Link>
            <Link href='#about-me-section' passHref>
                <NavLink color='#fff'>About Me</NavLink>
            </Link>
            <Link href='#contact-section' passHref>
                <NavLink href='#contact-section' color='#fff'>
                    Contact
                </NavLink>
            </Link>
        </motion.nav>
    );
};

export default NavBar;
