import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div className={styles.container}>
      <Head>
          <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css" rel="stylesheet" />
        <title>The WORD of GOD: "Risen"</title>
        <meta name="description" content="The WORD of GOD Risen, A bible application for prayer meditation and reading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
     
      <main className={styles.main}>
        <div className={styles.hero}>
           <h2 className={styles.word}>THE WORD</h2>
                <h1 className={styles.holy}>
                   OF GOD
                </h1>
       
             <p className={styles.risen}>
               
                    RISEN
             </p>
                         
                              <div  className={styles.image}>
                     <a href="#">
                               <Image 
                                src="/Jesus-color-silhouette-low-poly-pattern.svg"
                                alt="Jason Illustrated and praising"
                                height={900}
                                width={2000}
                                priority
                              />
                     </a>
                
                       </div>     


 </div>               
  
                      <div className={styles.nav}>           
        <a href="#testimony">
           <Image
                                src="/testify.png"
                                alt="testimonials button"
                                height={75}
                                width={75}
                                priority
                              />
       </a>
         
                  
         <a href="https://www.youtube.com/channel/UCC4jNk2Tms-KNO1h1YOjfRw">
           <Image
                                src="/youtube-logo-png-hd-21.png"
                                alt="youtube-icon"
                                height={75}
                                width={75}
                                priority
                              />
       </a>
          
         
     
         <a href="https://www.youtube.com/channel/UCC4jNk2Tms-KNO1h1YOjfRw">
             <Image className={styles.youtubeicon}
                                src="/youtube_logo_dark.webp"
                                alt="youtube icon"
                                height={75}
                                width={75}
                                priority
                              />
       </a>           
         
               </div>
        <div className={styles.iframe}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/xrzq_X1NNaA" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>                  
        <p className={styles.new}>
                       &darr; SCROLL DOWN &darr;       
                    </p> 
<a href="https://first-thessalonians.vercel.app/">
                     <p className={styles.parables}>
                         THE REVELATION  
                    </p>
               </a>   

<a href="https://jesusparables.vercel.app/">
                     <p className={styles.parables}>
                         PARABLES   
                    </p>
               </a>   

                          <a href="https://mypsalms.vercel.app/">
                     <p className={styles.parables}>
                         PSALMS  
                    </p>
               </a>   
  <a href="https://myproverbs.vercel.app/">
                     <p className={styles.parables}>
                         PROVERBS
                       </p>
               </a>   
 <a href="https://second-thessalonians.vercel.app/ ">
                     <p className={styles.parables}>
                         RECEIVING CHRIST
                       </p>
               </a> 
                   <p className={styles.new}>
                         THE NEW TESTAMENT NIV       
                    </p>
              
          
                         <p className={styles.fund}>"the people living in darkness have seen a great light; on those living in the land of the shadow of death a light has dawned. (Matthew 4:16)</p> 
  
                    <ul id="index" className={styles.index}>
                         
                      <a href="https://matthew-coral.vercel.app/" target="_blank">  
                          <li className={styles.li}>The gospel of Matthew</li>  
                      </a>
                      <a href="https://mark-alpha.vercel.app/" target="_blank">  
                           <li className={styles.li}>The gospel of Mark</li> 
                      </a>
                      <a href="https://luke-three.vercel.app/" target="_blank">  
                            <li className={styles.li}>The gospel of Luke</li> 
                       </a>
                       <a href="https://john-zeta.vercel.app/" target="_blank">  
                           <li className={styles.li}>The gospel of John</li> 
                       </a>
                       <a href="https://acts-zeta.vercel.app/" target="_blank">  
                           <li className={styles.li}>Acts of the Apostles</li> 
                       </a>
                       <a href="https://romans-five.vercel.app/" target="_blank">
                            <li className={styles.li}>Letter of Paul to the Romans</li>  
                        </a>
                        <a href="https://first-corinthians.vercel.app/" target="_blank">
                           <li className={styles.li}>I Corinthians</li>  
                        </a>
                        <a href="https://second-corinthians.vercel.app/" target="_blank">
                            <li className={styles.li}>II Corinthians</li> 
                        </a>
                        <a href="https://galatians.vercel.app/" target="_blank">
                           <li className={styles.li}>Letter of Paul to the Galatians</li>  
                        </a>
                        <a href="https://ephesians.vercel.app/" target="_blank">
                           <li className={styles.li}>Letter of Paul to the Ephesians</li>  
                        </a>
                      
                        <a href="https://phillipians.vercel.app/" target="_blank">
                               <li className={styles.li}>Letter of Paul to the Philippians</li>  
                        </a>
                         
                        <a href="https://colossians.vercel.app/" target="_blank">
                            <li className={styles.li}>Letter of Paul to the Colossians</li>  
                        </a>
                        <a href="https://first-thessalonians.vercel.app/" target="_blank">
                           <li className={styles.li}>I Thessalonians</li> 
                        </a>
                        <a href="https://second-thessalonians.vercel.app/" target="_blank">
                           <li className={styles.li}>II Thessalonians</li>  
                        </a>
                        <a href="https://first-timothy.vercel.app/" target="_blank">
                             <li className={styles.li}>I Timothy</li>  
                        </a>
                        <a href="https://second-timothy.vercel.app/" target="_blank">
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
                        <div className={styles.aside}>
                          <h2 id="testimony" className={styles.testimony}>
                            My Testimony:
                          </h2>
                          <p className={styles.paragraph}>
                          As it is written: "Then I heard a loud voice in heaven say: 'Now have come the salvation and the power and the kingdom of our God, and the authority of his Messiah. For the accuser of our brothers and sisters, who accuses them before our God day and night, has been hurled down. They triumphed over him by the blood of the Lamb and by the word of their testimony;"
                          </p>
                          <p className={styles.paragraph}>
                            My name is Jason Nutt. I am an alcoholic. I was once a liar, one who easily becomes self-centered. A former rehab frequent flyer. A disappointment
                            as a son, brother, father and friend. A real know it all. A denier of defects of character. An isolater. And even a thief. 
                            Having been born again by the Holy Spirit, I have now been made a priest forever, in the order of Melchizedek. I have been made holy by the blood of the lamb of God. Set aside for His good purpose. 3 years ago, I started learning to code and build apps and websites. Today, I have been empowered to create a fully functional bible reading application. You can follow the build on this Youtube channel if you want... 
                             <a className={styles.a} href="https://www.youtube.com/channel/UCC4jNk2Tms-KNO1h1YOjfRw" target="_blank">
                           The WORD of GOD: "Risen"
                             </a>
                            The Old testament is being worked on already too! Hallelujah! Please follow the journey and become a member if you want. If NOT simply use the bible app at no cost whatsoever. Praise God.  
                          </p>  
                          <p className={styles.paragraph}>
                            I once was lost in the sorrows of alcohlism, self-pity, defeat, worry, depression, PTSD, suicidal thoughts and all kinds of other spiritual attacks. I now am found by the grace of Jesus and the truth about His life, death and ressurection, and have been saved by the power of God's Holy Spirit and reborn in Christ everlasting love .   
                          </p>  
                         <div  className={styles.image}>
       <Image 
                                src="/workshop.png"
                                alt="the Last supper"
                                 height={900}
                                width={2000}
                                priority
                              />
           </div>

        <p className={styles.description}> 
        <code className={styles.publisher}>
        Coded, Published & Deployed by His servant: Jason Daniel Nutt 
        </code>
 <a href="https://gofund.me/a2b590af" target="_blank">  
                          <p className={styles.fund}>Help Fund This Bible</p>  
                      </a>
        </p>
        


<iframe width="100%" height="175" src="https://www.youtube.com/embed/zr54VtQNbgg?autoplay=1&mute=1" title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                   
<p className={styles.glory}>"All glory to GOD, who is able, through His mighty power at work within us, to accomplish infinitely more than we ask or imagine"  Ephesians 3:20</p> 


               <p className={styles.hide}> understanding proverbs and parables,
    the sayings and riddles of the wise.</p>
                          </div>
          
                
            </main>
    </div>

  )
}
