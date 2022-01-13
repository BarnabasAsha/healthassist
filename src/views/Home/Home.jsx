import React from "react";
import { CommonDiseases, EmergencyDiseases, Header, Hero, Section, NavBar } from "../../components";
import wockheart from "../../assets/images/wockheart.png"
import wockheartt from "../../assets/images/wockheart2.png"
import health from "../../assets/images/health-management.png"
import { ReactComponent as Ratings } from "../../assets/icons/ratings.svg" 


const hospitals = [
  {
    title: "Wockheart Hospital",
    address: "Nashik, Maharashtra, India",
    img: wockheart,
    ratings: <Ratings />
  },
  {
    title: "Wockheart Hospital",
    address: "Nashik, Maharashtra, India",
    img: wockheartt,
    ratings: <Ratings />
  },
  {
    title: "Wockheart Hospital",
    address: "Nashik, Maharashtra, India",
    img: wockheart,
    ratings: <Ratings />
  }
]

const blogs = [
  {
    title: "Ultimate guide to HealthManagement",
    date: "23/11/2021",
    img: health
  },
  {
    title: "Ultimate guide to Health Management",
    date: "23/11/2021",
    img: health
  },
  {
    title: "Ultimate guide to Health Management",
    date: "23/11/2021",
    img: health
  },
]

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <EmergencyDiseases />
      <CommonDiseases />
      <Section title="Hospitals" list={hospitals} />
      <Section title="Latest Blogs" list={blogs} />
      <div className="gutter"></div>
      <NavBar />
    </div>
  )
}

export default Home