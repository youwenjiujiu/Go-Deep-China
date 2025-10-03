"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Users, MapPin, Calendar, Sparkles, BookOpen, Music } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ethnicGroupsData = {
  naxi: {
    id: "naxi",
    name: "Naxi",
    nameZh: "纳西族",
    population: "309,000",
    region: "Lijiang, Shangri-La",
    description: "The Naxi people inhabit the Hengduan Mountains in northwestern Yunnan Province",
    fullDescription: "The Naxi people are one of China's 56 recognized ethnic groups, primarily residing in the Hengduan Mountains of northwestern Yunnan Province and southwestern Sichuan Province. They are renowned for their rich cultural heritage, particularly the Dongba religion and the unique Dongba pictographic script.\n\nThe Dongba religion is rooted in Tibetan Bön beliefs, with 'Dongba' meaning 'wise man' in the Naxi language. The Dongba serves as a ceremonial master who interconnects the present world with spiritual realms through sacred rituals. The Dongba pictographic script, created over 1,000 years ago before the Tang Dynasty, is considered the 'only living pictograph in the world' today.\n\nHistorically, certain Naxi communities (particularly the Mosuo subgroup around Lugu Lake) maintained matrilineal family structures where property and assets passed down through the woman's side. However, mainstream Naxi society has been significantly influenced by Han Chinese culture and Confucian practices since 1723 when Lijiang came under Chinese control, which diminished these matriarchal customs.\n\nNaxi women are renowned for being independent, strong-minded, clever, and highly skilled individuals, holding respected positions in their families and communities. The Naxi people have preserved their unique identity through their ancient music traditions, the Dongba script, and cultural practices that blend shamanism, animism, and Tibetan Buddhism.",
    color: "from-blue-400 to-cyan-500",
    image: "/images/culture/naxi.jpg",
    traditions: [
      {
        title: "Dongba Pictographic Script",
        description: "The only living pictographic writing system in the world, created over 1,000 years ago. Traditionally read only by Dongba priests, this ancient script represents the nucleus of Naxi culture."
      },
      {
        title: "Dongba Religion",
        description: "Rooted in Tibetan Bön religion, Dongba means 'wise man.' This belief system is characterized by manipulation of gods and demons through sacred rituals, blending shamanism, animism, and Tibetan Buddhism."
      },
      {
        title: "Naxi Ancient Music",
        description: "Traditional orchestral music that has been preserved for centuries, featuring unique instruments and melodies that reflect the harmonious relationship between the Naxi people and nature."
      },
      {
        title: "Matrilineal Traditions",
        description: "While diminished in mainstream society, the Mosuo subgroup of Naxi near Lugu Lake still maintains remnants of matrilineal family structures where children are raised by the mother's family."
      }
    ],
    festivals: [
      {
        name: "Sanduo Festival",
        date: "8th day of the 2nd lunar month",
        description: "Celebrates the Naxi protective deity Sanduo with offerings, horse racing, and traditional performances."
      },
      {
        name: "Torch Festival",
        date: "24th-26th of the 6th lunar month",
        description: "Shared with Yi people, featuring torch processions, dancing, and singing around bonfires."
      }
    ],
    culturalPractices: [
      "Traditional Naxi architecture with courtyards",
      "Dongba paper-making using traditional methods",
      "Preservation of ancient orchestral music",
      "Traditional embroidery and textile crafts"
    ],
    visitTips: [
      "Visit Lijiang Old Town to see Dongba culture centers",
      "Attend a Naxi Ancient Music performance",
      "Explore the Dongba Cultural Museum",
      "Learn basic Dongba pictographs at cultural workshops"
    ]
  },
  bai: {
    id: "bai",
    name: "Bai",
    nameZh: "白族",
    population: "1.9 million",
    region: "Dali, Eryuan",
    description: "The Bai people have a long history and prosperous culture, with about 80% living in Dali",
    fullDescription: "The Bai ethnic group is one of the minorities with a very long history and prosperous culture in Yunnan Province. With approximately 1.56 million Bai people in Yunnan, about 80% reside in Dali City (Dali Bai Autonomous Prefecture). The Bai people hold the color white in high esteem and call themselves 'Baipzix,' literally meaning 'white people.'\n\nThe Bai people are renowned for their exceptional architectural skills, exemplified by the Chongsheng Temple Three Pagodas in Dali, dating back to the Tang Dynasty. The 16-story main tower stands 60 meters high and has remained standing for over 1,000 years, showcasing the superb craftsmanship of the Bai people.\n\nTie-dyeing is a cornerstone of Bai culture, extensively used in apparel, everyday items, traditional folklore, religious ceremonies, and national celebrations. Zhoucheng Village in Dali was named the 'home of national tie-dyeing art' by the Ministry of Culture in 1996. The village offers over 1,000 distinct tie-dye patterns with profound cultural meanings.\n\nThe traditional tie-dyeing process involves tying fabric, soaking it, dyeing with plant indigo (commonly known as Banlangen), drying, removing threads, rinsing, and grinding. In Zhoucheng, almost every family practices tie-dyeing, with Bai women learning these skills from early childhood.\n\nThe Bai people established the powerful Dali Kingdom (937-1253 AD), which played a significant role in Yunnan's history. Today, Bai culture thrives through their unique architecture, tie-dye art, the Three-Course Tea ceremony, and vibrant festivals.",
    color: "from-purple-400 to-pink-500",
    image: "/images/culture/bai.jpg",
    traditions: [
      {
        title: "Bai Tie-Dye (Zharan)",
        description: "A 1,000-year-old textile art using natural indigo dye. Zhoucheng Village is the center of this craft, with over 1,000 distinct patterns. Almost every family practices tie-dyeing, passed down through generations."
      },
      {
        title: "Three Pagodas Architecture",
        description: "The Chongsheng Temple Three Pagodas, built during the Tang Dynasty, showcase Bai architectural mastery. The main tower has stood for over 1,000 years, representing the pinnacle of ancient Bai construction skills."
      },
      {
        title: "Three-Course Tea Ceremony",
        description: "A traditional Bai hospitality ritual serving three types of tea: bitter, sweet, and aftertaste, symbolizing life's journey and the Bai philosophy of appreciating different flavors of life."
      },
      {
        title: "Marble Craftsmanship",
        description: "Dali marble (Dali Stone) is world-famous. Bai artisans have perfected marble carving and inlay techniques, creating furniture, decorations, and architectural elements."
      }
    ],
    festivals: [
      {
        name: "March Fair (Sanyue Jie)",
        date: "15th-21st of the 3rd lunar month",
        description: "The most important Bai festival, held for over 1,000 years. Features horse racing, traditional performances, and a massive trade fair."
      },
      {
        name: "Torch Festival",
        date: "25th of the 6th lunar month",
        description: "Celebrated with torch processions through villages, dancing, and traditional sports competitions."
      }
    ],
    culturalPractices: [
      "Traditional Bai courtyard houses with ornate gates",
      "Bai language and writing system",
      "Traditional embroidery and weaving",
      "Dali marble carving and craftsmanship"
    ],
    visitTips: [
      "Visit Zhoucheng Village to see tie-dye artisans at work",
      "Explore the Three Pagodas Cultural Heritage Site",
      "Attend a Three-Course Tea ceremony",
      "Shop for authentic Bai tie-dye textiles in Dali Ancient City"
    ]
  },
  yi: {
    id: "yi",
    name: "Yi",
    nameZh: "彝族",
    population: "5 million",
    region: "Throughout Yunnan, especially Chuxiong",
    description: "One of the largest ethnic minorities in China with rich fire worship traditions",
    fullDescription: "The Yi people are one of the largest ethnic minorities in China, with approximately 5 million people across Yunnan, Sichuan, Guizhou, and Guangxi provinces. In Yunnan, they are particularly concentrated in Chuxiong Yi Autonomous Prefecture and other regions throughout the province.\n\nThe Yi people are most famous for the Torch Festival, often called the 'Oriental Carnival.' This festival celebrates on the 24th or 25th day of the sixth month of the Yi calendar (corresponding to August in the Gregorian calendar). The festival commemorates the legendary wrestler Atilabia, who drove away a plague of locusts using torches made from pine trees.\n\nThe Torch Festival is deeply rooted in fire worship and includes offering sacrifices to gods and fields, praying for bountiful harvests, and warding off evil spirits. During the three-day festival, Yi people build huge torches at open squares, and villagers light torches in front of their homes. The celebration culminates in massive bonfires at night, with people of all ages dancing and singing traditional folk songs around the flames.\n\nThe Yi people have their own language, script (Yi script is one of the six ancient scripts still in use in China), calendar system, and rich cultural traditions. Their distinctive colorful costumes, intricate embroidery, and unique musical instruments like the hulusheng (gourd reed pipe) reflect their vibrant cultural identity.\n\nYi society traditionally follows a hierarchical clan system, and their cultural heritage includes epic poems, traditional medicine, astronomical knowledge, and a sophisticated calendar system that has been used for over 1,000 years.",
    color: "from-red-400 to-orange-500",
    image: "/images/culture/yi.jpg",
    traditions: [
      {
        title: "Torch Festival (Huobajie)",
        description: "The most important Yi festival, lasting three days starting on the 24th of the 6th lunar month. Features massive torch processions, bonfire dancing, wrestling competitions, and bullfighting. Rooted in fire worship and agricultural rituals."
      },
      {
        title: "Yi Calendar System",
        description: "An ancient solar calendar with 10 months of 36 days each, plus 5-6 festival days. This sophisticated system has been used for over 1,000 years and demonstrates advanced astronomical knowledge."
      },
      {
        title: "Fire Worship Culture",
        description: "Fire holds sacred significance in Yi culture, symbolizing light, warmth, and the power to ward off evil. Fire-related rituals are central to Yi spiritual life and agricultural practices."
      },
      {
        title: "Yi Script and Literature",
        description: "One of six ancient scripts still in use in China. Used to record epic poems, historical records, and religious texts. The Yi script has over 1,000 years of history."
      }
    ],
    festivals: [
      {
        name: "Torch Festival",
        date: "24th-26th of the 6th lunar month (August)",
        description: "The grandest Yi celebration with torch processions, bonfire dancing, horse racing, wrestling, and bullfighting. The 2025 celebration runs from late June to mid-August in Chuxiong."
      },
      {
        name: "Yi New Year",
        date: "Varies by region",
        description: "Traditional new year celebration with family reunions, ancestor worship, and festive meals."
      }
    ],
    culturalPractices: [
      "Distinctive colorful traditional costumes",
      "Intricate embroidery and lacquerware",
      "Traditional musical instruments (hulusheng, yueqin)",
      "Epic poetry and oral literature traditions"
    ],
    visitTips: [
      "Visit Chuxiong for the most authentic Torch Festival experience",
      "Explore Yi villages to see traditional architecture",
      "Attend Yi musical performances featuring traditional instruments",
      "Learn about Yi astronomical calendar and ancient knowledge"
    ]
  },
  dai: {
    id: "dai",
    name: "Dai",
    nameZh: "傣族",
    population: "1.2 million",
    region: "Xishuangbanna, Dehong",
    description: "Theravada Buddhist culture with strong Southeast Asian influences",
    fullDescription: "The Dai people primarily inhabit Xishuangbanna Dai Autonomous Prefecture and Dehong Dai and Jingpo Autonomous Prefecture in southern Yunnan. With a population of approximately 1.2 million, the Dai are known for their unique culture that blends Theravada Buddhism with Southeast Asian influences, sharing cultural similarities with neighboring Thailand, Laos, and Myanmar.\n\nThe Water Splashing Festival (Songkran) is the most important celebration for the Dai people, marking the Dai New Year. Held in mid-April (6th month of the Dai calendar), this three-day festival involves sincere religious rituals and joyful water-splashing activities. The festival begins with 'Bathing the Buddha,' an important ritual where Buddha statues are ceremonially washed with clean water.\n\nDai culture is renowned for the Peacock Dance, a graceful traditional dance accompanied by elephant-foot drums and bronze gongs. The peacock is considered a symbol of good luck and prosperity in Dai culture, and the dance represents the elegant movements of this sacred bird.\n\nThe Dai people have developed a distinctive architectural style featuring stilted bamboo houses adapted to the tropical climate. These traditional dwellings are built on wooden stilts with the living quarters on the upper floor, while the lower level is used for storage and livestock.\n\nTheravada Buddhism plays a central role in Dai life, with ornate Buddhist temples (called 'Wat') serving as community centers. Many Dai boys spend time as novice monks as part of their education. The Dai script, derived from ancient Pali, is used to record Buddhist scriptures known as Bai Ye Sutra (palm leaf manuscripts).\n\nDai cultural heritage also includes intricate brocade weaving, silver craftsmanship, and unique culinary traditions featuring tropical fruits, herbs, and distinctive flavors.",
    color: "from-green-400 to-emerald-500",
    image: "/images/culture/dai.jpg",
    traditions: [
      {
        title: "Water Splashing Festival (Songkran)",
        description: "The Dai New Year celebration held in mid-April. Three days of festivities include the sacred 'Bathing the Buddha' ritual, dragon boat racing, and joyful water-splashing symbolizing purification and blessings for the new year."
      },
      {
        title: "Peacock Dance",
        description: "Graceful traditional dance mimicking peacock movements, accompanied by elephant-foot drums and bronze gongs. The peacock symbolizes good luck, prosperity, and beauty in Dai culture."
      },
      {
        title: "Theravada Buddhism",
        description: "Central to Dai spiritual life with ornate temples throughout Xishuangbanna. Many boys serve as novice monks. Buddhist scriptures are recorded on palm leaves (Bai Ye Sutra) using ancient Pali-derived Dai script."
      },
      {
        title: "Stilted Bamboo Houses",
        description: "Traditional architecture adapted to tropical climate. Houses built on wooden stilts with upper living quarters and lower storage areas, featuring intricate carvings and decorations."
      }
    ],
    festivals: [
      {
        name: "Water Splashing Festival",
        date: "Mid-April (6th month of Dai calendar)",
        description: "The most important Dai festival marking the New Year. Features Buddha bathing ceremonies, dragon boat races, Peacock Dance performances, and citywide water-splashing celebrations."
      },
      {
        name: "Door Closing Festival",
        date: "Mid-July",
        description: "Marks the beginning of Buddhist Lent, a three-month period of religious devotion and agricultural focus."
      },
      {
        name: "Door Opening Festival",
        date: "Mid-October",
        description: "Celebrates the end of Buddhist Lent with temple visits, merit-making, and community festivities."
      }
    ],
    culturalPractices: [
      "Brocade weaving with intricate patterns",
      "Palm leaf manuscript writing",
      "Traditional silverwork and jewelry",
      "Unique tropical cuisine with sour and spicy flavors"
    ],
    visitTips: [
      "Visit during Water Splashing Festival in April for the most vibrant experience",
      "Explore Buddhist temples in Jinghong city",
      "Watch Peacock Dance performances",
      "Experience traditional Dai cuisine and tropical fruit"
    ]
  },
  tibetan: {
    id: "tibetan",
    name: "Tibetan",
    nameZh: "藏族",
    population: "150,000",
    region: "Shangri-La, Deqen",
    description: "Tibetan Buddhist culture in the highlands of northwest Yunnan",
    fullDescription: "Approximately 150,000 Tibetan people reside in Yunnan Province, primarily in Shangri-La (Diqing Tibetan Autonomous Prefecture) and Deqen County in the northwest. These regions feature high-altitude plateaus, snow-capped mountains, and deep gorges where Tibetan culture has flourished for centuries.\n\nTibetan Buddhism is the cornerstone of life in these communities, with magnificent monasteries serving as spiritual and cultural centers. Songzanlin Monastery in Shangri-La, built in 1679, is the largest Tibetan Buddhist monastery in Yunnan and is often called the 'Little Potala Palace' due to its architectural grandeur.\n\nYunnan Tibetans maintain traditional highland pastoral lifestyles, raising yaks and sheep on vast grasslands. Yak products including meat, milk, butter, and wool are central to Tibetan life. Butter tea (po cha) and tsampa (roasted barley flour) are dietary staples.\n\nTibetan craftsmanship includes thangka painting (Buddhist scroll paintings), intricate metalwork, woodcarving, and traditional textile arts. Thangka paintings serve both religious and artistic purposes, depicting Buddhist deities, mandalas, and spiritual narratives in vivid detail.\n\nHorse racing and archery are important cultural traditions, with annual festivals showcasing these skills. The Tibetan calendar, based on lunar cycles, guides religious observances and agricultural activities.",
    color: "from-yellow-400 to-amber-500",
    image: "/images/culture/tibetan.jpg",
    traditions: [
      {
        title: "Tibetan Buddhism",
        description: "Central to all aspects of life. Songzanlin Monastery, the 'Little Potala Palace,' serves as Yunnan's primary Tibetan Buddhist center with over 600 monks and spectacular architecture."
      },
      {
        title: "Thangka Painting",
        description: "Sacred Buddhist scroll paintings depicting deities, mandalas, and spiritual narratives. Created using natural minerals and pigments following strict iconographic traditions passed down through generations."
      },
      {
        title: "Highland Pastoral Culture",
        description: "Traditional yak herding lifestyle on high-altitude grasslands. Yaks provide meat, milk (for butter tea), wool, and transportation, forming the backbone of Tibetan livelihood."
      },
      {
        title: "Prayer Flags and Wheels",
        description: "Colorful prayer flags flutter across mountain passes carrying blessings on the wind. Prayer wheels containing sacred mantras are spun by devotees to accumulate merit and spread spiritual energy."
      }
    ],
    festivals: [
      {
        name: "Gedong Festival (Horse Racing)",
        date: "5th month of Tibetan calendar (June)",
        description: "Spectacular horse racing festival featuring traditional costumes, archery competitions, and Tibetan opera performances."
      },
      {
        name: "Butter Lamp Festival",
        date: "15th of the 1st Tibetan month",
        description: "Commemorates Buddha's teachings with thousands of butter lamps lit in monasteries, creating a magical nighttime spectacle."
      },
      {
        name: "Ongkor (Harvest) Festival",
        date: "Around August",
        description: "Celebrates harvest season with monastery rituals, picnics on grasslands, and thanksgiving ceremonies."
      }
    ],
    culturalPractices: [
      "Butter tea (po cha) and tsampa preparation",
      "Traditional Tibetan medicine",
      "Metalwork and silver craftsmanship",
      "Sacred dance (Cham) performances"
    ],
    visitTips: [
      "Visit Songzanlin Monastery during morning prayers",
      "Respect Buddhist customs (clockwise circumambulation)",
      "Try butter tea and tsampa with local families",
      "Attend horse racing festivals in summer"
    ]
  },
  miao: {
    id: "miao",
    name: "Miao (Hmong)",
    nameZh: "苗族",
    population: "1.1 million",
    region: "Northeast Yunnan",
    description: "Known for elaborate silver jewelry and exquisite embroidery traditions",
    fullDescription: "The Miao people (also known as Hmong) number approximately 1.1 million in Yunnan Province, primarily concentrated in the northeast regions. The Miao are renowned throughout China for their extraordinary silver craftsmanship and intricate embroidery, which are not merely decorative arts but carriers of cultural identity and historical narratives.\n\nMiao silver jewelry represents one of the most distinctive features of their culture. Traditional Miao women wear elaborate silver headdresses, necklaces, and ornaments that can weigh up to 10-15 kilograms. These pieces are handcrafted by skilled silversmiths using techniques passed down through generations, featuring motifs of dragons, phoenixes, butterflies, and flowers.\n\nEmbroidery is another hallmark of Miao culture, with each regional group having unique patterns and color combinations. Miao embroidery techniques include cross-stitch, appliqué, and reverse appliqué, creating vibrant geometric and natural designs. These textile arts adorn traditional costumes, baby carriers, and household items.\n\nThe Lusheng (reed-pipe wind instrument) is central to Miao musical traditions. The Lusheng Festival features spectacular performances where dancers move in synchronized circles while playing these bamboo instruments. The dance and music serve both entertainment and courtship purposes.\n\nMiao communities maintain strong oral traditions, passing down epic poems, origin stories, and historical accounts through generations. The Miao have no traditional writing system, making these oral traditions crucial for cultural preservation.",
    color: "from-indigo-400 to-purple-500",
    image: "/images/culture/miao.jpg",
    traditions: [
      {
        title: "Silver Craftsmanship",
        description: "Elaborate handcrafted silver jewelry and headdresses weighing up to 15 kilograms. Intricate designs feature dragons, phoenixes, and flowers, representing wealth, status, and cultural identity. Techniques passed down through generations of master silversmiths."
      },
      {
        title: "Miao Embroidery",
        description: "Exquisite needlework using cross-stitch, appliqué, and reverse appliqué techniques. Each regional Miao group has distinct patterns and color palettes. Embroidery adorns traditional costumes and tells stories of Miao history and mythology."
      },
      {
        title: "Lusheng (Reed-Pipe) Music and Dance",
        description: "Traditional bamboo reed-pipe instruments played during festivals and celebrations. The Lusheng Dance involves synchronized circular movements while playing, serving both entertainment and courtship purposes."
      },
      {
        title: "Oral Epic Traditions",
        description: "Rich oral literature including creation myths, migration histories, and folk tales passed down through generations. These narratives preserve Miao history and cultural knowledge in the absence of a traditional writing system."
      }
    ],
    festivals: [
      {
        name: "Huashan Festival (Flower Mountain)",
        date: "Varies by region (usually around May)",
        description: "Major celebration featuring Lusheng performances, bullfighting, traditional dances, and courtship activities. Young people dress in finest embroidered costumes and silver jewelry."
      },
      {
        name: "Sisters' Meal Festival",
        date: "15th of the 3rd lunar month",
        description: "Romantic festival where young women prepare colored glutinous rice to give to suitors. The colors and items hidden in the rice convey acceptance or rejection of courtship."
      },
      {
        name: "Lusheng Festival",
        date: "Varies by region",
        description: "Celebration centered on reed-pipe music and dance competitions, bringing together Miao communities for cultural exchange and matchmaking."
      }
    ],
    culturalPractices: [
      "Traditional batik and indigo dyeing",
      "Miao language preservation",
      "Glutinous rice wine brewing",
      "Traditional wooden drum towers"
    ],
    visitTips: [
      "Visit during Huashan or Sisters' Meal festivals to see full traditional attire",
      "Explore Miao villages to watch silver crafting demonstrations",
      "Purchase authentic handmade embroidery and silver jewelry",
      "Experience traditional Lusheng music performances"
    ]
  },
  hani: {
    id: "hani",
    name: "Hani",
    nameZh: "哈尼族",
    population: "1.6 million",
    region: "Honghe, Yuanyang",
    description: "Creators of the spectacular UNESCO World Heritage Yuanyang Rice Terraces",
    fullDescription: "The Hani people, with a population of approximately 1.6 million in Yunnan Province, are primarily concentrated in Honghe Prefecture and Yuanyang County. They are world-renowned as the creators and maintainers of the spectacular Yuanyang Rice Terraces, a UNESCO World Heritage Site recognized as a masterpiece of human creativity and environmental adaptation.\n\nThe Yuanyang Rice Terraces were sculpted into the Ailao Mountains over 1,300 years ago, transforming steep mountainsides into cascading agricultural landscapes. These terraces demonstrate the Hani people's sophisticated understanding of hydrology, ecology, and sustainable agriculture. The terraces create stunning visual displays throughout the year, especially during the flooded winter months when they reflect the sky like mirrors.\n\nHani culture is deeply connected to their terraced landscape through a complex belief system that venerates forests, water sources, and the land. They maintain a four-element ecosystem: forests at the mountaintops conserve water, villages sit in the middle elevations, terraces cover the slopes, and rivers flow through the valleys.\n\nThe Long Table Feast (Changzhe Feast) is the most important Hani celebration, held during the Kuzhazha Festival (Hani New Year). Hundreds of tables are joined together in village streets, with families contributing dishes to create a communal banquet that can stretch for hundreds of meters.\n\nHani architecture features distinctive mushroom-shaped houses with thick thatched roofs designed to insulate against the mountain climate. These traditional dwellings are built on slopes with stone foundations and have separate areas for living, cooking, and livestock.",
    color: "from-green-500 to-teal-500",
    image: "/images/culture/hani.jpg",
    traditions: [
      {
        title: "Yuanyang Rice Terraces",
        description: "Over 1,300 years of terraced agriculture creating a UNESCO World Heritage landscape. The terraces demonstrate sophisticated hydrology and sustainable farming, transforming mountains into cascading fields that shimmer during flooded seasons."
      },
      {
        title: "Long Table Feast (Changzhe)",
        description: "During Hani New Year, villages create banquet tables stretching hundreds of meters. Each family contributes dishes, creating a communal celebration symbolizing unity and sharing. This tradition strengthens community bonds across generations."
      },
      {
        title: "Four-Element Ecosystem",
        description: "Traditional land management system: forests conserve water at mountain peaks, villages occupy middle elevations, terraces cover slopes, and rivers flow through valleys. This sustainable model has supported Hani communities for over a millennium."
      },
      {
        title: "Mushroom Houses",
        description: "Distinctive architecture with thick thatched roofs resembling mushrooms. These traditional dwellings are built on slopes with stone foundations, featuring natural insulation perfect for mountain climates."
      }
    ],
    festivals: [
      {
        name: "Kuzhazha Festival (Hani New Year)",
        date: "10th month of Hani calendar (around October)",
        description: "The most important Hani celebration featuring the famous Long Table Feast, ancestor worship, swinging competitions, and traditional music performances. Villages come alive with communal activities."
      },
      {
        name: "Yekuza Festival (June Festival)",
        date: "6th month of Hani calendar",
        description: "Agricultural celebration marking the rice transplanting season with singing competitions, traditional dances, and offerings to ensure good harvests."
      },
      {
        name: "Zalet Festival",
        date: "1st month of Hani calendar (around February)",
        description: "Spring festival with swinging activities, singing, and courtship games. Young people gather to socialize and find potential partners."
      }
    ],
    culturalPractices: [
      "Rice terrace agriculture and maintenance",
      "Traditional textile weaving and dyeing",
      "Hani polyphonic singing",
      "Ecological forest conservation practices"
    ],
    visitTips: [
      "Visit Yuanyang terraces between November-March for best reflections",
      "Attend the Long Table Feast during Hani New Year in October",
      "Sunrise and sunset at Duoyishu and Bada terraces are spectacular",
      "Stay in Hani villages to experience mushroom house architecture"
    ]
  },
  lisu: {
    id: "lisu",
    name: "Lisu",
    nameZh: "傈僳族",
    population: "703,000",
    region: "Nujiang Valley",
    description: "Mountain people of the Nujiang Valley known for colorful festivals and rope bridges",
    fullDescription: "The Lisu people, numbering approximately 703,000 in Yunnan Province, primarily inhabit the dramatic Nujiang (Angry River) Valley in northwest Yunnan. Living in one of China's most remote and mountainous regions, the Lisu have developed a unique culture adapted to steep terrain and the powerful Nujiang River.\n\nThe Nujiang region is characterized by deep gorges with villages perched on mountainsides connected by traditional rope bridges and precarious mountain paths. The Lisu people have mastered living in this challenging environment, developing distinctive architectural and transportation solutions.\n\nThe Kuoshi Festival (Knife Ladder Festival) is the most spectacular Lisu celebration, featuring brave participants climbing ladders made of sharp knife blades while barefoot. This ritual demonstrates courage and spiritual strength, with shamanic priests performing fire-walking and other feats to bring blessings to the community.\n\nLisu culture is rich in music and dance, with the Crossbow Dance being a signature performance. Dancers mimic hunting movements while wielding traditional crossbows, accompanied by three-stringed lutes and bamboo flutes. The dance celebrates hunting traditions and demonstrates martial skills.\n\nTraditional Lisu clothing features bright colors, especially red, blue, black, and white, with intricate embroidery and silver ornaments. Women wear distinctive pleated skirts and elaborately decorated headdresses.\n\nThe Lisu language belongs to the Tibeto-Burman family, and a writing system using Latin letters was developed by missionaries in the early 20th century. Lisu oral traditions preserve rich folklore, epic poems, and historical accounts.",
    color: "from-pink-400 to-rose-500",
    image: "/images/culture/lisu.jpg",
    traditions: [
      {
        title: "Knife Ladder Festival (Kuoshi)",
        description: "Most spectacular Lisu celebration where brave participants climb ladders made of 36 sharp knife blades while barefoot, demonstrating spiritual strength and courage. Shamanic priests perform fire-walking and blessing rituals."
      },
      {
        title: "Crossbow Dance",
        description: "Traditional performance mimicking hunting movements with crossbows, accompanied by three-stringed lutes and bamboo flutes. The dance celebrates Lisu hunting heritage and demonstrates martial arts skills passed down through generations."
      },
      {
        title: "Mountain Culture and Rope Bridges",
        description: "Living in the dramatic Nujiang gorges, Lisu people developed unique transportation including traditional rope bridges across the Angry River. Villages perch on mountainsides accessible by steep paths, showcasing adaptation to extreme terrain."
      },
      {
        title: "Colorful Traditional Attire",
        description: "Distinctive clothing featuring bright reds, blues, and blacks with intricate embroidery and silver ornaments. Women wear pleated skirts and elaborate headdresses. Different Lisu subgroups identified by costume colors and patterns."
      }
    ],
    festivals: [
      {
        name: "Kuoshi Festival (Knife Ladder Festival)",
        date: "8th day of the 1st lunar month (February)",
        description: "The most important Lisu festival featuring knife ladder climbing, fire-walking, crossbow competitions, and traditional dances. Shamans perform rituals for community blessings and protection."
      },
      {
        name: "Harvest Festival",
        date: "10th lunar month (November-December)",
        description: "Celebrates harvest season with singing competitions, antiphonal songs between villages, traditional dances, and communal feasting."
      },
      {
        name: "New Year Festival",
        date: "12th lunar month to 1st lunar month",
        description: "Traditional Lisu New Year with family reunions, ancestor worship, and special foods including glutinous rice wine and pork dishes."
      }
    ],
    culturalPractices: [
      "Traditional crossbow hunting techniques",
      "Lisu language and oral literature",
      "Antiphonal singing traditions",
      "Corn and wheat agriculture on steep slopes"
    ],
    visitTips: [
      "Visit during Knife Ladder Festival in February for the most dramatic cultural experience",
      "Explore traditional rope bridges in Nujiang Valley",
      "Attend crossbow dance performances in Lisu villages",
      "Experience the challenging but rewarding trek through Nujiang gorges"
    ]
  }
}

export default function CultureDetailPage() {
  const params = useParams()
  const groupId = params.id as string
  const group = ethnicGroupsData[groupId as keyof typeof ethnicGroupsData]

  if (!group) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Ethnic group not found</h1>
          <Link href="/culture">
            <Button>Back to Culture</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/culture" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Culture</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${group.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${group.color} text-white font-bold mb-4`}>
              {group.name} - {group.nameZh}
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{group.name} People</h1>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Population: {group.population}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Region: {group.region}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                {group.fullDescription}
              </div>
            </CardContent>
          </Card>

          {/* Cultural Traditions */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-emerald-600" />
                Cultural Traditions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {group.traditions.map((tradition, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-emerald-600">{tradition.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{tradition.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Festivals */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-emerald-600" />
                Major Festivals
              </h2>
              <div className="space-y-4">
                {group.festivals.map((festival, idx) => (
                  <div key={idx} className="border-l-4 border-emerald-600 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-2">{festival.name}</h3>
                    <p className="text-sm text-emerald-600 mb-2">{festival.date}</p>
                    <p className="text-gray-700 leading-relaxed">{festival.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cultural Practices */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                  Cultural Practices
                </h2>
                <ul className="space-y-3">
                  {group.culturalPractices.map((practice, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span className="text-gray-700">{practice}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Music className="w-6 h-6 text-emerald-600" />
                  Visiting Tips
                </h2>
                <ul className="space-y-3">
                  {group.visitTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <Card className={`bg-gradient-to-r ${group.color} text-white`}>
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Experience {group.name} Culture</h2>
              <p className="text-lg mb-6 opacity-90">
                Discover authentic cultural experiences and connect with local communities
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/experiences">
                  <Button size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                    Find Experiences
                  </Button>
                </Link>
                <Link href="/plan">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    Plan Your Visit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
