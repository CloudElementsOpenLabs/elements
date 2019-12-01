
const tokens = request_headers.authorization.split(/, */).reduce((map, entry) => {
  const parts = entry.split(/ +/)
  map[parts[0].toLowerCase()] = parts[1]
  return map
}, {})

const userToken = configuration.proxiedUserToken ? configuration.proxiedUserToken : tokens.user
const orgToken = configuration.proxiedOrganizationToken ? configuration.proxiedOrganizationToken : tokens.organization
const elementToken = configuration.proxiedInstanceToken

done({
  request_vendor_headers: {
    authorization: `User ${userToken}, Organization ${orgToken}, Element ${elementToken}`
  }
})