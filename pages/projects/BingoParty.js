import styleVariables from "../../styles/variables.module.scss";
import ProjectPageTemplate from "../../components/elements/ProjectPageTemplate";
import { IconRow, IconBox, SubSubsectionTitle } from "../../components/elements/styledComponents";
import GlowingIcon from "../../components/elements/GlowingIcon";
import ReactLogo from "../../components/svgs/logos/colorless/react.svg";
import ReduxLogo from "../../components/svgs/logos/colorless/redux.svg";
import ExpressLogo from "../../components/svgs/logos/colorless/express.svg";
import MongoDBLogo from "../../components/svgs/logos/colorless/mongodb.svg";
import NodeJSLogo from "../../components/svgs/logos/colorless/nodejs.svg";
import SassLogo from "../../components/svgs/logos/colorless/sass.svg";

const carouselImages = [
    { imageSrc: "BingoParty/BingoPartyHomePage", description: "The Bingo Party home page" },
    {
        imageSrc: "BingoParty/BingoPartyGameBoard",
        description: "Play a game in your browser, and your progress persists",
    },
    {
        imageSrc: "BingoParty/BingoPartyBingoHallGames",
        description: "Sort by a game's popularity, or search for a game; upvote and downvote games",
    },
    {
        imageSrc: "BingoParty/BingoPartyBingoHallUsers",
        description: "Find the users with the most popular games",
    },
    {
        imageSrc: "BingoParty/BingoPartyProfilePage",
        description: "Follow and be followed by other users",
    },
];

const BackgroundInfo = () => (
    <>
        <p>
            <em>Bingo Party</em> was my first venture into building a full-stack MERN app entirely from scratch. Its
            written entirely from pure HTML and CSS, without any UI libraries, and, truthfully, is only functional as a
            desktop app, as I did not have mobile development in mind as I developed it. Attempts to retrofit it later
            as a mobile app with an abundance of media-queries and new components proved too time consuming for what I
            consider an introductory project, and I've chalked it up to a learning experience. All projects from
            here-on-out are to have mobile layout in mind, if not developed in a mobile-first context.
        </p>
        <p>
            Nevertheless, as a valuable learning experience there are features of the project that I am proud of. All UI
            functionality was arduously created by hand, and so I gained some insight into what may be going on under
            the hood of the UI Library components (tabs, expanse panels, menus, modals, etc.) that I now plug in and use
            in a fraction of the time. Users have the capability of uploading their own images for avatars and cover
            photos, and of editing them before saving to ensure they are of the proper dimensions. Users are able to
            engage in a a functioning upvote/downvote system for the games, be ranked by their game's collective votes,
            and follow and be followed by each other, which I thought was pretty neat to implement.
        </p>
    </>
);

const FeaturesInfo = () => (
    <>
        <p>
            Users can create their own Bingo cards, with sizes of 3x3 up to 6x6. Users create the game’s template, and
            they and others can create instances of the game with which to play themselves. Users can stamp the board
            right in the browser, and the state of their board will persist.
        </p>
        <p>
            Users can also follow and be followed by other creators, and can up-vote and down-vote Bingo games. In the
            Bingo Hall, users can sort to find the highest rated games available, see the most popular users, and find
            games by those they follow and their followers.
        </p>
        <p>
            Users can add a bit of personal flair to their profiles, which can be customized with avatar images and
            cover photos, chosen either from a provided list of images, or uploaded by the user. These uploaded images
            are provided a photo-editing service at the time of upload, so that users can crop, rotate, and resize their
            images to best fit the avatar and cover-photo dimensions.
        </p>
    </>
);

const DevelopmentInfo = () => (
    <>
        <IconRow>
            <IconBox>
                <GlowingIcon title='React' glowColor={styleVariables.colorReact}>
                    <ReactLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Redux' glowColor={styleVariables.colorRedux}>
                    <ReduxLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Express' glowColor={styleVariables.colorExpress} strokeWidth={4}>
                    <ExpressLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='MongoDB' glowColor={styleVariables.colorMongoDB} strokeWidth={4}>
                    <MongoDBLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Node JS' glowColor={styleVariables.colorNodeJS} strokeWidth={4}>
                    <NodeJSLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox>
                <GlowingIcon title='Sass' glowColor={styleVariables.colorSass} strokeWidth={4}>
                    <SassLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            Bingo Party is developed as a <strong>full stack MERN (MongoDB, Express, React, Node.js)</strong> app.
        </p>
        <SubSubsectionTitle>Front-End</SubSubsectionTitle>
        <p>
            The React front-end uses components written in HTML and CSS (compiled from Sass). The front-end uses{" "}
            <strong>Redux</strong> (modified for persistence across page-refreshes) for authentication on sign-up and
            login, as well as to fetch the user's games. Redux-thunk was used to dispatch asynchronous actions from the
            front-end, such as updating the user's followers and followings. Bingo Party is a{" "}
            <strong>single-page application</strong>, as it uses <strong>React Router</strong> as its routing solution,
            only fetching the index HTML page on initial loading.
        </p>
        <p>
            The app uses the <strong>cropper.js</strong> npm package to enable uploading of avatar and cover photos, as
            well as editing of such photos in the browser prior to saving.
        </p>
        <SubSubsectionTitle>Back-End</SubSubsectionTitle>
        <p>
            The back-end is a <strong>Node.js</strong> server using MongoDB for its NoSQL database and{" "}
            <strong>Express</strong> for routing. The <strong>Mongoose</strong> library is used as the interface to{" "}
            <strong>MongoDB</strong>, as well as for schema construction and validation. The production build of the app
            uses <strong>MongoDB Atlas</strong> as its hosted database. As Trip Tracker is a single-page application,
            the Express routing is used primarily for API endpoints for the front-end.
        </p>
    </>
);

export default function BingoParty() {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='BingoParty/drinkingBackground'
            pageTitle='Bingo Party App'
            projectSourceLink='https://github.com/MarshallRuse/Bingo-App-React'
            projectDemoLink='https://marshall-bingo-party-app.herokuapp.com/'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='BingoParty/bingoBallBackground'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage='BingoParty/beerBackground'
            developmentInfo={<DevelopmentInfo />}
        />
    );
}
