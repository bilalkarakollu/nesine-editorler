import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { PAGE_MAP } from '@/utils/pageMap'
import Slider from '@/components/Slider'

const pageController = async ({ params }) => {
    const { category, slug } = params

    if (!PAGE_MAP[category] || !PAGE_MAP[category].subPages[slug]) {
        notFound()
    }

}

const Layout = async ({ children, params }) => {
    await pageController({ params })

    const { category, slug } = params

    return (
        <div className='container bg-white h-100'>
            <div>
                <h1>EDİTÖR YORUMLARI</h1>
                <ul className="nav nav-underline px-3" style={{ background: '#28616b' }}>
                    {Object.keys(PAGE_MAP).map((page) => (
                        <li className="nav-item" key={page}>
                            <Link className={`nav-link p-3 ${page === category && 'active'} text-white`} href={`/iddia/${PAGE_MAP[page].slug}/editor-yorumlari/comments`}>
                                {PAGE_MAP[page].title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Slider />
            <ul className="nav nav-underline px-3" style={{ background: '#28616b' }}>
                {Object.keys(PAGE_MAP[category].subPages).map((subPage) => (
                    <li className="nav-item" key={subPage}>
                        <Link className={`nav-link p-3 ${subPage === slug && 'active'} text-white`} href={`/iddia/${category}/editor-yorumlari/${PAGE_MAP[category].subPages[subPage].slug}`}>
                            {PAGE_MAP[category].subPages[subPage].title}
                        </Link>
                    </li>
                ))}
            </ul>
            {children}
        </div>
    )
}

export default Layout