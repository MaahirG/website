## Deploy Website 
#### (i.e. not creating new react app from scratch):
```
git clone
npm install
npm install gh-pages --save-dev
npm start (localhost testing)
npm run deploy (See next section for custom url deploy, else do: npm run deploy after completing Step 4. below in package.json, where homepage is your *github.io* url.
```
### Deplyoment w/custom url:

1. Configure [apex](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-an-apex-domain-for-your-github-pages-site) and cname addresses through domain provider e.g. domains.google.com.
- [Steps to configure domain provider and link custom url to GitHub repo](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

2. Complete Step 4. below in package.json, where homepage is your *custom* url.

3. npm run deploy (build and deploy changes to gh-pages branch)


## Procedure to setup a gh-pages hosted react app from scratch:
#### NOTE: if starting from scratch, copy and paste the src, public, package.json, package-lock.json files from this repo into the react app folder that is created after *completing* the steps below, and then npm install and npm run deploy will deploy my website.

[Credit to this repo](https://github.com/gitname/react-gh-pages/blob/master/README.md)

1. **Create an empty repository on GitHub.**
2. **Create React app on your computer.**
    ```
    $ create-react-app git-repo-name
    ```
3. **Install the `gh-pages` package as a "dev-dependency" of the app.**
    ```
    $ cd git-repo-name
    $ npm install gh-pages --save-dev
    ```
4. **Add some properties to the app's `package.json` file.**

    * Add a `homepage` property. Define its value to be the string `http://{username}.github.io/{git-repo-name}`
    ```
    "homepage": "http://gitname.github.io/git-repo-name"
    ```
    * In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:
    ```
    "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
5. **Create a git repo and add repo as "remote" in your local git repository.**
    ```
    $ git init
    $ git remote add origin https://github.com/gitname/git-repo-name.git
    ```
    * So the `gh-pages` package knows where you want it to deploy your app in step 7.
6. **Generate a *production build* of your app, and deploy it to GitHub Pages.**
    ```
    $ npm run deploy
    ```
    * App is now accessible at the URL you specified in step 4. E.g. at: https://gitname.github.io/git-repo-name/
    * At this point a `master` branch DNE, a `gh-pages` branch does exist. the `gh-pages` branch contains *built* app code instead of source code.
7. **Commit your source code to master.**
    ```
    $ git add .
    $ git commit -m "Create a React app and publish it to GitHub Pages"
    $ git push origin master
    ```
    
 ## Helpful references along the way:
 - https://github.com/gitname/react-gh-pages
 - https://www.youtube.com/watch?v=6Rto09ElUuY
