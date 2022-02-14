## Instructions to start dev server

1. You would need to disable CORS validation on your browser by using an extension or you can run the following command (for Mac).

`open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`

2. after cloning the repo `npm install` to get all the dependencies into your machine.

3. `npm start` and your server should come up at the next available port (probably 3000)
