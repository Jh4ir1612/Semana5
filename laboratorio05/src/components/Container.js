const Container = ({ children, borderColor = '#ccc' }) => {
return (
    <div className="container" style={{ borderColor }}>
    {children}
    </div>
);
};

export default Container;