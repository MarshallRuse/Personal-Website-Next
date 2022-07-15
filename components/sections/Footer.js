import styles from "../../styles/modules/Footer.module.scss";
import HeaderTitle from "../elements/HeaderTitle";
import { NavLink, SectionTitle } from "../elements/styledComponents";
import EmailSharp from "@mui/icons-material/EmailSharp";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

const contactLinkStyling = {
    alignItems: "center",
    color: "var(--color-yellow)",
    display: "flex",
    gap: "10px",
};

export default function Footer() {
    return (
        <section className={styles.footer}>
            <div>
                <SectionTitle element='h3' id='contact-section'>
                    Contact
                </SectionTitle>
                <div className={styles.contactColumn}>
                    <NavLink
                        href='mailto:ruse.marshall@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        styling={contactLinkStyling}
                    >
                        <EmailSharp />
                        ruse.marshall@gmail.com
                    </NavLink>
                    <NavLink
                        href='https://github.com/MarshallRuse'
                        target='_blank'
                        rel='noopener noreferrer'
                        styling={contactLinkStyling}
                    >
                        <GitHub />
                        MarshallRuse
                    </NavLink>
                    <NavLink
                        href='https://www.linkedin.com/in/marshall-ruse/'
                        target='_blank'
                        rel='noopener noreferrer'
                        styling={contactLinkStyling}
                    >
                        <LinkedIn />
                        marshall-ruse
                    </NavLink>
                    <NavLink
                        href='https://www.instagram.com/marshy_roses/'
                        target='_blank'
                        rel='noopener noreferrer'
                        styling={contactLinkStyling}
                    >
                        <Instagram />
                        marshy_roses
                    </NavLink>
                </div>
            </div>
            <HeaderTitle className={styles.footerHeader} />
            <div className={styles.copyright}>
                <small>Copyright &copy; Marshall Ruse {new Date().getFullYear()}</small>
            </div>
        </section>
    );
}
