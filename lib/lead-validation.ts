const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[0-9][0-9 ()./-]{5,22}$/;

export const GENERIC_SEND_ERROR = "Non è stato possibile inviare la richiesta. Riprova tra poco o scrivici a ab.agenziaweb@gmail.com.";

export function cleanText(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

export function isValidEmail(value: string) {
  return value.length <= 254 && EMAIL_PATTERN.test(value);
}

export function isValidPhone(value: string) {
  return PHONE_PATTERN.test(value);
}
