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
              <a href="https://index-olive-two.vercel.app/">
                  <li>
                    Index
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
    
       <h2 className={styles.holy}>The Holy</h2>
        <h1 className={styles.title}>
            <a href="https://en.wikipedia.org/wiki/Bible">Bible</a>
        </h1>
   
        <div className={styles.flex}>
        <button className={styles.code}>
                    <a   href="https://index-olive-two.vercel.app/">
                          INDEX
                          </a>
                      </button>

          <a className={styles.code} href="https://www.linkedin.com/in/jnuttlovedisciple/">PUBLISHER</a>
                     
                     
                      
                  </div>
        <p className={styles.description}>
          
          <code className={styles.publisher}>&darr; Scroll &darr;</code>
        </p>

        <p className={styles.h2}>
        <span className={styles.span}> &darr; Romans 1:16 &rarr; </span>
          For I am not ashamed of the  gospel, because it is the power
          of God that brings salvation to everyone who believes. First the Jew & then the Gentile
        </p>
       
   

       <ul className={styles.ul}>
       <li className={styles.li}>
         <a href="https://acts-zeta.vercel.app">
          
          <code className={styles.books}>Acts</code></a> 
          </li>
        
       <li  className={styles.li}>
       <a href="https://romans-five.vercel.app/">
       <code className={styles.books}>Romans</code>
  </a>
  </li>
       
         <li  className={styles.li}>
         <a href="https://proverbs.vercel.app/">
         <code className={styles.books}>Proverbs</code>
         
         </a>  
         </li>
         </ul>
        <code className={styles.holy}> THE TRUE LIGHT WHO GIVES LIGHT TO EVERY MAN WAS COMING INTO THE WORLD. </code>
      
        
        <div className={styles.grid}>
        <a href="https://matthew-coral.vercel.app/" className={styles.card}>
            <h2>Matthew &darr;</h2>
            <p>Matthew is the most Jewish-centric of the four gospels. The apostle regularly invoked the writings of the Old Testament prophets...</p>
          </a>
          <a href="https://mark-alpha.vercel.app/" className={styles.card}>
        
            <h2>Mark &darr;</h2>
            <p>The book of Mark, which stresses facts & actions, rather than themes or topics, is the most exciting account of the life of Christ among the Gospels. </p>
           
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

          <a
            href="https://john-zeta.vercel.app/"
            className={styles.card}
          >
            <h2>John &darr;</h2>
            <p>An eyewitness account of Jesus ministry, enriched by the authors understanding of Jewish traditions & knowledge of Palestine.</p>
          </a>
        
        </div>
       
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
