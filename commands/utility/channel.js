const { SlashCommandBuilder, channelLink } = require("discord.js");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("channel")
    .setDescription("information about channel")
    .addChannelOption((option) =>
      option.setName("channel-name").setDescription("The channel to echo into")
    ),
  async execute(interaction) {
    const channel = interaction.options.getChannel("channel");
    if (!channel) return interaction.reply("Please specify a valid channel.");

    await interaction.reply({
      content: `here: ${channelLink(channel.id)}`,
    });
  },
};
