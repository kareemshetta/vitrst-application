type Props = { data: string[] };

const ListUsers = (props: Props) => {
  return (
    <>
      {!props.data.length && <div>no users found</div>}
      {props.data.length && (
        <div role="list">
          {props.data.map((user) => (
            <div key={user} role="listitem">
              {user}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ListUsers;
