import React from 'react'
import { notFound } from 'next/navigation'
import { PAGE_MAP } from '@/utils/pageMap'

const pageController = async ({ params }) => {
    const { category, slug } = params

    if (!PAGE_MAP[category] || !PAGE_MAP[category].subPages[slug]) {
        notFound()
    }

}

const DynamicPage = async ({ params }) => {
    const { category, slug } = params
    await pageController({ params })

    const PAGE_COMPONENT = await import(`@/pageComponents/${PAGE_MAP[category].subPages[slug].page_component}`)
    return (
        <div>
            <h1>DynamicPage</h1>
            <p>{JSON.stringify(params)}</p>
            <PAGE_COMPONENT.default />
        </div>
    )
}

export default DynamicPage