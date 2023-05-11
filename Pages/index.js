import Head from "next/head";
import Hero from "./Hero";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Ankit Panchal | Frontend Developer | Website & App Development
          Services
        </title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/fevicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Ankit Panchal is a frontend developer specializing in ReactJS. He offers custom website and application development services, as well as UI/UX design. Contact him today for your next project!"
        />
        <meta
          name="keywords"
          content="frontend development, ReactJS, website development, application development, 
    UI/UX design, portfolio, contact, mobile development, web development, responsive design, HTML, CSS,, JavaScript, Bootstrap, Material UI, Node.js,Freelancer, Custom development, Single-page applications, Web applications, Progressive web apps, User interface design,
     Frontend frameworks, Mobile-first design, Cross-platform development, Code optimization, Git version control, Agile methodology"
        />
        <link rel="canonical" href="https://ankitpanchal.in" />
        <meta
          property="og:title"
          content="Ankit Panchal | Frontend Developer | Web & App Development"
        />
        <meta
          property="og:description"
          content="Ankit Panchal is a frontend developer specializing in ReactJS. He offers custom website and application development services,
     as well as UI/UX design. Contact him today for your next project!"
        />
        <meta
          property="og:image"
          content="https://i.im.ge/2023/04/13/LSeo8G.ankitpanchal.jpg"
        />
        <meta
          property="og:twitter"
          content="https://i.im.ge/2023/04/13/LSeo8G.ankitpanchal.jpg"
        />
        <meta property="og:url" content="https://ankitpanchal.in" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hreflang="en" href="https://ankitpanchal.in/" />
        <meta name="robots" content="index, follow" />
        <meta name="msvalidate.01" content="725246DF35D93118F1C562400C411535" />
      </Head>
      <Hero />
      <Projects />
    </div>
  );
}
