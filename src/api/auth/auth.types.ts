export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  username: string;
}

export interface RegisterResponse {
  id: string;
  username: string;
  email: string;
}

export interface resetPasswordData {
  token: string;
  password: string;
}
