import styles from "../../styles/modules/ProjectsSection.module.scss";
import { SectionTitle } from "../elements/styledComponents";
import MatrixBG from "../elements/MatrixBG";
import ProjectCard from "../elements/ProjectCard";

const ProjectsSection = () => (
    <section className={styles.projectsSection} id='projects-section'>
        <MatrixBG fps={30} />
        <div className={styles.projectsContainer}>
            <SectionTitle id='projects-section-title' element='h3' styling={{ marginBottom: "2rem" }}>
                Projects
            </SectionTitle>
            <div className='flexContainer'>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='SnazzyStonesWebsite/snazzy-stones-project-card'
                        cardImageAltText='Card image for SnazzyStones.ca Next.js app'
                        cardTitle='snazzystones.ca'
                        cardSubtitle='SnazzyStones website'
                        projectPageLink='projects/SnazzyStonesWebsite'
                        liveLink='https://snazzystones.ca'
                        sourceLink='https://github.com/MarshallRuse/SnazzyStones-Next'
                        stackIcons={[
                            { class: "react", icon: "/svgs/logos/react.svg" },
                            { class: "materialui", icon: "/svgs/logos/material-ui.svg" },
                            { class: "nextjs", icon: "/svgs/logos/nextjs.svg" },
                            { class: "tailwindcss", icon: "/svgs/logos/tailwindcss.svg" },
                        ]}
                    />
                </div>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='SnazzyStock/snazzyStockCardImage'
                        cardImageAltText='Card image for Snazzy Stock app'
                        cardTitle='Snazzy Stock'
                        cardSubtitle='SnazzyStones inventory management system'
                        projectPageLink='projects/SnazzyStock'
                        sourceLink=''
                        stackIcons={[
                            { class: "react", icon: "/svgs/logos/react.svg" },
                            { class: "typescript", icon: "/svgs/logos/typescript.svg" },
                            { class: "materialui", icon: "/svgs/logos/material-ui.svg" },
                            { class: "express", icon: "/svgs/logos/express.svg" },
                            { class: "nodejs", icon: "/svgs/logos/nodejs.svg" },
                            { class: "mysql", icon: "/svgs/logos/mysql.svg" },
                        ]}
                    />
                </div>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='RotationCoordinatorReportFormatter/teamOfDoctors'
                        cardImageAltText='Card image for Rotation Coordinator Report Formatter app'
                        cardTitle='Rotation Coordinator Report Formatter'
                        cardTitleStyling={{ fontSize: "28px" }}
                        cardSubtitle='Group and filter rotation residents'
                        cardSubtitleStyling={{ fontSize: "22px" }}
                        projectPageLink='projects/RotationCoordinatorReportFormatter'
                        liveLink='https://rotation-coordinator-report-formatter.netlify.app'
                        sourceLink='https://github.com/MarshallRuse/rotation-coordinator-data-formatter'
                        stackIcons={[
                            { class: "react", icon: "/svgs/logos/react.svg" },
                            { class: "materialui", icon: "/svgs/logos/material-ui.svg" },
                        ]}
                    />
                </div>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='ORBS-Redesign/scheduling'
                        cardImageAltText='Card image for the ORBS redesign project'
                        cardTitle='ORBS Redesign'
                        cardTitleStyling={{ fontSize: "28px" }}
                        cardSubtitle='New look for an institutional app'
                        cardSubtitleStyling={{ fontSize: "22px" }}
                        projectPageLink='projects/ORBSRedesign'
                        liveLink='https://orbs.utoronto.ca'
                        stackIcons={[
                            { class: "html5", icon: "/svgs/logos/html5.svg" },
                            { class: "css3", icon: "/svgs/logos/css3.svg" },
                            { class: "bootstrap", icon: "/svgs/logos/bootstrap.svg" },
                        ]}
                    />
                </div>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='Home/girl-barbell-curls'
                        cardImageAltText='Card image for Workout Logger app'
                        cardTitle='Workout Logger'
                        cardSubtitle='Record reps, sets, and weights'
                        projectPageLink='projects/WorkoutLogger'
                        demoLink='https://marshalls-workout-logger.herokuapp.com/'
                        sourceLink='https://github.com/MarshallRuse/workout-logger'
                        stackIcons={[
                            { class: "react", icon: "/svgs/logos/react.svg" },
                            { class: "nodejs", icon: "/svgs/logos/nodejs.svg" },
                            { class: "express", icon: "/svgs/logos/express.svg" },
                            { class: "firebase", icon: "/svgs/logos/firebase.svg" },
                        ]}
                    />
                </div>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='Home/cityscape-girl-night'
                        cardImageAltText='Card image for Trip Tracker app'
                        cardTitle='Trip Tracker'
                        cardSubtitle='Track expenses in 30 currencies'
                        projectPageLink='projects/TripTracker'
                        demoLink='https://marshall-trip-tracker-app.herokuapp.com/'
                        sourceLink='https://github.com/MarshallRuse/TripExpensesTracker'
                        stackIcons={[
                            { class: "react", icon: "/svgs/logos/react.svg" },
                            { class: "materialui", icon: "/svgs/logos/material-ui.svg" },
                            { class: "express", icon: "/svgs/logos/express.svg" },
                            { class: "nodejs", icon: "/svgs/logos/nodejs.svg" },
                            { class: "mongodb", icon: "/svgs/logos/mongodb.svg" },
                        ]}
                    />
                </div>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='Home/bingo'
                        cardImageAltText='Card image for Bingo Party app'
                        cardTitle='Bingo Party'
                        cardSubtitle='Bingo in a browser'
                        projectPageLink='/projects/BingoParty'
                        demoLink='https://marshall-bingo-party-app.herokuapp.com/'
                        sourceLink='https://github.com/MarshallRuse/Bingo-App-React'
                        stackIcons={[
                            { class: "react", icon: "/svgs/logos/react.svg" },
                            { class: "redux", icon: "/svgs/logos/redux.svg" },
                            { class: "express", icon: "/svgs/logos/express.svg" },
                            { class: "nodejs", icon: "/svgs/logos/nodejs.svg" },
                            { class: "mongodb", icon: "/svgs/logos/mongodb.svg" },
                        ]}
                    />
                </div>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='Home/curiosity-rover-mars'
                        cardImageAltText='Card image for Rover Follower app'
                        cardTitle='Rover Follower'
                        cardSubtitle='Automated convoy of simulated Mars rovers'
                        projectPageLink='/projects/RoverFollower'
                        demoLink='https://youtu.be/mospnG-yyUk'
                        sourceLink='https://github.com/MarshallRuse/Rover-Follower-Challenge'
                        stackIcons={[
                            { class: "python", icon: "/svgs/logos/python.svg" },
                            { class: "numpy", icon: "/svgs/logos/numpy.svg" },
                            { class: "matplotlib", icon: "/svgs/logos/matplotlib.svg" },
                            { class: "java", icon: "/svgs/logos/java.svg" },
                        ]}
                    />
                </div>
                <div className={`flexItem ${styles.projectBox}`}>
                    <ProjectCard
                        cardImage='Home/PersonalWebsitePortrait'
                        cardImageAltText='Card image for marshallruse.com website'
                        cardTitle='marshallruse.com'
                        cardTitleStyling={{ fontSize: "32px" }}
                        cardSubtitle='This website!'
                        projectPageLink='/projects/ThisWebsite'
                        sourceLink='https://github.com/MarshallRuse/Personal-Website'
                        stackIcons={[
                            { class: "react", icon: "/svgs/logos/react.svg" },
                            { class: "nextjs", icon: "/svgs/logos/nextjs.svg" },
                            { class: "sass", icon: "/svgs/logos/sass.svg" },
                        ]}
                    />
                </div>
            </div>
        </div>
    </section>
);

export default ProjectsSection;
