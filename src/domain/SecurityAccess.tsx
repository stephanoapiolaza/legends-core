import {User} from "./User";

export interface SecurityAccess {
  access_token: string;
  user: User;
}
