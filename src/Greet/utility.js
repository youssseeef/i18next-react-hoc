import { tu } from "../i18n";

export const hello = {
  first: "Youssef",
  last: "Salama",
  number: "911"
};

export const where = country => {
  return tu("country", country);
};
