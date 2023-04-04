import { getAllBlogs, blogsPerPage } from '@/utils/mdQueries'
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"
import Pagination from '@/components/pagination'
import Seo from "../components/seo"

const Blog = (props) => {
    return (
        <Layout>
            <Seo title="作品集" description="これは作品集ページです" />
            <div className='wrapper'>
                <div className='container'>
                    <h1>Works</h1>
                    <p>これまで開発してきたサービス</p>
                    {props.blogs.map((blog, index) => {
                        return (
                            <div key={index} className='blogCard'>
                                <div className='cardContainer'>
                                    <h3>{blog.frontmatter.title}</h3>
                                    <p>{blog.frontmatter.excerpt}</p>
                                    <Image src="images/javascript.svg" alt="card-image" height={30} width={30} quality={90} priority />
                                    <Image src="images/react.svg" alt="card-image" height={30} width={30} quality={90} priority />
                                    <Image src="images/nodejs-icon.svg" alt="card-image" height={30} width={30} quality={90} priority />
                                    <Image src="images/express.svg" alt="card-image" height={30} width={30} quality={90} priority />
                                    <Image src="images/mongodb-icon.svg" alt="card-image" height={30} width={30} quality={90} priority />
                                    <br/>
                                    <Link href={`/blog/${blog.slug}`}>Read More</Link>
                                </div>
                                <div className='blogImg'>
                                    <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination numberPages={props.numberPages} />
            </div>
        </Layout>
    )
}

export default Blog

export async function getStaticProps(){
    const { orderedBlogs, numberPages } = await getAllBlogs()
    
    const limitedBlogs = orderedBlogs.slice(0, blogsPerPage)

    return {
        props: {
            blogs: limitedBlogs,
            numberPages: numberPages,
        },
    }
}