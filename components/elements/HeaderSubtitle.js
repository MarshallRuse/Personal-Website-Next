import { useState } from "react";
import styles from "../../styles/modules/HeaderSubtitle.module.scss";
import useInterval from "../hooks/useInterval";

const HeaderSubtitle = () => {
    const subtitles = ["Web Developer", "Web Designer", "Experience Designer", "Experience Developer"];
    const [subtitleIndex, setSubtitleIndex] = useState(0);
    const subtitleDuration = 2000;

    useInterval(() => {
        subtitleIndex === subtitles.length - 1 ? setSubtitleIndex(0) : setSubtitleIndex(subtitleIndex + 1);
    }, subtitleDuration);

    return (
        <h2 className={styles.subtitle} style={{ "--pseudo-content": `"${subtitles[subtitleIndex]}"` }}>
            {subtitles[subtitleIndex]}
        </h2>
    );
};

export default HeaderSubtitle;
