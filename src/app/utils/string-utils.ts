export const removeDigitsFromString = (
  string: string | null | undefined
): string => {
  return string?.replace(/\D/g, '') ?? '';
};
