var refreshTime = Date.now();
configuration['oauth.user.refresh_time'] = refreshTime.toString();

done({
	"configuration": configuration
});