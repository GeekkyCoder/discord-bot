const { SlashCommandBuilder } = require("discord.js");

const quotes = {
  funny: [
    "I'm not lazy, I'm on energy-saving mode.",
    "I'm not clumsy, I'm just dancing with the floor.",
    "I'm not arguing, I'm just explaining why I'm right.",
  ],
  poetic: [
    "In the end, we only regret the chances we didn't take.",
    "The only way to do great work is to love what you do.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  ],
  humor: [
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
  ],
  code: [
    "It's not a bug, it's a feature!",
    "Why do programmers prefer dark mode? Less light, more bugs!",
    "Programming is like sex. One mistake and you have to support it for the rest of your life.",
  ],
  motivation: [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
  ],
};

function getRandomQuote(category) {
  const categoryQuotes = quotes[category.toLowerCase()];
  if (!categoryQuotes) return "Invalid category.";

  const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  return categoryQuotes[randomIndex];
}

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("quote")
    .setDescription("Get a random quote")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("Category of the quote")
        .setRequired(true)
        .addChoices(
          { name: "Funny", value: "funny" },
          { name: "Poetic", value: "poetic" },
          { name: "Humor", value: "humor" },
          { name: "Code", value: "code" },
          { name: "Motivation", value: "motivation" }
        )
    ),
  async execute(interaction) {
    const category = interaction.options.getString("category");
    const quote = getRandomQuote(category);

    await interaction.reply(quote);
  },
};
