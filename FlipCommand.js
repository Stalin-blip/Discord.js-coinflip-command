  run(client, message, args) {
    let get_random = function (list) {
      return list[Math.floor((Math.random() * list.length))];
    }
    let list = ['Heads', 'Tails']
    let emb1 = new Discord.MessageEmbed()
      .setTitle("Flipping...")
    let emb2 = new Discord.MessageEmbed()
      .setThumbnail("https://hattonsoflondon.co.uk/wp-content/uploads/2020/05/steve-smith-Zvvu4zRKijE-unsplash.jpg")
      .setTitle("Landed on:")
      .setDescription(`\`\`\`${get_random(list)}\`\`\` `)

    message.channel.send(emb1)
    setTimeout(() => {
      message.channel.send(emb2)
    }, 20);
  }
