import { forwardRef } from "react";
import styles from "../../styles/modules/elements.module.scss";

export const SectionTitle = ({ children, element: Component = "h1", className, styling, ...rest }) => {
    return (
        <Component className={`${styles.sectionTitle} ${className && className}`} style={{ ...styling }} {...rest}>
            {children}
        </Component>
    );
};

export const SubsectionTitle = ({ children, element: Component = "h2", styling, ...rest }) => {
    return (
        <Component className={styles.subsectionTitle} style={{ ...styling }} {...rest}>
            {children}
        </Component>
    );
};

export const SubSubsectionTitle = ({ children, element: Component = "h3", styling, ...rest }) => {
    return (
        <Component className={styles.subSubsectionTitle} style={{ ...styling }} {...rest}>
            {children}
        </Component>
    );
};

export const NavLink = forwardRef(({ color = "var(--color-yellow)", children, styling, ...rest }, ref) => (
    <a ref={ref} className={styles.navLink} style={{ "--custom-color": color, ...styling }} {...rest}>
        {children}
    </a>
));
NavLink.displayName = "NavLink";

export const IconRow = ({ styling, children, ...rest }) => (
    <div className={styles.iconRow} style={{ ...styling }} {...rest}>
        {children}
    </div>
);

export const IconBox = ({
    styling,
    numPerRow = 2,
    numPerRowSm = 4,
    numPerRowMd = 6,
    numPerRowLg = 8,
    children,
    ...rest
}) => (
    <div
        className={styles.iconBox}
        style={{
            "--num-per-row": numPerRow,
            "--num-per-row-sm": numPerRowSm,
            "--num-per-row-md": numPerRowMd,
            "--num-per-row-lg": numPerRowLg,
            ...styling,
        }}
        {...rest}
    >
        {children}
    </div>
);

export const TextContainer = ({ styling, children, ...rest }) => (
    <div className={styles.textContainer} style={{ ...styling }} {...rest}>
        {children}
    </div>
);
