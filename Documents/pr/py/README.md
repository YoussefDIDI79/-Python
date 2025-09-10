# أساسيات Python - المستوى الأول
# Python Basics - Level One

## 📝 الوصف - Description

موقع تعليمي تفاعلي لتعلم أساسيات البرمجة بلغة Python باللغة العربية مع الترجمة الفرنسية. يحتوي على دروس تفاعلية وتمارين عملية للمبتدئين.

An interactive educational website for learning Python programming basics in Arabic with French translation. Contains interactive lessons and practical exercises for beginners.

## 🚀 الميزات - Features

- **دروس تفاعلية** - Interactive lessons
- **أمثلة عملية** - Practical examples  
- **تمارين تطبيقية** - Applied exercises
- **واجهة عربية** - Arabic interface
- **ترجمة فرنسية** - French translation
- **تصميم حديث ومتجاوب** - Modern responsive design

## 📚 المحتويات - Contents

1. **المتغيرات** - Variables
2. **القوائم** - Lists  
3. **العمليات الحسابية** - Mathematical Operations
4. **الدوائر** - Loops
5. **الشروط** - Conditions
6. **مشروع تطبيقي** - Applied Project

## 🛠 التقنيات المستخدمة - Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Responsive Design
- RTL Support

## 📦 النشر على Vercel - Deployment on Vercel

### الخطوات - Steps:

1. **إنشاء حساب على Vercel**
   ```
   https://vercel.com
   ```

2. **تحميل الملفات**
   - `index.html`
   - `styles.css`
   - `script.js`
   - `vercel.json`
   - `package.json`
   - `README.md`

3. **ربط المستودع**
   - قم بإنشاء مستودع جديد على GitHub
   - ارفع جميع الملفات
   - اربط المستودع مع Vercel

4. **النشر التلقائي**
   - سيتم نشر الموقع تلقائياً
   - ستحصل على رابط مثل: `https://your-project.vercel.app`

## 🔧 التشغيل المحلي - Local Development

```bash
# Clone the repository
git clone your-repo-url

# Navigate to project directory
cd python-basics-arabic

# Install Vercel CLI (optional)
npm i -g vercel

# Run locally
vercel dev
```

أو ببساطة افتح `index.html` في المتصفح.

## 📱 التوافق - Compatibility

- ✅ Chrome
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎨 التخصيص - Customization

يمكنك تخصيص:
- الألوان في `styles.css`
- المحتوى في `index.html`  
- التفاعلات في `script.js`

## 📄 الترخيص - License

MIT License - يمكن استخدام المشروع بحرية

## 👨‍💻 المساهمة - Contributing

المساهمات مرحب بها! يرجى:
1. Fork المشروع
2. إنشاء فرع للميزة الجديدة
3. Commit التغييرات  
4. Push للفرع
5. إنشاء Pull Request

## 📞 التواصل - Contact

للأسئلة والاقتراحات، يرجى إنشاء Issue في المستودع.

## 🔧 استكشاف الأخطاء - Troubleshooting

### الأخطاء الشائعة - Common Errors:

#### 1. **DEPLOYMENT_NOT_FOUND (404)**
```
الحل: تأكد من صحة اسم المشروع والرابط
```

#### 2. **NOT_FOUND (404)**
```
الحل: تأكد من وجود ملف index.html في الجذر
```

#### 3. **RESOURCE_NOT_FOUND (404)**
```
الحل: تأكد من مسارات الملفات (styles.css, script.js)
```

#### 4. **DEPLOYMENT_BLOCKED (403)**
```
الحل: تحقق من إعدادات الحساب والصلاحيات
```

### نصائح لتجنب الأخطاء - Error Prevention Tips:

✅ **هيكل الملفات الصحيح**:
```
project-root/
├── index.html     (مطلوب)
├── styles.css     (مطلوب)
├── script.js      (مطلوب)
├── vercel.json    (مطلوب)
└── package.json   (مطلوب)
```

✅ **فحص الروابط**:
- تأكد من أن `<link rel="stylesheet" href="styles.css">` صحيح
- تأكد من أن `<script src="script.js"></script>` صحيح

✅ **ترميز الملفات**:
- استخدم UTF-8 encoding لدعم النصوص العربية
- تأكد من عدم وجود BOM في بداية الملفات

✅ **اختبار محلي**:
```bash
# تشغيل خادم محلي للاختبار
python -m http.server 8000
# أو
npx serve .
```

###  اختبار التوافق - Compatibility Testing:

قبل النشر، اختبر الموقع على:
- متصفحات مختلفة (Chrome, Firefox, Safari)
- أحجام شاشة مختلفة (Desktop, Tablet, Mobile)
- اتجاهات مختلفة (RTL/LTR)

###  إذا واجهت مشاكل - If You Encounter Issues:

1. **تحقق من Console في المتصفح**
2. **راجع logs في Vercel Dashboard**
3. **تأكد من صحة جميع المسارات**
4. **اختبر الموقع محلياً أولاً**

###  الحصول على المساعدة - Getting Help:

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Vercel Support](https://vercel.com/support)

---

**ملاحظة مهمة**: تأكد من أن جميع الملفات في نفس المجلد عند النشر على Vercel، ومن أن الترميز UTF-8 لدعم النصوص العربية.

**Important Note**: Make sure all files are in the same folder when deploying to Vercel, and use UTF-8 encoding for Arabic text support.