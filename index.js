const parser = require("xml2json");
const fs = require("promise-fs");
const axios = require("axios");
const headlineRegex = /"headLine": "\s*(.*?)\s*",/g;
const descriptionRegex = /"description": "\s*(.*?)\s*",/g;
const articleRegex = /"articleBody": \s*(.*?)\s*<\/div>/g;

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
    reject(error);
  }
}

function returnURLS(json) {
  try {
    let file = JSON.parse(json);
    let urls = file.feed.entry.map((i) => {
      return i.link.href;
    });
    return urls;
  } catch (error) {
    console.log(error);
  }
}

async function fetchNews(urls) {
  return new Promise(async (resolve, reject) => {
    try {
      let content = [];
      for (let i of urls) {
        await axios.get(i).then((response) => {
          const headline = response.data.match(headlineRegex);
          const description = response.data.match(descriptionRegex);
          const article = response.data.match(articleRegex);
          content.push({
            headline: headline,
            description: description,
            article: article,
          });
        });
      }
      resolve(content);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

async function run() {
  let json = await RSS2JSON();
  let urls = returnURLS(json);
  // console.log(urls);
  fetchNews(urls).then((x) => {
    console.log(x);
  });
}
run();
