export interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  titleZh?: string
  description: string
  location?: string
  photographer?: string
  category: 'landscapes' | 'culture' | 'festivals' | 'architecture' | 'people' | 'wildlife'
}

export const galleryImages: GalleryImage[] = [
  {
    "id": "1",
    "src": "https://images.pexels.com/photos/10521160/pexels-photo-10521160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Breathtaking view of a snow-covered mountain amidst clouds, showcasing winter beauty.",
    "title": "Jade Dragon Snow Mountain",
    "titleZh": "玉龙雪山",
    "description": "5,596-meter peak with glaciers",
    "location": "Lijiang",
    "photographer": "Lu Li",
    "category": "landscapes"
  },
  {
    "id": "2",
    "src": "https://images.pexels.com/photos/1060267/pexels-photo-1060267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Breathtaking mountain landscape with snow-covered peaks in Yunnan, China.",
    "title": "Haba Snow Mountain",
    "titleZh": "哈巴雪山",
    "description": "5,396-meter peak near Shangri-La",
    "location": "Shangri-La",
    "photographer": "Gene Taylor",
    "category": "landscapes"
  },
  {
    "id": "3",
    "src": "https://images.pexels.com/photos/10521157/pexels-photo-10521157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Breathtaking view of snowcapped mountains in Yunnan, China captured in clear winter skies.",
    "title": "Lugu Lake",
    "titleZh": "泸沽湖",
    "description": "Alpine lake at 2,690m elevation",
    "location": "Lugu Lake",
    "photographer": "Lu Li",
    "category": "landscapes"
  },
  {
    "id": "4",
    "src": "https://images.pexels.com/photos/10521158/pexels-photo-10521158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Stunning view of snow-capped mountains in Yunnan, depicting winter's beauty and nature's power.",
    "title": "Stone Forest",
    "titleZh": "石林",
    "description": "270 million-year-old karst formations",
    "location": "Kunming",
    "photographer": "Lu Li",
    "category": "landscapes"
  },
  {
    "id": "5",
    "src": "https://images.pexels.com/photos/33970873/pexels-photo-33970873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Serene view of mountains and blue sky over a calm lake, capturing natural beauty.",
    "title": "Tiger Leaping Gorge",
    "titleZh": "虎跳峡",
    "description": "One of the world's deepest gorges",
    "location": "Lijiang",
    "photographer": "chao he",
    "category": "landscapes"
  },
  {
    "id": "6",
    "src": "https://images.pexels.com/photos/16672402/pexels-photo-16672402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A breathtaking aerial shot showcasing terraced rice fields in vibrant colors, capturing nature's intricate patterns.",
    "title": "Yuanyang Rice Terraces",
    "titleZh": "元阳梯田",
    "description": "UNESCO World Heritage terraced fields",
    "location": "Yuanyang",
    "photographer": "chiến  bá",
    "category": "landscapes"
  },
  {
    "id": "7",
    "src": "https://images.pexels.com/photos/25241731/pexels-photo-25241731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A breathtaking view of the mist-covered Honghe Hani Rice Terraces in Yunnan, China.",
    "title": "Honghe Hani Rice Terraces",
    "titleZh": "红河哈尼梯田",
    "description": "Mist-covered terraced fields",
    "location": "Yuanyang",
    "photographer": "Duc Nguyen",
    "category": "landscapes"
  },
  {
    "id": "8",
    "src": "https://images.pexels.com/photos/3866006/pexels-photo-3866006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A man relaxing on a bench by the lake in Kunming, China during a sunny day.",
    "title": "Erhai Lake",
    "titleZh": "洱海",
    "description": "Second-largest highland lake",
    "location": "Dali",
    "photographer": "HONG SON",
    "category": "landscapes"
  },
  {
    "id": "9",
    "src": "https://images.pexels.com/photos/33970874/pexels-photo-33970874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Stunning view of Erhai Lake with mountains, pier, and a house under a bright sky.",
    "title": "Shangri-La Grasslands",
    "titleZh": "香格里拉草原",
    "description": "High-altitude meadows",
    "location": "Shangri-La",
    "photographer": "chao he",
    "category": "landscapes"
  },
  {
    "id": "10",
    "src": "https://images.pexels.com/photos/6241959/pexels-photo-6241959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Stunning aerial view of Lijiang Old Town with traditional rooftops at sunrise, bathed in golden light.",
    "title": "Three Pagodas",
    "titleZh": "崇圣寺三塔",
    "description": "9th-century Buddhist pagodas",
    "location": "Dali",
    "photographer": "飞 谢",
    "category": "architecture"
  },
  {
    "id": "11",
    "src": "https://images.pexels.com/photos/5204101/pexels-photo-5204101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "High angle view of illuminated traditional Asian buildings at twilight.",
    "title": "Songzanlin Monastery",
    "titleZh": "松赞林寺",
    "description": "Little Potala Palace",
    "location": "Shangri-La",
    "photographer": "STEVE CHAI",
    "category": "architecture"
  },
  {
    "id": "12",
    "src": "https://images.pexels.com/photos/6513755/pexels-photo-6513755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Colorful Tibetan prayer flags fluttering in the mountains of China.",
    "title": "Dali Ancient City",
    "titleZh": "大理古城",
    "description": "Ancient capital of Dali Kingdom",
    "location": "Dali",
    "photographer": "Mingsong Zhai",
    "category": "architecture"
  },
  {
    "id": "13",
    "src": "https://images.pexels.com/photos/33175675/pexels-photo-33175675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Colorful facade of a traditional Tibetan monastery in Yunnan, China, showcasing vibrant cultural architecture.",
    "title": "Lijiang Old Town",
    "titleZh": "丽江古城",
    "description": "800-year-old UNESCO heritage town",
    "location": "Lijiang",
    "photographer": "Eirene Deng",
    "category": "architecture"
  },
  {
    "id": "14",
    "src": "/images/gallery/culture/zarran.jpg",
    "alt": "Bai tie-dye workshop with indigo dyed fabrics",
    "title": "白族扎染",
    "titleZh": "白族扎染",
    "description": "传统纺织染色工艺",
    "location": "Dali",
    "photographer": "Local artisan",
    "category": "culture"
  },
  {
    "id": "15",
    "src": "/images/gallery/culture/jiama.pic.jpg",
    "alt": "Traditional Jianchuan wood carving craftsmanship",
    "title": "Jianchuan Wood Carving",
    "titleZh": "剑川木雕",
    "description": "国家级非遗木雕技艺",
    "location": "Jianchuan",
    "photographer": "Local artisan",
    "category": "culture"
  },
  {
    "id": "16",
    "src": "/images/gallery/culture/tea-custom.jpg",
    "alt": "Traditional Yunnan ethnic tea ceremony with people in traditional costumes",
    "title": "Tea Custom",
    "titleZh": "茶文化",
    "description": "云南少数民族茶道习俗",
    "location": "Yunnan",
    "photographer": "Local culture",
    "category": "culture"
  },
  {
    "id": "17",
    "src": "https://images.pexels.com/photos/8952040/pexels-photo-8952040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A close-up of a traditional tea ceremony showcasing ceramic teacups and intricate pouring process.",
    "title": "Traditional Pottery",
    "titleZh": "传统陶艺",
    "description": "云南陶器制作",
    "location": "Yunnan",
    "photographer": "Ivan Samkov",
    "category": "culture"
  },
  {
    "id": "18",
    "src": "https://images.pexels.com/photos/2692556/pexels-photo-2692556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Aerial view of three people weaving turquoise fishing nets, showcasing traditional craftsmanship and textiles.",
    "title": "Traditional Weaving",
    "titleZh": "传统织布",
    "description": "民族织布技艺",
    "location": "Yunnan",
    "photographer": "Gin Patin",
    "category": "culture"
  },
  {
    "id": "19",
    "src": "https://images.pexels.com/photos/1110203/pexels-photo-1110203.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A female performer in traditional Chinese opera attire with vibrant makeup during a cultural festival",
    "title": "Water Splashing Festival",
    "titleZh": "泼水节",
    "description": "Dai New Year celebration",
    "location": "Xishuangbanna",
    "photographer": "Jimmy Chan",
    "category": "festivals"
  },
  {
    "id": "20",
    "src": "https://images.pexels.com/photos/34096947/pexels-photo-34096947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "OLYMPUS DIGITAL CAMERA",
    "title": "Torch Festival",
    "titleZh": "火把节",
    "description": "Yi festival with torch processions",
    "location": "Chuxiong",
    "photographer": "Banshō Banshō",
    "category": "festivals"
  },
  {
    "id": "21",
    "src": "https://images.pexels.com/photos/2318543/pexels-photo-2318543.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A woman enjoys a sunny day in a hanging bubble chair by the ocean, perfect for a relaxing vacation.",
    "title": "Tibetan Monks",
    "titleZh": "藏传佛教僧侣",
    "description": "Buddhist monks at prayer",
    "location": "Shangri-La",
    "photographer": "Chunry",
    "category": "people"
  },
  {
    "id": "22",
    "src": "https://images.pexels.com/photos/2408632/pexels-photo-2408632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Tourists hiking wooden bridges amidst snowcapped peaks in Lijiang, China.",
    "title": "Yi Elder",
    "titleZh": "彝族长者",
    "description": "Traditional Yi community member",
    "location": "Chuxiong",
    "photographer": "Asrul Anuar",
    "category": "people"
  },
  {
    "id": "23",
    "src": "https://images.pexels.com/photos/5416076/pexels-photo-5416076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A serene scene of a monk meditating by the riverside surrounded by nature and smoke.",
    "title": "Mosuo Woman",
    "titleZh": "摩梭女性",
    "description": "Matriarchal society member",
    "location": "Lugu Lake",
    "photographer": "cottonbro studio",
    "category": "people"
  },
  {
    "id": "24",
    "src": "https://images.pexels.com/photos/15628716/pexels-photo-15628716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Close-up of a golden snub-nosed monkey sitting on a branch, exhibiting typical wildlife behavior.",
    "title": "Yunnan Golden Monkey",
    "titleZh": "滇金丝猴",
    "description": "Endangered primate species",
    "location": "Baima Mountain",
    "photographer": "billow926",
    "category": "wildlife"
  },
  {
    "id": "25",
    "src": "https://images.pexels.com/photos/34030625/pexels-photo-34030625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "asian elephant",
    "title": "Asian Elephants",
    "titleZh": "亚洲象",
    "description": "Wild elephants in rainforests",
    "location": "Xishuangbanna",
    "photographer": "Regan Dsouza",
    "category": "wildlife"
  },
  {
    "id": "26",
    "src": "https://images.pexels.com/photos/31817488/pexels-photo-31817488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Vibrant garden in bloom with colorful flowers and mountain scenery in the background",
    "title": "Rhododendron Valley",
    "titleZh": "杜鹃花谷",
    "description": "300+ species of rhododendron",
    "location": "Kunming",
    "photographer": "Andy Wilson",
    "category": "wildlife"
  }
]

export const categories = [
  { id: 'landscapes', name: 'Landscapes', nameZh: '风景', icon: '🏞️', count: 0 },
  { id: 'culture', name: 'Culture', nameZh: '文化', icon: '🏮', count: 0 },
  { id: 'festivals', name: 'Festivals', nameZh: '节日', icon: '🎉', count: 0 },
  { id: 'architecture', name: 'Architecture', nameZh: '建筑', icon: '🏛️', count: 0 },
  { id: 'people', name: 'People', nameZh: '人物', icon: '👥', count: 0 },
  { id: 'wildlife', name: 'Wildlife', nameZh: '野生动植物', icon: '🦜', count: 0 },
]

// Count images by category
categories.forEach(cat => {
  cat.count = galleryImages.filter(img => img.category === cat.id).length
})

export const featuredImages = galleryImages.slice(0, 9)
export const recentUploads = galleryImages.slice(-6)
