import Hero from "../../components/Hero"
import CategoryWrapper from "../category/CategoryWrapper"
import AboutSection from "./AboutSection"
import CompanyLogo from "./CompanyLogo"
import FeaturedSection from "./FeaturedSection"
import LatestRecipe from "./LatestRecipe"
import NewsLetter from "./NewsLetter"
import Subcription from "./Subcription"


const home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center w-full py-20">
        <Hero />
        <CategoryWrapper />
    </div>
    {/*  others components */}
    <FeaturedSection/>
    <LatestRecipe/>
    <NewsLetter/>
    <AboutSection/>
    <CompanyLogo/>
    <Subcription/>
    </div>
  )
}

export default home
