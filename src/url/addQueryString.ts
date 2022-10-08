import type { SARecord } from '@/type/record';
import omitNullVal from '@/object/omitNullVal';

/**
 * 给指定 url 添加 queryString
 * @param url 原 url
 * @param query 待组装 queryString 对象
 * @returns 组装后的完整 url
 */
const addQueryString = (url: string, query: SARecord): string => {
  const _query = omitNullVal(query);
  const queryString = Object.entries(_query)
    .map(([key, val]) => `${key}=${val}`)
    .join('&');
  if (queryString) {
    const connectors = url.includes('?') ? '&' : '?';
    return url + connectors + queryString;
  }
  return url;
};

export default addQueryString;
