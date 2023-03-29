import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <div>
        <Image src="/images/index-hero.jpg" alt="hero" fill quality={90} priority />
        <div>
          <h1>I'm Ryo Yanagimoto</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>JavaScript</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div>
            <Image src="/images/profile.jpg" alt="here" fill size="(max-width:800px) 100vw" quality={90} priority />
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <div>
            <div><img src="/images/javascript.svg" alt="javascript"/><span>JavaScript / 10 years</span></div>
            <div><img src="/images/react.svg" alt="react"/><span>React / 5 years</span></div>
            <div><img src="/images/gatsby.svg" alt="gatsby"/><span>Gatsby / 3 years</span></div>
            <div><img src="/images/next.svg" alt="next"/><span>Next.js / 10 years</span></div>
          </div>
        </div>
        <div>
          <Link href="/contact">Make It Happen!</Link>
        </div>
      </div>
    </>
  )
}

export default Index