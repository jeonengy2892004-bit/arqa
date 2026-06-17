// ArQa Firebase Configuration
// ⚠️ Replace these values with your actual Firebase project credentials
// Get them from: Firebase Console → Project Settings → Your apps → Web app

window.ARQA_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDWQkRP4MFadvFu6bXa1KFydoH6Vk5J4TA",
  authDomain: "arqa-784a8.firebaseapp.com",
  projectId: "arqa-784a8",
  storageBucket: "arqa-784a8.firebasestorage.app",
  messagingSenderId: "497904175651",
  appId: "1:497904175651:web:4bc4d25b5237bd42eb7f96"
};

// Owner email — orders & return requests will be sent here
window.ARQA_OWNER_EMAIL = "owner@arqa.eg";

// EmailJS configuration (for sending emails without a backend)
// Sign up at emailjs.com, it's free up to 200 emails/month
window.ARQA_EMAILJS = {
  serviceId: "service_0waatyy",
  templateId_order: "template_i4xe1bj",
  templateId_return: "template_3pfcvn3",
  publicKey: "DX7SeJ27yfWWqzKBk"
};

console.log("ArQa config loaded ✓");