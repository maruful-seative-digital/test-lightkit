export const generateUid = (type: string): string => {
  return `${type}-${Date.now()}`;
};
