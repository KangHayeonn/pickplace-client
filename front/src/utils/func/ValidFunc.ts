export const validPasswordReg = (password: string) => {
  const reg = /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  if (!reg.test(password)) {
    return false;
  }
  return true;
};
