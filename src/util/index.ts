export function isNull(value: any) {
  return value === undefined || value === null;
}

export function isEmptyValue(value: any) {
  return isNull(value) || value === '';
}

export function isEmptyValueStrict(value: any) {
  if (isEmptyValue(value)) {
    return true;
  }
  if (typeof value === 'string') {
    value = getTrimValue(value);
  }
  return value.length === 0;
}

export function getTrimValue(value: string) {
  return value.replace(/(^\s*)|(\s*$)/g, '');
}
