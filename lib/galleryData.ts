export interface GalleryImage {
  id: string
  src: string
  placeholder?: string
  alt: string
  title: string
  titleZh?: string
  description: string
  location?: string
  photographer?: string
  category: 'landscapes' | 'culture' | 'festivals' | 'architecture' | 'people' | 'wildlife'
}

// 创建占位图URL
const createPlaceholder = (text: string, color: string = '4F46E5') =>
  `https://via.placeholder.com/800x600/${color}/ffffff?text=${encodeURIComponent(text)}`

export const galleryImages: GalleryImage[] = [
  // Landscapes - 风景
  {
    id: "1",
    src: "https://picsum.photos/800/600?random=1",
    placeholder: createPlaceholder('玉龙雪山 Jade Dragon Snow', '60A5FA'),
    alt: "Jade Dragon Snow Mountain peaks",
    title: "Jade Dragon Snow Mountain",
    titleZh: "玉龙雪山",
    description: "5,596-meter peak with glaciers and alpine meadows, sacred to the Naxi people",
    location: "Lijiang",
    photographer: "Zhang Wei",
    category: "landscapes"
  },
  {
    id: "2",
    src: "/images/gallery/landscapes/yuanyang-terraces.jpg",
    placeholder: createPlaceholder('元阳梯田 Yuanyang Terraces', '34D399'),
    alt: "Yuanyang Rice Terraces at sunrise",
    title: "Yuanyang Rice Terraces",
    titleZh: "元阳梯田",
    description: "UNESCO World Heritage site created by Hani people over 1,300 years ago",
    location: "Honghe Prefecture",
    photographer: "Liu Chen",
    category: "landscapes"
  },
  {
    id: "3",
    src: "/images/gallery/landscapes/lugu-lake.jpg",
    placeholder: createPlaceholder('泸沽湖 Lugu Lake', '06B6D4'),
    alt: "Lugu Lake scenic view",
    title: "Lugu Lake",
    titleZh: "泸沽湖",
    description: "Alpine lake at 2,690m elevation, home to the matriarchal Mosuo people",
    location: "Lijiang/Sichuan Border",
    photographer: "Wang Ming",
    category: "landscapes"
  },
  {
    id: "4",
    src: "/images/gallery/landscapes/stone-forest.jpg",
    placeholder: createPlaceholder('石林 Stone Forest', '9CA3AF'),
    alt: "Stone Forest karst formations",
    title: "Kunming Stone Forest",
    titleZh: "石林",
    description: "270 million-year-old karst formations, UNESCO World Geopark",
    location: "Kunming",
    photographer: "Li Xiaoming",
    category: "landscapes"
  },
  {
    id: "5",
    src: "/images/gallery/landscapes/tiger-leaping-gorge.jpg",
    placeholder: createPlaceholder('虎跳峡 Tiger Leaping', 'F59E0B'),
    alt: "Tiger Leaping Gorge canyon",
    title: "Tiger Leaping Gorge",
    titleZh: "虎跳峡",
    description: "One of the world's deepest gorges with dramatic Jinsha River rapids",
    location: "Lijiang",
    photographer: "Chen Hao",
    category: "landscapes"
  },
  {
    id: "21",
    src: "/images/gallery/landscapes/meili-snow.jpg",
    placeholder: createPlaceholder('梅里雪山 Meili Snow', 'E11D48'),
    alt: "Meili Snow Mountain at sunrise",
    title: "Meili Snow Mountain",
    titleZh: "梅里雪山",
    description: "Sacred mountain with 13 peaks, highest at 6,740m",
    location: "Deqin",
    photographer: "Alpine Photography",
    category: "landscapes"
  },
  {
    id: "22",
    src: "/images/gallery/landscapes/blue-moon-valley.jpg",
    placeholder: createPlaceholder('蓝月谷 Blue Moon Valley', '0EA5E9'),
    alt: "Blue Moon Valley turquoise water",
    title: "Blue Moon Valley",
    titleZh: "蓝月谷",
    description: "Crystal-clear turquoise pools fed by glacier melt",
    location: "Lijiang",
    photographer: "Nature's Eye",
    category: "landscapes"
  },
  {
    id: "23",
    src: "/images/gallery/landscapes/erhai-lake.jpg",
    placeholder: createPlaceholder('洱海 Erhai Lake', '8B5CF6'),
    alt: "Erhai Lake sunset",
    title: "Erhai Lake",
    titleZh: "洱海",
    description: "Second-largest highland lake in China with Cangshan Mountains backdrop",
    location: "Dali",
    photographer: "Sunset Hunter",
    category: "landscapes"
  },
  {
    id: "24",
    src: "/images/gallery/landscapes/shangri-la-grasslands.jpg",
    placeholder: createPlaceholder('香格里拉草原 Grasslands', '10B981'),
    alt: "Shangri-La grasslands with yaks",
    title: "Shangri-La Grasslands",
    titleZh: "香格里拉草原",
    description: "High-altitude meadows with grazing yaks and wildflowers",
    location: "Shangri-La",
    photographer: "Highland Views",
    category: "landscapes"
  },

  // Architecture - 建筑
  {
    id: "6",
    src: "/images/gallery/architecture/lijiang-old-town.jpg",
    placeholder: createPlaceholder('丽江古城 Lijiang Old Town', 'DC2626'),
    alt: "Lijiang Old Town traditional architecture",
    title: "Lijiang Old Town",
    titleZh: "丽江古城",
    description: "800-year-old UNESCO World Heritage town with Naxi architecture",
    location: "Lijiang",
    photographer: "Sarah Johnson",
    category: "architecture"
  },
  {
    id: "7",
    src: "/images/gallery/architecture/three-pagodas.jpg",
    placeholder: createPlaceholder('三塔 Three Pagodas', 'EA580C'),
    alt: "Three Pagodas of Dali",
    title: "Three Pagodas",
    titleZh: "崇圣寺三塔",
    description: "9th-century Buddhist pagodas, symbols of ancient Dali Kingdom",
    location: "Dali",
    photographer: "Li Mei",
    category: "architecture"
  },
  {
    id: "8",
    src: "/images/gallery/architecture/songzanlin-monastery.jpg",
    placeholder: createPlaceholder('松赞林寺 Songzanlin', 'CA8A04'),
    alt: "Songzanlin Monastery golden roofs",
    title: "Songzanlin Monastery",
    titleZh: "松赞林寺",
    description: "Largest Tibetan Buddhist monastery in Yunnan, the 'Little Potala Palace'",
    location: "Shangri-La",
    photographer: "Tenzin Dorje",
    category: "architecture"
  },
  {
    id: "9",
    src: "/images/gallery/architecture/dali-ancient-city.jpg",
    placeholder: createPlaceholder('大理古城 Dali Ancient', '65A30D'),
    alt: "Dali Old Town ancient walls",
    title: "Dali Ancient City",
    titleZh: "大理古城",
    description: "Ancient capital of Dali Kingdom with Ming Dynasty architecture",
    location: "Dali",
    photographer: "Zhang Qiang",
    category: "architecture"
  },

  // Culture & Festivals - 文化节日
  {
    id: "10",
    src: "/images/gallery/festivals/water-splashing.jpg",
    placeholder: createPlaceholder('泼水节 Water Festival', '0891B2'),
    alt: "Water Splashing Festival celebration",
    title: "Water Splashing Festival",
    titleZh: "泼水节",
    description: "Dai New Year celebration with water blessings and traditional dances",
    location: "Xishuangbanna",
    photographer: "Ai Lun",
    category: "festivals"
  },
  {
    id: "11",
    src: "/images/gallery/festivals/torch-festival.jpg",
    placeholder: createPlaceholder('火把节 Torch Festival', 'DC2626'),
    alt: "Torch Festival bonfire celebration",
    title: "Yi Torch Festival",
    titleZh: "火把节",
    description: "Ancient Yi festival with torch processions and bonfire dancing",
    location: "Chuxiong",
    photographer: "He Yong",
    category: "festivals"
  },
  {
    id: "12",
    src: "/images/gallery/culture/naxi-costume.jpg",
    placeholder: createPlaceholder('纳西服饰 Naxi Dress', '7C3AED'),
    alt: "Naxi woman in traditional costume",
    title: "Naxi Traditional Dress",
    titleZh: "纳西族服饰",
    description: "Traditional costume with seven-star cape representing the Big Dipper",
    location: "Lijiang",
    photographer: "Yang Liu",
    category: "culture"
  },
  {
    id: "13",
    src: "/images/gallery/culture/bai-tie-dye.jpg",
    placeholder: createPlaceholder('白族扎染 Tie-Dye', '2563EB'),
    alt: "Bai tie-dye artisan at work",
    title: "Bai Tie-Dye Craftsmanship",
    titleZh: "白族扎染",
    description: "Traditional indigo tie-dye art passed down for generations in Zhoucheng",
    location: "Dali",
    photographer: "Wang Xue",
    category: "culture"
  },
  {
    id: "14",
    src: "/images/gallery/culture/dongba-script.jpg",
    placeholder: createPlaceholder('东巴文字 Dongba Script', 'DB2777'),
    alt: "Dongba pictographic script",
    title: "Dongba Script",
    titleZh: "东巴文字",
    description: "The world's only living pictographic writing system of the Naxi people",
    location: "Lijiang",
    photographer: "Michael Chen",
    category: "culture"
  },

  // People - 人物
  {
    id: "15",
    src: "/images/gallery/people/yi-elder.jpg",
    placeholder: createPlaceholder('彝族长者 Yi Elder', '9333EA'),
    alt: "Yi ethnic minority elder",
    title: "Yi Elder in Traditional Attire",
    titleZh: "彝族长者",
    description: "Yi elder wearing traditional clothing with intricate embroidery",
    location: "Chuxiong",
    photographer: "Liu Wei",
    category: "people"
  },
  {
    id: "16",
    src: "/images/gallery/people/mosuo-woman.jpg",
    placeholder: createPlaceholder('摩梭女性 Mosuo Woman', 'EC4899'),
    alt: "Mosuo woman by Lugu Lake",
    title: "Mosuo Woman",
    titleZh: "摩梭女性",
    description: "Member of the matriarchal Mosuo society at Lugu Lake",
    location: "Lugu Lake",
    photographer: "Zhang Li",
    category: "people"
  },
  {
    id: "17",
    src: "/images/gallery/people/tibetan-monks.jpg",
    placeholder: createPlaceholder('藏僧 Tibetan Monks', 'F97316'),
    alt: "Tibetan monks at prayer",
    title: "Tibetan Buddhist Monks",
    titleZh: "藏传佛教僧侣",
    description: "Monks performing morning prayers at Songzanlin Monastery",
    location: "Shangri-La",
    photographer: "Karma Tenzin",
    category: "people"
  },

  // Wildlife & Nature - 野生动植物
  {
    id: "18",
    src: "/images/gallery/wildlife/golden-monkey.jpg",
    placeholder: createPlaceholder('滇金丝猴 Golden Monkey', 'EAB308'),
    alt: "Yunnan Golden Monkey",
    title: "Yunnan Golden Monkey",
    titleZh: "滇金丝猴",
    description: "Endangered primate found only in Yunnan's high-altitude forests",
    location: "Baima Snow Mountain",
    photographer: "Nature Yunnan",
    category: "wildlife"
  },
  {
    id: "19",
    src: "/images/gallery/wildlife/asian-elephants.jpg",
    placeholder: createPlaceholder('亚洲象 Elephants', '6B7280'),
    alt: "Wild Asian elephants",
    title: "Asian Elephants",
    titleZh: "亚洲象",
    description: "Protected wild elephants in tropical rainforests",
    location: "Xishuangbanna",
    photographer: "Wildlife Yunnan",
    category: "wildlife"
  },
  {
    id: "20",
    src: "/images/gallery/wildlife/rhododendron.jpg",
    placeholder: createPlaceholder('杜鹃花 Rhododendron', 'BE185D'),
    alt: "Rhododendron flowers blooming",
    title: "Rhododendron Valley",
    titleZh: "杜鹃花谷",
    description: "Over 300 species of rhododendron bloom in spring",
    location: "Baili Rhododendron",
    photographer: "Flora Chen",
    category: "wildlife"
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