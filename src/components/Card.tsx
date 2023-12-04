import externalLink from "./../assets/external_link_icon.svg"

type CardProps = {
  src: string
  alt: string
  linkGithub?: string
  linkSite?: string
}

const Card = ({ src, alt, linkGithub, linkSite }: CardProps) => {
  return (
    <>
      <div className={`card' ${linkGithub || linkSite ? 'card-effect': 'card'}`}>
        <img loading="lazy" src={src} alt={alt} className='card-img' />
        <div>
          {linkGithub && (
            <a href={linkGithub} className='link-toggle' target="blank">
              GitHub <img  src={externalLink} alt="external link icon" className="link-icon"/>
            </a>
          )}
          {linkSite && (
            <a href={linkSite} className='link-toggle' target="blank">
              Demo <img src={externalLink} alt="external link icon" className="link-icon"/>
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default Card
