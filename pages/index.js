import FeaturedPosts from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"

const Dummy_Posts = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the react framework for production, it makes building full stack React apps and sites a breeze and ships with built in SSR',
        date: '2023-12-05',
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the react framework for production, it makes building full stack React apps and sites a breeze and ships with built in SSR',
        date: '2023-12-05',
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the react framework for production, it makes building full stack React apps and sites a breeze and ships with built in SSR',
        date: '2023-12-05',
    },
    {
        slug: 'getting-started-with-nextjs4',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the react framework for production, it makes building full stack React apps and sites a breeze and ships with built in SSR',
        date: '2023-12-05',
    }
]

function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={Dummy_Posts} />
        </>
    )
}

export default HomePage