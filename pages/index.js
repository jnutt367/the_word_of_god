import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Holy Bible</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>
          <nav className={styles.nav}>
              <ul>
              <a href="https://mark-alpha.vercel.app/">
                  <li>
                    Mark
                  </li>
                </a>
                <a href="https://matthew-coral.vercel.app/">
                  <li>
                    Matthew
                  </li>
                </a>
               
                <a href="https://luke-three.vercel.app/">
                <li>
                  Luke
                </li>
                </a>
                <a href="https://john-zeta.vercel.app/">
                <li>
                  John
                </li>
                </a>
              </ul>

          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          The Holy  <a href="https://en.wikipedia.org/wiki/Bible">Bible</a>
        </h1>
        <a href="https://freesvg.org/drawing-of-word-jesus-written-in-shape-of-fish">
        <Image className={styles.card1}
          src="/Jesus-color-silhouette-low-poly-pattern.svg"
          alt="new testament illustration"
          layout="intrinsic"
          height="300px"
          width="300px"
        />
        </a>

       <h2 className={styles.links}>A New Testament: The 4 Gospels</h2>
       <a href="https://proverbs.vercel.app/">
       <h2 className={styles.links}>Proverbs: Insight into Parables & the Sayings & Riddles of the Wise</h2>
       </a>
     

     
       
        <code className={styles.code}> THE TRUE LIGHT WHO GIVES LIGHT TO EVERY MAN WAS COMING INTO THE WORLD. </code>
        <a href="https://freesvg.org/drawing-of-word-jesus-written-in-shape-of-fish">
        <Image className={styles.card1}
          src="/Jesus-Fish-Custom.svg"
          alt="new testament illustration"
          layout="intrinsic"
          height="300px"
          width="300px"
        />
        </a>
        
        <div className={styles.grid}>
      
          <a href="https://mark-alpha.vercel.app/" className={styles.card}>
            <h2>Mark &darr;</h2>
            <p>The book of Mark, which stresses facts & actions, rather than themes or topics, is the most exciting account of the life of Christ among the Gospels. </p>
          </a>
        
          <a href="https://matthew-coral.vercel.app/" className={styles.card}>
            <h2>Matthew &darr;</h2>
            <p>Matthew is the most Jewish-centric of the four gospels. The apostle regularly invoked the writings of the Old Testament prophets...</p>
          </a>
         
          <a
            href="https://john-zeta.vercel.app/"
            className={styles.card}
          >
            <h2>John &darr;</h2>
            <p>An eyewitness account of Jesus ministry, enriched by the authors understanding of Jewish traditions & knowledge of Palestine.</p>
          </a>
        
        
          <a
            href="https://luke-three.vercel.app/"
            className={styles.card}
          >
            <h2>Luke &darr;</h2>
            <p>
            Lukes account of Jesus ministry divides into 3 parts:
            events that occurred in & around Galilee, 
             in Judea & Perea
            & his final week in Jerusalem 
            </p>
          </a>
        </div>
        <a href="https://freesvg.org/drawing-of-word-jesus-written-in-shape-of-fish">
        <Image className={styles.card1}
          src="/Jesus-Fish-Custom.svg"
          alt="new testament illustration"
          layout="intrinsic"
          height="300px"
          width="300px"
        />
        </a>
        <p className={styles.description}> 
        <code className={styles.publisher}>
        Coded, Published & Deployed by His servant: Jason Daniel Nutt 
        </code>
        </p>
      </main>

      <footer className={styles.footer}>
  
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
