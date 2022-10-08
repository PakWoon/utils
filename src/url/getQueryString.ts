import type { SARecord } from '@/type/record';

const getQueryString = (
  url?: string,
  param?: string,
): undefined | string | SARecord => {
  const _url = url || (globalThis as any).location.href;
  if (!_url) {
    return undefined;
  }
  if (!_url.includes('?')) {
    return undefined;
  }
  const paramsStr = _url.split('?')[1];
  const params = paramsStr.split('&').reduce((obj: SARecord, item: string) => {
    const itemSpl = item.split('=');
    const key = itemSpl[0];
    const val = itemSpl[1];
    return {
      ...obj,
      [key]: val,
    };
  }, {});

  if (param) {
    return params[param];
  }
  return params;
};

export default getQueryString;
