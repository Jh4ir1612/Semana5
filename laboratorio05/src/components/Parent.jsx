// components/Parent.jsx
import Child from "./Child";

const Parent = () => {
const userData = {
    name: "Ana Pérez",
    age: 28,
    city: "Madrid"
};

return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
    <h1>Componente Padre</h1>
    
      {/* Pasando props directos y children */}
    <Child name={userData.name} age={userData.age}>
        {/* Esto es el children */}
        <p>Esta es información adicional pasada como children</p>
        <ul>
        <li>Ciudad: {userData.city}</li>
        <li>Ocupación: Desarrolladora Frontend</li>
        </ul>
    </Child>
    </div>
);
};
// Ejemplo: Parent.jsx o App.jsx
import Child from "./Child"; // Asegúrate de importar el componente hijo

function Parent() {
return (
    <Child
    string="Texto"
    number={42}
    boolean={true}
    array={[1, 2, 3]}
      object={{ key: "value" }}  // Corrección: usa llaves {} para el objeto
    function={() => console.log("Hola")}
    element={<span>JSX</span>}
    >
      {/* Children: contenido entre las etiquetas */}
    <p>Este es el children</p>
    </Child>
);
}

export default Parent;