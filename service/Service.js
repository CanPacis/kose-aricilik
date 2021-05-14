export default class Service {
  static async SendMail({ message, name }) {
    let data = {
      service_id: "service_1plq7rj",
      template_id: "template_h0kpgyg",
      user_id: "user_moO5dfTqvVM8U5jOQ4BuO",
      template_params: {
        to_name: "Köse Arıcılık",
        message: message,
        from_name: name,
      },
    };

    if (window) {
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
			return { status: request.status, response }
    }
  }
}
