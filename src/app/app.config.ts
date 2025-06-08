import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getDataConnect, provideDataConnect } from '@angular/fire/data-connect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "accountmanager-47e25", appId: "1:408164759950:web:af6f2d64ba2e00c6e24cdf", storageBucket: "accountmanager-47e25.firebasestorage.app", apiKey: "AIzaSyBe0Tg4xNqgmtmTGxkhEFuzNwLRrCULIeo", authDomain: "accountmanager-47e25.firebaseapp.com", messagingSenderId: "408164759950", measurementId: "G-DW71DVZCHQ" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideDataConnect(() => getDataConnect(connectorConfig)), provideTanStackQuery(new QueryClient()), provideFirebaseApp(() => initializeApp({ projectId: "accountmanager-47e25", appId: "1:408164759950:web:af6f2d64ba2e00c6e24cdf", storageBucket: "accountmanager-47e25.firebasestorage.app", apiKey: "AIzaSyBe0Tg4xNqgmtmTGxkhEFuzNwLRrCULIeo", authDomain: "accountmanager-47e25.firebaseapp.com", messagingSenderId: "408164759950", measurementId: "G-DW71DVZCHQ" })), provideFirestore(() => getFirestore())
  ]
};
