# GoDeep China - Setup Guide

完整的安装和配置指南

---

## 📋 系统要求

- **Node.js**: 18.0 或更高版本
- **npm**: 9.0 或更高版本
- **PostgreSQL**: 14.0 或更高版本 (可选，用于完整功能)
- **Git**: 用于版本控制

---

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/godeep-china.git
cd godeep-china
```

### 2. 安装依赖

```bash
npm install
```

安装的主要包包括：
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Prisma
- NextAuth.js
- Mapbox GL JS
- Lucide React

### 3. 环境配置

复制环境变量示例文件：

```bash
cp .env.example .env
```

编辑 `.env` 文件，添加必要的配置：

```env
# 数据库 (可选)
DATABASE_URL="postgresql://user:password@localhost:5432/godeep_china"

# NextAuth (必需)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (可选，用于Google登录)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Mapbox (可选，用于地图功能)
NEXT_PUBLIC_MAPBOX_TOKEN="your-mapbox-token"

# OpenAI (可选，用于AI行程规划)
OPENAI_API_KEY="your-openai-key"
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

---

## 🔐 NextAuth 配置

### 生成 Secret Key

```bash
openssl rand -base64 32
```

将生成的密钥添加到 `.env`:

```env
NEXTAUTH_SECRET="生成的密钥"
```

### Google OAuth 配置 (可选)

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 **Google+ API**
4. 创建 OAuth 2.0 凭据
5. 添加授权重定向 URI:
   - 开发: `http://localhost:3000/api/auth/callback/google`
   - 生产: `https://yourdomain.com/api/auth/callback/google`
6. 复制客户端ID和密钥到 `.env`

---

## 🗄️ 数据库设置 (可选)

### PostgreSQL 安装

**macOS (Homebrew):**
```bash
brew install postgresql@14
brew services start postgresql@14
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows:**
下载并安装 [PostgreSQL](https://www.postgresql.org/download/windows/)

### 创建数据库

```bash
# 登录PostgreSQL
psql postgres

# 创建数据库
CREATE DATABASE godeep_china;

# 创建用户
CREATE USER your_user WITH PASSWORD 'your_password';

# 授予权限
GRANT ALL PRIVILEGES ON DATABASE godeep_china TO your_user;

# 退出
\q
```

### 配置DATABASE_URL

在 `.env` 文件中：

```env
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/godeep_china"
```

### Prisma 设置

```bash
# 生成Prisma客户端
npx prisma generate

# 推送数据库schema
npx prisma db push

# 填充示例数据 (可选)
npx prisma db seed
```

### 查看数据库

```bash
# 打开Prisma Studio
npx prisma studio
```

在浏览器中访问 http://localhost:5555 查看和编辑数据

---

## 🗺️ Mapbox 配置 (可选)

### 获取 Mapbox Token

1. 访问 [Mapbox](https://www.mapbox.com/)
2. 注册免费账户
3. 进入 [Access Tokens](https://account.mapbox.com/access-tokens/)
4. 创建新的访问令牌或使用默认令牌
5. 复制令牌到 `.env`:

```env
NEXT_PUBLIC_MAPBOX_TOKEN="pk.your-mapbox-token"
```

### Mapbox 免费配额

- 每月50,000次地图加载免费
- 对于大多数个人项目已足够

---

## 📦 项目结构

```
godeep-china/
├── app/                      # Next.js App Router
│   ├── api/                  # API路由
│   │   ├── auth/             # 认证相关API
│   │   ├── destinations/     # 目的地API
│   │   ├── experiences/      # 体验API
│   │   ├── bookings/         # 预订API
│   │   └── reviews/          # 评论API
│   ├── auth/                 # 认证页面
│   │   ├── signin/           # 登录
│   │   └── signup/           # 注册
│   ├── destinations/         # 目的地页面
│   ├── experiences/          # 体验页面
│   ├── culture/              # 文化页面
│   ├── plan/                 # 行程规划
│   ├── festivals/            # 节日页面
│   ├── guides/               # 导游页面
│   ├── gallery/              # 照片画廊
│   ├── tools/                # 工具集
│   │   ├── visa/             # 签证助手
│   │   ├── weather/          # 天气预报
│   │   ├── language/         # 语言助手
│   │   └── currency/         # 货币转换
│   ├── profile/              # 用户资料
│   ├── bookings/             # 预订管理
│   ├── saved/                # 收藏夹
│   ├── layout.tsx            # 根布局
│   ├── page.tsx              # 首页
│   └── globals.css           # 全局样式
├── components/
│   ├── ui/                   # UI组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── gallery.tsx
│   │   ├── booking-modal.tsx
│   │   └── interactive-map.tsx
│   ├── sections/             # 页面区块
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   └── ...
│   └── providers/            # Context提供者
│       └── session-provider.tsx
├── prisma/
│   ├── schema.prisma         # 数据库schema
│   └── seed.ts               # 种子数据
├── lib/
│   ├── utils.ts              # 工具函数
│   └── prisma.ts             # Prisma客户端
├── public/                   # 静态资源
├── .env.example              # 环境变量示例
├── package.json              # 项目配置
├── tsconfig.json             # TypeScript配置
├── tailwind.config.ts        # Tailwind配置
├── next.config.ts            # Next.js配置
├── README.md                 # 项目说明
├── FEATURES.md               # 功能清单
└── SETUP_GUIDE.md            # 本文档
```

---

## 🎨 开发指南

### 可用脚本

```bash
# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# Prisma相关
npm run prisma:generate  # 生成Prisma客户端
npm run prisma:push      # 推送schema到数据库
npm run prisma:seed      # 填充示例数据
```

### 创建新页面

在 `app/` 目录下创建新文件夹：

```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  )
}
```

访问 http://localhost:3000/new-page

### 创建新API路由

在 `app/api/` 目录下创建route.ts：

```tsx
// app/api/my-api/route.ts
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello" })
}
```

---

## 🔒 认证流程

### 1. 用户注册

```
用户填写表单 → /api/auth/register →
创建用户 → 返回成功 → 自动登录
```

### 2. 用户登录

```
用户输入凭据 → NextAuth验证 →
创建会话 → 返回JWT → 存储在cookie
```

### 3. Google OAuth登录

```
点击Google按钮 → 重定向到Google →
用户授权 → 回调到/api/auth/callback/google →
创建/更新用户 → 创建会话
```

### 4. 保护路由

在页面组件中：

```tsx
"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ProtectedPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "unauthenticated") {
    router.push("/auth/signin")
    return null
  }

  return <div>Protected Content</div>
}
```

在API路由中：

```tsx
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response("Unauthorized", { status: 401 })
  }

  // 处理请求
}
```

---

## 🚢 部署

### Vercel (推荐)

1. 推送代码到GitHub
2. 访问 [Vercel](https://vercel.com)
3. 导入GitHub仓库
4. 配置环境变量
5. 点击部署

### 环境变量设置

在Vercel项目设置中添加：
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (https://yourdomain.com)
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_MAPBOX_TOKEN`

### 数据库托管

**推荐选项:**
- [Neon](https://neon.tech/) - 无服务器PostgreSQL
- [Supabase](https://supabase.com/) - 开源Firebase替代
- [PlanetScale](https://planetscale.com/) - MySQL平台
- [Railway](https://railway.app/) - 全栈部署

---

## 🐛 常见问题

### Q: Port 3000 already in use

**解决方案:**
```bash
# 查找占用端口的进程
lsof -i :3000

# 终止进程
kill -9 <PID>

# 或使用其他端口
PORT=3001 npm run dev
```

### Q: Prisma Client没有生成

**解决方案:**
```bash
npx prisma generate
```

### Q: Module not found错误

**解决方案:**
```bash
# 删除node_modules和锁文件
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### Q: NextAuth session undefined

**解决方案:**
1. 确保 `NEXTAUTH_SECRET` 已设置
2. 检查 `NEXTAUTH_URL` 是否正确
3. 清除浏览器cookies重试

### Q: 数据库连接失败

**解决方案:**
1. 检查PostgreSQL是否运行
2. 验证DATABASE_URL格式
3. 确认数据库名称和凭据正确

---

## 📚 学习资源

### 官方文档

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma](https://www.prisma.io/docs)
- [NextAuth.js](https://next-auth.js.org/)

### 教程和指南

- [Next.js 14 App Router](https://nextjs.org/docs/app)
- [Prisma Quickstart](https://www.prisma.io/docs/getting-started)
- [NextAuth.js Getting Started](https://next-auth.js.org/getting-started/introduction)

---

## 💡 开发技巧

### 1. 使用TypeScript

充分利用类型系统避免错误：

```tsx
interface User {
  id: string
  name: string
  email: string
}

const user: User = {
  id: "1",
  name: "John",
  email: "john@example.com"
}
```

### 2. 组件复用

创建可复用的UI组件：

```tsx
// components/ui/custom-button.tsx
interface ButtonProps {
  text: string
  onClick: () => void
  variant?: "primary" | "secondary"
}

export function CustomButton({ text, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
```

### 3. 使用Server Components

默认情况下，App Router中的组件都是Server Components，除非标记为"use client"。

只在需要交互性时使用Client Components。

### 4. 图片优化

使用Next.js Image组件：

```tsx
import Image from "next/image"

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority
/>
```

---

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

---

## 📧 支持

遇到问题？

- 查看 [Issues](https://github.com/yourusername/godeep-china/issues)
- 创建新Issue
- 发送邮件至 support@godeepchina.com

---

**祝您开发愉快！** 🚀

Created with ❤️ by Claude Code
