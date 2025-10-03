import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Clear existing data
  await prisma.review.deleteMany()
  await prisma.savedItem.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.festival.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.accommodation.deleteMany()
  await prisma.itineraryDay.deleteMany()
  await prisma.itinerary.deleteMany()
  await prisma.guide.deleteMany()
  await prisma.provider.deleteMany()
  await prisma.ethnicGroup.deleteMany()
  await prisma.destination.deleteMany()
  await prisma.user.deleteMany()

  console.log('🗑️  Cleared existing data')

  // Create Destinations
  const lijiang = await prisma.destination.create({
    data: {
      name: 'Lijiang Old Town',
      nameZh: '丽江古城',
      slug: 'lijiang-old-town',
      region: 'Northwest Yunnan',
      description: 'A UNESCO World Heritage Site, Lijiang Old Town is a remarkably well-preserved ancient town built in the late Song Dynasty. Its intricate system of waterways and bridges reflects the influences of Naxi culture and architecture.',
      descriptionZh: '联合国教科文组织世界遗产，丽江古城是一座保存完好的古镇，建于宋末。其复杂的水系和桥梁体系反映了纳西文化和建筑的影响。',
      latitude: 26.8721,
      longitude: 100.2280,
      altitude: 2400,
      bestSeasons: ['Spring (March-May)', 'Autumn (September-November)'],
      tags: ['UNESCO', 'Ancient Town', 'Naxi Culture', 'Architecture'],
      highlights: [
        'Ancient Naxi architecture and canals',
        'Dongba culture and pictographic script',
        'Jade Dragon Snow Mountain views',
        'Traditional music performances',
        'Local handicraft markets'
      ],
      images: [
        'https://images.unsplash.com/photo-1599498209715-b1c7f0f0e0c3',
        'https://images.unsplash.com/photo-1548013146-72479768bada'
      ],
      coverImage: 'https://images.unsplash.com/photo-1599498209715-b1c7f0f0e0c3',
      featured: true,
    },
  })

  const dali = await prisma.destination.create({
    data: {
      name: 'Dali Ancient City',
      nameZh: '大理古城',
      slug: 'dali-ancient-city',
      region: 'Central Yunnan',
      description: 'Dali Ancient City sits between the Cangshan Mountains and Erhai Lake. Known for its well-preserved Bai minority architecture, marble craftsmanship, and the famous Three Pagodas.',
      descriptionZh: '大理古城位于苍山和洱海之间。以保存完好的白族建筑、大理石工艺和著名的三塔而闻名。',
      latitude: 25.6066,
      longitude: 100.2680,
      altitude: 1900,
      bestSeasons: ['Spring (March-May)', 'Autumn (September-November)'],
      tags: ['Bai Culture', 'Mountains', 'Lake', 'Historic'],
      highlights: [
        'Three Pagodas of Chongsheng Temple',
        'Bai tie-dye handicrafts',
        'Erhai Lake cycling',
        'Cangshan Mountain hiking',
        'Ancient city gates and walls'
      ],
      images: [
        'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      ],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      featured: true,
    },
  })

  const shangriLa = await prisma.destination.create({
    data: {
      name: 'Shangri-La',
      nameZh: '香格里拉',
      slug: 'shangri-la',
      region: 'Northwest Yunnan',
      description: 'High in the Himalayas, Shangri-La is a Tibetan cultural hub with stunning monasteries, prayer flags, yaks, and snow-capped peaks. The spiritual heart of Yunnan.',
      descriptionZh: '在喜马拉雅山脉高处，香格里拉是藏族文化中心，拥有壮丽的寺院、经幡、牦牛和雪山。云南的精神之心。',
      latitude: 27.8269,
      longitude: 99.7065,
      altitude: 3280,
      bestSeasons: ['May-October (avoid winter snow)'],
      tags: ['Tibetan Culture', 'Buddhism', 'Mountains', 'Highland'],
      highlights: [
        'Songzanlin Monastery (Little Potala)',
        'Pudacuo National Park',
        'Napa Lake grasslands',
        'Tibetan villages and homestays',
        'Meili Snow Mountain pilgrimage'
      ],
      images: [
        'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      ],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      featured: true,
    },
  })

  const kunming = await prisma.destination.create({
    data: {
      name: 'Kunming',
      nameZh: '昆明',
      slug: 'kunming',
      region: 'Central Yunnan',
      description: 'The Spring City - Kunming enjoys mild weather year-round. Gateway to Yunnan with the famous Stone Forest, flower markets, and diverse street food.',
      descriptionZh: '春城昆明全年气候温和。云南的门户，拥有著名的石林、花市和多样的街头美食。',
      latitude: 25.0406,
      longitude: 102.7129,
      altitude: 1890,
      bestSeasons: ['Year-round (Spring City)'],
      tags: ['Capital', 'Urban', 'Stone Forest', 'Food'],
      highlights: [
        'Stone Forest UNESCO site',
        'Green Lake Park',
        'Flower and bird market',
        'Cross-bridge rice noodles',
        'Western Hills and Dragon Gate'
      ],
      images: [
        'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      ],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      featured: true,
    },
  })

  const xishuangbanna = await prisma.destination.create({
    data: {
      name: 'Xishuangbanna',
      nameZh: '西双版纳',
      slug: 'xishuangbanna',
      region: 'Southern Yunnan',
      description: 'Tropical paradise on the border with Laos and Myanmar. Home to the Dai people, wild elephants, rainforests, and the famous Water Splashing Festival.',
      descriptionZh: '与老挝和缅甸接壤的热带天堂。傣族的家园，野生大象、雨林和著名的泼水节。',
      latitude: 22.0115,
      longitude: 100.7979,
      altitude: 550,
      bestSeasons: ['November-May (dry season)', 'April (Water Festival)'],
      tags: ['Tropical', 'Dai Culture', 'Wildlife', 'Rainforest'],
      highlights: [
        'Wild Elephant Valley',
        'Dai bamboo houses and temples',
        'Tropical botanical gardens',
        'Mekong River cruises',
        'Water Splashing Festival (April)'
      ],
      images: [
        'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      ],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      featured: true,
    },
  })

  console.log('✅ Created destinations')

  // Create Ethnic Groups
  const naxi = await prisma.ethnicGroup.create({
    data: {
      name: 'Naxi',
      nameZh: '纳西族',
      slug: 'naxi',
      population: '309,000',
      mainRegions: ['Lijiang', 'Shangri-La', 'Dali'],
      description: 'The Naxi people have a rich cultural heritage with their unique Dongba pictographic script, one of the world\'s few living pictographic writing systems. They traditionally follow a matriarchal social structure.',
      descriptionZh: '纳西族拥有丰富的文化遗产，包括独特的东巴象形文字，是世界上仅存的活着的象形文字系统之一。他们传统上遵循母系社会结构。',
      languages: ['Naxi', 'Mandarin Chinese'],
      religion: 'Dongba (shamanism), Tibetan Buddhism',
      culturalTraits: ['Dongba Religion', 'Naxi Ancient Music', 'Matriarchal Traditions'],
      traditionalCrafts: ['Dongba painting', 'Wood carving', 'Embroidery'],
      costume: 'Sheepskin cape with seven embroidered stars',
      architecture: 'Wooden houses with courtyards and tile roofs',
      cuisine: ['Naxi hotpot', 'Baba bread', 'Chickpea jelly'],
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
    },
  })

  const bai = await prisma.ethnicGroup.create({
    data: {
      name: 'Bai',
      nameZh: '白族',
      slug: 'bai',
      population: '1.9 million',
      mainRegions: ['Dali', 'Eryuan', 'Jianchuan'],
      description: 'The Bai people are known for their marble craftsmanship, tie-dye textile art, and architectural heritage. They celebrate the famous March Fair, one of China\'s oldest trade festivals.',
      descriptionZh: '白族以大理石工艺、扎染纺织艺术和建筑遗产而闻名。他们庆祝著名的三月街，中国最古老的贸易节日之一。',
      languages: ['Bai', 'Mandarin Chinese'],
      religion: 'Buddhism, Benzhu worship',
      culturalTraits: ['Tie-Dye Art', 'March Fair Festival', 'Architectural Heritage'],
      traditionalCrafts: ['Tie-dye', 'Marble carving', 'Silver jewelry'],
      costume: 'White clothing with red embroidered vest',
      architecture: 'Three courtyards with painted wood',
      cuisine: ['Erkuai rice cakes', 'Raw fish salad', 'Milk fan'],
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
    },
  })

  const yi = await prisma.ethnicGroup.create({
    data: {
      name: 'Yi',
      nameZh: '彝族',
      slug: 'yi',
      population: '5 million',
      mainRegions: ['Throughout Yunnan', 'Chuxiong', 'Honghe'],
      description: 'The Yi people have their own calendar system and written script. Famous for the spectacular Torch Festival and their distinctive black, red, and yellow traditional costumes.',
      descriptionZh: '彝族有自己的历法系统和文字。以壮观的火把节和独特的黑、红、黄传统服饰而闻名。',
      languages: ['Yi', 'Mandarin Chinese'],
      religion: 'Animism, Ancestor worship',
      culturalTraits: ['Torch Festival', 'Yi Calendar', 'Fire Worship'],
      traditionalCrafts: ['Lacquerware', 'Silver work', 'Embroidery'],
      costume: 'Black clothing with colorful embroidery',
      architecture: 'Earth-walled houses',
      cuisine: ['Tuotuo meat', 'Buckwheat cakes', 'Yi wine'],
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
    },
  })

  const dai = await prisma.ethnicGroup.create({
    data: {
      name: 'Dai',
      nameZh: '傣族',
      slug: 'dai',
      population: '1.2 million',
      mainRegions: ['Xishuangbanna', 'Dehong'],
      description: 'The Dai people practice Theravada Buddhism and have strong cultural ties to Southeast Asia. Famous for the Water Splashing Festival, peacock dance, and distinctive bamboo architecture.',
      descriptionZh: '傣族信仰南传佛教，与东南亚有密切的文化联系。以泼水节、孔雀舞和独特的竹楼建筑而闻名。',
      languages: ['Dai', 'Mandarin Chinese'],
      religion: 'Theravada Buddhism',
      culturalTraits: ['Water Splashing Festival', 'Peacock Dance', 'Bamboo Houses'],
      traditionalCrafts: ['Bamboo weaving', 'Pottery', 'Brocade'],
      costume: 'Colorful sarongs and tight blouses',
      architecture: 'Stilted bamboo houses',
      cuisine: ['Sour bamboo shoots', 'Pineapple rice', 'Grilled fish'],
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
    },
  })

  const tibetan = await prisma.ethnicGroup.create({
    data: {
      name: 'Tibetan',
      nameZh: '藏族',
      slug: 'tibetan',
      population: '150,000 in Yunnan',
      mainRegions: ['Shangri-La', 'Deqen'],
      description: 'Yunnan Tibetans maintain strong Buddhist traditions with magnificent monasteries. They practice highland pastoralism, horse racing, and create intricate Thangka paintings.',
      descriptionZh: '云南藏族保持着强大的佛教传统和宏伟的寺院。他们从事高原畜牧业、赛马，并创作精美的唐卡画。',
      languages: ['Tibetan', 'Mandarin Chinese'],
      religion: 'Tibetan Buddhism',
      culturalTraits: ['Tibetan Buddhism', 'Thangka Painting', 'Horse Racing'],
      traditionalCrafts: ['Thangka', 'Wood carving', 'Metalwork'],
      costume: 'Thick robes with colorful sashes',
      architecture: 'Multi-story wooden houses with prayer rooms',
      cuisine: ['Tsampa', 'Butter tea', 'Yak meat'],
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
    },
  })

  console.log('✅ Created ethnic groups')

  // Create Festivals
  await prisma.festival.create({
    data: {
      name: 'Water Splashing Festival',
      nameZh: '泼水节',
      slug: 'water-splashing-festival',
      ethnicGroupId: dai.id,
      description: 'The Dai New Year celebration where people splash water on each other to wash away bad luck and pray for good fortune. A three-day festival with dragon boat races, peacock dances, and lantern releases.',
      descriptionZh: '傣族新年庆典，人们互相泼水以洗去厄运并祈求好运。为期三天的节日，有龙舟赛、孔雀舞和放灯活动。',
      significance: 'Marks the Dai New Year and symbolizes purification',
      activities: ['Water splashing', 'Dragon boat racing', 'Peacock dance', 'Lantern floating', 'Temple visits'],
      location: ['Xishuangbanna', 'Dehong'],
      dateType: 'FIXED',
      fixedDate: 'April 13-15',
      approximateTime: 'Mid-April',
      duration: '3 days',
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
    },
  })

  await prisma.festival.create({
    data: {
      name: 'Torch Festival',
      nameZh: '火把节',
      slug: 'torch-festival',
      ethnicGroupId: yi.id,
      description: 'The Yi people\'s most important festival featuring torch processions, wrestling, horse racing, and bullfighting. Celebrates the victory of good over evil with spectacular fire displays.',
      descriptionZh: '彝族最重要的节日，有火把游行、摔跤、赛马和斗牛。用壮观的火焰表演庆祝善战胜恶。',
      significance: 'Celebrates harvest and victory of light over darkness',
      activities: ['Torch processions', 'Wrestling', 'Horse racing', 'Bullfighting', 'Traditional dancing'],
      location: ['Chuxiong', 'Shilin', 'Various Yi regions'],
      dateType: 'LUNAR',
      lunarDate: '24th day of 6th lunar month',
      approximateTime: 'Late July',
      duration: '3 days',
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
    },
  })

  await prisma.festival.create({
    data: {
      name: 'March Fair',
      nameZh: '三月街',
      slug: 'march-fair',
      ethnicGroupId: bai.id,
      description: 'One of China\'s oldest trade fairs dating back over 1000 years. A week-long celebration with horse racing, traditional performances, handicraft markets, and cultural exchanges.',
      descriptionZh: '中国最古老的贸易集市之一，距今已有1000多年历史。为期一周的庆典，有赛马、传统表演、手工艺市场和文化交流。',
      significance: 'Ancient trade festival and cultural gathering',
      activities: ['Horse racing', 'Handicraft fair', 'Traditional opera', 'Archery', 'Wrestling'],
      location: ['Dali Ancient City'],
      dateType: 'LUNAR',
      lunarDate: '15th day of 3rd lunar month',
      approximateTime: 'Late April',
      duration: '7-10 days',
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
    },
  })

  console.log('✅ Created festivals')

  // Create some experiences
  await prisma.experience.create({
    data: {
      title: 'Naxi Cultural Walking Tour',
      titleZh: '纳西文化徒步游',
      slug: 'naxi-cultural-walking-tour',
      category: 'CULTURAL_IMMERSION',
      description: 'Explore Lijiang Old Town with a local Naxi guide. Visit traditional workshops, learn about Dongba script, and hear ancient music performances. Includes tea ceremony and local snacks.',
      descriptionZh: '与当地纳西向导一起探索丽江古城。参观传统工坊，了解东巴文字，聆听古乐表演。包含茶道和当地小吃。',
      duration: '3 hours',
      difficulty: 'EASY',
      price: 280,
      currency: 'CNY',
      minGroupSize: 2,
      maxGroupSize: 8,
      includes: ['Local Naxi guide', 'Tea ceremony', 'Snacks', 'Workshop visits'],
      excludes: ['Meals', 'Personal expenses'],
      requirements: ['Comfortable walking shoes', 'Sun protection'],
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      featured: true,
      destinationId: lijiang.id,
      ethnicGroupId: naxi.id,
    },
  })

  await prisma.experience.create({
    data: {
      title: 'Bai Tie-Dye Workshop',
      titleZh: '白族扎染工作坊',
      slug: 'bai-tie-dye-workshop',
      category: 'HANDICRAFT',
      description: 'Learn the ancient Bai art of tie-dyeing in a traditional Dali workshop. Create your own unique scarf or handkerchief using natural indigo dye. Take home your handmade creation.',
      descriptionZh: '在大理传统工坊学习古老的白族扎染艺术。使用天然靛蓝染料创作独特的围巾或手帕。带回您的手工作品。',
      duration: '2 hours',
      difficulty: 'EASY',
      price: 180,
      currency: 'CNY',
      minGroupSize: 1,
      maxGroupSize: 10,
      includes: ['Materials', 'Instruction', 'Your finished product'],
      excludes: ['Transportation', 'Additional purchases'],
      requirements: ['None - suitable for all ages'],
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      featured: true,
      destinationId: dali.id,
      ethnicGroupId: bai.id,
    },
  })

  await prisma.experience.create({
    data: {
      title: 'Tibetan Monastery Experience',
      titleZh: '藏族寺院体验',
      slug: 'tibetan-monastery-experience',
      category: 'SPIRITUAL',
      description: 'Visit Songzanlin Monastery with a Tibetan guide. Learn about Tibetan Buddhism, observe morning prayers, explore the temple complex, and enjoy butter tea with monks.',
      descriptionZh: '与藏族向导参观松赞林寺。了解藏传佛教，观摩早课，探索寺庙建筑群，与僧侣共享酥油茶。',
      duration: '4 hours',
      difficulty: 'MODERATE',
      price: 380,
      currency: 'CNY',
      minGroupSize: 2,
      maxGroupSize: 6,
      includes: ['Tibetan guide', 'Monastery entrance', 'Butter tea', 'Cultural explanation'],
      excludes: ['Lunch', 'Donations (optional)'],
      requirements: ['Respectful clothing', 'Altitude awareness (3280m)'],
      images: [],
      coverImage: 'https://images.unsplash.com/photo-1585306616919-fa0ff4be6e1f',
      featured: true,
      destinationId: shangriLa.id,
      ethnicGroupId: tibetan.id,
    },
  })

  console.log('✅ Created experiences')

  // Create a sample user
  const user = await prisma.user.create({
    data: {
      email: 'traveler@example.com',
      name: 'Jane Traveler',
      country: 'United States',
      preferredLang: 'en',
    },
  })

  console.log('✅ Created sample user')

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
