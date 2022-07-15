import Link from "next/link";
import styles from "../../styles/modules/BackArrow.module.scss";
import ArrowBack from "@mui/icons-material/ArrowBack";

const BackArrow = () => (
    <span className={styles.backArrowWrapper}>
        <Link href='/' scroll={false}>
            <a>
                <ArrowBack fontSize='large' />
            </a>
        </Link>
    </span>
);

export default BackArrow;
