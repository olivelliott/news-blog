const db = require("./connection");
const { User, Article } = require("../models");

db.once("open", async () => {
  await User.deleteMany();
  const users = await User.insertMany([
    {
      firstName: "Pamela",
      lastName: "Washington",
      email: "pamela@testmail.com",
      password: "password12345",
    },

    {
      firstName: "Elijah",
      lastName: "Holt",
      email: "eholt@testmail.com",
      password: "password12345",
    },
  ]);
  console.log("users seeded ✔️");

  await Article.deleteMany();

  const articles = await Article.insertMany([
    {
      title: "IOS16 Updates & Features",
      overview: "A breakdown of the latest changes in Apple IOS16 updates",
      image: "/images/ios_16.png",
      user: users[0],
    },
  ]);
  console.log("articles seeded ✔️");


  process.exit();
});
