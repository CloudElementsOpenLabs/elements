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
If this is the first Element that you are building or sharing please see our [Element Builder Documentation](https://docs.cloud-elements.com/home/element-builder-overview).

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
* Be respectful - It is okay to not agree but not agreeing is no excuse to leave rude comments or use poor manners
* Be mindful in your word choice-
    * professional
    * non-judgmental
    * inclusive
    * welcoming
    * respectful of diversity

## Instructions

Steps to Publish your custom Element are below. We ask that you use the `Publish` tab available in the UI to contribute your Element to the community instead of opening a pull request with our Elements repo directly. Thank you!

### Validation

While we are happy to have a central place for developers to contribute and share and we welcome a wide array of contributions, we would still like to uphold a basic standard for Element expectations. This is done through our validation process when you attempt to publish an Element. You may choose to skip validation when publishing, but please note that doing so will result in a flag that notates your Element was not validated. It will still undergo an internal decency review, but will not be subject to all of the standards for Elements we hold our catalog Elements to.

If you *would* like to bypass validation, from the `Publish` tab, you must first click `Run Validation`. A message will appear directing you to fix your errors. Alternatively, you can continue through the below steps without fixing your errors and a pull request will be submitted with your un-validated Element.

**Note:** We understand that the validation process can be difficult at times, so we welcome you to reach out to implementation@cloud-elements.com, where we are happy to help you get your Element up to standard prior to contributing!

### Prerequisites
Before navigating to the `Publish` tab of the Element you'd like to contribute, you'll need to finish the below steps.

1. Create a GitHub OAuth App in GitHub
* In Github, Navigate to `Settings` → `Developer Settings` → `OAuth Apps` and click `New OAuth App`: https://a.cl.ly/Z4uq5EkG
* Enter the necessary App parameters, and name your App however you’d like: https://a.cl.ly/L1uOg2Nm
* Use the Cloud Elements callback url: https://auth.cloudelements.io/oauth 
* Underneath your Client ID, click `Generate New Client Secret`: https://a.cl.ly/JruqWQnv
* Use that key/secret pair when authenticating to GitHub BOTH times in the instructions below.

2. Fork the Elements Repo *AND* insure it is up to date with the master branch.
* Go to [CloudElementsOpenLabs/Elements](https://github.com/CloudElementsOpenLabs/elements).
* Click `Fork` in the upper right-hand corner and choose the account you wish to fork it to 
* If you have already forked the repo, it must be up to date with the master branch found at [CloudElementsOpenLabs/Elements](https://github.com/CloudElementsOpenLabs/elements). If it is not, follow the steps below to bring it current with master.
    * $ cd /{elementsForkClone}
    * $ git remote add upstream https://github.com/CloudElementsOpenLabs/elements.git
    * $ git fetch upstream
    * $ git merge upstream/master master
    * $ git push

3. Authenticate to the `GitHub Element` directly.
> **Important Note:** If the first time you authenticated to GitHub was from the Publish tab of an Element, you’ll need to first:
> * Log in to GitHub and navigate to `Settings` → `Applications` → `Authorized OAuth Apps`
> * Revoke access for Cloud Elements UI
> * Delete your GitHub Instance (tagged with `Community Instance (use your own org and repo)`)

* Go to the `GitHub Element`. Authenticate an instance using the same account you created an OAuth App for in the step [above](#prerequisites).
    * Make sure you click the `Show Optional Fields` section and enter the API key and secret you generated in the Prerequisite step above.
    * Use your account name for `GitHub Organization` and `elements` for the repository field.

### Publish
1. Navigate to the `Publish` tab for the Element you’ve chosen to contribute.
2. In the Publish tab, you will need to Authenticate to Github.
3. Use your personal account as the Github Organization, and click `Show Optional Fields` to add in the API key and secret you created above. Enter elements as the GitHub repository. 
> * Note: If you are authenticating to GitHub for the first time, instead follow the directions above: Authenticate to the `GitHub Element` directly.
5. Generate your Element’s metadata.
6. Run the `Validation` step to validate the Element *or* continue with the below steps if you would rather not validate your Element.
7. Enter a Readme by pasting text into the Readme field. The input field accepts all markdown formatting and will create a readme for you automatically to publish with your Element. For an example, Readme, click [here](https://github.com/CloudElementsOpenLabs/elements/tree/master/dice). At a minimum, Readmes should contain:
* A link to the vendor’s API documentation.
* A brief description of the vendor API/Element.
* How authentication is handled (custom, basic, OAuth1 or OAuth2, etc).
* A list of (or quick mention of) which endpoints/resources can be found.
* Whether the Element uses polling and/or webhooks (as applicable).
8. Click `Publish` and a pull request will be submitted to our repository for your Element.

## What Comes Next?
Someone in Onboarding Services will review your element. We will look for the ability to import it, whether authentication is set up and if there are at least two resources. We will not import and test fully, so please be sure your Element is working to the best of your ability before submitting to the Community.

If we see any changes that need to be made (ie you did not include the necessary information in the Readme, or your resources are missing, etc) we will submit it back to you with a request for changes. You will make these changes in the same pull request the Publish tab submitted for you. We will also reach out to you directly to let you know changes are needed.

Thank you for taking the extra time to contribute your Element to our collaborative community!
