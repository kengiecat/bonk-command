// netlify/functions/bonk.js
// This file goes in: netlify/functions/bonk.js

exports.handler = async (event, context) => {
  // Full original variable lists
  const bonkItems = [
    "a vintage diving helmet", "a suspicious clam", "a haunted CRT monitor", 
    "a soggy paperback", "a VHS copy of The Abyss", "an angry seahorse", 
    "the concept of tax season", "a moss-covered brick", "an expired can of tuna", 
    "a polaroid of someone else's grandma", "a bioluminescent jellyfish", 
    "the shell of a typewriter", "a rogue roomba", "a jar of mystery liquid", 
    "a feral tamagotchi", "an ikea allen key (size unknown)", "an empty pringles can", 
    "a fish-shaped soy sauce packet", "a chipped teacup", "a disco ball barnacle", 
    "a pirate radio signal", "a floppy disk labelled \"DO NOT OPEN\"", "a distant foghorn", 
    "a taxidermied pufferfish", "a uranium ashtray", "some wind-up chattering teeth", 
    "a half-deflated beach ball", "a lava lamp full of soup", "a jar of old marbles", 
    "a feral seagull", "a thrifted trench coat", "a cursed snow globe", 
    "an old submarine hatch", "a roll of bubble wrap", "a mismatched sock", 
    "a secret government folder", "a crab wearing a top hat", "a hand-drawn treasure map", 
    "a 90s waterproof disposable camera", "a damp crossword puzzle", "an inflatable flamingo", 
    "a plastic fork from a forgotten picnic", "a rubber duck filled with concrete", 
    "a bottle of questionable sunscreen", "a gelatin mold", "a fish tank castle", 
    "a single roller skate", "an unlabelled cassette tape", "an out-of-order payphone"
  ];

  const consequences = [
    "you're now legally a lighthouse.", "expect a letter in 3–5 business days.", 
    "your shoes will never fully dry.", "you smell faintly of shrimp forever.", 
    "you have gained +1 charisma, -3 perception.", "the tides have claimed your taxes.", 
    "your save file is corrupted.", "the moon is now aware of you.", 
    "you have been entered into the raffle.", "your password has been changed.", 
    "prepare for minor hauntings.", "you've been scheduled for a meeting with \"management.\"", 
    "your tea will always be slightly too hot.", "someone is telling your story wrong.", 
    "your dreams will smell like seaweed.", "the elevator music gets louder.", 
    "you've been signed up for a pottery class against your will.", 
    "you are now banned from the local aquarium.", "you've unlocked the \"drippy\" achievement.", 
    "you are followed by a single gull for 48 hours.", "the floor is wet and nobody knows why.", 
    "you will be mildly inconvenienced next Tuesday.", 
    "you've been put on a watchlist (no details given).", "your coffee is now decaf.", 
    "the Wi-Fi will flicker when you speak.", "your shadow is missing for the rest of the day.", 
    "the NPCs now recognize you.", "a crab owes you money.", "you sneeze glitter for a week.", 
    "you've been drafted into the kelp wars.", "the static is getting louder.", 
    "all your spoons are now slightly bent.", "your reflection is running late.", 
    "you've been cursed with perpetual damp socks.", "your doorbell will meow for a month.", 
    "you can only speak in riddles until sundown.", "the vending machine now knows your name.", 
    "you've been enrolled in fish school.", "your favorite pen has vanished.", 
    "the seafloor whispers your middle name.", "you can't sit in the same chair twice.", 
    "your houseplants are judging you.", "the mailman knows too much.", 
    "the lights flicker when you hum.", "you're haunted by an aggressively polite ghost.", 
    "your keys are now somewhere \"safe.\"", "you smell like low tide in a good way.", 
    "your save slot is overwritten with sea shanties.", "the clouds are gossiping about you.", 
    "your name is now on the list.", "-10000 aura."
  ];

  // Get random items
  const item = bonkItems[Math.floor(Math.random() * bonkItems.length)];
  const consequence = consequences[Math.floor(Math.random() * consequences.length)];
  
  // Build message
  const message = `⭒˚∘ you have been bonked by ${item}... ouch. ${consequence} ∘˚⭒`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: message
  };
};
