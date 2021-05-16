export default class Service {
  static async SendMail({ message, name }) {
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
          client_ip: (await ip.json()).ip,
        },
      };

      let request = await window.fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          body: JSON.stringify(data),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
        ok: "Tamam",
        hero: {
          title: "DEDEMİN BALLARI",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
        },
        order: "Sİpariş Ver",
        send: "Gönder",
        take_away: {
          title: "Gel-Al",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        same_day_delivery: {
          title: "Kapıya Teslİm",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        shipment: {
          title: "Kargo",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        address: {
          title: "Adres",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem distinctio quia odit. Enim quibusdam eaque officia saepe dolor, adipisci atque minus non ratione id, incidunt qui odio recusandae hic sit!",
        },
        phone: {
          title: "Telefon",
          content: "+90 555 555 55 55",
        },
        name: "İSİM",
        message: "MESAJ",
        copyright: {
          message: "DEDEMİN BALLARI ® - BİR KÖSE ARICILIK MARKASI",
          year: "2021",
        },
        alert: {
          sent: "Mesaj Başarıyla Gönderildi",
          error: (message) => `Mesaj Gönderilirken Bir Hata Olştu. ${message}`,
        },
        no_product_yet: "Henüz Bir Ürün Yok"
      },
      en: {
        homepage: "Homepage",
        catalog: "Catalog",
        contact: "Contact",
        faq: "FAQ",
        ok: "Okay",
        hero: {
          title: "DEDEMİN BALLARI",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
        },
        order: "Order",
        send: "Send",
        take_away: {
          title: "Take Away",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        same_day_delivery: {
          title: "Same Day Delivery",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        shipment: {
          title: "Shipment",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.",
        },
        address: {
          title: "Address",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem distinctio quia odit. Enim quibusdam eaque officia saepe dolor, adipisci atque minus non ratione id, incidunt qui odio recusandae hic sit!",
        },
        phone: {
          title: "Phone",
          content: "+90 555 555 55 55",
        },
        name: "Name",
        message: "Message",
        copyright: {
          message: "DEDEMİN BALLARI ® - A KÖSE ARICILIK BRAND",
          year: "2021",
        },
        alert: {
          sent: "Message Has Been Sent Successfully",
          error: (message) =>
            `An Error Occurred While Sending Your Message. ${message}`,
        },
        no_product_yet: "There Are No Products Yet"
      },
    },
  };
}
