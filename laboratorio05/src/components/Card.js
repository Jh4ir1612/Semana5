const Card = ({ title, description, imageUrl, children }) => {
return (
    <div className="card">
    {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
    <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {children && <div className="card-actions">{children}</div>}
    </div>
    </div>
);
};

export default Card;