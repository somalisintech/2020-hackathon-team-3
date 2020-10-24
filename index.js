const parser = require("xml2json");
const fs = require("promise-fs");
const axios = require("axios");

function RSS2JSON() {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(`${__dirname}/all.atom`).then((response) => {
        var json = parser.toJson(response);
        resolve(json);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

function returnURLS(json) {
  try {
    let file = JSON.parse(json);
    let urls = file.feed.entry.map((i) => {
      return i.id.split("tag:")[1];
    });
    return urls;
  } catch (error) {
    console.log(error);
  }
}

async function fetchNews(urls) {
  try {
    for (let i of urls) {
      axios.get(i).then(console.log(i));
    }
  } catch (error) {}
}
async function run() {
  let json = await RSS2JSON();
  let urls = returnURLS(json);
  //   fetchNews(urls);
}

run();
