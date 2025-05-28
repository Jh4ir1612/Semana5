import React from 'react';
import 'components/Container.css'; // Assuming you have a CSS file for styles

const Container = ({ children, borderColor = '#ccc' }) => {
  return (
    <div className="container" style={{ borderColor }}>
      {children}
    </div>
  );
};

export default Container;