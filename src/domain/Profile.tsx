import {Category} from "./Category";
import {User} from "./User";


export interface Profile {
  id?: string;
  name?: string;
  description?: string;
  account?: string;
  active?: boolean;
  categories?: Category[];
  created_by?: User;
  created_at?: string;
  update_at?: string;
}
