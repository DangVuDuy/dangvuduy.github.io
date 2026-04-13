# CLAUDE.md — cloudlab-apps

## Project
Landing site giới thiệu 2 iOS app: Cloud Music và VideoXpert.
Next.js 14 App Router + Tailwind CSS. Static export, deploy Vercel.

## Routes
/ → homepage (app showcase, ngắn gọn)
/apps/cloud-music → detail landing page
/apps/videoxpert → detail landing page

## Data
Toàn bộ content nằm trong lib/apps.ts — không có CMS, không có API.
Sửa content → sửa file này.

## Styling
- Design tokens trong tailwind.config.ts và globals.css
- Không dùng UI library (shadcn, MUI, etc.)
- Font: DM Serif Display (display) + DM Sans (body) via next/font/google
- Accent colors: Cloud Music = #7B6EE8 / VideoXpert = #E8855A

## Components
- components/home/ → chỉ dùng ở homepage
- components/app-detail/ → shared giữa 2 detail page
- components/ui/ → primitives, không có page logic
- Không tạo component mới nếu có thể reuse cái có sẵn

## Images
- public/apps/cloud-music/ và public/apps/videoxpert/
- Luôn dùng next/image, không dùng <img>

## Quy tắc chung
- MVP-first, không over-engineer
- Không thêm dependency mới nếu CSS thuần đủ dùng
- Không dùng 'any' trong TypeScript
