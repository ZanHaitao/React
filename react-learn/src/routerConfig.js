const config = {
  user: {
    root: "/user",
    work: "/work",
    pay: {
      root: "/pay",
      after: "/after",
      before: "/before"
    },
  }
}

function setConfig() {
  _setConfig(config, "");
}

function _setConfig(obj, basePath) {
  const newBasePath = basePath + (obj.root ? obj.root : "");
  for (const prop in obj) {
    const value = obj[prop];
    if (typeof value !== "object") {
      if (prop === "root") {
        obj.root = basePath + value;
      } else {
        obj[prop] = newBasePath + value;
      }
    } else {
      _setConfig(obj[prop], newBasePath);
    }
  }
}

setConfig()

export default config;