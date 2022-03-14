import Role from "./enums/Role";

interface IUser {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  bio: string;
  listings: number[];
  role: Role;
}

export default IUser;
