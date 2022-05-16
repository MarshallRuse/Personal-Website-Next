import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import styles from "../../styles/modules/CloudinaryImage.module.scss";

const CloudinaryImage = ({
    fileName,
    altText = "",
    height,
    width,
    backgroundImage,
    className,
    styling,
    placeholderType = "pixelate",
}) => {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: "marsh",
        },
    });

    const myImage = cld.image(`portfolio/${fileName}`);

    // Request automatic format and quality.
    myImage.format("auto").quality("auto");

    return (
        <AdvancedImage
            alt={altText}
            height={height}
            width={width}
            cldImg={myImage}
            plugins={[
                lazyload({ rootMargin: "100px 20px 100px 20px", threshold: 0.01 }),
                responsive({ steps: 200 }),
                placeholder({ mode: placeholderType }),
            ]}
            className={`${backgroundImage && styles.backgroundImage} ${className && className}`}
            style={styling}
        />
    );
};

export default CloudinaryImage;
