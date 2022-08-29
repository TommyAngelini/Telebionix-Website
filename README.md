# To run website in local host
npm run start

# To build project into "dist" folder (need to rename to "docs" for github pages to pick up the right folder)
npm run build 

# Before building the project again
- Ensure you have a copy of the "CNAME" folder to paste in the new "docs" directory after building, as CNAME is deleted on build and necessary for connecting the webiste domain
- After building, rename the current "docs" folder to "docs_old" if you want to keep a version of the previous website to revert back to if necessary
- Delete the old "docs_old" so that there is only one previous version

# Setting up Github pages connection with GoDaddy domain
The following tutorial takes you through the steps: https://jinnabalu.medium.com/godaddy-domain-with-github-pages-62aed906d4ef