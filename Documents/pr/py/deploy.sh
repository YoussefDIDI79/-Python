#!/bin/bash

# سكريبت نشر المشروع على Vercel
# Deploy script for Vercel

echo "🚀 بدء عملية النشر على Vercel..."
echo "🚀 Starting deployment to Vercel..."

# التحقق من وجود الملفات المطلوبة
echo "📋 التحقق من الملفات المطلوبة..."
echo "📋 Checking required files..."

required_files=("index.html" "styles.css" "script.js" "vercel.json" "package.json")

for file in "${required_files[@]}"
do
    if [ ! -f "$file" ]; then
        echo "❌ ملف مفقود: $file"
        echo "❌ Missing file: $file"
        exit 1
    else
        echo "✅ موجود: $file"
        echo "✅ Found: $file"
    fi
done

# التحقق من تثبيت Vercel CLI
if ! command -v vercel &> /dev/null
then
    echo "📦 تثبيت Vercel CLI..."
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# تسجيل الدخول إلى Vercel (إذا لم يتم من قبل)
echo "🔐 التحقق من تسجيل الدخول..."
echo "🔐 Checking login status..."
vercel whoami || vercel login

# النشر
echo "🌐 نشر المشروع..."
echo "🌐 Deploying project..."
vercel --prod

echo "✅ تم النشر بنجاح!"
echo "✅ Deployment successful!"
echo ""
echo "🎉 يمكنك الآن زيارة موقعك على الرابط الذي ظهر أعلاه"
echo "🎉 You can now visit your site at the URL shown above"