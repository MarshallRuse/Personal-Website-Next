import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import styles from "../../styles/modules/CloudinaryImage.module.scss";

const CloudinaryImage = ({
    fileName,
    altText = "",
    height,
    width,
    backgroundImage,
    className = "",
    styling,
    placeholderType = "pixelate",
}) => {
    const url = buildUrl(`portfolio/${fileName}`, {
        cloud: {
            cloudName: "marsh",
        },
    });
    const blurredUrl = buildUrl(`portfolio/${fileName}`, {
        cloud: {
            cloudName: "marsh",
        },
        transformations: {
            resize: {
                type: "scale",
                width: 10,
                aspectRatio: `${(width / height).toFixed(1)}`,
            },
            effect: {
                name: placeholderType,
                value: 1,
            },
        },
    });

    return (
        <div
            className={`${backgroundImage && styles.backgroundImage} ${className && className}`}
            style={{ maxWidth: "100%", ...styling }}
        >
            <Image
                alt={altText}
                height={height}
                width={width}
                src={url}
                placeholder='blur'
                blurDataURL={blurredUrl}
                layout={backgroundImage ? "fill" : "intrinsic"}
                objectFit={backgroundImage ? "cover" : "fill"}
            />
        </div>
    );
};

export default CloudinaryImage;
