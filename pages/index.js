import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = () => {
  return (
    <Layout>
      <Seo title="Ryo Yanagimoto" description="Ryo Yanagimotoのポートフォリオサイトです" />
      <div className='hero'>
        <Image src="/images/sky.jpg" alt="hero" fill quality={90} priority />
        <div className='textContainer'>
          <h1>I'm Ryo Yanagimoto</h1>
          {/* <h3>JavaScript Developer</h3> */}
        </div>
      </div>
      <div className='container'>
        <div className='profile'>
          <div>
            <h2>JavaScript</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='image-container'>
            <Image src="/images/profile.jpg" alt="here" fill size="(max-width:800px) 100vw" quality={90} priority />
          </div>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <div className='skillsContainer'>
            <div><img src="/images/html-5.svg" alt="html5"/><span>HTML5</span></div>
            <div><img src="/images/css-3.svg" alt="css3"/><span>CSS3</span></div>
            <div><img src="/images/javascript.svg" alt="javascript"/><span>JavaScript</span></div>
            <div><img src="/images/react.svg" alt="react"/><span>React</span></div>
            <div><img src="/images/next.svg" alt="next"/><span>Next.js</span></div>
            <div><img src="/images/nodejs-icon.svg" alt="nodejs"/><span>Node.js</span></div>
            <div><img src="/images/express.svg" alt="express"/><span>Express</span></div>
            <div><img src="/images/python.svg" alt="python"/><span>Python</span></div>
            <div><img src="/images/c-plusplus.svg" alt="c++"/><span>C++</span></div>
            <div><img src="/images/java.svg" alt="java"/><span>Java</span></div>
            <div><img src="/images/mongodb-icon.svg" alt="MongoDB"/><span>MongoDB</span></div>
            <div><img src="/images/firebase.svg" alt="Firebase"/><span>Firebase</span></div>
          </div>
        </div>
        <div className='ctaButton'>
          <Link href="/contact">Make It Happen!</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index