// Firebase Configuration
// Replace these placeholders with your actual Firebase project credentials
// You can get them from the Firebase Console (https://console.firebase.google.com/)

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// EmailJS Configuration
// Replace these with your actual EmailJS IDs (https://www.emailjs.com/)
const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
};

// Export configs if using modules, but since we're using CDNs in plain JS:
// These will be available globally if this script is loaded.
