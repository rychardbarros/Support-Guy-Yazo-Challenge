export const isStringEmpty = (string: string): boolean => {
  if (/\S/.test(string)) return false;

  return true;
};
