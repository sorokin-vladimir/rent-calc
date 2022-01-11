export function getUrl(baseUrl: string) {
  const formatedBaseUrl = baseUrl.endsWith('/')
    ? baseUrl.slice(0, -1)
    : baseUrl;
  return (path: string) => {
    const formatedPath = path ? '/' + path : path;
    return formatedBaseUrl + formatedPath;
  };
}
