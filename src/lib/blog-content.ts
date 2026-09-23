export interface BlogArticle {
  id: string;
  type: string;
  image: string;
  ar: {
    title: string;
    description: string;
    content: string;
  };
  en: {
    title: string;
    description: string;
    content: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    id: "sourcing-1",
    type: "sourcing",
    image: "/blog-images/IMG_8706.jpg",
    ar: {
      title: "كيف تكتب طلب توريد يمنحك أسعاراً أفضل",
      description: "تعلم كيفية كتابة مواصفات دقيقة لطلب التوريد من الصين للحصول على عروض أسعار تنافسية من الموردين وتجنب سوء الفهم.",
      content: `# كيف تكتب طلب توريد يمنحك أسعاراً أفضل

عند الاستيراد من الصين، يعتبر طلب التوريد من أهم العوامل التي تحدد جودة الأسعار التي ستحصل عليها من الموردين. في هذا الدليل الشامل، سنشرح كيفية كتابة طلب توريد احترافي يضمن لك أفضل الأسعار والجودة.

## أهمية طلب التوريد الواضح

طلب التوريد الواضح والمفصل يوفر عليك الكثير من الوقت والمال. عندما ترسل طلباً غامضاً، سيقدم الموردون أسعاراً تقديرية غالباً ما تكون مرتفعة لتجنب المخاطر. بينما الطلب المفصل يمنحهم الثقة لتقديم أسعار دقيقة ومنافسة.

## العناصر الأساسية لطلب التوريد الناجح

### 1. المواصفات التقنية الدقيقة

يجب أن تتضمن المواصفات الأبعاد الدقيقة بالملليمتر، المواد الخام المستخدمة، معايير الجودة المطلوبة، شهادات الاختبار المطلوبة، وأي متطلبات خاصة بالتغليف.

### 2. الكميات المطلوبة

حدد الكميات بدقة بما في ذلك الكمية الأولية للطلب التجريبي، الكمية المتوقعة للطلبات المستقبلية، والجدول الزمني للطلبات. هذا يساعد المورد على تقديم أسعار تنافسية للكميات الكبيرة.

### 3. الميزانية المتوقعة

كن شفافاً بشأن ميزانيتك. حدد السعر المستهدف لكل وحدة، فهذا يساعد المورد على فهم توقعاتك. يمكنك ذكر أن السعر قابل للتفاوض بناءً على الجودة.

### 4. متطلبات الشحن والتوصيل

حدد بوضوح الميناء المستهدف مثل جدة أو الدمام، طريقة الشحن المفضلة بحري أو جوي، التأمين المطلوب، وموعد التسليم المتوقع.

## أخطاء شائعة يجب تجنبها

تجنب طلبات عامة جداً مثل "أريد منتجاً مشابهاً لهذا الصورة". بدلاً من ذلك، اشرح بالتفصيل ما تريده. لا تركز على السعر فقط، بل حدد معايير الجودة بوضوح لتجنب المنتجات المعيبة. بدون كميات واضحة، سيقدم الموردون أسعاراً مرتفعة لتغطية المخاطر.

## نصائح إضافية للحصول على أفضل الأسعار

اطلب عروض من عدة موردين، قارن بين 3-5 موردين على الأقل للحصول على أفضل سعر. كن مستعداً للتفاوض، فالأسعار المقدمة غالباً قابلة للتفاوض خاصة للكميات الكبيرة. استخدم منصات التوريد الموثوقة مثل Alibaba أو Made-in-China للبحث عن موردين موثوقين. قبل التعاقد، تحقق من تقييمات المورد ومراجعات العملاء السابقين.

## لماذا دينورا؟

في دينورا، نساعدك في كتابة طلبات التوريد الاحترافية التي تضمن لك أفضل الأسعار من الموردين الصينيين. فريقنا الخبير يفهم تماماً كيفية التواصل مع الموردين الصينيين والحصول على أفضل العروض.

خدماتنا تشمل كتابة طلبات التوريد الاحترافية، البحث عن موردين موثوقين، التفاوض على الأسعار، وفحص الجودة قبل الشحن.

اطلب عرض سعر الآن وابدأ رحلة الاستيراد من الصين بثقة.`
    },
    en: {
      title: "How to Write a Sourcing Brief That Gets Better Quotes",
      description: "Learn how to write precise specifications for your sourcing request from China to get competitive quotes from suppliers and avoid misunderstandings.",
      content: `# How to Write a Sourcing Brief That Gets Better Quotes

When importing from China, the sourcing brief is one of the most important factors that determine the quality of prices you'll receive from suppliers. In this comprehensive guide, we'll explain how to write a professional sourcing brief that ensures you get the best prices and quality.

## The Importance of a Clear Sourcing Brief

A clear and detailed sourcing brief saves you significant time and money. When you send a vague request, suppliers will often provide estimated prices that tend to be higher to avoid risks. Meanwhile, a detailed request gives them confidence to provide accurate and competitive prices.

## Essential Elements of a Successful Sourcing Brief

### 1. Precise Technical Specifications

Specifications should include exact dimensions in millimeters, raw materials used, required quality standards, required test certificates, and any special packaging requirements.

### 2. Required Quantities

Specify quantities clearly including initial trial order quantity, expected future order quantities, and order schedule. This helps suppliers offer competitive prices for larger quantities.

### 3. Expected Budget

Be transparent about your budget. Specify target price per unit, as this helps suppliers understand your expectations. You can mention that price is negotiable based on quality.

### 4. Shipping and Delivery Requirements

Specify clearly target port like Jeddah or Dammam, preferred shipping method sea or air, required insurance, and expected delivery date.

## Common Mistakes to Avoid

Avoid too general requests like "I want a product similar to this image." Instead, explain in detail what you want. Don't focus only on price, specify quality standards clearly to avoid defective products. Without clear quantities, suppliers will offer higher prices to cover risks.

## Additional Tips for Getting the Best Prices

Request quotes from multiple suppliers, compare at least 3-5 suppliers to get the best price. Be prepared to negotiate, offered prices are often negotiable especially for large quantities. Use reliable sourcing platforms like Alibaba or Made-in-China to find reliable suppliers. Before contracting, check supplier ratings and reviews from previous customers.

## Why Dinoora?

At Dinoora, we help you write professional sourcing briefs that ensure you get the best prices from Chinese suppliers. Our expert team understands exactly how to communicate with Chinese suppliers and get the best offers.

Our services include writing professional sourcing briefs, finding reliable suppliers, price negotiation, and pre-shipment quality inspection.

Request a quote now and start your importing journey from China with confidence.`
    }
  },
  {
    id: "shipping-1",
    type: "shipping",
    image: "/blog-images/IMG_8707.jpg",
    ar: {
      title: "بحري أم جوي؟ قرار الشحن يبدأ من طبيعة البضاعة",
      description: "دليل شامل لاختيار الشحن البحري أو الجوي من الصين بناءً على حجم البضاعة، الوقت المتاح، والميزانية.",
      content: `# بحري أم جوي؟ قرار الشحن يبدأ من طبيعة البضاعة

عند الاستيراد من الصين، أحد أهم القرارات التي يجب اتخاذها هو اختيار طريقة الشحن المناسبة: بحري أم جوي؟ في هذا الدليل، سنشرح بالتفصيل كيفية اتخاذ هذا القرار بناءً على عوامل متعددة.

## الشحن البحري من الصين

### المميزات
- **تكلفة أقل بكثير**: الشحن البحري أرخص بنسبة 80-90% من الشحن الجوي
- **سعة أكبر**: يمكن شحن كميات ضخمة في شحنة واحدة
- **مناسب للبضائع الثقيلة**: مثالي للمواد الخام والآلات الثقيلة

### العيوب
- **وقت أطول**: يستغرق 20-45 يوم للوصول للموانئ السعودية
- **مخاطر أعلى**: احتمالية تلف البضاعة بسبب الرطوبة والحركة
- **تكاليف إضافية**: رسوم الميناء والتخليص الجمركي

### متى تختار الشحن البحري؟

اختر الشحن البحري عندما:
- الكمية كبيرة (أكثر من 500 كجم)
- البضاعة ليست عاجلة
- التكلفة هي العامل الأهم
- البضاعة ثقيلة أو كبيرة الحجم

## الشحن الجوي من الصين

### المميزات
- **سرعة عالية**: يستغرق 3-7 أيام للوصول
- **أمان أعلى**: مخاطر تلف أقل
- **تتبع أفضل**: إمكانية تتبع دقيقة للشحنة

### العيوب
- **تكلفة عالية**: أغلى بكثير من الشحن البحري
- **قيود على الوزن والحجم**: قيود صارمة على الأبعاد والوزن
- **رسوم إضافية**: رسوم الوقود والرسوم الأمنية

### متى تختار الشحن الجوي؟

اختر الشحن الجوي عندما:
- البضاعة عاجلة جداً
- الكمية صغيرة (أقل من 100 كجم)
- قيمة البضاعة عالية (إلكترونيات، مجوهرات)
- الوقت هو العامل الأهم

## مقارنة تفصيلية بين الشحن البحري والجوي

| العامل | الشحن البحري | الشحن الجوي |
|--------|--------------|--------------|
| التكلفة | منخفضة | عالية |
| الوقت | 20-45 يوم | 3-7 أيام |
| السعة | غير محدودة تقريباً | محدودة |
| الأمان | متوسطة | عالية |
| التتبع | محدود | ممتاز |

## عوامل إضافية يجب مراعاتها

### 1. نوع البضاعة

بعض البضائع تتطلب شحناً معيناً:
- **المواد الغذائية**: قد تتطلب شحن جوي للحفاظ على الطزاجة
- **المواد الخطرة**: قد تتطلب شحن بحري مع متطلبات خاصة
- **الإلكترونيات**: يمكن شحنها بالطريقتين حسب العجالة

### 2. الموسم

في المواسم الذروة (رمضان، الأعياد):
- الشحن الجوي قد يكون أسرع لتجنب التأخير
- الشحن البحري قد يكون أكثر ازدحاماً

### 3. التكاليف الخفية

احسب جميع التكاليف:
- رسوم الميناء
- التخليص الجمركي
- النقل الداخلي
- التخزين (إذا لزم الأمر)

## نصائح لتحسين تجربة الشحن

### 1. خطط مسبقاً
- احجز الشحن مبكراً خاصة في المواسم الذروة
- جهز المستندات المطلوبة مسبقاً

### 2. قارن الأسعار
- احصل على عروض من عدة شركات شحن
- قارن بين الخدمات المقدمة وليس السعر فقط

### 3. تأمين البضاعة
- احصل على تأمين شامل للبضائع القيمة
- افهم شروط التأمين جيداً

### 4. تتبع الشحنة
- استخدم خدمات التتبع المتاحة
- تواصل مع شركة الشحن بانتظام

## لماذا دينورا؟

في دينورا، نساعدك في اختيار طريقة الشحن المناسبة لاحتياجاتك. فريقنا الخبير يفهم تماماً الفروقات بين الشحن البحري والجوي ويمكنه تقديم المشورة المناسبة.

خدماتنا تشمل:
- تقديم المشورة بشأن طريقة الشحن المناسبة
- ترتيب الشحن البحري والجوي
- تتبع الشحنات
- التخليص الجمركي

اطلب عرض سعر الآن ودعنا نساعدك في اختيار أفضل طريقة شحن لاحتياجاتك.`
    },
    en: {
      title: "Sea or Air? Choose Freight by Cargo, Not Price Alone",
      description: "A comprehensive guide to choosing sea or air freight from China based on cargo volume, available time, and budget.",
      content: `# Sea or Air? Choose Freight by Cargo, Not Price Alone

When importing from China, one of the most important decisions to make is choosing the appropriate shipping method: sea or air? In this guide, we'll explain in detail how to make this decision based on multiple factors.

## Sea Freight from China

### Advantages
- **Much lower cost**: Sea freight is 80-90% cheaper than air freight
- **Larger capacity**: Can ship huge quantities in one shipment
- **Suitable for heavy goods**: Ideal for raw materials and heavy machinery

### Disadvantages
- **Longer time**: Takes 20-45 days to reach Saudi ports
- **Higher risk**: Possibility of cargo damage due to humidity and movement
- **Additional costs**: Port fees and customs clearance

### When to Choose Sea Freight?

Choose sea freight when:
- Quantity is large (more than 500 kg)
- Goods are not urgent
- Cost is the most important factor
- Goods are heavy or large in size

## Air Freight from China

### Advantages
- **High speed**: Takes 3-7 days to arrive
- **Higher safety**: Lower risk of damage
- **Better tracking**: Precise shipment tracking capability

### Disadvantages
- **High cost**: Much more expensive than sea freight
- **Weight and size restrictions**: Strict limits on dimensions and weight
- **Additional fees**: Fuel surcharges and security fees

### When to Choose Air Freight?

Choose air freight when:
- Goods are very urgent
- Quantity is small (less than 100 kg)
- Goods have high value (electronics, jewelry)
- Time is the most important factor

## Detailed Comparison Between Sea and Air Freight

| Factor | Sea Freight | Air Freight |
|--------|-------------|-------------|
| Cost | Low | High |
| Time | 20-45 days | 3-7 days |
| Capacity | Almost unlimited | Limited |
| Safety | Medium | High |
| Tracking | Limited | Excellent |

## Additional Factors to Consider

### 1. Type of Goods

Some goods require specific shipping:
- **Food products**: May require air freight to maintain freshness
- **Dangerous goods**: May require sea freight with special requirements
- **Electronics**: Can be shipped either way depending on urgency

### 2. Season

During peak seasons (Ramadan, holidays):
- Air freight may be faster to avoid delays
- Sea freight may be more congested

### 3. Hidden Costs

Calculate all costs:
- Port fees
- Customs clearance
- Inland transportation
- Storage (if needed)

## Tips to Improve Shipping Experience

### 1. Plan Ahead
- Book shipping early especially during peak seasons
- Prepare required documents in advance

### 2. Compare Prices
- Get quotes from multiple shipping companies
- Compare services offered, not just price

### 3. Insure Your Cargo
- Get comprehensive insurance for valuable goods
- Understand insurance terms well

### 4. Track Your Shipment
- Use available tracking services
- Communicate regularly with the shipping company

## Why Dinoora?

At Dinoora, we help you choose the appropriate shipping method for your needs. Our expert team understands the differences between sea and air freight and can provide appropriate advice.

Our services include:
- Advice on appropriate shipping method
- Arranging sea and air freight
- Tracking shipments
- Customs clearance

Request a quote now and let us help you choose the best shipping method for your needs.`
    }
  }
];
