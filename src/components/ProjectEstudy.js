export const ProjectEstudy = ({ title, subtitle, description, time, img}) => {
    return(
            <div className="project-container">
                <div>
                    <h4 className="title-project-diploma">{title}</h4>
                    {img && <img src={img} className="img-project"/>}
                    <h5 className="project-title-curso">{subtitle}</h5>
                    <span className="p-project-text">{description}</span>
                    <span className="p-project-date">{time}</span>
                </div>
            </div>
    )
}