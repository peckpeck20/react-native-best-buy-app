const bestBuyKey = "jABsZM6DZ6C4QtIUYB45rhgF";

// version control :)
var fs = require("fs");
var bby = require("bestbuy")(bestBuyKey);




// we'll use JSONStream for convenience https://npmjs.com/packages/JSONStream
// Don't forget to `npm install --save JSONStream` if you haven't yet! :)
var JSONStream = require("JSONStream");

// lets write all categories to a file called categories.json
var categories = bby.categoriesAsStream("");

// a "total" event is emitted so we know how many total products will be sent
categories.on("total", total => console.log(`Total Categories: ${total}`));

categories
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream("categories.json"));

// log when its done
categories.on("end", () => {
  console.log("Done!");
});
