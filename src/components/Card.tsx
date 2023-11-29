const Card: React.FC<{ name: string, src: string, alt: string }> = ({
  name,
  src,
  alt
}) => {
  return (
    <>
      <div className='card'>
        <h3>{name}</h3>
        <img src={src} alt={alt} className="card-img"/>
      </div>
    </>
  )
}

export default Card
