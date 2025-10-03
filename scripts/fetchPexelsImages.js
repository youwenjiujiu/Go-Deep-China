const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const PEXELS_API_KEY = 'OHO8n7CTfEAwbWHwlrXMrlccV7TmIWW1GQkPFPiy9QXkdRsxzwc5XpZY';

const searches = [
  // Landscapes
  { query: 'yunnan mountain', category: 'landscapes', count: 5 },
  { query: 'yunnan rice terraces', category: 'landscapes', count: 2 },
  { query: 'yunnan lake', category: 'landscapes', count: 2 },

  // Architecture
  { query: 'lijiang old town', category: 'architecture', count: 2 },
  { query: 'yunnan temple', category: 'architecture', count: 2 },

  // Culture
  { query: 'yunnan minority culture', category: 'culture', count: 3 },
  { query: 'chinese traditional costume', category: 'culture', count: 2 },

  // Festivals
  { query: 'chinese festival', category: 'festivals', count: 2 },

  // People
  { query: 'yunnan people', category: 'people', count: 2 },
  { query: 'tibetan monk', category: 'people', count: 1 },

  // Wildlife
  { query: 'golden snub-nosed monkey', category: 'wildlife', count: 1 },
  { query: 'asian elephant', category: 'wildlife', count: 1 },
  { query: 'rhododendron flowers', category: 'wildlife', count: 1 },
];

async function searchPexels(query, perPage = 5) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': PEXELS_API_KEY
    }
  });

  if (!response.ok) {
    throw new Error(`Pexels API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.photos;
}

async function fetchAllImages() {
  const allImages = [];
  let imageId = 1;

  console.log('Fetching images from Pexels API...\n');

  for (const search of searches) {
    console.log(`Searching for: ${search.query} (${search.count} images)`);

    try {
      const photos = await searchPexels(search.query, search.count);

      for (let i = 0; i < Math.min(search.count, photos.length); i++) {
        const photo = photos[i];
        allImages.push({
          id: String(imageId++),
          src: photo.src.large,
          alt: photo.alt || search.query,
          photographer: photo.photographer,
          photographer_url: photo.photographer_url,
          category: search.category,
          pexels_url: photo.url
        });
      }

      console.log(`  ✓ Found ${Math.min(search.count, photos.length)} images\n`);

      // Rate limiting - wait 1 second between requests
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      console.error(`  ✗ Error fetching ${search.query}:`, error.message, '\n');
    }
  }

  console.log(`\nTotal images fetched: ${allImages.length}`);

  return allImages;
}

async function generateGalleryData(images) {
  const locations = [
    'Lijiang', 'Dali', 'Shangri-La', 'Xishuangbanna',
    'Kunming', 'Yuanyang', 'Lugu Lake', 'Chuxiong', 'Deqin'
  ];

  const titles = {
    landscapes: [
      { title: 'Jade Dragon Snow Mountain', titleZh: '玉龙雪山', desc: '5,596-meter peak with glaciers', loc: 'Lijiang' },
      { title: 'Yuanyang Rice Terraces', titleZh: '元阳梯田', desc: 'UNESCO World Heritage site', loc: 'Yuanyang' },
      { title: 'Lugu Lake', titleZh: '泸沽湖', desc: 'Alpine lake at 2,690m elevation', loc: 'Lugu Lake' },
      { title: 'Stone Forest', titleZh: '石林', desc: '270 million-year-old karst formations', loc: 'Kunming' },
      { title: 'Tiger Leaping Gorge', titleZh: '虎跳峡', desc: "One of the world's deepest gorges", loc: 'Lijiang' },
      { title: 'Meili Snow Mountain', titleZh: '梅里雪山', desc: 'Sacred mountain with 13 peaks', loc: 'Deqin' },
      { title: 'Blue Moon Valley', titleZh: '蓝月谷', desc: 'Crystal-clear turquoise pools', loc: 'Lijiang' },
      { title: 'Erhai Lake', titleZh: '洱海', desc: 'Second-largest highland lake', loc: 'Dali' },
      { title: 'Shangri-La Grasslands', titleZh: '香格里拉草原', desc: 'High-altitude meadows', loc: 'Shangri-La' },
    ],
    architecture: [
      { title: 'Lijiang Old Town', titleZh: '丽江古城', desc: '800-year-old UNESCO heritage town', loc: 'Lijiang' },
      { title: 'Three Pagodas', titleZh: '崇圣寺三塔', desc: '9th-century Buddhist pagodas', loc: 'Dali' },
      { title: 'Songzanlin Monastery', titleZh: '松赞林寺', desc: 'Little Potala Palace', loc: 'Shangri-La' },
      { title: 'Dali Ancient City', titleZh: '大理古城', desc: 'Ancient capital of Dali Kingdom', loc: 'Dali' },
    ],
    culture: [
      { title: 'Naxi Traditional Dress', titleZh: '纳西族服饰', desc: 'Seven-star cape costume', loc: 'Lijiang' },
      { title: 'Bai Tie-Dye', titleZh: '白族扎染', desc: 'Traditional indigo tie-dye art', loc: 'Dali' },
      { title: 'Dongba Script', titleZh: '东巴文字', desc: 'Living pictographic writing', loc: 'Lijiang' },
      { title: 'Yi Embroidery', titleZh: '彝族刺绣', desc: 'Traditional ethnic embroidery', loc: 'Chuxiong' },
      { title: 'Mosuo Culture', titleZh: '摩梭文化', desc: 'Matriarchal society traditions', loc: 'Lugu Lake' },
    ],
    festivals: [
      { title: 'Water Splashing Festival', titleZh: '泼水节', desc: 'Dai New Year celebration', loc: 'Xishuangbanna' },
      { title: 'Torch Festival', titleZh: '火把节', desc: 'Yi festival with torch processions', loc: 'Chuxiong' },
    ],
    people: [
      { title: 'Yi Elder', titleZh: '彝族长者', desc: 'Traditional Yi community member', loc: 'Chuxiong' },
      { title: 'Mosuo Woman', titleZh: '摩梭女性', desc: 'Matriarchal society member', loc: 'Lugu Lake' },
      { title: 'Tibetan Monks', titleZh: '藏传佛教僧侣', desc: 'Buddhist monks at prayer', loc: 'Shangri-La' },
    ],
    wildlife: [
      { title: 'Yunnan Golden Monkey', titleZh: '滇金丝猴', desc: 'Endangered primate species', loc: 'Baima Mountain' },
      { title: 'Asian Elephants', titleZh: '亚洲象', desc: 'Wild elephants in rainforests', loc: 'Xishuangbanna' },
      { title: 'Rhododendron Valley', titleZh: '杜鹃花谷', desc: '300+ species of rhododendron', loc: 'Kunming' },
    ]
  };

  const galleryData = images.map((img, index) => {
    const categoryTitles = titles[img.category] || [];
    const titleData = categoryTitles[index % categoryTitles.length] || {
      title: img.alt,
      titleZh: '',
      desc: img.alt,
      loc: locations[Math.floor(Math.random() * locations.length)]
    };

    return {
      id: img.id,
      src: img.src,
      alt: img.alt,
      title: titleData.title,
      titleZh: titleData.titleZh,
      description: titleData.desc,
      location: titleData.loc,
      photographer: img.photographer,
      category: img.category
    };
  });

  return galleryData;
}

async function main() {
  try {
    const images = await fetchAllImages();
    const galleryData = await generateGalleryData(images);

    const output = `export interface GalleryImage {
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

export const galleryImages: GalleryImage[] = ${JSON.stringify(galleryData, null, 2)}

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
`;

    const outputPath = path.join(__dirname, '../lib/realGalleryData.ts');
    fs.writeFileSync(outputPath, output, 'utf-8');

    console.log(`\n✓ Gallery data written to ${outputPath}`);
    console.log(`✓ Total images: ${galleryData.length}`);

    // Print category counts
    console.log('\nCategory breakdown:');
    const categoryCounts = {};
    galleryData.forEach(img => {
      categoryCounts[img.category] = (categoryCounts[img.category] || 0) + 1;
    });
    Object.entries(categoryCounts).forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count}`);
    });

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
