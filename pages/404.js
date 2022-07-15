import styleVariables from "../styles/variables.module.scss";
import styles from "../styles/modules/Custom404.module.scss";
import { SectionTitle } from "../components/elements/styledComponents";
import BackArrow from "../components/elements/BackArrow";

const Custom404 = () => {
    return (
        <div className={styles.pageWrapper}>
            <SectionTitle
                className={styles.glowingText}
                id='skills-section'
                styling={{ "--glow-color": styleVariables.colorPink, fontSize: "6rem" }}
            >
                404
            </SectionTitle>
            <p>Oh no, it looks like you&apos;re lost!</p>
            <p>Head on back home.</p>
            <BackArrow />
        </div>
    );
};

export default Custom404;
