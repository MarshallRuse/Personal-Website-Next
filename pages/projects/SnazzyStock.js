import styleVariables from "../../styles/variables.module.scss";
import ProjectPageTemplate from "../../components/elements/ProjectPageTemplate";
import { IconRow, IconBox, NavLink, SubSubsectionTitle } from "../../components/elements/styledComponents";
import GlowingIcon from "../../components/elements/GlowingIcon";
import ReactLogo from "../../components/svgs/logos/colorless/react.svg";
import MaterialUILogo from "../../components/svgs/logos/colorless/material-ui.svg";
import ExpressLogo from "../../components/svgs/logos/colorless/express.svg";
import NodejsLogo from "../../components/svgs/logos/colorless/nodejs.svg";
import MySQLLogo from "../../components/svgs/logos/colorless/mysql.svg";

const carouselImages = [
    {
        imageSrc: "SnazzyStock/cart",
        description: "A cart to record sales transactions",
    },
    {
        imageSrc: "SnazzyStock/addToCart",
        description: "The modal to add a product to the cart",
    },
    {
        imageSrc: "SnazzyStock/addToCartAutocomplete",
        description: "Autocomplete search by SKU or product name for adding product to cart",
    },
    {
        imageSrc: "SnazzyStock/salesPage",
        smallScreenAltSrc: "SnazzyStock/groupedResidents",
        description: "List of sales by date",
    },
    {
        imageSrc: "SnazzyStock/salesByDate",
        description: "Sales Record - By Date page - summary section",
    },
    {
        imageSrc: "SnazzyStock/salesByDate-TransactionRecords",
        description: "Sales Record - By Date - list of transactions",
    },
    {
        imageSrc: "SnazzyStock/suppliersList",
        description: "Supplier summaries as links to Supplier pages",
    },
    {
        imageSrc: "SnazzyStock/supplierPage",
        description: "Supplier page",
    },
    {
        imageSrc: "SnazzyStock/supplierPage-CostRevenueHistory",
        description: "Cost/Revenue chart on the Supplier page",
    },
    {
        imageSrc: "SnazzyStock/purchaseOrder",
        description: "Purchase Order page summary section",
    },
    {
        imageSrc: "SnazzyStock/purchaseOrders-Categories",
        description: "Purchase Order page chart of category of items purchased",
    },
    {
        imageSrc: "SnazzyStock/productsPage",
        description: "List of products",
    },
    {
        imageSrc: "SnazzyStock/productPage",
        description: "Product page with Variation sales histories by date",
    },
    {
        imageSrc: "SnazzyStock/addProducts",
        description: "Add new product form with support for variable or simple products",
    },
];

const BackgroundInfo = () => (
    <>
        <p>
            Snazzy Stock is an in-development inventory management app for{" "}
            <NavLink href='https://www.snazzystones.ca' target='_blank' rel='noopener noreferrer'>
                Snazzy Stones Jewellery
            </NavLink>
            , a small retail business.
        </p>
        <p>
            Snazzy Stones currently tracks inventory via hand-written records (for in-person sales) cross-referenced
            with Woocommerce sales records (
            <NavLink href='https://snazzystones.ca/' target='_blank' rel='noopener noreferrer'>
                for website sales
            </NavLink>
            ) and Etsy CSV exports (
            <NavLink href='https://www.etsy.com/ca/shop/SnazzyStonesJewelry' target='_blank' rel='noopener noreferrer'>
                for Etsy sales
            </NavLink>
            ). The idea behind Snazzy Stock is to have one unified platform into which all records of sale or purchase
            order transactions will feed to ensure automatic tracking and to provide sales analytics for products.
        </p>
    </>
);

const FeaturesInfo = () => (
    <>
        <p>
            The app currently contains a rudimentary cart functionality, which doesn&apos;t accept payments, but does
            automatically update the inventor of pre-loaded products, which can be quickly identified via an
            autocomplete search of product name or SKU. Barcode-tagged products can be scanned with the device&apos;s
            camera for automatic product acquisition. Future versions of the app will integrate with{" "}
            <NavLink href='https://squareup.com/ca/en/app' target='_blank' rel='noopener noreferrer'>
                Square&apos;s
            </NavLink>{" "}
            API to automatically generate a subtotal to be charged with in-person sales using the Square terminal.{" "}
        </p>
        <p>
            Product inventory can be managed by adding either simple or variable product types. Instances of each
            product are tracked from their purchase order to sale.
        </p>
        <p>
            Purchase orders of products can be uploaded in bulk to update the inventory. Purchase orders include
            suppliers, purchase date, invoice amount, invoice currency, target price, and quantity. Suppliers and
            products not already in the database can be created at upload time without leaving the page.
        </p>
        <p>
            Sales and Purchase Orders can be tracked from a broad aggregate level, or drilled down into the individual
            sales/purchases. Sales data can be viewed at a date-by-date elevation, such that all transactions for a day
            are summarized. Analytic charts are available for sales and purchases by category of sales/purchase value
            and volume, and cost/revenue history over customizable timeframes.
        </p>
    </>
);

const DevelopmentInfo = () => (
    <>
        <IconRow styling={{ marginBottom: "2rem" }}>
            <IconBox>
                <GlowingIcon title='React' glowColor={styleVariables.colorReact}>
                    <ReactLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Material UI' glowColor={styleVariables.colorMaterialUI}>
                    <MaterialUILogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Express' glowColor={styleVariables.colorExpress}>
                    <ExpressLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Node JS' glowColor={styleVariables.colorNodeJS}>
                    <NodejsLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='MySQL' glowColor={styleVariables.colorMySQL} strokeWidth={2}>
                    <MySQLLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            Snazzy Stock is built with a React front-end, using{" "}
            <NavLink href='https://v4.mui.com/getting-started/installation/' target='_blank' rel='noopener noreferrer'>
                Material UI
            </NavLink>{" "}
            as its a component library.
        </p>
        <p>
            CSV uploads of purchase orders and sales data are parsed into JSON with{" "}
            <NavLink href='https://www.npmjs.com/package/react-papaparse' target='_blank' rel='noopener noreferrer'>
                react-papaparse
            </NavLink>
            . Analytics charts are built with{" "}
            <NavLink href='https://www.npmjs.com/package/react-chartjs-2' target='_blank' rel='noopener noreferrer'>
                react-chartjs-2
            </NavLink>
            , and date manipulation is accomplished using{" "}
            <NavLink href='https://day.js.org/' target='_blank' rel='noopener noreferrer'>
                dayjs
            </NavLink>
            .
        </p>
        <p>The back-end stores data in a MySQL database, which is served up via an Express REST API.</p>
    </>
);

export default function SnazzyStock() {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='SnazzyStock/chainsBanner'
            pageTitle='Snazzy Stock App'
            projectSourceLink='private'
            projectDemoLink=''
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='SnazzyStock/hoops'
            featuresBackgroundImageSmallScreenAlt='SnazzyStock/pendants'
            featuresInfo={<FeaturesInfo />}
            developmentInfo={<DevelopmentInfo />}
            developmentBackgroundImage=''
            developmentBackgroundImageSmallScreenAlt=''
            openGraphImages={[
                {
                    url: "https://res.cloudinary.com/marsh/image/upload/v1650284528/portfolio/SnazzyStock/salesPage.png",
                    width: 1902,
                    height: 861,
                    alt: "The sales-tracking page of the Snazzy Stock app",
                    type: "image/png",
                },
            ]}
        />
    );
}
