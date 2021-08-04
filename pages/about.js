import CountSection from "../components/AboutPageComponents/CountSection"
import ExecutiveManagementSection from "../components/AboutPageComponents/ExecutiveManagementSection"
import HeroSection from "../components/AboutPageComponents/HeroSection"
import MissionSection from "../components/AboutPageComponents/MissionSection"
import TeamSection from "../components/AboutPageComponents/TeamSection"
import TechnologySection from "../components/AboutPageComponents/TechnologySection"
import Head from 'next/head'

const About = () => {
    return (
        <>
        <Head>
        <script defer src="assets/vendor/purecounter/purecounter.js"></script>
        </Head>
        <main id="main">
            <HeroSection/>
            <MissionSection/>
            <CountSection/>
            <TechnologySection/>
            <ExecutiveManagementSection/>
            <TeamSection/>
        </main>
        </>
    )
}

export default About
