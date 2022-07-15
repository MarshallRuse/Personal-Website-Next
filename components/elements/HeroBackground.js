import React from "react";
import styles from "../../styles/modules/HeroBackground.module.scss";
import Image from "next/image";

const HeroBackground = ({ children }) => {
    return (
        <>
            <section className={styles.colorBackground}>
                <div className={styles.heroWrapper}>
                    <div className={styles.bgImage}>
                        <Image
                            src='/images/HomePage/SouthernOntario_Compressed (2).png'
                            layout='fill'
                            objectFit='cover'
                            quality={100}
                            priority
                            alt=''
                        />
                    </div>
                    <div id='highways' className={styles.bgImage}>
                        <Image
                            src='/images/HomePage/SouthernOntarioHighways_Compressed.png'
                            layout='fill'
                            objectFit='cover'
                            priority
                            alt=''
                        />
                    </div>
                    <div id='arteries' className={styles.bgImage}>
                        <Image
                            src='/images/HomePage/SouthernOntarioArteries_Compressed.png'
                            layout='fill'
                            objectFit='cover'
                            priority
                            alt=''
                        />
                    </div>

                    <div className={styles.linearGradientBottom}>
                        <div className={styles.linearGradientTop}>{children}</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroBackground;
