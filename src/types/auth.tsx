export type Auth = {
  id: number | string;
  name?: string;
  email: string;
  password: string;
};

export type AuthForm = {
  name?: string;
  email: string;
  password: string;
};
