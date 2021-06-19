export default class Service {
  static async SendMail({ message, name, email }) {
    if (window) {
      let ip = await fetch("https://api.ipify.org/?format=json");

      let data = {
        service_id: "service_1plq7rj",
        template_id: "template_h0kpgyg",
        user_id: "user_moO5dfTqvVM8U5jOQ4BuO",
        template_params: {
          to_name: "Köse Arıcılık",
          message: message,
          from_name: name,
          email: email,
          client_ip: (await ip.json()).ip,
        },
      };

      let request = await window.fetch("https://api.emailjs.com/api/v1.0/email/send", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let response = await request.text();
      return { status: request.status, response };
    }
  }

  static Language = {
    languages: {
      tr: {
        homepage: "Anasayfa",
        catalog: "Katalog",
        contact: "İLETİŞİM",
        faq: "S.S.S.",
        faq_full: "Sıkça Sorulan Sorular",
        ok: "Tamam",
        hero: {
          title: "KÖSE ARICILIK",
          content:
            "1993’den beri olan arıcılık tecrübemiz ile yeni ve dijital çağın imkanları ile tamamen el yapımı katkısız ballarımızı önce Türkiye’de ileride ise tüm dünyada dileyen herkesin sofrasına ulaştırmak.",
        },
        order: "Sİpariş Ver",
        send: "Gönder",
        take_away: {
          title: "Gel-Al",
          content:
            "Siparişini WhatsApp hattımızdan oluşturarak, siparişin hazır bildirimini aldıktan sonra dilediğin saatte dükkanımızdan ad ve soyadını belirterek teslim alabilirsin!",
        },
        same_day_delivery: {
          title: "Kapıya Teslİm",
          content:
            "Siparişini WhatsApp hattımızdan oluşturarak, ister kapıda ödeme ister havale ile satın alabilirsin. (15:00’dan önce verilen siparişler aynı gün teslim edilir.)",
        },
        shipment: {
          title: "Online Sipariş",
          content:
            "İster WhatsApp destek hattımızdan istersen de mağaza kısmından istediğin ürünü seç ve siparişini oluştur! Türkiye’nin neresinde olursan ol bal ayağınıza gelsin!",
        },
        address: {
          title: "Adres",
          content:
            "17 Eylül Mahllesi, Şehit İlhan Güncan Caddesi. No: 107/A 10200, Bandırma - Balıkesir",
        },
        phone: {
          title: "Telefon",
          content: [
            { label: "WhatsApp", no: "+7 991 809 56 74" },
            { label: "GSM", no: "+90 533 715 16 89" },
            { label: "Sabit", no: "+90 (266) 714 68 81" },
          ],
        },
        name: "İSİM",
        message: "MESAJ",
        copyright: {
          message: "KÖSE ARICILIK®",
          year: "2021",
        },
        alert: {
          sent: "Mesaj Başarıyla Gönderildi",
          error: (message) => `Mesaj Gönderilirken Bir Hata Olştu. ${message}`,
        },
        no_product_yet: "Henüz Bir Ürün Yok",
        no_questions_yet: "Henüz Bir Soru Yok",
        email: "E-Posta",
        whatsapp: "WhatsApp İletişim",
      },
      en: {
        homepage: "Homepage",
        catalog: "Catalog",
        contact: "Contact",
        faq: "FAQ",
        faq_full: "Frequently Asked Questions",
        ok: "Okay",
        hero: {
          title: "KÖSE ARICILIK",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
        },
        order: "Order",
        send: "Send",
        take_away: {
          title: "Take Away",
          content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        same_day_delivery: {
          title: "Same Day Delivery",
          content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        shipment: {
          title: "Shipment",
          content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        address: {
          title: "Address",
          content:
            "17 Eylül Mahllesi, Şehit İlhan Güncan Caddesi. No: 107/A 10200, Bandırma - Balıkesir",
        },
        phone: {
          title: "Phone",
          content: [
            { label: "WhatsApp", no: "+7 991 809 56 74" },
            { label: "GSM", no: "+90 533 715 16 89" },
            { label: "Landline", no: "+90 (266) 714 68 81" },
          ],
        },
        name: "Name",
        message: "Message",
        copyright: {
          message: "KÖSE ARICILIK®",
          year: "2021",
        },
        alert: {
          sent: "Message Has Been Sent Successfully",
          error: (message) => `An Error Occurred While Sending Your Message. ${message}`,
        },
        no_product_yet: "There Are No Products Yet",
        no_questions_yet: "There Are No Questions Yet",
        email: "Email",
        whatsapp: "Order with WhatsApp",
      },
    },
  };
}
