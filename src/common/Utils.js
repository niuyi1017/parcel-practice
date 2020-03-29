
export function loadModule(moduleName) {
  return import(moduleName).then(module => {
    return Promise.resolve(module.default)
  })
  // const module = await import(moduleName)
  // console.log(module)
  //   return module.default
  } 
