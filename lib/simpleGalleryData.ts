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

// 使用简单的占位图 - 纯色块
export const galleryImages: GalleryImage[] = [
  // Landscapes - 风景
  {
    id: "1",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%2360A5FA'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E玉龙雪山%3C/text%3E%3C/svg%3E",
    alt: "Jade Dragon Snow Mountain",
    title: "Jade Dragon Snow Mountain",
    titleZh: "玉龙雪山",
    description: "5,596-meter peak with glaciers and alpine meadows",
    location: "Lijiang",
    category: "landscapes"
  },
  {
    id: "2",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%2334D399'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E元阳梯田%3C/text%3E%3C/svg%3E",
    alt: "Yuanyang Rice Terraces",
    title: "Yuanyang Rice Terraces",
    titleZh: "元阳梯田",
    description: "UNESCO World Heritage site",
    location: "Honghe",
    category: "landscapes"
  },
  {
    id: "3",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%2306B6D4'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E泸沽湖%3C/text%3E%3C/svg%3E",
    alt: "Lugu Lake",
    title: "Lugu Lake",
    titleZh: "泸沽湖",
    description: "Alpine lake at 2,690m elevation",
    location: "Lijiang",
    category: "landscapes"
  },
  {
    id: "4",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%239CA3AF'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E石林%3C/text%3E%3C/svg%3E",
    alt: "Stone Forest",
    title: "Stone Forest",
    titleZh: "石林",
    description: "270 million-year-old karst formations",
    location: "Kunming",
    category: "landscapes"
  },
  {
    id: "5",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23F59E0B'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E虎跳峡%3C/text%3E%3C/svg%3E",
    alt: "Tiger Leaping Gorge",
    title: "Tiger Leaping Gorge",
    titleZh: "虎跳峡",
    description: "One of the world's deepest gorges",
    location: "Lijiang",
    category: "landscapes"
  },
  {
    id: "6",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23E11D48'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E梅里雪山%3C/text%3E%3C/svg%3E",
    alt: "Meili Snow Mountain",
    title: "Meili Snow Mountain",
    titleZh: "梅里雪山",
    description: "Sacred mountain with 13 peaks",
    location: "Deqin",
    category: "landscapes"
  },
  {
    id: "7",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%230EA5E9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E蓝月谷%3C/text%3E%3C/svg%3E",
    alt: "Blue Moon Valley",
    title: "Blue Moon Valley",
    titleZh: "蓝月谷",
    description: "Crystal-clear turquoise pools",
    location: "Lijiang",
    category: "landscapes"
  },
  {
    id: "8",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%238B5CF6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E洱海%3C/text%3E%3C/svg%3E",
    alt: "Erhai Lake",
    title: "Erhai Lake",
    titleZh: "洱海",
    description: "Second-largest highland lake in China",
    location: "Dali",
    category: "landscapes"
  },
  {
    id: "9",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%2310B981'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E香格里拉%3C/text%3E%3C/svg%3E",
    alt: "Shangri-La",
    title: "Shangri-La Grasslands",
    titleZh: "香格里拉草原",
    description: "High-altitude meadows",
    location: "Shangri-La",
    category: "landscapes"
  },

  // Architecture - 建筑
  {
    id: "10",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23DC2626'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E丽江古城%3C/text%3E%3C/svg%3E",
    alt: "Lijiang Old Town",
    title: "Lijiang Old Town",
    titleZh: "丽江古城",
    description: "800-year-old UNESCO World Heritage town",
    location: "Lijiang",
    category: "architecture"
  },
  {
    id: "11",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23EA580C'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E三塔%3C/text%3E%3C/svg%3E",
    alt: "Three Pagodas",
    title: "Three Pagodas",
    titleZh: "崇圣寺三塔",
    description: "9th-century Buddhist pagodas",
    location: "Dali",
    category: "architecture"
  },
  {
    id: "12",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23CA8A04'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E松赞林寺%3C/text%3E%3C/svg%3E",
    alt: "Songzanlin Monastery",
    title: "Songzanlin Monastery",
    titleZh: "松赞林寺",
    description: "Little Potala Palace",
    location: "Shangri-La",
    category: "architecture"
  },
  {
    id: "13",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%2365A30D'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E大理古城%3C/text%3E%3C/svg%3E",
    alt: "Dali Ancient City",
    title: "Dali Ancient City",
    titleZh: "大理古城",
    description: "Ancient capital of Dali Kingdom",
    location: "Dali",
    category: "architecture"
  },

  // Culture & Festivals
  {
    id: "14",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%230891B2'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E泼水节%3C/text%3E%3C/svg%3E",
    alt: "Water Festival",
    title: "Water Splashing Festival",
    titleZh: "泼水节",
    description: "Dai New Year celebration",
    location: "Xishuangbanna",
    category: "festivals"
  },
  {
    id: "15",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23DC2626'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E火把节%3C/text%3E%3C/svg%3E",
    alt: "Torch Festival",
    title: "Torch Festival",
    titleZh: "火把节",
    description: "Yi festival with torch processions",
    location: "Chuxiong",
    category: "festivals"
  },
  {
    id: "16",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%237C3AED'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E纳西服饰%3C/text%3E%3C/svg%3E",
    alt: "Naxi Dress",
    title: "Naxi Traditional Dress",
    titleZh: "纳西族服饰",
    description: "Traditional costume with seven-star cape",
    location: "Lijiang",
    category: "culture"
  },
  {
    id: "17",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%232563EB'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E白族扎染%3C/text%3E%3C/svg%3E",
    alt: "Bai Tie-Dye",
    title: "Bai Tie-Dye",
    titleZh: "白族扎染",
    description: "Traditional indigo tie-dye art",
    location: "Dali",
    category: "culture"
  },
  {
    id: "18",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23DB2777'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E东巴文字%3C/text%3E%3C/svg%3E",
    alt: "Dongba Script",
    title: "Dongba Script",
    titleZh: "东巴文字",
    description: "Living pictographic writing system",
    location: "Lijiang",
    category: "culture"
  },

  // People
  {
    id: "19",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%239333EA'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E彝族长者%3C/text%3E%3C/svg%3E",
    alt: "Yi Elder",
    title: "Yi Elder",
    titleZh: "彝族长者",
    description: "Yi elder in traditional clothing",
    location: "Chuxiong",
    category: "people"
  },
  {
    id: "20",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23EC4899'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E摩梭女性%3C/text%3E%3C/svg%3E",
    alt: "Mosuo Woman",
    title: "Mosuo Woman",
    titleZh: "摩梭女性",
    description: "Matriarchal Mosuo society member",
    location: "Lugu Lake",
    category: "people"
  },
  {
    id: "21",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23F97316'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E藏僧%3C/text%3E%3C/svg%3E",
    alt: "Tibetan Monks",
    title: "Tibetan Monks",
    titleZh: "藏传佛教僧侣",
    description: "Buddhist monks at prayer",
    location: "Shangri-La",
    category: "people"
  },

  // Wildlife
  {
    id: "22",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23EAB308'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E滇金丝猴%3C/text%3E%3C/svg%3E",
    alt: "Golden Monkey",
    title: "Yunnan Golden Monkey",
    titleZh: "滇金丝猴",
    description: "Endangered primate",
    location: "Baima Mountain",
    category: "wildlife"
  },
  {
    id: "23",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%236B7280'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E亚洲象%3C/text%3E%3C/svg%3E",
    alt: "Asian Elephants",
    title: "Asian Elephants",
    titleZh: "亚洲象",
    description: "Wild elephants in rainforests",
    location: "Xishuangbanna",
    category: "wildlife"
  },
  {
    id: "24",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23BE185D'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' font-size='30' fill='white'%3E杜鹃花%3C/text%3E%3C/svg%3E",
    alt: "Rhododendron",
    title: "Rhododendron Valley",
    titleZh: "杜鹃花谷",
    description: "300+ species of rhododendron",
    location: "Baili",
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