"use client"

import { useState } from "react"
import { Volume2, Copy, Check, Book, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "basics", name: "Basics", icon: "👋" },
  { id: "dining", name: "Dining", icon: "🍜" },
  { id: "directions", name: "Directions", icon: "🗺️" },
  { id: "shopping", name: "Shopping", icon: "🛍️" },
  { id: "emergency", name: "Emergency", icon: "🆘" },
  { id: "numbers", name: "Numbers", icon: "🔢" },
]

const phrases = {
  basics: [
    { english: "Hello", chinese: "你好", pinyin: "Nǐ hǎo" },
    { english: "Thank you", chinese: "谢谢", pinyin: "Xièxiè" },
    { english: "Excuse me / Sorry", chinese: "对不起", pinyin: "Duìbùqǐ" },
    { english: "Yes / No", chinese: "是 / 不是", pinyin: "Shì / Bù shì" },
    { english: "I don't understand", chinese: "我不明白", pinyin: "Wǒ bù míngbái" },
    { english: "Do you speak English?", chinese: "你会说英语吗?", pinyin: "Nǐ huì shuō yīngyǔ ma?" },
    { english: "How much?", chinese: "多少钱?", pinyin: "Duōshǎo qián?" },
    { english: "Where is...?", chinese: "...在哪里?", pinyin: "...zài nǎlǐ?" },
  ],
  dining: [
    { english: "I'd like...", chinese: "我要...", pinyin: "Wǒ yào..." },
    { english: "Menu please", chinese: "菜单", pinyin: "Càidān" },
    { english: "Water", chinese: "水", pinyin: "Shuǐ" },
    { english: "Bill please", chinese: "买单", pinyin: "Mǎidān" },
    { english: "Delicious!", chinese: "好吃!", pinyin: "Hǎochī!" },
    { english: "Not spicy", chinese: "不要辣", pinyin: "Bù yào là" },
    { english: "Vegetarian", chinese: "素食", pinyin: "Sùshí" },
    { english: "Rice noodles (Cross-bridge)", chinese: "过桥米线", pinyin: "Guòqiáo mǐxiàn" },
  ],
  directions: [
    { english: "Left / Right", chinese: "左 / 右", pinyin: "Zuǒ / Yòu" },
    { english: "Straight", chinese: "直走", pinyin: "Zhí zǒu" },
    { english: "Bus station", chinese: "汽车站", pinyin: "Qìchē zhàn" },
    { english: "Train station", chinese: "火车站", pinyin: "Huǒchē zhàn" },
    { english: "Airport", chinese: "机场", pinyin: "Jīchǎng" },
    { english: "Hotel", chinese: "酒店", pinyin: "Jiǔdiàn" },
    { english: "Old Town", chinese: "古城", pinyin: "Gǔchéng" },
    { english: "How to get to...?", chinese: "怎么去...?", pinyin: "Zěnme qù...?" },
  ],
  shopping: [
    { english: "Can I try this?", chinese: "可以试一下吗?", pinyin: "Kěyǐ shì yīxià ma?" },
    { english: "Too expensive", chinese: "太贵了", pinyin: "Tài guì le" },
    { english: "Cheaper?", chinese: "便宜一点?", pinyin: "Piányí yīdiǎn?" },
    { english: "I'll take it", chinese: "我买了", pinyin: "Wǒ mǎi le" },
    { english: "Credit card", chinese: "信用卡", pinyin: "Xìnyòngkǎ" },
    { english: "WeChat Pay", chinese: "微信支付", pinyin: "Wēixìn zhīfù" },
    { english: "Receipt", chinese: "发票", pinyin: "Fāpiào" },
    { english: "Souvenir", chinese: "纪念品", pinyin: "Jìniànpǐn" },
  ],
  emergency: [
    { english: "Help!", chinese: "救命!", pinyin: "Jiùmìng!" },
    { english: "Police", chinese: "警察", pinyin: "Jǐngchá" },
    { english: "Hospital", chinese: "医院", pinyin: "Yīyuàn" },
    { english: "I'm lost", chinese: "我迷路了", pinyin: "Wǒ mílù le" },
    { english: "Call ambulance", chinese: "叫救护车", pinyin: "Jiào jiùhùchē" },
    { english: "I need a doctor", chinese: "我需要医生", pinyin: "Wǒ xūyào yīshēng" },
    { english: "Pharmacy", chinese: "药店", pinyin: "Yàodiàn" },
    { english: "Embassy", chinese: "大使馆", pinyin: "Dàshǐguǎn" },
  ],
  numbers: [
    { english: "One", chinese: "一", pinyin: "Yī" },
    { english: "Two", chinese: "二", pinyin: "Èr" },
    { english: "Three", chinese: "三", pinyin: "Sān" },
    { english: "Four", chinese: "四", pinyin: "Sì" },
    { english: "Five", chinese: "五", pinyin: "Wǔ" },
    { english: "Six", chinese: "六", pinyin: "Liù" },
    { english: "Seven", chinese: "七", pinyin: "Qī" },
    { english: "Eight", chinese: "八", pinyin: "Bā" },
    { english: "Nine", chinese: "九", pinyin: "Jiǔ" },
    { english: "Ten", chinese: "十", pinyin: "Shí" },
  ],
}

export default function LanguagePage() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof phrases>("basics")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const playAudio = (text: string) => {
    // In production, this would call a text-to-speech API
    console.log("Playing audio for:", text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Book className="w-5 h-5" />
              <span className="font-medium">Language Helper</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Essential Chinese Phrases
            </h1>
            <p className="text-xl opacity-90">
              Learn key phrases with pinyin pronunciation to help you communicate during your Yunnan adventure
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-900 mb-1">Translation Apps</h3>
                  <p className="text-sm text-green-800">
                    Google Translate and Pleco work offline - download Chinese language pack before your trip
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">✍️</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-900 mb-1">Written Chinese</h3>
                  <p className="text-sm text-green-800">
                    Having addresses and destinations written in Chinese characters is very helpful
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-900 mb-1">Be Patient</h3>
                  <p className="text-sm text-green-800">
                    Locals appreciate any effort to speak Chinese - don't be shy to try!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as keyof typeof phrases)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Phrases List */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            {categories.find(c => c.id === selectedCategory)?.name} Phrases
          </h2>
          <div className="space-y-3">
            {phrases[selectedCategory].map((phrase, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">
                        {phrase.english}
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-2xl text-green-700 mb-1">{phrase.chinese}</div>
                          <div className="text-sm text-gray-600 italic">{phrase.pinyin}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => playAudio(phrase.chinese)}
                        className="gap-2"
                      >
                        <Volume2 className="w-4 h-4" />
                        Listen
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(phrase.chinese, idx)}
                        className="gap-2"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="w-4 h-4 text-green-600" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pronunciation Tips */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Pronunciation Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tones Matter!</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <p>Chinese is a tonal language with 4 main tones + neutral:</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>First (ā):</strong> High, level pitch</li>
                  <li>• <strong>Second (á):</strong> Rising pitch</li>
                  <li>• <strong>Third (ǎ):</strong> Falling then rising</li>
                  <li>• <strong>Fourth (à):</strong> Falling pitch</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  Tip: Listen carefully and try to mimic the tone patterns
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Common Sounds</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <ul className="space-y-1">
                  <li>• <strong>Q:</strong> Like "ch" in "cheese"</li>
                  <li>• <strong>X:</strong> Like "sh" in "she"</li>
                  <li>• <strong>Zh:</strong> Like "j" in "judge"</li>
                  <li>• <strong>R:</strong> Like "r" with tongue curled back</li>
                  <li>• <strong>C:</strong> Like "ts" in "cats"</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  Practice makes perfect - locals will appreciate your effort!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center text-white">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download Our Phrasebook
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get the complete offline phrasebook with audio pronunciations for all phrases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
              Download PDF
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Get Mobile App
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
