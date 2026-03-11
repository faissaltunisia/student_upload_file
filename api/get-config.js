export default function handler(req, res) {
    // استخراج كلمة المرور من الرابط المرسل
    const { password } = req.query;

    // --- بياناتك السرية (تعدلها مرة واحدة هنا فقط) ---
    const SECRET_PASSWORD = "2015"; // اختر كلمة مرورك
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVyx-ZyDHljybA9cuiOBW9DzwFKfKx1mw-AJPQk_yfm1WZV9dA3vijDD6niQsqPrI/exec"; 

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
