import styles from "../../styles/modules/FadeInText.module.scss";

const FadeInText = ({ animationDelay, animationDuration, children, style }) => (
    <div
        className={styles.animatedText}
        style={{
            "--animation-delay": animationDelay || "0s",
            "--animation-duration": animationDuration || "1s",
            ...style,
        }}
    >
        {children}
    </div>
);

export default FadeInText;
