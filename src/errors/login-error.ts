import { ApplicationError } from "@/protocols";

export function loginError(): ApplicationError {
  return {
    name: "loginError",
    message: "Email ou senha incorretos"
  };
}
