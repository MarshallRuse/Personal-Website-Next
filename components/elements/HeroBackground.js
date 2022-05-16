import React from "react";
import styles from "../../styles/modules/HeroBackground.module.scss";
import SouthernOntarioSVG from "./SouthernOntarioHighwaysArteriesImage.svg";

const HeroBackground = ({ children }) => {
    return (
        <>
            <section className={styles.colorBackground}>
                <div className={styles.svgWrapper}>
                    <SouthernOntarioSVG className={styles.animatedSVG} />
                    <div className={styles.linearGradientBottom}>
                        <div className={styles.linearGradientTop}>{children}</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroBackground;
