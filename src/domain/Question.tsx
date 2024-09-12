import type { Answer } from './Answer';
import {User} from "./User";

export interface Question {
  id: string;
  key: string;
  title: string;
  active: boolean;
  category: string;
  level: string;
  answers: Answer[];
  created_by: User;
  created_at: string;
  update_at: string;
  metadata: { confirmed: boolean, skip: boolean, order: number}
}
