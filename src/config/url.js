class URL {
  static api() {
    let env = process.env.REACT_APP_ENV;

    if (env === "dev") {
      return "http://localhost:1338";
    } else if (env === "uat") {
      return "http://nadescrib.com:1338";
    } else if (env === "prod") {
      return "/";
    }

    return "/";
  }
}

export default URL;
