function redirectTo(portNumber) {
  portNumber = portNumber ? ":"+portNumber : "";
  path = window.location.pathname;
  console.log(path);
  index = window.location.href.indexOf("?");
  params = index > -1 ? window.location.href.substring(index) : "";
  console.log(params);
  newLocation = "http://localhost"+portNumber+path+params;
  console.log(newLocation);
  window.location.replace(newLocation);
}
