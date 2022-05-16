import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/modules/ProjectCard.module.scss";
import CloudinaryImage from "./CloudinaryImage";

const ProjectCard = (props) => {
    const {
        cardImage,
        cardImageAltText = "",
        cardTitle,
        cardTitleStyling = {},
        cardSubtitle,
        cardSubtitleStyling = {},
        projectPageLink,
        demoLink,
        liveLink,
        sourceLink,
        stackIcons,
    } = props;
    const router = useRouter();
    const goToPage = () => {
        router.push(projectPageLink);
    };

    const calcIconWidth = () => (stackIcons.length > 4 ? Math.floor(320 / stackIcons.length) : 80);

    return (
        <div className={styles.cardWrapper}>
            <div
                className={styles.cardBody}
                data-augmented-ui={`tl-clip tr-2-clip-x ${sourceLink && "br-2-clip-x"} ${
                    demoLink && "bl-2-clip-x"
                } both`}
                onClick={goToPage}
            >
                <div className={styles.cardBodyAugReset} data-augmented-ui-reset>
                    <CloudinaryImage
                        altText={cardImageAltText}
                        height={"462px"}
                        width={"305px"}
                        className={`${styles.cardBody} ${styles.cardBodyImg}`}
                        fileName={cardImage}
                        data-augmented-ui={`tl-clip tr-2-clip-x ${sourceLink && "br-2-clip-x"} ${
                            demoLink && "bl-2-clip-x"
                        } both`}
                    />
                </div>
            </div>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitle} style={cardTitleStyling}>
                    {cardTitle}
                </div>
                <div className={styles.cardSubtitle} style={cardSubtitleStyling}>
                    {cardSubtitle}
                </div>
            </div>
            {(demoLink || liveLink) && (
                <a
                    href={demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${styles.btnCardAction} ${styles.btnDemo}`}
                    data-augmented-ui='tr-clip tl-clip both'
                >
                    {liveLink ? "Visit" : "Demo"}
                </a>
            )}
            {sourceLink && (
                <a
                    href={sourceLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${styles.btnCardAction} ${styles.btnSource}`}
                    data-augmented-ui='tr-clip tl-clip both'
                >
                    Source
                </a>
            )}

            <div className={styles.cardIconStack}>
                {stackIcons.map((item, i) => (
                    <div
                        key={i}
                        className={`${styles.stackIconWrapper} ${styles[item.class]}`}
                        data-augmented-ui='all-hex border'
                        style={{ "--aug-all-width": `${calcIconWidth()}px` }}
                    >
                        <Image src={item.icon} width={100} height={100} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
