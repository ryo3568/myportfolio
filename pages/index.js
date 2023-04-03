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
            <h1>ABOUT ME</h1>
            <p>鹿児島県出身の大学院生。大学では機械学習、特に対話システムの研究をしています。フルスタックエンジニアになるために勉強中。AI、ブロックチェーン、量子コンピュータが好き。</p>
          </div>
          <div className='image-container'>
            <Image src="/images/profile.jpg" alt="here" fill size="(max-width:800px) 100vw" quality={90} priority />
          </div>
        </div>
        <div className='profile'>
          <div className='image-container'>
            <Image src="/images/hat.jpg" alt="here" fill size="(max-width:800px) 100vw" quality={90} priority />
          </div>
          <div>
            <h2>EDUCATION</h2>
            <h3>2022-, 大阪大学院</h3>
            <p>工学研究科電気電子情報通信工学専攻</p>
            <p>駒谷研究室</p>
            <br/>
            <h3>2018-2022, 同志社大学</h3>
            <p>理工学部インテリジェント情報工学科</p>
            <p>渡部研究室</p>
          </div>
        </div>
        <div className='profile'>
          <div>
            <h2>QUALIFICATIONS</h2>
            <p>2019.5, ITパスポート</p>
            <p>2020.3, G検定 2020#1</p>
            <p>2020.5, Python3エンジニア認定試験</p>
            <p>2020.7, 統計検定 2級</p>
            <p>2020.8, Python3エンジニア認定データ分析試験</p>
            <p>2021.3, TOEIC L&R 930</p>
            <p>2021.12, 基本情報技術者試験</p>
            <p>2022.6, 応用情報技術者試験</p>
          </div>
          <div className='image-container'>
            <Image src="/images/cat.jpg" alt="here" fill size="(max-width:800px) 100vw" quality={90} priority />
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
      </div>
    </Layout>
  )
}

export default Index