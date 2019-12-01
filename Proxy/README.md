# Proxy element

The Proxy element exists to allow customization of elements in ways that VDRs don't support, particularly for elements that don't allow cloning.

The Proxy element accepts an element key as the only required parameter. When creating an instance of the proxy, it will also create a delegate of the specific key. 
It will use any configuration parameters with keys that match those of the target element prepended with 'proxied.' in the payload used to create the delegate. GET /objects, 
GET /objects/{objectName}/metadata and the various general operations will all delegate to the other instance. When updating or deleting the proxy instance, 
the delegate will also be updated or deleted accordingly.

## Known issues

* There's currently a bug where deleting the proxy instance does not delete the corresponding delegate instance.

## Use

Generally speaking, the way you'll use the Proxy element is to clone it, tailor it for a specific element and then add resources that supplement the behavior of the
element.  

To make an element specific proxy, you just:
* Set the default value of `proxiedElementKey` to the desired element key and set it to be hidden from the UI
* Add any configuration parameters that are needed using the same keys as used in the target element prepended by 'proxied.'
* Add any custom configuration parameters that you want to supplement the base element with
* Add any resources you wish to expose and make sure the vendor path is set to the path of the target resource
* Add pre and post hooks as needed to implement the supplemental behavior that you desire
