import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CloudinaryImage from "../elements/CloudinaryImage";
import Image from "next/image";
import { NavLink } from "../elements/styledComponents";
import styles from "../../styles/modules/BlogSection.module.scss";
import EventSharp from "@mui/icons-material/EventSharp";
import LocalOfferSharp from "@mui/icons-material/LocalOfferSharp";

export default function BlogCard({ title, subtitle, description, url, date, keywords, bannerImage }) {
    return (
        <a href={url} target='_blank' rel='noopener noreferrer' className={styles.blogCard}>
            <div className={styles.meta}>
                {bannerImage && (
                    <div className={styles.photo}>
                        <Image
                            src={bannerImage?.src}
                            width={800}
                            height={800}
                            layout='responsive'
                            alt={bannerImage?.alt}
                        />
                    </div>
                )}
                <ul className={styles.details}>
                    <li className={styles.date}>
                        <EventSharp fontSize='small' />
                        {date}
                    </li>
                    <li className={styles.tags}>
                        <LocalOfferSharp fontSize='small' />
                        <ul className={styles.tagList}>
                            {keywords.map((word) => (
                                <li key={`${title}-${word}`}>{word}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={styles.description}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <h2>{subtitle}</h2>}
                <p>{description}</p>
                <p className={styles.readMore}>Read More</p>
            </div>
        </a>
    );
}
