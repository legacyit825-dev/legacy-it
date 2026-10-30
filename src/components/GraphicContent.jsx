import React from 'react'
import AboutInfos from './AboutInfos'
import { useTranslation } from 'react-i18next'
import graphic from '../assets/graphic2.jpg'
import useScrollAnimation from '../hooks/useScrollAnimation'

const delays = ["anim-delay-100", "anim-delay-300", "anim-delay-500"];

const GraphicContent = () => {
  const { t } = useTranslation()
  const headingAnim = useScrollAnimation();
  return (
    <>
      <section className='py-20 bg-[#f9f9f9]'>
        <AboutInfos
          title={t("graphic.title")}
          content={t("graphic.desc")}
          image={graphic}
        />

        <div className="max-w-6xl mx-auto px-4">
          <h1
            ref={headingAnim.ref}
            className={`text-3xl font-semibold text-center my-12 anim-hidden anim-fade-up ${headingAnim.inView ? "anim-visible" : ""}`}
          >
            {t("graphic.we")}
          </h1>

          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              { title: t("graphic.title1"), desc: t("graphic.desc1") },
              { title: t("graphic.title2"), desc: t("graphic.desc2") },
              { title: t("graphic.title3"), desc: t("graphic.desc3") },
            ].map((item, i) => (
              <FeatureCard key={i} title={item.title} desc={item.desc} delay={delays[i]} />
            ))}
          </div>


        </div>
      </section>

    </>
  )
}

const FeatureCard = ({ title, desc, delay }) => {
  const { ref, inView } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`
        group relative overflow-hidden border border-gray-200
        shadow-xl rounded-lg p-6 transition-all duration-500 shadow-2xl
        anim-hidden anim-fade-up ${delay} ${inView ? "anim-visible" : ""}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-gray-600 opacity-0 -translate-y-full transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0" />
      <h3 className="relative text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-white">{title}</h3>
      <p className="relative text-gray-600 group-hover:text-white transition-colors duration-300">{desc}</p>
    </div>
  );
};

export default GraphicContent