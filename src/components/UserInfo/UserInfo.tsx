import React from "react";

type User = {
  id: number;
  name: string;
  username?: string;
  email?: string;
};

interface UserInfoProps {
  user?: User | null;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  if (!user) {
    return <span className="UserInfo">No user selected</span>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
