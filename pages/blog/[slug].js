import { getAllBlogs, getSingleBlog } from '@/utils/mdQueries'
import PrevNext from '@/components/prevNext'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import Layout from "../../components/layout"

const SingleBlog = (props) => {
    return (
        <Layout>
            <div className='img-container'>
                <Image src={props.frontmatter.image} alt="blog-image" height={500} width={1000} priority />
            </div>
            <div className='wrapper'>
                <div className='container'>
                    <h1>{props.frontmatter.title}</h1>
                    <p>{props.frontmatter.date}</p>
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