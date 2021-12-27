import { isEmptyValueStrict } from '../util';

let Validators = {
  markForRequired: (arg: any) => {},
};

// get zent validators
export function init(validators) {
  Validators = validators;
}

// 非空必填校验，去除空格
export function requiredStrict(message?: string) {
  function required(input: any) {
    return isEmptyValueStrict(input)
      ? {
          name: 'requiredStrict',
          message,
          actual: input,
        }
      : null;
  }
  Validators.markForRequired(required);
  return required;
}
