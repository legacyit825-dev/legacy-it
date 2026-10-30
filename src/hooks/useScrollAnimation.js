import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation
 * Returns a ref and a boolean `inView`.
 * Once the element enters the viewport it stays `true` (animates once).
 *
 * @param {number} threshold  – fraction of element visible before triggering (0–1)
 * @param {string} rootMargin – IntersectionObserver rootMargin string
 */
const useScrollAnimation = (threshold = 0.15, rootMargin = "0px") => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(el); // animate only once
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { ref, inView };
};

export default useScrollAnimation;
