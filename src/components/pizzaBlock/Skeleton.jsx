import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={279}
        height={466}
        viewBox="0 0 279 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="102" cy="102" r="102" />
        <rect x="0" y="217" rx="0" ry="0" width="221" height="23" />
        <rect x="0" y="252" rx="0" ry="0" width="221" height="56" />
        <rect x="1" y="320" rx="0" ry="0" width="78" height="30" />
        <rect x="114" y="321" rx="16" ry="16" width="108" height="30" />
    </ContentLoader>
)

export default Skeleton