import { usePage } from "./page";

export function useAuth() {
  const { props: { auth } } = usePage();

  return auth;
}
