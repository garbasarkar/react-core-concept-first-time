// import "./Books.css";
export default function Friend({ goodBoy }) {
  const { name, email } = goodBoy;
  const color = {
    padding: "15px",
    margin: "15px",
    border: "2px solid slateblue",
    borderRadius: "7px",
  };
  return (
    <div style={color}>
      <h3>Name: {name} </h3>
      <h4>Email: {email} </h4>
    </div>
  );
}
