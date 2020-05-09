export class Util {

  static isEmpty(value: any): boolean {
    // tslint:disable-next-line: use-isnan
    return value === null || value === undefined || value === '' || value.length === 0 || value === NaN ||
    (value.constructor === Object && Object.entries(value).length === 0);
  }

  static compareFn(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? JSON.stringify(obj1) === JSON.stringify(obj2) : obj1 === obj2;
  }
}
