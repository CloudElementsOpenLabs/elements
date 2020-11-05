# Elements Repo
Cloud Elements has created a community of custom made elements that can be viewed, downloaded, and shared. This is an independent catalog of elements created by customers, partners and Cloud Elements developers. Additionally, this community supports our partners leveraging Cloud Elements technology.

Please be sure to review the [Open Labs Overview](https://docs.cloud-elements.com/home/open-labs-overview) before using this repo.

### Disclaimer
Please read the [Code of Conduct](#code-of-conduct) before using the provided elements.
These elements have been created for or by customers and are not actively maintained by Cloud Elements. Therefore, these elements should be used at your own risk, and we recommend you test them and enhance them to meet your own needs before using them in a production environment. Community Elements may lack all of the features needed to achieve your use case, but in most cases can be easily added by utilizing our [Element Builder](https://cloud-elements.com/element-builder/) tools. Make sure to plan this in to your development time and consideration when using a community element. Additionally, the elements provided in this community are used privately within your own Element Catalog.  The public Cloud Elements catalog of pre-built API integrations can be found on our [website](https://cloud-elements.com/elements-catalog/).

## Contributing
First off, thank you for your interest in contributing to our community! We welcome your contributions and are excited to have your Elements as a part of our repo.

To contribute, read through the below sections: [Getting Started](#getting-started), [Code of Conduct](#code-of-conduct) and [Instructions](#instructions). These sections will guide you through building your first Element and publishing it to the community. 

We're iterating on the process to make contributing to this project as easy and transparent as possible. Hopefully this document makes the process for contributing clear and answers some questions that you may have.

### Getting Started
If this is the first Element that you are building or sharing Please see our [Element Builder Documentation](https://docs.cloud-elements.com/home/element-builder-overview).

Check out a simple [example](https://github.com/CloudElementsOpenLabs/examples/tree/master/elements) of an Element if you are unsure of how to get started.

For your own security, please make sure to remove any API keys and secrets or hard-coded personal data prior to uploading Elements. In the event that you accidentally leave these in the Element, your PR will be rejected.

#### Minimum Requirements
At a minimum, a new Element should have:
* Working authentication
* Two resources
* A small Readme (a more detailed description of this is below in the Instructions section)

### Code of Conduct
We are committed to providing a welcoming and inclusive environment that inspires people to want to contribute. In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to help make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation. Below are the type of behaviors we expect from contributors within this community.

Our community strives to:
* Be patient and accepting
* Be welcoming of various view points and ideas
* Be considerate
* Be respectful - It is okay to not agree but not agreeing is no excuse to rude comments or poor manners
* Be mindful in your word choice-
    * professional
    * non-judgmental
    * inclusive
    * welcoming
    * respectful of diversity

### Instructions

Steps to Publish your custom Element are below. We ask that you use the `Publish` tab available in the UI to contribute your Element to the community instead of opening a pull request with our Elements repo directly. Thank you!

#### Validation

While we are happy to have a central place for developers to contribute and share and we welcome a wide array of contributions, we would still like to uphold a basic standard for Element expectations. This is done through our validation process when you attempt to publish an Element. You may choose to skip validation when publishing, but please note that doing so will result in a flag that notates your Element was not validated. It will still undergo an internal decency review, but will not be subject to all of the standards for Elements we hold our catalog Elements to.

You can validate your Element using the `Validation` tab or directly from the `Publish` tab

If you would like to bypass validation, from the `Publish` tab, you must first click `Run Validation`. A message will appear directing you to fix your errors. Alternatively, you can continue through the below steps without fixing your errors and a pull request will be submitted with your un-validated Element.

**Note:** We understand that the validation process can be difficult at times, so we welcome you to reach out to implementation@cloud-elements.com, where we are happy to help you get your Element up to standard prior to contributing!

**Note:** If you validate your Element from the `Publish` tab, you should wait until after you have authenticated to GitHub (also in the `Publish` tab). Running validation first and then authenticating to GitHub will require you to re-run the validation before submitting your Element to the community.

#### Fork the Elements Repo
 
You will need to fork the repo at [CloudElementsOpenLabs/Elements](https://github.com/CloudElementsOpenLabs/elements) to the GitHub account you plan to authenticate with. Please see the [GitHub docs](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) for instructions on how to fork a repo.

#### Navigate to the Publish tab

From the `Publish` tab of your custom Element:
1. `Authenticate` to GitHub.
    * For `GitHub Organization`, you will need to use the same username you forked the repo with in the previous step.
    * For `GitHub repo`, enter `elements`.
    * **Note:** If you incorreclty authenticate with GitHub (ie with an account that is not associated with the forked elements repo), you will not be able to re-authenticate from the `Publish` tab. You will need to go and udpate your instance configuration in the `Instances UI`. 
2. Generate your Element's metadata with `Generate Metadata`. Enter the appropriate information in the pop-up. You can also choose to leave this blank.
3. Click `Run Validation`, whether you've chosen to validate or not. You will be able to `Publish` at the end even if you're Element does not pass validation.
4. Enter a `Commit Message` and a `Readme` by pasting text into each field, respectively. The input field for the Readme accepts all markdown formatting and will create a readme for you automatically to publish with your Element. Please see an example of a well-formatted Readme [here]()
    * At a minimum, Readmes should contain:
        * A link to the vendor’s API documentation.
        * A brief description of the vendor API/Element.
        * How authentication is handled (custom, basic, OAuth1 or OAuth2, etc).
        * A list of (or quick mention of) which endpoints/resources can be found.
        * If polling and/or webhooks are set up.
        * Available pagination type.	
5. Click `Publish` and you're good to go! A pull request will be created and reviewed by a member of the Onboarding Services team. Any changes and/or updates needed from you will be sent to you in GitHub.