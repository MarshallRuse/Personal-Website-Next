import styles from "../../styles/modules/GlowingIcon.module.scss";
import { lighten } from "color2k";
import { useInView } from "react-intersection-observer";

const GlowingIcon = (props) => {
    const { children, title = "", glowColor = "#fff", strokeWidth = 4 } = props;
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
        triggerOnce: false,
        fallbackInView: true,
    });

    return (
        <div
            className={styles.glowEffect}
            style={{
                "--glow-color": glowColor,
                "--dim-fill-glow-light": lighten(glowColor, 0.2),
                "--dim-stroke-glow-light": lighten(glowColor, 0.1),
                "--glowing-fill-glow-light": lighten(glowColor, 0.5),
                "--in-view": inView ? 1 : 0,
                "--stroke-width": `${strokeWidth}px`,
            }}
            ref={ref}
        >
            <div className={styles.flexContainer}>
                <div className={styles.relativeContainer}>
                    <div className={`${styles.overlapped} ${styles.dim}`}>{children}</div>
                    <div className={`${styles.overlapping} ${styles.glowing}`}>{children}</div>
                </div>
                <div className={styles.relativeContainer}>
                    <p
                        className={`${styles.title} ${styles.overlapped} ${styles.text} ${styles.dim}`}
                        style={{ "--glow-color": glowColor, "--in-view": inView ? 1 : 0 }}
                    >
                        {title}
                    </p>
                    <p
                        className={`${styles.title} ${styles.overlapping} ${styles.text} ${styles.glowing}`}
                        style={{ "--glow-color": glowColor, "--in-view": inView ? 1 : 0 }}
                    >
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GlowingIcon;
