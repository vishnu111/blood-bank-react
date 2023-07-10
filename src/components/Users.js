function Users({ result }) {
  return (
    <div className="user-data">
      <span className="user-data-name">{result.name}</span>
      <span className="user-data-phone">{result.phone}</span>
      <span className="user-data-email">{result.email}</span>
      <span className="user-data-city">{result.city}</span>
    </div>
  );
}
export default Users;
