// components/Child.jsx
const Child = (props) => {
return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
    <h2>Componente Hijo</h2>
    
    {/* Mostrando props normales */}
    <p>Nombre: {props.name}</p>
    <p>Edad: {props.age}</p>
    
    {/* Mostrando children */}
    <div style={{ backgroundColor: "lightyellow", padding: "10px" }}>
        <h3>Contenido Children:</h3>
        {props.children}
    </div>
    </div>
);
};
// Child.jsx
function Child(props) {
  // Puedes usar destructuring para acceder más fácilmente:
const { string, number, boolean, array, object, function: func, element, children } = props;

return (
    <div>
    <h2>Props recibidas:</h2>
    <p>String: {string}</p>
    <p>Number: {number}</p>
    <p>Boolean: {boolean.toString()}</p>
    <p>Array: {array.join(", ")}</p>
    <p>Object: {JSON.stringify(object)}</p>
    <button onClick={func}>Ejecutar función</button>
    <div>{element}</div>
    <h3>Children:</h3>
    {children}
    </div>
);
}

export default Child;