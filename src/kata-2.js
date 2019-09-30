export function kata2 (obj, def, path) {
  return getObjectPropertyValue(obj, def, path);
}

const getObjectPropertyValue = (obj, def, path) => {

  const objectToSearchFor = Object.assign(obj, {});

  const readPath = (pathString, obj = objectToSearchFor, defaultValue = def) => {
    const pathArray = pathString.split('.');
    const lastKey = pathArray.length - 1;
    let reducedObject = Object.assign({}, obj);

    return pathArray.map((key, index) => {
      const value = reducedObject[key];
      const isLast = index === lastKey;
      const isObject = typeof value === 'object';
      reducedObject = isObject && value;

      return isLast && value !== undefined ? value : defaultValue;
    })[lastKey];
  }

  return path !== undefined ? readPath(path, objectToSearchFor, def) : readPath;
}