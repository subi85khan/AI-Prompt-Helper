const searchInput = document.getElementById("searchInput");
const promptContainer = document.getElementById("promptContainer");

const prompts = [

  // ==================== PHOTO 1-15 ====================

  {
    category: "Photo",
    emoji: "📸",
    title: "Professional Portrait",
    prompt: "Create a highly realistic professional portrait of a young person, natural skin texture, detailed face, soft studio lighting, sharp focus, realistic photography, 4K quality."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Studio Portrait",
    prompt: "Create a realistic studio portrait of a young person, clean background, soft professional lighting, natural skin texture, detailed facial features, sharp focus, DSLR photography, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Cinematic Portrait",
    prompt: "Create a cinematic realistic portrait, dramatic soft lighting, natural skin texture, detailed eyes, sharp facial features, beautiful depth of field, professional photography, 4K quality."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Golden Hour Photo",
    prompt: "Create a highly realistic portrait during golden hour, warm sunlight, natural skin texture, beautiful background blur, cinematic atmosphere, detailed face, professional photography, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Outdoor Portrait",
    prompt: "Create a realistic outdoor portrait of a young person, natural environment, soft sunlight, realistic skin, detailed face, beautiful depth of field, professional camera photography, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Black Outfit Portrait",
    prompt: "Create a realistic portrait of a stylish young person wearing a premium black outfit, dramatic lighting, detailed face, realistic skin texture, cinematic background, 4K photography."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "White Outfit Portrait",
    prompt: "Create a realistic portrait of a young person wearing an elegant white outfit, soft natural lighting, clean background, detailed face, realistic skin texture, professional photography, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Luxury Portrait",
    prompt: "Create a luxury realistic portrait, premium fashion styling, elegant environment, cinematic lighting, detailed facial features, natural skin texture, shallow depth of field, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Close Up Face",
    prompt: "Create an ultra realistic close-up portrait, highly detailed eyes, natural skin pores, realistic facial texture, soft cinematic lighting, sharp focus, professional camera quality, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Traditional Portrait",
    prompt: "Create a realistic traditional portrait, elegant traditional clothing, beautiful cultural environment, natural lighting, detailed face, realistic skin texture, professional photography, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Rain Portrait",
    prompt: "Create a cinematic realistic portrait in light rain, wet atmosphere, dramatic lighting, natural skin texture, detailed face, realistic water drops, beautiful background blur, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Night Portrait",
    prompt: "Create a realistic night portrait with beautiful city lights in the background, cinematic lighting, natural skin texture, sharp face details, realistic photography, 4K quality."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Mirror Portrait",
    prompt: "Create a realistic stylish mirror portrait, modern outfit, natural pose, realistic reflection, detailed face, soft lighting, premium smartphone photography style, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Travel Portrait",
    prompt: "Create a realistic travel portrait of a young person at a beautiful destination, natural pose, scenic background, cinematic sunlight, detailed face, realistic photography, 4K."
  },
  {
    category: "Photo",
    emoji: "📸",
    title: "Magazine Portrait",
    prompt: "Create a premium magazine-style portrait, stylish pose, luxury fashion, professional studio lighting, detailed face, realistic skin texture, sharp focus, editorial photography, 4K."
  },

  // ==================== FASHION 16-30 ====================

  {
    category: "Fashion",
    emoji: "👗",
    title: "Luxury Fashion Look",
    prompt: "Create a stylish luxury fashion portrait, modern outfit, premium fashion style, confident pose, cinematic lighting, realistic skin, detailed clothes, professional photography, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Streetwear Style",
    prompt: "Create a realistic streetwear fashion portrait, oversized modern outfit, stylish sneakers, urban background, confident pose, cinematic lighting, detailed clothing, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Formal Suit Look",
    prompt: "Create a realistic luxury portrait wearing a perfectly fitted formal suit, elegant pose, premium background, cinematic lighting, realistic face and skin, professional fashion photography, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "White Suit Style",
    prompt: "Create a stylish realistic portrait wearing a premium white suit, confident pose, luxury environment, soft cinematic lighting, detailed fabric, realistic face, professional photography, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Black Suit Style",
    prompt: "Create a cinematic fashion portrait wearing a premium black suit, elegant pose, dramatic lighting, luxury background, realistic skin texture, detailed clothing, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Casual Fashion",
    prompt: "Create a realistic casual fashion portrait, stylish modern clothes, natural pose, outdoor environment, soft sunlight, detailed clothing, realistic face, professional photography, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Denim Fashion",
    prompt: "Create a realistic denim fashion portrait, stylish denim jacket and jeans, urban background, confident pose, cinematic lighting, detailed fabric texture, realistic photography, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Winter Fashion",
    prompt: "Create a realistic winter fashion portrait, premium jacket, stylish winter clothing, cold atmosphere, cinematic background, natural skin texture, detailed clothes, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Traditional Fashion",
    prompt: "Create a premium traditional fashion portrait, elegant traditional outfit, beautiful cultural background, cinematic lighting, realistic face, detailed fabric, professional photography, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Royal Fashion",
    prompt: "Create a realistic royal fashion portrait, luxurious outfit, elegant palace environment, dramatic cinematic lighting, detailed fabric and accessories, realistic face, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Black Hoodie Look",
    prompt: "Create a stylish realistic portrait wearing a premium black hoodie, urban street background, confident attitude, cinematic lighting, realistic skin, detailed clothing, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Luxury Jacket",
    prompt: "Create a cinematic fashion portrait wearing a premium luxury jacket, stylish pose, modern city background, dramatic lighting, realistic face and skin, detailed clothing, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Celebrity Style",
    prompt: "Create a high-end celebrity-inspired fashion portrait, premium modern outfit, confident pose, luxury environment, cinematic lighting, realistic facial details, editorial photography, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Minimal Fashion",
    prompt: "Create a clean realistic minimalist fashion portrait, simple premium outfit, elegant pose, soft studio lighting, natural skin texture, detailed clothing, professional photography, 4K."
  },
  {
    category: "Fashion",
    emoji: "👗",
    title: "Designer Outfit",
    prompt: "Create a premium designer fashion portrait, high-end outfit, luxury styling, confident pose, studio lighting, realistic skin texture, detailed fabric, professional editorial photography, 4K."
  },

  // ==================== BACKGROUND 31-45 ====================

  {
    category: "Background",
    emoji: "🌄",
    title: "Mountain Background",
    prompt: "Keep the person exactly the same and replace the background with beautiful realistic mountains, natural sunlight, cinematic atmosphere, depth of field, highly detailed, photorealistic."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Beach Background",
    prompt: "Keep the person exactly the same and replace the background with a beautiful tropical beach, ocean waves, natural sunlight, realistic shadows, cinematic atmosphere, photorealistic 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "City Background",
    prompt: "Keep the person exactly the same and replace the background with a modern city at night, beautiful lights, realistic reflections, cinematic atmosphere, natural shadows, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Luxury Hotel",
    prompt: "Keep the person exactly the same and replace the background with a luxurious modern hotel interior, premium lighting, realistic shadows, elegant atmosphere, photorealistic 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Forest Background",
    prompt: "Keep the person exactly the same and replace the background with a beautiful realistic green forest, natural sunlight, depth of field, realistic shadows, cinematic atmosphere, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Snow Mountain",
    prompt: "Keep the person exactly the same and replace the background with snowy mountains, realistic snow, soft daylight, natural shadows, cinematic atmosphere, detailed environment, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Sunset Background",
    prompt: "Keep the person exactly the same and replace the background with a beautiful sunset sky, warm golden light, realistic clouds, natural shadows, cinematic atmosphere, photorealistic 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Luxury Car Background",
    prompt: "Keep the person exactly the same and place them beside a premium luxury car, realistic city environment, cinematic lighting, natural shadows, detailed background, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Royal Palace",
    prompt: "Keep the person exactly the same and replace the background with a magnificent royal palace, luxurious architecture, cinematic lighting, realistic shadows, highly detailed, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Village Background",
    prompt: "Keep the person exactly the same and replace the background with a beautiful realistic Indian village environment, natural sunlight, greenery, realistic atmosphere, detailed photography, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Rainy Street",
    prompt: "Keep the person exactly the same and replace the background with a cinematic rainy city street, wet road reflections, street lights, realistic atmosphere, natural shadows, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Desert Background",
    prompt: "Keep the person exactly the same and replace the background with a realistic golden desert, dramatic sky, warm sunlight, natural shadows, cinematic atmosphere, photorealistic 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Flower Garden",
    prompt: "Keep the person exactly the same and replace the background with a beautiful colorful flower garden, soft sunlight, realistic flowers, natural shadows, cinematic depth of field, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Sky Background",
    prompt: "Keep the person exactly the same and replace the background with a beautiful dramatic blue sky and soft clouds, natural lighting, realistic shadows, cinematic photography, 4K."
  },
  {
    category: "Background",
    emoji: "🌄",
    title: "Luxury Bedroom",
    prompt: "Keep the person exactly the same and replace the background with a premium luxury bedroom, elegant interior, soft warm lighting, realistic shadows, detailed environment, 4K."
  },

  // ==================== COUPLE 46-60 ====================

  {
    category: "Couple",
    emoji: "❤️",
    title: "Romantic Couple",
    prompt: "Create a realistic romantic couple portrait, natural expressions, beautiful outdoor location, soft golden hour lighting, cinematic photography, realistic faces, detailed clothes, 4K quality."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Couple Walking",
    prompt: "Create a realistic romantic couple walking together, natural body language, beautiful outdoor environment, golden hour sunlight, cinematic composition, realistic faces, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Beach Couple",
    prompt: "Create a realistic romantic couple at a beautiful beach, natural expressions, ocean background, sunset lighting, cinematic atmosphere, realistic faces and clothes, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Rain Couple",
    prompt: "Create a cinematic realistic romantic couple standing together in light rain, emotional expressions, beautiful city lights, wet atmosphere, realistic faces, dramatic lighting, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Sunset Couple",
    prompt: "Create a romantic couple portrait during sunset, warm golden light, beautiful sky, natural expressions, realistic faces, cinematic photography, soft background blur, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Traditional Couple",
    prompt: "Create a realistic traditional couple portrait, elegant traditional clothing, beautiful cultural environment, natural expressions, cinematic lighting, detailed faces and clothes, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Wedding Couple",
    prompt: "Create a realistic elegant wedding couple portrait, beautiful wedding outfits, romantic decoration, cinematic lighting, realistic faces, detailed clothing, professional photography, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Coffee Date Couple",
    prompt: "Create a realistic romantic couple enjoying a coffee date, cozy cafe environment, natural expressions, warm lighting, cinematic photography, realistic faces, detailed clothes, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Mountain Couple",
    prompt: "Create a realistic romantic couple in the mountains, beautiful scenic landscape, natural poses, soft sunlight, cinematic atmosphere, realistic faces, detailed clothing, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Car Couple",
    prompt: "Create a realistic stylish couple standing beside a luxury car, modern city background, romantic mood, cinematic lighting, natural expressions, realistic faces, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Candid Couple",
    prompt: "Create a natural candid photograph of a romantic couple, genuine smiles, relaxed body language, beautiful outdoor location, soft natural light, realistic faces, professional photography, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Park Couple",
    prompt: "Create a realistic romantic couple in a beautiful green park, natural expressions, soft sunlight, peaceful atmosphere, cinematic depth of field, realistic faces, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Night Couple",
    prompt: "Create a cinematic romantic couple portrait at night, beautiful city lights, dramatic soft lighting, natural expressions, realistic faces, detailed clothes, professional photography, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Luxury Couple",
    prompt: "Create a premium luxury couple portrait, elegant outfits, luxury hotel environment, romantic pose, cinematic lighting, realistic faces and skin texture, professional photography, 4K."
  },
  {
    category: "Couple",
    emoji: "❤️",
    title: "Travel Couple",
    prompt: "Create a realistic romantic travel couple portrait at a beautiful destination, natural pose, scenic background, cinematic sunlight, realistic faces, detailed clothing, 4K."
  },

  // ==================== VIDEO 61-75 ====================

  {
    category: "Video",
    emoji: "🎬",
    title: "Cinematic Walking Video",
    prompt: "Create a cinematic realistic video of a person walking confidently toward the camera, natural body movement, realistic facial expression, smooth camera movement, cinematic lighting, 4K quality."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Slow Motion Walk",
    prompt: "Create a cinematic slow-motion video of a stylish person walking confidently, natural body movement, dramatic lighting, smooth camera tracking, realistic face, high detail, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Fashion Reel",
    prompt: "Create a realistic fashion reel of a stylish person posing and walking, smooth camera movement, modern city background, cinematic lighting, natural movement, professional fashion video, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Car Cinematic Video",
    prompt: "Create a cinematic video of a person standing beside a luxury car, natural movement, dramatic lighting, smooth camera motion, realistic environment, premium commercial style, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Beach Walking Video",
    prompt: "Create a cinematic realistic video of a person walking on a beautiful beach, ocean waves, natural movement, golden sunlight, smooth camera tracking, realistic environment, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Rain Walking Video",
    prompt: "Create a cinematic video of a person walking through a rainy city street, realistic rain, wet reflections, natural body movement, smooth camera motion, dramatic lighting, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Attitude Reel",
    prompt: "Create a stylish cinematic attitude reel, confident person walking toward the camera, natural body movement, dramatic lighting, smooth camera tracking, urban background, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Couple Video",
    prompt: "Create a romantic cinematic video of a couple walking together, natural expressions, realistic body movement, beautiful background, golden hour lighting, smooth camera movement, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Dance Video",
    prompt: "Create a realistic cinematic dance video, natural body movement, stylish outfit, smooth camera motion, dynamic lighting, realistic face, professional music-video style, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Bike Cinematic Video",
    prompt: "Create a cinematic realistic video of a stylish person riding a premium motorcycle, natural movement, realistic road environment, smooth tracking camera, dramatic lighting, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Mountain Video",
    prompt: "Create a cinematic realistic video of a person standing and walking in beautiful mountains, natural body movement, scenic landscape, soft sunlight, smooth camera movement, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Night City Video",
    prompt: "Create a cinematic night city video of a stylish person walking, colorful city lights, natural body movement, smooth camera tracking, realistic reflections, dramatic atmosphere, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Hero Entry Video",
    prompt: "Create a cinematic hero entry video, confident person walking toward the camera, dramatic lighting, natural body movement, wind effect, smooth camera movement, high-detail 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Luxury Fashion Video",
    prompt: "Create a premium luxury fashion video, stylish model walking confidently, elegant outfit, studio lighting, smooth cinematic camera movement, realistic face and clothes, 4K."
  },
  {
    category: "Video",
    emoji: "🎬",
    title: "Sunset Cinematic Video",
    prompt: "Create a cinematic sunset video of a person walking naturally, beautiful golden sky, warm sunlight, smooth camera movement, realistic environment, cinematic atmosphere, 4K."
  },

  // ==================== ATTITUDE 76-90 ====================

  {
    category: "Attitude",
    emoji: "😎",
    title: "Attitude Portrait",
    prompt: "Create a realistic stylish portrait of a confident person with an attitude pose, modern outfit, dramatic lighting, cinematic background, sharp facial details, professional photography, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "King Attitude",
    prompt: "Create a powerful realistic portrait of a confident person with a king-like attitude, luxury outfit, dramatic lighting, premium background, sharp face details, cinematic photography, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Street Attitude",
    prompt: "Create a realistic street-style attitude portrait, confident pose, modern outfit, urban background, dramatic lighting, sharp facial details, cinematic photography, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Black Outfit Attitude",
    prompt: "Create a cinematic attitude portrait wearing a premium black outfit, confident expression, dramatic lighting, dark luxury background, realistic skin texture, sharp facial details, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Sunglasses Attitude",
    prompt: "Create a realistic stylish portrait of a confident person wearing premium sunglasses, modern outfit, urban background, cinematic lighting, detailed face and clothes, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Bike Attitude",
    prompt: "Create a cinematic attitude portrait of a confident person standing beside a premium motorcycle, stylish outfit, urban background, dramatic lighting, realistic face, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Car Attitude",
    prompt: "Create a realistic attitude portrait of a confident person beside a luxury car, modern city background, stylish outfit, dramatic cinematic lighting, sharp facial details, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Royal Attitude",
    prompt: "Create a powerful royal attitude portrait, luxurious outfit, elegant palace background, confident expression, dramatic cinematic lighting, realistic face and skin, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Dark Attitude",
    prompt: "Create a cinematic dark attitude portrait, confident expression, black outfit, dramatic shadows, dark urban background, realistic skin texture, sharp facial details, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Luxury Attitude",
    prompt: "Create a premium luxury attitude portrait, designer outfit, confident pose, luxury environment, cinematic lighting, realistic face, detailed clothing, professional photography, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Walking Attitude",
    prompt: "Create a realistic cinematic portrait of a confident person walking with attitude, modern outfit, urban background, dramatic lighting, natural body movement, sharp facial details, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Casual Attitude",
    prompt: "Create a stylish realistic casual attitude portrait, modern casual outfit, confident pose, natural outdoor background, cinematic lighting, realistic face, detailed clothes, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "White Outfit Attitude",
    prompt: "Create a cinematic attitude portrait wearing a premium white outfit, confident pose, luxury background, soft dramatic lighting, realistic skin texture, sharp facial details, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Night Attitude",
    prompt: "Create a realistic night attitude portrait, confident person under city lights, stylish outfit, dramatic cinematic lighting, realistic face, beautiful background blur, 4K."
  },
  {
    category: "Attitude",
    emoji: "😎",
    title: "Boss Attitude",
    prompt: "Create a powerful boss-style attitude portrait, confident person wearing a premium formal outfit, luxury office background, cinematic lighting, realistic face, professional photography, 4K."
  }

];


// ==================== DISPLAY PROMPTS ====================

function displayPrompts(promptList) {
  promptContainer.innerHTML = "";

  if (promptList.length === 0) {
    promptContainer.innerHTML = `
      <div class="no-results">
        <h2>😔 No prompts found</h2>
        <p>Try another search or category.</p>
      </div>
    `;
    return;
  }

  promptList.forEach(item => {
    const card = document.createElement("div");

    card.className = "prompt-card";
    card.dataset.category = item.category;

    card.innerHTML = `
      <span>${item.emoji} ${item.category}</span>
      <h2>${item.title}</h2>
      <p class="prompt">${item.prompt}</p>
      <button onclick="copyPrompt(this)">📋 Copy Prompt</button>
    `;

    promptContainer.appendChild(card);
  });
}


// ==================== CATEGORY FILTER ====================

function filterPrompts(category) {

  const filtered = category === "All"
    ? prompts
    : prompts.filter(item => item.category === category);

  displayPrompts(filtered);
}


// ==================== SEARCH ====================

searchInput.addEventListener("input", function () {

  const searchText = this.value.toLowerCase().trim();

  const filtered = prompts.filter(item =>
    item.title.toLowerCase().includes(searchText) ||
    item.category.toLowerCase().includes(searchText) ||
    item.prompt.toLowerCase().includes(searchText)
  );

  displayPrompts(filtered);
});


// ==================== COPY PROMPT ====================

function copyPrompt(button) {

  const promptText = button.parentElement
    .querySelector(".prompt")
    .innerText;

  navigator.clipboard.writeText(promptText)
    .then(() => {

      const oldText = button.innerText;

      button.innerText = "✅ Copied!";

      setTimeout(() => {
        button.innerText = oldText;
      }, 1500);

    })
    .catch(() => {
      alert("Prompt copy nahi ho paya. Please manually copy karein.");
    });
}


// ==================== LOAD ALL PROMPTS ====================

displayPrompts(prompts);
