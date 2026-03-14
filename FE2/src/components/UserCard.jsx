function UserCard({ user }) {
  return (
    <div className="user-card">

      <h3>{user.name}</h3>

      <div className="user-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>

    </div>
  );
}

export default UserCard;