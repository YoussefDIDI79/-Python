const fs = require('fs');
const path = require('path');

// قائمة الملفات المطلوبة
const requiredFiles = [
    'index.html',
    'styles.css', 
    'script.js',
    'vercel.json',
    'package.json'
];

// قائمة الملفات الاختيارية
const optionalFiles = [
    'README.md',
    '.gitignore',
    'deploy.sh'
];

console.log('🔍 فحص ملفات المشروع...');
console.log('🔍 Checking project files...\n');

let allGood = true;

// فحص الملفات المطلوبة
console.log('📋 الملفات المطلوبة - Required Files:');
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - مفقود/Missing`);
        allGood = false;
    }
});

// فحص الملفات الاختيارية
console.log('\n📄 الملفات الاختيارية - Optional Files:');
optionalFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`⚠️  ${file} - مفقود/Missing (اختياري/Optional)`);
    }
});

// فحص محتوى الملفات
console.log('\n🔎 فحص المحتوى - Content Check:');

// فحص index.html
if (fs.existsSync('index.html')) {
    const htmlContent = fs.readFileSync('index.html', 'utf8');
    
    if (htmlContent.includes('styles.css')) {
        console.log('✅ HTML يحتوي على رابط CSS');
    } else {
        console.log('❌ HTML لا يحتوي على رابط CSS');
        allGood = false;
    }
    
    if (htmlContent.includes('script.js')) {
        console.log('✅ HTML يحتوي على رابط JavaScript');
    } else {
        console.log('❌ HTML لا يحتوي على رابط JavaScript');
        allGood = false;
    }
    
    if (htmlContent.includes('lang="ar"')) {
        console.log('✅ HTML معد للغة العربية');
    } else {
        console.log('⚠️  HTML قد لا يدعم العربية بشكل مثالي');
    }
}

// فحص vercel.json
if (fs.existsSync('vercel.json')) {
    try {
        const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
        console.log('✅ ملف vercel.json صالح');
    } catch (e) {
        console.log('❌ خطأ في ملف vercel.json:', e.message);
        allGood = false;
    }
}

// النتيجة النهائية
console.log('\n' + '='.repeat(50));
if (allGood) {
    console.log('🎉 جميع الفحوصات نجحت! المشروع جاهز للنشر');
    console.log('🎉 All checks passed! Project ready for deployment');
    console.log('\nللنشر، استخدم: vercel --prod');
    console.log('To deploy, use: vercel --prod');
} else {
    console.log('🚨 هناك مشاكل تحتاج إلى إصلاح قبل النشر');
    console.log('🚨 There are issues that need fixing before deployment');
}

console.log('='.repeat(50));

// معلومات إضافية
console.log('\n📖 للمزيد من المساعدة:');
console.log('📖 For more help:');
console.log('- Vercel Docs: https://vercel.com/docs');
console.log('- GitHub Issues: Create an issue in your repository');