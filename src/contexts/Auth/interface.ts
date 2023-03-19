export interface IUser {
  username: string;
  email: string;
  profilePic: string;
  uid: string;
  docId? : string;
}

export interface Props {
  children: React.ReactNode;
}

export type AuthContextType = {
  loginUser: IUser;
  handleGoogleLogin: () => void;
  handleLogout: () => Promise<void>;
};
