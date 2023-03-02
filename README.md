# chARp Molecular Builder Webpage
This is the webpage repository of the software package chARp (add link later). The implementation of the webpage is based on [SevelteKit](https://kit.svelte.dev/). Instructions for adding content are presented below. For more information please refer to the [documentation of SvelteKit](https://kit.svelte.dev/docs).

## Getting started
As the first step, clone this repository to work with the source code locally
```bash
git clone git@github.com:chARpMolecularBuilder/chARpMolecularBuilder.github.io.git chARp_page
cd chARp_page
git branch
```
and make sure you're on the `master` branch.
Download and install [Node.js](https://nodejs.org/en/download/).
During the installation process, make sure that the install directory is being added to your environment (`PATH`).
Check if your Node.js installation is the latest version:
```bash
npm install -g npm@latest
```
### Preparing the repository
To install all required dependencies run
```bash
npm install
```
in the source directory of this repository.

### Developing
Once you've created a project and installed dependencies, start a development server:
```bash
npm run dev -- --open
```
The content of the page is located in `src/routes`.
The file `+page.svelte` directly relates to the content that is rendered on the page `/` or `Home`.
The `+layout.svelte` file configures the overall layout of the page, while nested `+layout.svelte` files only modify the layout of the main component on the page.
You can modify the contents of the page and get direct updates in your browser.
For adding content to the news section, simply drop a markdown `.md` file and add a title and date to the meta data section on top of the file.
The manual section works similar. You can add a whole new section by creating a folder in `src/routes/manual` or a subsection by adding a markdown file.
One peculiarity is, that files and folders have a two digit priority number in front of them.
This priority number defines the order in which the content is rendered on the manual page.

### Building
After applying changes to the page, check if the page will build before pushing your changes:
```bash
npm run build
```
If the build runs without errors, you can preview the production build with `npm run preview`.

### Deploying
For the deploy on the live page, you just need to push the sources (the `master` branch) to GitHub:
```bash
git add .
git commit -m "<your commit message>"
git push origin master
```
On GitHub an action is triggered on every push that automatically builds and deploys the static page in the `gh-pages` branch.

#### Troubleshooting
If there is any trouble with the automatic build and deploy process, you can execute this step by hand.
For this, simply switch to the `gh-pages` branch,
```bash
git checkout gh-pages
```
copy the files from `./build` into the source directory,
```bash
cp -rf ./build .
```
commit and push the changes to the `gh-pages` branch
```bash
git commit -am "<your commit message>"
git push origin gh-pages
```
