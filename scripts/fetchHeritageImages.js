const fetch = require('node-fetch');

const PEXELS_API_KEY = 'OHO8n7CTfEAwbWHwlrXMrlccV7TmIWW1GQkPFPiy9QXkdRsxzwc5XpZY';

const heritageSearches = [
  // 传统技艺
  { query: 'indigo tie dye fabric china', title: '白族扎染', titleZh: '白族扎染', desc: '传统纺织染色工艺', loc: 'Dali' },
  { query: 'chinese wood carving', title: 'Jianchuan Wood Carving', titleZh: '剑川木雕', desc: '国家级非遗木雕技艺', loc: 'Jianchuan' },
  { query: 'chinese embroidery colorful', title: 'Ethnic Embroidery', titleZh: '民族刺绣', desc: '传统刺绣工艺', loc: 'Yunnan' },
  { query: 'traditional chinese pottery', title: 'Traditional Pottery', titleZh: '传统陶艺', desc: '云南陶器制作', loc: 'Yunnan' },
  { query: 'chinese traditional textile weaving', title: 'Traditional Weaving', titleZh: '传统织布', desc: '民族织布技艺', loc: 'Yunnan' },

  // 传统舞蹈和节日
  { query: 'chinese folk dance performance', title: 'Lisu Circle Dance', titleZh: '傈僳族打转舞', desc: '傈僳族集体舞蹈', loc: 'Nujiang' },
  { query: 'ethnic minority festival china', title: 'Munao Zongge Festival', titleZh: '芒诺宗歌节', desc: '景颇族传统节日', loc: 'Dehong' },
  { query: 'traditional drum dance china', title: 'Bronze Drum Dance', titleZh: '铓鼓舞', desc: '彝族传统舞蹈', loc: 'Jianshui' },
  { query: 'water drum performance', title: 'Water Drum Dance', titleZh: '水鼓舞', desc: '傣族舞蹈形式', loc: 'Ruili' },

  // 传统服饰
  { query: 'yi ethnic costume china', title: 'Yi Traditional Costume', titleZh: '彝族服饰', desc: '传统民族服装', loc: 'Chuxiong' },
  { query: 'miao silver jewelry china', title: 'Miao Silver Ornaments', titleZh: '苗族银饰', desc: '传统银器工艺', loc: 'Yunnan' },
  { query: 'naxi dongba priest', title: 'Dongba Culture', titleZh: '东巴文化', desc: '纳西族传统文化', loc: 'Lijiang' },
];

async function searchPexels(query, perPage = 3) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': PEXELS_API_KEY
    }
  });

  if (!response.ok) {
    throw new Error(`Pexels API error: ${response.status}`);
  }

  const data = await response.json();
  return data.photos;
}

async function fetchHeritageImages() {
  const images = [];
  let imageId = 14; // 从culture类别开始

  console.log('Fetching heritage images from Pexels...\n');

  for (const search of heritageSearches) {
    console.log(`Searching: ${search.query}`);

    try {
      const photos = await searchPexels(search.query, 1);

      if (photos.length > 0) {
        const photo = photos[0];
        images.push({
          id: String(imageId++),
          src: photo.src.large,
          alt: photo.alt || search.title,
          title: search.title,
          titleZh: search.titleZh,
          description: search.desc,
          location: search.loc,
          photographer: photo.photographer,
          category: 'culture'
        });
        console.log(`  ✓ Found image\n`);
      } else {
        console.log(`  ✗ No images found\n`);
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      console.error(`  ✗ Error:`, error.message, '\n');
    }
  }

  console.log(`\nTotal heritage images: ${images.length}`);

  // Print images
  console.log('\nHeritage images to add to gallery:\n');
  images.forEach(img => {
    console.log(`{
  "id": "${img.id}",
  "src": "${img.src}",
  "alt": "${img.alt}",
  "title": "${img.title}",
  "titleZh": "${img.titleZh}",
  "description": "${img.description}",
  "location": "${img.location}",
  "photographer": "${img.photographer}",
  "category": "culture"
},`);
  });

  return images;
}

fetchHeritageImages();
