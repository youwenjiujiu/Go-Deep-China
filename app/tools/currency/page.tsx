"use client"

import { useState } from "react"
import { DollarSign, TrendingUp, CreditCard, Smartphone, AlertCircle, ArrowRightLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$", rate: 7.24, flag: "🇺🇸" },
  { code: "EUR", name: "Euro", symbol: "€", rate: 7.85, flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", symbol: "£", rate: 9.12, flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", rate: 0.05, flag: "🇯🇵" },
  { code: "KRW", name: "Korean Won", symbol: "₩", rate: 0.0055, flag: "🇰🇷" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", rate: 4.72, flag: "🇦🇺" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", rate: 5.18, flag: "🇨🇦" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", rate: 5.35, flag: "🇸🇬" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", rate: 0.93, flag: "🇭🇰" },
  { code: "TWD", name: "Taiwan Dollar", symbol: "NT$", rate: 0.23, flag: "🇹🇼" },
]

const paymentMethods = [
  {
    name: "Alipay",
    icon: "💳",
    description: "Most widely accepted. Download the app and link your international card.",
    pros: ["Accepted everywhere", "Easy setup", "Real-time translation"],
    setup: "Download Alipay → Add international card → Verify identity",
  },
  {
    name: "WeChat Pay",
    icon: "💬",
    description: "Very popular. Requires WeChat account and international card.",
    pros: ["Ubiquitous", "Integrated with WeChat", "QR code payments"],
    setup: "Get WeChat → Add Wallet → Link international card",
  },
  {
    name: "Cash (CNY)",
    icon: "💵",
    description: "Still useful in rural areas and small shops.",
    pros: ["Always works", "No tech needed", "Good for tipping"],
    setup: "Exchange at banks or ATMs. Avoid street exchangers.",
  },
  {
    name: "Credit Cards",
    icon: "💳",
    description: "Visa/Mastercard accepted at major hotels and upscale restaurants.",
    pros: ["Convenient", "Travel insurance", "No setup"],
    setup: "Inform your bank about travel. Check foreign transaction fees.",
  },
]

export default function CurrencyPage() {
  const [amount, setAmount] = useState<string>("100")
  const [fromCurrency, setFromCurrency] = useState(currencies[0])
  const [toCurrency] = useState({ code: "CNY", name: "Chinese Yuan", symbol: "¥", rate: 1, flag: "🇨🇳" })

  const convertedAmount = fromCurrency.code === "CNY"
    ? parseFloat(amount) / fromCurrency.rate
    : parseFloat(amount) * fromCurrency.rate

  const handleSwap = () => {
    // In a full implementation, this would swap currencies
    console.log("Swap currencies")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Currency & Payments</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Money Matters in China
            </h1>
            <p className="text-xl opacity-90">
              Real-time exchange rates, payment guide, and financial tips for your Yunnan trip
            </p>
          </div>
        </div>
      </section>

      {/* Currency Converter */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <Card className="border-2 border-blue-200 bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <ArrowRightLeft className="w-6 h-6 text-blue-600" />
              Currency Converter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* From Currency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <select
                  value={fromCurrency.code}
                  onChange={(e) => setFromCurrency(currencies.find(c => c.code === e.target.value) || currencies[0])}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>

              {/* To Currency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 mb-3">
                  {toCurrency.flag} {toCurrency.code} - {toCurrency.name}
                </div>
                <div className="w-full px-4 py-4 border-2 border-blue-500 rounded-lg text-2xl font-bold bg-blue-50 text-blue-700">
                  {toCurrency.symbol} {isNaN(convertedAmount) ? "0.00" : convertedAmount.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-blue-900 mb-1">Exchange Rate</p>
                <p className="text-blue-800">
                  1 {fromCurrency.code} = {fromCurrency.rate} CNY
                  <span className="text-xs text-blue-600 ml-2">(Updated daily)</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Reference */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Quick Reference</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {currencies.slice(0, 5).map((currency) => (
            <Card key={currency.code} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-2">{currency.flag}</div>
                <div className="font-bold text-gray-900 mb-1">{currency.code}</div>
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {currency.rate.toFixed(2)}
                </div>
                <div className="text-xs text-gray-600">= 1 CNY</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">How to Pay in China</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {paymentMethods.map((method) => (
            <Card key={method.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-4xl">{method.icon}</span>
                  <span className="text-xl">{method.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{method.description}</p>

                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Advantages:</h4>
                  <ul className="space-y-1">
                    {method.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-1">Setup:</h4>
                  <p className="text-sm text-gray-700">{method.setup}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Money Tips */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Money Tips for Travelers</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle>Cash vs Digital</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>China is 95% cashless. Set up Alipay or WeChat Pay before arrival.</p>
              <p className="font-semibold">Keep 500-1000 CNY cash for:</p>
              <ul className="space-y-1 ml-4">
                <li>• Rural areas</li>
                <li>• Small vendors</li>
                <li>• Temples (donations)</li>
                <li>• Emergency backup</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Digital Payment Setup</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p className="font-semibold">Before you arrive:</p>
              <ul className="space-y-1 ml-4">
                <li>• Download Alipay/WeChat</li>
                <li>• Link international card</li>
                <li>• Enable location services</li>
                <li>• Take screenshots of setup</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                Some banks block Chinese apps - contact them first
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>ATM & Banking</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>Bank of China and ICBC ATMs accept most international cards.</p>
              <p className="font-semibold">Tips:</p>
              <ul className="space-y-1 ml-4">
                <li>• Daily limit: 2,500-3,000 CNY</li>
                <li>• Fees: ~25-50 CNY per withdrawal</li>
                <li>• Best rates at bank ATMs</li>
                <li>• Avoid hotel exchange desks</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Estimates */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Daily Budget Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">Budget</h3>
                <div className="text-3xl font-bold mb-4">¥200-400</div>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Hostel dorm: ¥40-80</li>
                  <li>• Street food: ¥30-60</li>
                  <li>• Local transport: ¥20-40</li>
                  <li>• Attractions: ¥50-150</li>
                  <li>• Misc: ¥60-70</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">Mid-Range</h3>
                <div className="text-3xl font-bold mb-4">¥500-1000</div>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 3-star hotel: ¥200-350</li>
                  <li>• Restaurants: ¥100-200</li>
                  <li>• Private transport: ¥80-150</li>
                  <li>• Tours/guides: ¥150-250</li>
                  <li>• Misc: ¥70-150</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">Luxury</h3>
                <div className="text-3xl font-bold mb-4">¥1500+</div>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 5-star hotel: ¥800-2000</li>
                  <li>• Fine dining: ¥300-600</li>
                  <li>• Private car: ¥300-500</li>
                  <li>• Premium tours: ¥500-1000</li>
                  <li>• Shopping: ¥500+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
