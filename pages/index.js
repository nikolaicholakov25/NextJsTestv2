import { Hero } from "../sections";
import pic from '../resources/video.png'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const heroProps = {
  image: { src: pic, alt: "", width: '100%', height: "100%" },
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
};

const textProps = {
  text1: {
    title: 'Brief',
    imgClass: 'fa-solid fa-clipboard',
    text: 'Complete brief writting or simple guidance on what to include, we\'ve got you covered.'
  },
  text2: {
    title: 'Search',
    imgClass: 'fa-solid fa-magnifying-glass',
    text: 'In-depth agency search covering: criteria matching, door knocking and due dilligince vetting.'
  },
  text3: {
    title: 'Pitch',
    imgClass: 'fa-solid fa-people-group',
    text: 'Comprehensive pitch managment, including comms, diary managment and pitch hosting.'
  },
}

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} text={textProps} />
        {/** Other sections */}
      </div>
    </>
  );
}
