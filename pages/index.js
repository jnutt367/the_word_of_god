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
       
     
      <main className={styles.main}>
    
       <h2 className={styles.holy}>The Holy</h2>
                <h1 className={styles.title}>
                    <a href="https://en.wikipedia.org/wiki/Bible">Bible</a>
                </h1>
             <p className={styles.transcribed}>
                    Transcribed by: Jason Daniel Nutt
             </p>
                          <div className={styles.hero}>
                             <Image 
                                src="/gods-finger.jpg"
                                alt="Picture of the Gods finger"
                                height={900}
                                width={2000}
                                priority
                              />
                             
                         
                    <p className={styles.new}>
                         A NEW TESTAMENT        
                    </p>
                        <ul className={styles.index}>
                      <a href="https://matthew-coral.vercel.app/">  
                          <li className={styles.li}>The gospel of Matthew</li>  
                      </a>
                      <a href="https://mark-alpha.vercel.app/">  
                           <li className={styles.li}>The gospel of Mark</li> 
                      </a>
                      <a href="https://luke-three.vercel.app/">  
                            <li className={styles.li}>The gospel of Luke</li> 
                       </a>
                       <a href="https://john-zeta.vercel.app/">  
                           <li className={styles.li}>The gospel of John</li> 
                       </a>
                       <a href="https://acts-zeta.vercel.app/">  
                           <li className={styles.li}>Acts of the Apostles</li> 
                       </a>
                       <a href="https://romans-five.vercel.app/">
                            <li className={styles.li}>Letter of Paul to the Romans</li>  
                        </a>
                        <a href="https://first-corinthians.vercel.app/">
                           <li className={styles.li}>I Corinthians</li>  
                        </a>
                        <a href="https://second-corinthians.vercel.app/">
                            <li className={styles.li}>II Corinthians</li> 
                        </a>
                        <a href="https://galatians.vercel.app/">
                           <li className={styles.li}>Letter of Paul to the Galatians</li>  
                        </a>
                        <a href="https://ephesians.vercel.app/">
                           <li className={styles.li}>Letter of Paul to the Ephesians</li>  
                        </a>
                      
                        <a href="https://phillipians.vercel.app/">
                               <li className={styles.li}>Letter of Paul to the Philippians</li>  
                        </a>
                         
                        <a href="https://colossians.vercel.app/">
                            <li className={styles.li}>Letter of Paul to the Colossians</li>  
                        </a>
                        <a href="https://first-thessalonians.vercel.app/">
                           <li className={styles.li}>I Thessalonians</li> 
                        </a>
                        <a href="https://second-thessalonians.vercel.app/">
                           <li className={styles.li}>II Thessalonians</li>  
                        </a>
                        <a href="https://first-timothy.vercel.app/">
                             <li className={styles.li}>I Timothy</li>  
                        </a>
                        <a href="https://second-timothy.vercel.app/">
                           <li className={styles.li}>II Timothy</li> 
                        </a>
                     
                            <li className={styles.li}>Letter of Paul to Titus</li>  
                           <li className={styles.li}>Letter of Paul to Philemon</li>  
                           <li className={styles.li}>Letter to the Hebrews</li>  


                               <li className={styles.li}>Letter of James</li>  
                           <li className={styles.li}>I Peter</li>  
                            <li className={styles.li}>II Peter</li>  
                           <li className={styles.li}>I John</li>  
                           <li className={styles.li}>II John</li>  
                           
                           <li className={styles.li}>III John</li>  
                           <li className={styles.li}>Letter of Jude</li>  
                            <li className={styles.li}>The Revelation to John</li>  
                         
                           
                        </ul>
                    </div>
                    
    
      </main>

    </div>
  )
}
