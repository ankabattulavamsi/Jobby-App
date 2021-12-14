import './index.css'

const SkillsCard = props => {
  const {skillDetails} = props
  const {name, imageUrl} = skillDetails

  return (
    <li className="skill-list-items">
      <div className="skill-container">
        <img src={imageUrl} alt={name} className="skill-image" />
        <p className="image-name">{name}</p>
      </div>
    </li>
  )
}

export default SkillsCard
