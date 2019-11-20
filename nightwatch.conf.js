require("babel-core/register");
require("geckodriver");

const chromedriver = require("chromedriver");
const url = "http://zombie-web:5000";

module.exports = {
  src_folders: ["tests"],

  page_objects_path: "./pages",
  globals_path: "./hooks/globals.js",

  webdriver: {
    start_process: true
  },

  // screenshots:{
  //   enabled: true,
  //   on_failure: true,
  //   on_error: true,
  //   path: 'tests_output/'
  // },

  test_settings: {
    default: {
      launch_url: url,
      webdriver: {
        server_path: chromedriver.path,
        port: 9515
      },
      desiredCapabilities: {
        browserName: "chrome"
      }
    },

    headless: {
      launch_url: url,
      webdriver: {
        server_path: chromedriver.path,
        port: 9515
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: false,
          args: ["--headless", "--no-sandbox"]
        }
      }
    },

    firefox: {
      launch_url: url,
      webdriver: {
        server_path: "./node_modules/.bin/geckodriver",
        port: 4444
      },
      desiredCapabilities: {
        browserName: "firefox",
        acceptInsecureCerts: true
      }
    }
  }
};
