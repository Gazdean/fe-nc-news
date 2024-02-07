import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api-utils";
import SignInCard from "./SignInCards";

export default function SignIn() {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((allUsers) => {
        setUsers(allUsers);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul >
        {users.map((user) => {
          return <SignInCard key={user.username} user={user} />;
        })}
      </ul>
    </>
  );
}
