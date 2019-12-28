import i18n from "../i18n";

export const hello = {
  first: "Youssef",
  last: "Salama",
  number: "911"
};

export const where = (country) => {
  return i18n.t(`country.${country.toLowerCase()}`);
};
