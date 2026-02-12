export interface Auth {
  user: User | null;
}

export interface SharedData {
  name: string;
  auth: Auth;
  [key: string]: unknown;
}

export interface User {
  id: number;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  name: string;
  email: string;
  avatar?: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  [key: string]: unknown; // This allows for additional properties...
}
