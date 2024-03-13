const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),
  async execute(interaction) {
    await interaction.reply({
      content: `${interaction.guild.name},${interaction.guild.memberCount} members.`,
      ephemeral: true,
    });
  },
};
