import React from 'react'
import { useTranslation } from 'react-i18next'
import about from "../assets/about.jpg"
import AboutInfos from './AboutInfos'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import about4 from '../assets/about4.jpg'
import about5 from '../assets/about5.jpg'
import AboutCard from './AboutCard'
import useScrollAnimation from '../hooks/useScrollAnimation'

const AboutContent = () => {
  const { t } = useTranslation()
  const heroAnim = useScrollAnimation();
  const cardsHeadingAnim = useScrollAnimation();
  const cardsDescAnim = useScrollAnimation();

  return (
    <>
      <div
        className="relative w-full h-[300px] bg-center bg-cover"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          ref={heroAnim.ref}
          className={`relative z-10 flex h-full items-center justify-center text-white anim-hidden anim-fade-up ${heroAnim.inView ? "anim-visible" : ""}`}
        >
          <h1 className="text-3xl font-bold">{t("about.title")}</h1>
        </div>
      </div>

      <section className='bg-[#f9f9f9] py-20'>
        <AboutInfos
          title={t("about.whtitle")}
          content={t("about.who")}
          image={about1}
        />
        <AboutInfos
          title={t("about.whatitle")}
          content={t("about.what")}
          image={about2}
          reverse
        />
        <AboutInfos
          title={t("about.ourtitle")}
          content={t("about.our")}
          image={about3}
        />
        <AboutInfos
          title={t("about.ourvision")}
          content={t("about.vision")}
          image={about4}
          reverse
        />
        <AboutInfos
          title={t("about.ourmission")}
          content={t("about.mission")}
          image={about5}
        />

        <div className='my-10'>
          <h1
            ref={cardsHeadingAnim.ref}
            className={`text-center text-3xl md:text-4xl mb-5 anim-hidden anim-fade-up ${cardsHeadingAnim.inView ? "anim-visible" : ""}`}
          >
            {t("aboutCard.heading")}
          </h1>
          <p
            ref={cardsDescAnim.ref}
            className={`text-center text-lg anim-hidden anim-fade-up anim-delay-200 ${cardsDescAnim.inView ? "anim-visible" : ""}`}
          >
            {t("aboutCard.headDesc")}
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-5'>
          <AboutCard
            title={t("aboutCard.title1")}
            desc={t("aboutCard.desc1")}
          />
          <AboutCard
            title={t("aboutCard.title2")}
            desc={t("aboutCard.desc2")}
          />
          <AboutCard
            title={t("aboutCard.title3")}
            desc={t("aboutCard.desc3")}
          />
        </div>

      </section>

    </>
  )
}

export default AboutContent