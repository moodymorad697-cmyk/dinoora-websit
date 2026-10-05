import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const {
      productCategory,
      productDetails,
      quantity,
      destination,
      port,
      shippingMethod,
      weight,
      whatsapp,
      locale
    } = body;

    const ar = locale === 'ar';

    // Prepare email content
    const emailSubject = ar 
      ? `طلب حساب تكلفة منتج - ${productCategory}` 
      : `Product Cost Calculation Request - ${productCategory}`;

    const emailBody = `
${ar ? "تفاصيل طلب حساب تكلفة المنتج" : "Product Cost Calculation Request Details"}
========================================

${ar ? "فئة المنتج" : "Product Category"}: ${productCategory}
${ar ? "تفاصيل المنتج" : "Product Details"}: ${productDetails}
${ar ? "الكمية" : "Quantity"}: ${quantity}
${ar ? "الوجهة" : "Destination"}: ${destination}
${ar ? "الميناء" : "Port"}: ${port || "Not specified"}
${ar ? "طريقة الشحن" : "Shipping Method"}: ${shippingMethod}
${ar ? "الوزن" : "Weight"}: ${weight} kg
${ar ? "رقم الواتساب" : "WhatsApp Number"}: ${whatsapp}

${ar ? "اللغة المفضلة" : "Preferred Language"}: ${locale === 'ar' ? 'العربية' : 'English'}

${ar ? "تاريخ الطلب" : "Request Date"}: ${new Date().toLocaleString()}
    `.trim();

    // In production, you would use a service like SendGrid, Nodemailer, or Resend
    // For now, we'll log the email and return success
    console.log('Email to be sent to info@dinooratrade.com:');
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@dinooratrade.com',
    //   to: 'info@dinooratrade.com',
    //   subject: emailSubject,
    //   text: emailBody
    // });

    return NextResponse.json({ 
      success: true, 
      message: ar 
        ? "تم إرسال طلبك بنجاح! سوف يصلك السعر الكامل لمنتجك على الواتساب خلال 24 ساعة. شكراً لتواصلك معنا." 
        : "Your request has been sent successfully! The full price of your product will be sent to you via WhatsApp within 24 hours. Thank you for contacting us."
    });
  } catch (error) {
    console.error('Error sending calculator request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send request' },
      { status: 500 }
    );
  }
}
