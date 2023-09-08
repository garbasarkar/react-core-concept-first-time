export default function Posted({ singlePost }) {
  const { title, body, userId, id } = singlePost;
  const sajugau = {
    padding: "20px",
    margin: "20px",
    border: "2px solid red",
    borderRadius: "7px",
  };
  return (
    <div style={sajugau}>
      <h3>Title: {title}</h3>
      <h3>UserId: {userId}</h3>
      <h4>Id: {id} </h4>
      <p>Discription: {body} </p>
    </div>
  );
}
