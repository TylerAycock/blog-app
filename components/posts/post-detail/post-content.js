import classes from './post-content.module.css'
import PostHeadeader from './post-header'
import ReactMarkDown from 'react-markdown'

const Dummy_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2023-12-05',
    content: '# This is a first post'
}

export default function PostContent() {
    const imagePath = `/images/posts/${Dummy_POST.slug}/${Dummy_POST.image}`
    return (
        <article className={classes.content}>
            <PostHeadeader title={Dummy_POST.title} image={imagePath} />
            <ReactMarkDown>
                {Dummy_POST.content}
            </ReactMarkDown>
        </article>
    )
}