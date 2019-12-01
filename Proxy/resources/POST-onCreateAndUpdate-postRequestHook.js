if (configuration.proxiedInstanceToken) {
  done();
}
configuration.proxiedInstanceToken = response_body.token
configuration.proxiedInstanceId = response_body.id
done({configuration});