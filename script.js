/* =========================================================================
   بيانات المواد والمعاملات لكل شعبة بكالوريا (وفق النظام التربوي الجزائري)
   ملاحظة: المعامل الخاص بمادة "اللغة الأمازيغية" هو 2 لجميع الشعب،
   ويُضاف فقط إذا فعّل المستخدم الخيار الخاص بها.
   ========================================================================= */

// معامل مادة الأمازيغية الثابت لجميع الشعب
const AMAZIGH_COEF = 2;
const AMAZIGH_SUBJECT = { name: "اللغة الأمازيغية", coef: AMAZIGH_COEF };

// قاعدة بيانات الشعب: كل شعبة تحتوي على اسمها وقائمة موادها مع المعاملات
const BRANCHES_DATA = {

  // ----- شعبة علوم تجريبية -----
  "sciences-exp": {
    label: "علوم تجريبية",
    subjects: [
      { name: "الرياضيات", coef: 5 },
      { name: "العلوم الطبيعية", coef: 6 },
      { name: "الفيزياء", coef: 6 },
      { name: "اللغة العربية", coef: 3 },
      { name: "التاريخ والجغرافيا", coef: 2 },
      { name: "اللغة الفرنسية", coef: 2 },
      { name: "اللغة الإنجليزية", coef: 2 },
      { name: "التربية الإسلامية", coef: 2 },
      { name: "الفلسفة", coef: 2 },
      { name: "التربية البدنية", coef: 1 }
    ]
  },

  // ----- شعبة رياضيات -----
  "math": {
    label: "رياضيات",
    subjects: [
      { name: "الرياضيات", coef: 7 },
      { name: "العلوم الطبيعية", coef: 3 },
      { name: "الفيزياء", coef: 6 },
      { name: "اللغة العربية", coef: 3 },
      { name: "التاريخ والجغرافيا", coef: 2 },
      { name: "اللغة الفرنسية", coef: 2 },
      { name: "اللغة الإنجليزية", coef: 2 },
      { name: "التربية الإسلامية", coef: 2 },
      { name: "الفلسفة", coef: 2 },
      { name: "التربية البدنية", coef: 1 }
    ]
  },

  // ----- شعبة تقني رياضي -----
  // المعاملات "العامة" تطبَّق على جميع فروع تقني رياضي (موحدة)
  // فروع: هندسة كهربائية / آلية / مدنية / طرائق
  "tech-math": {
    label: "تقني رياضي",
    subjects: [
      { name: "الرياضيات", coef: 6 },
      { name: "تكنولوجيا (التخصص)", coef: 6 },
      { name: "الفيزياء", coef: 5 },
      { name: "اللغة العربية", coef: 3 },
      { name: "التاريخ والجغرافيا", coef: 2 },
      { name: "اللغة الفرنسية", coef: 2 },
      { name: "اللغة الإنجليزية", coef: 2 },
      { name: "التربية الإسلامية", coef: 2 },
      { name: "الفلسفة", coef: 2 },
      { name: "التربية البدنية", coef: 1 }
    ],
    // أسماء بديلة لمادة "تكنولوجيا (التخصص)" بحسب الفرع المختار
    techSubjectNames: {
      "general": "تكنولوجيا (التخصص)",
      "electrotechnique": "هندسة كهربائية",
      "mecanique": "هندسة آلية",
      "civil": "هندسة مدنية",
      "procedes": "هندسة الطرائق"
    }
  },

  // ----- شعبة تسيير واقتصاد -----
  "gestion-eco": {
    label: "تسيير واقتصاد",
    subjects: [
      { name: "الاقتصاد والمناجمنت", coef: 5 },
      { name: "القانون", coef: 4 },
      { name: "المحاسبة والمالية", coef: 5 },
      { name: "الرياضيات", coef: 3 },
      { name: "اللغة العربية", coef: 3 },
      { name: "التاريخ والجغرافيا", coef: 2 },
      { name: "اللغة الفرنسية", coef: 2 },
      { name: "اللغة الإنجليزية", coef: 2 },
      { name: "التربية الإسلامية", coef: 2 },
      { name: "الفلسفة", coef: 2 },
      { name: "التربية البدنية", coef: 1 }
    ]
  },

  // ----- شعبة لغات أجنبية -----
  "langues": {
    label: "لغات أجنبية",
    subjects: [
      { name: "اللغة العربية", coef: 4 },
      { name: "اللغة الفرنسية", coef: 4 },
      { name: "اللغة الإنجليزية", coef: 4 },
      { name: "اللغة الأجنبية الثالثة (ألمانية/إسبانية/إيطالية)", coef: 4 },
      { name: "التاريخ والجغرافيا", coef: 2 },
      { name: "الفلسفة", coef: 2 },
      { name: "الرياضيات", coef: 2 },
      { name: "التربية الإسلامية", coef: 2 },
      { name: "التربية البدنية", coef: 1 }
    ]
  },

  // ----- شعبة آداب وفلسفة -----
  "lettres-philo": {
    label: "آداب وفلسفة",
    subjects: [
      { name: "الفلسفة", coef: 6 },
      { name: "اللغة العربية", coef: 4 },
      { name: "التاريخ والجغرافيا", coef: 4 },
      { name: "اللغة الفرنسية", coef: 3 },
      { name: "اللغة الإنجليزية", coef: 2 },
      { name: "اللغة الأجنبية الثالثة (ألمانية/إسبانية/إيطالية)", coef: 2 },
      { name: "الرياضيات", coef: 1 },
      { name: "التربية الإسلامية", coef: 2 },
      { name: "التربية البدنية", coef: 1 }
    ]
  }
};

/* =========================================================================
   عناصر الصفحة (DOM References)
   ========================================================================= */
const branchSelect      = document.getElementById("branchSelect");
const techBranchWrapper  = document.getElementById("techBranchWrapper");
const techBranchSelect   = document.getElementById("techBranchSelect");
const amazighToggle      = document.getElementById("amazighToggle");

const stepSubjects   = document.getElementById("step-subjects");
const subjectsTbody  = document.querySelector("#subjectsTable tbody");
const errorMessage   = document.getElementById("errorMessage");
const calcBtn        = document.getElementById("calcBtn");

const resultSection  = document.getElementById("resultSection");
const pdfBranchName  = document.getElementById("pdfBranchName");
const resultTbody    = document.querySelector("#resultTable tbody");
const totalsCell     = document.getElementById("totalsCell");
const averageValue   = document.getElementById("averageValue");
const statusBox      = document.getElementById("statusBox");
const pdfContent     = document.getElementById("pdfContent");

const downloadPdfBtn = document.getElementById("downloadPdfBtn");
const recalcBtn      = document.getElementById("recalcBtn");
const resetBtn       = document.getElementById("resetBtn");

/* =========================================================================
   دالة: بناء قائمة المواد النهائية للشعبة المختارة
   - تأخذ بعين الاعتبار فرع تقني رياضي (اسم المادة التقنية)
   - تضيف مادة الأمازيغية إذا كانت مفعّلة
   ========================================================================= */
function buildSubjectsList(branchKey) {
  const branch = BRANCHES_DATA[branchKey];
  if (!branch) return [];

  // نسخ المواد الأساسية لتفادي تعديل البيانات الأصلية
  let subjects = branch.subjects.map(s => ({ ...s }));

  // في حال شعبة تقني رياضي: تغيير اسم مادة التخصص بحسب الفرع المختار
  if (branchKey === "tech-math") {
    const techKey = techBranchSelect.value || "general";
    const techName = branch.techSubjectNames[techKey] || branch.techSubjectNames["general"];
    subjects = subjects.map(s =>
      s.name === "تكنولوجيا (التخصص)" ? { ...s, name: techName } : s
    );
  }

  // إضافة مادة الأمازيغية إذا تم تفعيل الخيار
  if (amazighToggle.checked) {
    subjects.push({ ...AMAZIGH_SUBJECT });
  }

  return subjects;
}

/* =========================================================================
   دالة: عرض جدول المواد (الخطوة 2) بناءً على الشعبة المختارة
   ========================================================================= */
function renderSubjectsTable() {
  const branchKey = branchSelect.value;

  // إذا لم يتم اختيار شعبة، إخفاء الجدول وقسم النتائج
  if (!branchKey) {
    stepSubjects.classList.add("hidden");
    resultSection.classList.add("hidden");
    return;
  }

  const subjects = buildSubjectsList(branchKey);

  // تفريغ الجدول قبل إعادة بنائه
  subjectsTbody.innerHTML = "";

  subjects.forEach((subject, index) => {
    const row = document.createElement("tr");

    // خلية اسم المادة
    const nameCell = document.createElement("td");
    nameCell.textContent = subject.name;

    // خلية المعامل
    const coefCell = document.createElement("td");
    coefCell.textContent = subject.coef;

    // خلية حقل إدخال العلامة (من 0 إلى 20)
    const markCell = document.createElement("td");
    const markInput = document.createElement("input");
    markInput.type = "number";
    markInput.min = "0";
    markInput.max = "20";
    markInput.step = "0.25";
    markInput.placeholder = "0 - 20";
    markInput.className = "mark-input";
    markInput.dataset.index = index; // لربط الحقل بالمادة المقابلة
    markCell.appendChild(markInput);

    row.appendChild(nameCell);
    row.appendChild(coefCell);
    row.appendChild(markCell);
    subjectsTbody.appendChild(row);
  });

  // عرض قسم المواد وإخفاء قسم النتائج السابق (إن وجد)
  stepSubjects.classList.remove("hidden");
  resultSection.classList.add("hidden");
  errorMessage.textContent = "";
}

/* =========================================================================
   دالة: التحقق من صحة العلامات المدخلة
   - يجب أن تكون جميع الحقول معبأة
   - يجب أن تكون القيم بين 0 و 20
   ========================================================================= */
function validateMarks() {
  const inputs = subjectsTbody.querySelectorAll(".mark-input");
  let isValid = true;

  inputs.forEach(input => {
    const value = parseFloat(input.value);
    if (input.value.trim() === "" || isNaN(value) || value < 0 || value > 20) {
      isValid = false;
      input.style.borderColor = "var(--color-fail)";
    } else {
      input.style.borderColor = "var(--color-border)";
    }
  });

  if (!isValid) {
    errorMessage.textContent = "⚠️ يرجى التأكد من إدخال جميع العلامات بشكل صحيح (بين 0 و 20).";
  } else {
    errorMessage.textContent = "";
  }

  return isValid;
}

/* =========================================================================
   دالة: حساب المعدل العام وعرض كشف النقاط
   المعدل = مجموع (العلامة × المعامل) / مجموع المعاملات
   ========================================================================= */
function calculateAndDisplayResult() {
  if (!validateMarks()) return;

  const branchKey = branchSelect.value;
  const branch = BRANCHES_DATA[branchKey];
  const subjects = buildSubjectsList(branchKey);
  const inputs = subjectsTbody.querySelectorAll(".mark-input");

  let totalCoef = 0;
  let totalWeighted = 0;

  // تفريغ جدول النتائج
  resultTbody.innerHTML = "";

  subjects.forEach((subject, index) => {
    const mark = parseFloat(inputs[index].value);
    const weighted = mark * subject.coef;

    totalCoef += subject.coef;
    totalWeighted += weighted;

    // بناء صف في جدول النتائج
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${subject.name}</td>
      <td>${subject.coef}</td>
      <td>${mark.toFixed(2)}</td>
      <td>${weighted.toFixed(2)}</td>
    `;
    resultTbody.appendChild(row);
  });

  // حساب المعدل العام
  const average = totalWeighted / totalCoef;

  // عرض اسم الشعبة في كشف النقاط
  let branchDisplayName = branch.label;
  if (branchKey === "tech-math") {
    const techKey = techBranchSelect.value || "general";
    if (techKey !== "general") {
      const techLabelMap = {
        "electrotechnique": "هندسة كهربائية",
        "mecanique": "هندسة آلية",
        "civil": "هندسة مدنية",
        "procedes": "هندسة الطرائق"
      };
      branchDisplayName += ` - فرع ${techLabelMap[techKey]}`;
    }
  }
  if (amazighToggle.checked) {
    branchDisplayName += " (مع مادة الأمازيغية)";
  }
  pdfBranchName.textContent = branchDisplayName;

  // عرض إجمالي المعاملات والنقاط
  totalsCell.textContent = `${totalCoef} / ${totalWeighted.toFixed(2)}`;

  // عرض المعدل
  averageValue.textContent = average.toFixed(2);

  // تحديد حالة النجاح / الرسوب وملاحظة التقدير
  updateStatusBox(average);

  // عرض قسم النتائج وإخفاء قسم الإدخال
  resultSection.classList.remove("hidden");
  stepSubjects.classList.add("hidden");

  // التمرير التلقائي إلى النتيجة
  resultSection.scrollIntoView({ behavior: "smooth" });
}

/* =========================================================================
   دالة: تحديد ملاحظة النجاح حسب المعدل
   - أقل من 10: راسب
   - 10 إلى أقل من 12: ناجح
   - 12 إلى أقل من 14: ناجح بميزة مقبول
   - 14 إلى أقل من 16: ناجح بميزة جيد
   - 16 إلى أقل من 18: ناجح بميزة جيد جداً
   - 18 فأكثر: ناجح بميزة ممتاز
   ========================================================================= */
function updateStatusBox(average) {
  let message = "";
  let isSuccess = average >= 10;

  if (average < 10) {
    message = "❌ راسب";
  } else if (average < 12) {
    message = "✅ ناجح";
  } else if (average < 14) {
    message = "✅ ناجح بميزة: مقبول";
  } else if (average < 16) {
    message = "✅ ناجح بميزة: جيد";
  } else if (average < 18) {
    message = "✅ ناجح بميزة: جيد جداً";
  } else {
    message = "✅ ناجح بميزة: ممتاز";
  }

  statusBox.textContent = message;
  statusBox.className = "status-box " + (isSuccess ? "success" : "fail");
}

/* =========================================================================
   دالة: توليد ملف PDF من قسم كشف النقاط
   تستخدم مكتبة html2pdf.js التي تدعم النصوص العربية بشكل صحيح
   عبر تحويل المحتوى إلى صورة (canvas) قبل تضمينه في PDF.
   ========================================================================= */
function downloadResultAsPdf() {
  const branchName = pdfBranchName.textContent || "كشف-النقاط";

  const options = {
    margin: 10,
    filename: `كشف_نقاط_البكالوريا_${branchName.replace(/\s+/g, "_")}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };

  // عرض زر التحميل بحالة "جاري التحضير" مؤقتاً
  const originalText = downloadPdfBtn.textContent;
  downloadPdfBtn.textContent = "⏳ جاري تحضير الملف...";
  downloadPdfBtn.disabled = true;

  html2pdf().set(options).from(pdfContent).save().then(() => {
    downloadPdfBtn.textContent = originalText;
    downloadPdfBtn.disabled = false;
  }).catch(() => {
    downloadPdfBtn.textContent = originalText;
    downloadPdfBtn.disabled = false;
    alert("حدث خطأ أثناء توليد ملف PDF، يرجى المحاولة مرة أخرى.");
  });
}

/* =========================================================================
   ربط الأحداث (Event Listeners)
   ========================================================================= */

// عند تغيير الشعبة: عرض/إخفاء خيار فرع تقني رياضي وإعادة بناء الجدول
branchSelect.addEventListener("change", () => {
  techBranchWrapper.style.display =
    branchSelect.value === "tech-math" ? "flex" : "none";
  renderSubjectsTable();
});

// عند تغيير فرع تقني رياضي: إعادة بناء الجدول بأسماء المواد المحدثة
techBranchSelect.addEventListener("change", renderSubjectsTable);

// عند تفعيل/إلغاء تفعيل مادة الأمازيغية: إعادة بناء الجدول
amazighToggle.addEventListener("change", renderSubjectsTable);

// زر الحساب وتوليد كشف النقاط
calcBtn.addEventListener("click", calculateAndDisplayResult);

// زر تنزيل PDF
downloadPdfBtn.addEventListener("click", downloadResultAsPdf);

// زر "تعديل العلامات": العودة لجدول الإدخال دون فقدان البيانات
recalcBtn.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  stepSubjects.classList.remove("hidden");
  stepSubjects.scrollIntoView({ behavior: "smooth" });
});

// زر "شعبة جديدة": إعادة تعيين كامل الموقع لاختيار شعبة من جديد
resetBtn.addEventListener("click", () => {
  branchSelect.value = "";
  techBranchSelect.value = "general";
  techBranchWrapper.style.display = "none";
  amazighToggle.checked = false;
  stepSubjects.classList.add("hidden");
  resultSection.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
