export const numberRegExp = /^[0-9]+$/;
export let k = 100;

export class CodeValide {
  isAcceptable(s: string) {
    let exp = s.length === 5 && numberRegExp.test(s);
    console.log(exp);
    return exp;
  }
}
