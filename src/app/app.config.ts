import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyA5P4SHJTQy0lIdxtvls455AypiUXuW_kU",
  authDomain: "ppw-proyecto-08.firebaseapp.com",
  projectId: "ppw-proyecto-08",
  storageBucket: "ppw-proyecto-08.firebasestorage.app",
  messagingSenderId: "893713302646",
  appId: "1:893713302646:web:cd97c29f00f5bc25bb0b57",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // Firebase
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]
};
