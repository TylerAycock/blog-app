import classes from './here.module.css'

import Image from 'next/image'

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/portrait.png' alt='portrait of Tyler' width={300} height={300}/>
            </div>
            <h1>Hi, I'm Tyler</h1>
            <p>My personal blog about web development - especially about frontend frameworks like React.</p>

        </section>
    )
}

