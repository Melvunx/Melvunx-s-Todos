//Account
export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  auth_token?: string;
  profile_picture_url?: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  last_login?: Date;
  created_at?: Date;
  id_todos?: string;
  id_notes?: string;
}
