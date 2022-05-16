import styles from "../../styles/modules/HeaderSection.module.scss";
import HeaderSubtitle from "../elements/HeaderSubtitle";
import NavBar from "../elements/NavBar";
import HeroBackground from "../elements/HeroBackground";
import HeaderTitle from "../elements/HeaderTitle";
import FadeInText from "../elements/FadeInText";

const HeaderSection = () => (
    <>
        <FadeInText
            animationDelay={"3.5s"}
            animationDuration={"2s"}
            style={{ position: "fixed", width: "100%", zIndex: 3 }}
        >
            <NavBar />
        </FadeInText>
        <HeroBackground>
            <div className={styles.headerContainer}>
                <HeaderTitle />
                <div className={styles.headerSubtitleSection}>
                    <FadeInText animationDelay={"3.5s"} animationDuration={"2s"}>
                        <HeaderSubtitle />
                    </FadeInText>
                </div>
            </div>
        </HeroBackground>
    </>
);

export default HeaderSection;
