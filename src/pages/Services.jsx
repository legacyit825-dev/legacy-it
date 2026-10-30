import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import services from "../assets/services.jpg"
import Cards from '../components/Cards'
import graphic from "../assets/graphic1.jpg"
import web from "../assets/web1.jpg"
import digital from "../assets/digital1.jpg"
import software from "../assets/software1.jpg"
import { useTranslation } from 'react-i18next'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Services = () => {
  const { t } = useTranslation()
  const heroAnim = useScrollAnimation();
  const headingAnim = useScrollAnimation();

  return (
    <>
      <Header />

      {/* Hero banner */}
      <div
        className="relative w-full h-[300px] bg-center bg-cover"
        style={{ backgroundImage: `url(${services})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          ref={heroAnim.ref}
          className={`relative z-10 flex h-full items-center justify-center text-white anim-hidden anim-fade-up ${heroAnim.inView ? "anim-visible" : ""}`}
        >
          <h1 className="text-3xl font-bold">{t("service.title")}</h1>
        </div>
      </div>

      <section className='py-20 bg-[#f9f9f9]'>
        <h1
          ref={headingAnim.ref}
          className={`text-center mb-5 md:mb-10 text-3xl md:text-4xl anim-hidden anim-fade-up ${headingAnim.inView ? "anim-visible" : ""}`}
        >
          {t("service.desc")}
        </h1>
        <div className='flex flex-wrap gap-10 justify-center'>
          <Cards
            heading={t("service.webDevelopment")}
            url={web}
            description={t("service.webDesc")}
            button={t("service.button")}
            path={"/services/webdevelopment"}
          />
          <Cards
            heading={t("service.graphicDesign")}
            url={graphic}
            description={t("service.graphicDesc")}
            button={t("service.button")}
            path={"/services/graphicdesign"}
          />
          <Cards
            heading={t("service.digitalMarketing")}
            url={digital}
            description={t("service.digitalDesc")}
            button={t("service.button")}
            path={"/services/digitalmarketing"}
          />
          <Cards
            heading={t("service.softwareDevelopment")}
            url={software}
            description={t("service.softwareDesc")}
            button={t("service.button")}
            path={"/services/softwaredevelopment"}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Services