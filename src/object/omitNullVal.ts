import isNull from '@/judge/isNull';
import isUndefined from '@/judge/isUndefined';
import type { SARecord } from '@/type/record';

/**
 * 去除对象中值为空元素的属性（空字符串，null，undefined）
 * @param obj 待处理对象
 * @returns 不带空元素的属性的对象
 */
const omitNullVal = (obj: SARecord) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const el = obj[key];
      if (el === '' || isNull(el) || isUndefined(el)) {
        delete obj[key];
      }
    }
  }
  return obj;
};

export default omitNullVal;
