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
  try {
    let content = [];
    for (let i of urls) {
      axios.get(i).then(console.log(i));
      const headlineRegex = /"headLine": "\s*(.*?)\s*",/g;
      const descriptionRegex = /"description": "\s*(.*?)\s*",/g;
      const articleRegex = /"articleBody": \s*(.*?)\s*<\/div>/g;
      const headline = i.data.match(headlineRegex);
      const description = i.data.match(descriptionRegex);
      const article = i.data.match(articleRegex);
      content.push({
        headline: headline,
        description: description,
        article: article,
      });
    }
    return content;
  } catch (error) {}
}

function test(a) {
  try {
    axios
      .get(a)
      .then((i) => {
        const headlineRegex = /"headLine": "\s*(.*?)\s*",/g;
        const descriptionRegex = /"description": "\s*(.*?)\s*",/g;
        const articleRegex = /"articleBody": \s*(.*?)\s*"\n}/g;
        const headline = i.data.match(headlineRegex);
        const description = i.data.match(descriptionRegex);
        const article = i.data.match(articleRegex);
        console.log("\n");
        console.log("ARTICLE");
        console.log(a);
        console.log(headline);
        console.log(description);
        console.log(article);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    console.log(error);
  }
}
async function run() {
  let json = await RSS2JSON();
  let urls = returnURLS(json);
  // console.log(urls);
  // fetchNews(urls);
  for (let a of urls) {
    test(a);
  }
}

run();
