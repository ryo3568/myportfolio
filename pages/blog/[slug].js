import { getAllBlogs, getSingleBlog } from '@/utils/mdQueries'
import PrevNext from '@/components/prevNext'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../../components/layout"
import Seo from "../../components/seo"



const SingleBlog = (props) => {
    return (
        <Layout>
            <Seo title={props.frontmatter.title} description={props.frontmatter.excerpt} />
            <div className='img-container'>
                <Image src={props.frontmatter.image} alt="blog-image" height={500} width={1000} priority />
            </div>
            <div className='wrapper'>
                <div className='container'>
                    <a href="https://musical-brioche-39bb7b.netlify.app/"><h1>{props.frontmatter.title}<span><img className='link' src="/images/link.svg" alt="logo"/></span></h1></a>
                    <p>(*動作しない場合は数秒あけてリロードしてください)</p>
                    <p>{props.frontmatter.date}</p>
                    <div className='githubURL'>
                        <a href="https://github.com/ryo3568/TsundokuTower"><img src="/images/github.jpg" alt="logo"/></a>
                    </div>
                    <ReactMarkdown>{props.markdownBody}</ReactMarkdown>
                </div>
                <PrevNext prev={props.prev} next={props.next} />
            </div>
        </Layout>
    )
}

export default SingleBlog

export async function getStaticPaths(){
    const {orderedBlogs} = await getAllBlogs()

    const paths = orderedBlogs.map((orderedBlog) => `/blog/${orderedBlog.slug}`)
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const {singleDocument} = await getSingleBlog(context)

    const { orderedBlogs } = await getAllBlogs()
    const prev = orderedBlogs.filter(orderedBlog => orderedBlog.frontmatter.id === singleDocument.data.id - 1)
    const next = orderedBlogs.filter(orderedBlog => orderedBlog.frontmatter.id === singleDocument.data.id + 1)
    return {
        props: {
            frontmatter: singleDocument.data,
            markdownBody: singleDocument.content,
            prev: prev,
            next: next,
        }
    }
}