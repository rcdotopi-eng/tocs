// ==========================================
// 1. FIREBASE CONFIGURATION (Your Keys)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyDWvW9e94dF03beWHYaCwxbJiU6G7utDuE",
  authDomain: "texi-online.firebaseapp.com",
  databaseURL: "https://texi-online-default-rtdb.firebaseio.com",
  projectId: "texi-online",
  storageBucket: "texi-online.firebasestorage.app",
  messagingSenderId: "1081425638649",
  appId: "1:1081425638649:web:5a8f99bd4158c1256fde28"
};

// ==========================================
// 2. INITIALIZATION
// ==========================================

// Check if Firebase libraries are loaded first
if (typeof firebase === 'undefined') {
    console.error("❌ CRITICAL ERROR: Firebase SDK not found in HTML.");
    alert("Error: Firebase not loaded. Please check your internet connection.");
} else {
    // Prevent "Firebase already initialized" error if script runs twice
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("✅ Connected to texi-online");
    }
}

// ==========================================
// 3. GLOBAL TOOLS (Available on all pages)
// ==========================================

// The Database Tool
const db = firebase.database();

// The Auth Tool (for Phone Login)
const auth = firebase.auth();

// ==========================================
// 4. SESSION MANAGER
// ==========================================
// This checks "Is the user logged in?" immediately when any page loads.

const savedUser = localStorage.getItem("taxiUser");
let currentUser = null;

if (savedUser) {
    try {
        currentUser = JSON.parse(savedUser);
        console.log("👤 Active User:", currentUser.name);
    } catch (e) {
        console.error("Error parsing user data", e);
        localStorage.removeItem("taxiUser"); // Clear corrupted data
    }
} else {
    console.log("👤 No user logged in.");
}