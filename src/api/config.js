export function initAxios() {
  return import('axios').then(axios => {
    // 对axios进行配置操作

    return Promise.resolve(axios)
  })
}