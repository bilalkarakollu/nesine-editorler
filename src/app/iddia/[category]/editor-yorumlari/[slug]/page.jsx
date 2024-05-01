import React from 'react'
import { PAGE_MAP } from '@/utils/pageMap'

const DynamicPage = async ({ params }) => {
    const { category, slug } = params

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