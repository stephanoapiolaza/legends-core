import {Question} from "./Question";
import {Category} from "./Category";


export interface Submit {
  sent_at: string;
  time_completed: string;
  questions_answered: Question[];
  categories: Category[];
}
