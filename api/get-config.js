export default function handler(req, res) {
    // استخراج كلمة المرور من الرابط المرسل
    const { password } = req.query;

    // --- بياناتك السرية (تعدلها مرة واحدة هنا فقط) ---
    const SECRET_PASSWORD = "Faisal_2026_Secure"; // اختر كلمة مرورك
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycb.../exec"; 

    if (password === SECRET_PASSWORD) {
        // إذا كانت كلمة المرور صحيحة، يرسل الخادم الرابط لصفحة المعلم
        res.status(200).json({
            success: true,
            apiUrl: GOOGLE_SCRIPT_URL
        });
    } else {
        // إذا كانت خاطئة، يرفض الطلب تماماً
        res.status(401).json({ 
            success: false, 
            message: "دخول غير مصرح به" 
        });
    }
}
