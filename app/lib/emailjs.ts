import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "ERGt6EKmE_V0NNye-";
const EMAILJS_SERVICE_ID = "service_1zvhnsp";
const EMAILJS_CONTACT_TEMPLATE_ID = "template_e1jewbc";

emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  from_name: string;
  from_email: string;
  phone: string;
  businessName: string;
  businessCategory: string;
  message: string;
}

export async function sendContactForm(
  data: ContactFormData,
): Promise<void> {
  const response = await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_CONTACT_TEMPLATE_ID,
    data as unknown as Record<string, unknown>,
  );

  if (response.status !== 200) {
    throw new Error(`EmailJS responded with status ${response.status}`);
  }
}

