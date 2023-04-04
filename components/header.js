import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='flexContainer'>
                    <Link href="/">
                        <Image src="/images/logo.jpg" alt="logo" width={60} height={60} />
                    </Link>
                    <ul>
                        <li><Link href="/blog">Works</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header