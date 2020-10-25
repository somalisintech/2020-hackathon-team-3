const axios = require("axios");

class utils {
  static async fetchNews(urls) {
    const headlineRegex = /"headLine": "\s*(.*?)\s*",/g;
    const descriptionRegex = /"description": "\s*(.*?)\s*",/g;
    const articleRegex = /"articleBody": \s*(.*?)\s*<\/div>/g;
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
}

module.exports.utils = utils;
