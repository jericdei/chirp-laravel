export interface Auth {
  user: User | null;
}

export interface SharedData {
  name: string;
  auth: Auth;
  [key: string]: unknown;
}

export interface BaseModel {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface User extends BaseModel {
  username: string;
  email: string;
  email_verified_at: string | null;
  profile: Profile;
}

export interface Profile extends BaseModel {
  user_id: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  name: string;
  profile_picture_url: string | null;
  bio: string | null;
  birth_date: string | null;
  location: string | null;
}
