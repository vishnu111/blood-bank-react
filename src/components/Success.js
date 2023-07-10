import "../sass/App.scss";
import Nav from "./Nav";
function Success() {
  return (
    <div>
      <Nav />
      <div className="success-page">
        <h2>Data saved successfully!</h2>
      </div>
    </div>
  );
}
export default Success;
