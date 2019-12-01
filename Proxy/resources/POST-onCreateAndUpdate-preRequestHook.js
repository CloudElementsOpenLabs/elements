const rp = require('request-promise');

const tokens = request_headers ? request_headers.authorization.split(/, */).reduce((map, entry) => {
  const parts = entry.split(/ +/)
  map[parts[0].toLowerCase()] = parts[1]
  return map
}, {}) : {}

const userToken = configuration.proxiedUserToken ? configuration.proxiedUserToken : tokens.user
const orgToken = configuration.proxiedOrganizationToken ? configuration.proxiedOrganizationToken : tokens.organization

request_vendor_headers.Authorization = `User ${userToken}, Organization ${orgToken}`

const platformRequest = (path, method, parameters, body) => {
  let options = {
    uri: `${configuration['base.url']}/${path}`,
    method: method,
    json: true,
    headers: request_vendor_headers,
    body: body,
    qs: parameters
  };
  return rp(options);
};

async function buildConfiguration() {
  const element = 
    await platformRequest(`elements/${configuration.proxiedElementKey}`, 'GET')
  const applicableKeys = element.configuration.filter(entry => !entry.hideFromConsole).map(entry => entry.key)
  const config = {}
  for (let key of applicableKeys) {
    const proxyKey = `proxied.${key}`
    if (configuration[proxyKey]) {
      config[key] = configuration[proxyKey]
    }
  }
  return config
}

async function prehook() {
  request_vendor_body = {
    name: 'Proxy delegate',
    configuration: await buildConfiguration()
  }
  if (!configuration.proxiedInstanceToken) { //new instance config
    return {
      request_vendor_body,
      request_vendor_headers
    }
  } else {
    return {
      request_vendor_body,
      request_vendor_headers,
      request_method: 'PATCH',
      request_path: request_path + '/' + configuration.proxiedInstanceId
    }
  }
}

prehook()
  .then(result => done(result))
  .catch(err => done({response_error_message: err}))

