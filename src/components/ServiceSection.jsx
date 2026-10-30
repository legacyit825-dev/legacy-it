import useScrollAnimation from "../hooks/useScrollAnimation";

const ServiceSection = ({ title, content, image, reverse = false }) => {
  const textAnim = useScrollAnimation();
  const imgAnim = useScrollAnimation();

  const textDir = reverse ? "anim-fade-right" : "anim-fade-left";
  const imgDir = reverse ? "anim-fade-left" : "anim-fade-right";

  return (
    <section className="my-20">
      <div
        className={`
          mx-6 md:mx-10
          flex flex-col md:flex-row
          group overflow-hidden
          justify-center
          gap-8
          ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >
        {/* Text */}
        <div
          ref={textAnim.ref}
          className={`w-full md:w-1/2 flex flex-col justify-center anim-hidden ${textDir} ${textAnim.inView ? "anim-visible" : ""}`}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-left md:text-center mb-4">
            {title}
          </h1>
          <p className="text-justify md:text-center text-gray-600">{content}</p>
        </div>

        {/* Image */}
        <div
          ref={imgAnim.ref}
          className={`w-full md:w-[400px] md:h-[400px] overflow-hidden rounded-lg anim-hidden ${imgDir} anim-delay-200 ${imgAnim.inView ? "anim-visible" : ""}`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
