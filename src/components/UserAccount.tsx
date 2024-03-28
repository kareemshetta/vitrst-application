type Props = { name: string; isAdmin?: boolean };

const UserAccount = ({ name, isAdmin }: Props) => {
  return (
    <>
      <div>UserAccount</div>
      <h1>{name}</h1>
      {isAdmin && <button>login</button>}
    </>
  );
};

export default UserAccount;
