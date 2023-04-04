
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className='insideContainer'>
                <a href="https://github.com/ryo3568"><img src="/images/github.jpg" alt="logo"/></a>
                <a href="https://twitter.com/ryoyanagi314"><img src="/images/twitter.jpg" alt="logo"/></a>
                <a href="https://www.facebook.com/profile.php?id=100089916095333"><img src="/images/facebook.jpg" alt="logo"/></a>
                <hr/>
                <Link href="/blog">Works</Link>
                <Link href="/contact">Contact</Link>
                <p>©{new Date().getFullYear()} Ryo Yanagimoto</p>
            </div>
        </footer>
    )
}

export default Footer