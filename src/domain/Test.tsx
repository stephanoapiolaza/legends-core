import {StatusTest} from "./StatusTest";
import {Submit} from "./Submit";
import {Category} from "./Category";
import {Question} from "./Question";
import {User} from "./User";

export interface Test {
  id?: string;
  key?: string;
  name?: string;
  description?: string;
  active?: boolean;
  account?: string;
  status?: StatusTest[];
  submit?: Submit;
  timing?: string;
  categories?: Category[];
  questions: Question[];
  evaluated?: User;
  created_at?: string;
  update_at?: string;
}
