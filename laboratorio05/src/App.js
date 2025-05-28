import React from 'react';
import Card from './components/Card';
import Container from './components/Container';
import './App.css';

function App() {
  const products = [
    {
      id: 1,
      title: 'Laptop Gamer',
      description: 'Potente laptop para gaming con RTX 3080',
      imageUrl: 'https://via.placeholder.com/300x200?text=Laptop'
    },
    {
      id: 2,
      title: 'Smartphone Pro',
      description: 'Último modelo con cámara de 108MP',
      imageUrl: 'https://via.placeholder.com/300x200?text=Smartphone'
    },
    {
      id: 3,
      title: 'Smartwatch',
      description: 'Monitoriza tu actividad física'
    }
  ];

  return (
    <div className="app">
      <h1>Tienda de Productos</h1>
      
      <Container borderColor="#4CAF50">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          {products.map(product => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
            >
              <button className="product-button">Ver Detalles</button>
              <button className="product-button">Añadir al Carrito</button>
            </Card>
          ))}
        </div>
      </Container>
      
      <Container borderColor="#2196F3">
        <h2>Ofertas Especiales</h2>
        <Card
          title="Oferta del Día"
          description="Descuento del 30% en todos los accesorios"
        >
          <span className="offer-tag">¡LIMITADO!</span>
        </Card>
      </Container>
    </div>
  );
}

export default App;
