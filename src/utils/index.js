export const getItem = (name) => {
  if (!name) return;
  const v = sessionStorage.getItem(name);

  return !v ? '' : JSON.parse(v);
}
export const setItem = (name, value) => {
  if (!name) return;
  if (typeof value !== 'string') {
    value = JSON.stringify(value); 
  }
    
  sessionStorage.setItem(name, value);
}
export const removeItem = (name) => {
  if (!name) return;
  sessionStorage.removeItem(name);
}

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  reg.lastIndex = 0;
  return reg.test(path);
}

/**
 * 获取Parame value
 * @param name {string} parame name
 * @returns {Array|{index: number, input: string}|string}
 */
export const getParameterByName = name => {
    const match = RegExp('[?&]' + name + '=([^&]*)')
        .exec(window.location.href)
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

/**
 * 开发用 免token
 * @type {Array}
 */
export const hostNames = [
  'localhost',
  '127.0.0.1',
];

/**
 * 600活动的分馆
 * @type {Array}
 */
export const basicActivityStores = [ '123' ];


export const propagandaImgs = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];


