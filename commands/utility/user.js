const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("information about user"),
  async execute(interaction) {
    await interaction.reply({
      content: `${interaction.user.username}, joined on ${interaction.member.joinedAt}.`,
      ephemeral: true,
    });
  },
};
