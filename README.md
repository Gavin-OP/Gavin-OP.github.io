# Gavin-OP.github.io _(Gavin's Website & Notes System)_ <!-- omit in toc -->

![Website Homepage](https://gavin-op.github.io/image/sample_homepage.png)

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Gavin's personal website and notes system, built using ReactJS, HTML, CSS, NodeJS, and Markdown. This repository contains the design, documentation, and implementation of the website and notes.  

## Table of Contents <!-- omit in toc -->

- [Install](#install)
- [Usage](#usage)
- [Deployment](#deployment)  
- [Todo List](#todo-list)
- [References](#references)
- [Contributing](#contributing)
- [License](#license)

## Install  

1. Install [NodeJS, npm](https://nodejs.org/en/download) and [Git](https://git-scm.com/downloads).
2. Open command prompt (terminal) in the directory where you want to install this repository (i.e. Gavin-OP.github.io). 
3. Clone the repository using following command in command prompt (terminal). 

   ```shell
   git clone https://github.com/Gavin-OP/Gavin-OP.github.io.git
   ```

## Usage

1. Open command prompt (terminal) inside the cloned repository. 
2. Install all required dependencies by running:
   
   ```shell
   npm install
   ```

3. Configure the project by setting up environment variables in a `.env` file. The content in the `.env` file can be:
   ```shell
   GITHUB_APP=<your token>
   ```
   
3. Start the website locally by running: 

   ```
   npm start
   ```

## Deployment

Pushing changes to the `master` branch will automatically trigger the build process. The website will be built and the output will be pushed to the `gh-pages` branch, which will then deploy the website. **Ensure that all changes are thoroughly tested before pushing to `master`. 

## Todo List

- [ ] ⭐⭐⭐⭐⭐Design the website layout, what should be included??? reference [How to jazz up your website like Apple with JavaScript](https://medium.com/geekculture/how-to-jazz-up-your-website-like-apple-with-javascript-eed2bf227fec)
- [ ] ⭐⭐Footer change hover CSS
- [ ] ⭐html header, footer, and body
- [ ] ⭐Add a NodeJS backend server to serve all the files, reference [How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)

## References

[25 React Website Design Examples We Love](https://blog.hubspot.com/website/react-websites-examples)  
[How To Create A Website Like Apple](https://internetdevels.com/blog/how-to-create-a-website-like-apple)  
[终极解决：Error: error:0308010C:digital envelope routines::unsupported-CSDN博客](https://blog.csdn.net/m0_48300767/article/details/131450325)  
[react-pdf](https://react-pdf.org/)  

## Contributing

Contributions are welcome! [PRs](https://github.com/Gavin-OP/Gavin-OP.github.io/pulls) and [issues](https://github.com/Gavin-OP/Gavin-OP.github.io/issues) are gladly accepted. Notes System NEED contributors!!  

## License  

[UNLICENSE](./LICENSE)
