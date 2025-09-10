function createVariable() {
    const userName = document.getElementById('userName').value || "الطالب";
    const code = `nom = "${userName}"  # اسم المستخدم
age = 14           # العمر
print("مرحباً", nom, "! عمرك", age, "سنة")`;
    
    document.getElementById('variableResult').innerHTML = `
        <div class="result-display">
            <h4>الكود المُنشأ:</h4>
            <div class="code-container"><pre><code>${code}</code></pre></div>
            <h4>النتيجة:</h4>
            <div class="output">مرحباً ${userName}! عمرك 14 سنة</div>
        </div>
    `;
}

function createList() {
    const gradesInput = document.getElementById('gradesList').value || "85,90,78,92,88";
    const grades = gradesInput.split(',').map(g => parseFloat(g.trim()));
    
    const code = `notes = [${grades.join(', ')}]  # قائمة الدرجات
premiere_note = notes[0]     # أول درجة
nombre_notes = len(notes)    # عدد الدرجات
print("أول درجة:", premiere_note)
print("عدد الدرجات:", nombre_notes)`;
    
    document.getElementById('listResult').innerHTML = `
        <div class="result-display">
            <h4>الكود المُنشأ:</h4>
            <div class="code-container"><pre><code>${code}</code></pre></div>
            <h4>النتيجة:</h4>
            <div class="output">أول درجة: ${grades[0]}
عدد الدرجات: ${grades.length}</div>
        </div>
    `;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const operation = document.getElementById('operation').value;
    
    let result;
    let operationName;
    
    switch(operation) {
        case '+':
            result = num1 + num2;
            operationName = "الجمع";
            break;
        case '-':
            result = num1 - num2;
            operationName = "الطرح";
            break;
        case '*':
            result = num1 * num2;
            operationName = "الضرب";
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "لا يمكن القسمة على صفر";
            operationName = "القسمة";
            break;
    }
    
    const code = `a = ${num1}
b = ${num2}
resultat = a ${operation} b  # ${operationName}
print("النتيجة:", resultat)`;
    
    document.getElementById('calcResult').innerHTML = `
        <div class="result-display">
            <h4>الكود:</h4>
            <div class="code-container"><pre><code>${code}</code></pre></div>
            <h4>النتيجة:</h4>
            <div class="output">${operationName}: ${result}</div>
        </div>
    `;
}

function runLoop() {
    let output = "";
    for(let i = 1; i <= 5; i++) {
        output += `الرقم: ${i}\n`;
    }
    
    const code = `for nombre in range(1, 6):
    print("الرقم:", nombre)`;
    
    document.getElementById('loopResult').innerHTML = `
        <div class="result-display">
            <h4>الكود:</h4>
            <div class="code-container"><pre><code>${code}</code></pre></div>
            <h4>النتيجة:</h4>
            <div class="output">${output}</div>
        </div>
    `;
}

function evaluateGrade() {
    const grade = parseFloat(document.getElementById('gradeInput').value) || 0;
    let message, color;
    
    if(grade >= 90) {
        message = "ممتاز! درجة عالية جداً ";
        color = "#4CAF50";
    } else if(grade >= 80) {
        message = "جيد جداً! استمر هكذا ";
        color = "#2196F3";
    } else if(grade >= 70) {
        message = "جيد، يمكنك التحسن ";
        color = "#FF9800";
    } else {
        message = "تحتاج للمزيد من المذاكرة ";
        color = "#F44336";
    }
    
    const code = `note = ${grade}

if note >= 90:
    message = "ممتاز! درجة عالية جداً"
elif note >= 80:
    message = "جيد جداً! استمر هكذا"
elif note >= 70:
    message = "جيد، يمكنك التحسن"
else:
    message = "تحتاج للمزيد من المذاكرة"

print("تقييمك:", message)`;
    
    document.getElementById('gradeEvaluation').innerHTML = `
        <div class="result-display">
            <h4>الكود:</h4>
            <div class="code-container"><pre><code>${code}</code></pre></div>
            <h4>النتيجة:</h4>
            <div class="output" style="color: ${color}; font-weight: bold;">${message}</div>
        </div>
    `;
}

function smartCalculator() {
    const math = parseFloat(document.getElementById('math').value) || 0;
    const physique = parseFloat(document.getElementById('physique').value) || 0;
    const chimie = parseFloat(document.getElementById('chimie').value) || 0;
    const anglais = parseFloat(document.getElementById('anglais').value) || 0;
    
    const notes = [math, physique, chimie, anglais];
    const matieres = ["الرياضيات", "الفيزياء", "الكيمياء", "الإنجليزية"];
    
    const somme = notes.reduce((a, b) => a + b, 0);
    const moyenne = somme / notes.length;
    
    let meilleure_matiere = matieres[0];
    let meilleure_note = notes[0];
    let pire_matiere = matieres[0];
    let pire_note = notes[0];
    
    for(let i = 1; i < notes.length; i++) {
        if(notes[i] > meilleure_note) {
            meilleure_note = notes[i];
            meilleure_matiere = matieres[i];
        }
        if(notes[i] < pire_note) {
            pire_note = notes[i];
            pire_matiere = matieres[i];
        }
    }
    
    let evaluation;
    let evaluationEmoji;
    if(moyenne >= 90) {
        evaluation = "ممتاز جداً!";
        evaluationEmoji = "🏆";
    } else if(moyenne >= 80) {
        evaluation = "جيد جداً!";
        evaluationEmoji = "⭐";
    } else if(moyenne >= 70) {
        evaluation = "جيد!";
        evaluationEmoji = "👍";
    } else {
        evaluation = "يحتاج تحسن!";
        evaluationEmoji = "💪";
    }
    
    const code = `# الدرجات
math = ${math}
physique = ${physique}  
chimie = ${chimie}
anglais = ${anglais}

notes = [math, physique, chimie, anglais]
matieres = ["رياضيات", "فيزياء", "كيمياء", "إنجليزية"]

# حساب المتوسط
somme = sum(notes)  # مجموع الدرجات
moyenne = somme / len(notes)  # المتوسط

# العثور على أفضل وأسوأ مادة
meilleure_note = max(notes)  # أعلى درجة
pire_note = min(notes)       # أقل درجة

print("المتوسط:", moyenne)
print("أفضل مادة:", meilleure_note)`;
    
    document.getElementById('smartResult').innerHTML = `
        <div class="result-display">
            <h4> تحليل ذكي لدرجاتك:</h4>
            <div style="background: rgba(76,175,80,0.1); padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>${evaluationEmoji} المتوسط العام:</strong> ${moyenne.toFixed(1)} - ${evaluation}</p>
                <p><strong> أفضل مادة:</strong> ${meilleure_matiere} (${meilleure_note})</p>
                <p><strong> تحتاج تحسن في:</strong> ${pire_matiere} (${pire_note})</p>
                <p><strong> نصيحة:</strong> ركز أكثر على ${pire_matiere} لتحسين متوسطك!</p>
            </div>
            <h4>الكود المستخدم:</h4>
            <div class="code-container"><pre><code>${code}</code></pre></div>
        </div>
    `;
}

// إضافة تأثيرات تفاعلية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إضافة تأثير fade-in للعناصر
    const cards = document.querySelectorAll('.lesson-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // إضافة مستمعات الأحداث للمدخلات
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
});