import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function splitStacks(stacks = '') {
  return stacks
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

export default function ProjectCard({ project, index, imageFallback }) {
  const cardRef = useRef(null)
  const textRef = useRef(null)
  const mediaRef = useRef(null)
  const headlineRef = useRef(null)
  const imageRef = useRef(null)
  const buttonRefs = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -36,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 82%',
        },
      })

      gsap.from(mediaRef.current, {
        x: 36,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 82%',
        },
      })

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, filter: 'blur(4px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 84%',
          },
        },
      )

    }, cardRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const stackTags = splitStacks(project.stacks)

  return (
    <article ref={cardRef} className="project-card stagger-item" data-project-index={index}>
      <div ref={textRef} className="project-card__text">
        <p className="project-card__kicker">{project.edition}</p>
        <h3 ref={headlineRef} className="project-card__title">
          {project.title}
        </h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__stacks" aria-label="Tech stack">
          {stackTags.map((stack) => (
            <span key={`${project.title}-${stack}`} className="project-card__tag">
              {stack}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            ref={(el) => {
              buttonRefs.current[0] = el
            }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__btn"
            style={{
              transition: "transform 150ms ease, box-shadow 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(1px, 1px)";
              e.currentTarget.style.boxShadow = "0 0 0 #111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0)";
              e.currentTarget.style.boxShadow = "0 3px 0 #111";
            }}
          >
            GitHub Link
          </a>
          <a
            ref={(el) => {
              buttonRefs.current[1] = el
            }}
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-card__btn"
            style={{
              transition: "transform 150ms ease, box-shadow 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(1px, 1px)";
              e.currentTarget.style.boxShadow = "0 0 0 #111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0)";
              e.currentTarget.style.boxShadow = "0 3px 0 #111";
            }}
          >
            Live Preview
          </a>
        </div>
      </div>

      <figure ref={mediaRef} className="project-card__media">
        <div className="project-card__media-frame">
          <img
            ref={imageRef}
            src={project.thumb || imageFallback}
            alt={project.title}
            className="project-card__image"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = imageFallback
            }}
          />
        </div>
      </figure>
    </article>
  )
}
