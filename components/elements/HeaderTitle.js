import React from "react";
import styles from "../../styles/modules/HeaderTitle.module.scss";

const HeaderTitle = ({ className }) => (
    <h1 className={`${styles.headerTitle} ${className ? className : ""}`}>Marshall Ruse</h1>
);

export default HeaderTitle;
