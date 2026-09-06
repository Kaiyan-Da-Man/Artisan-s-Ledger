import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideFirebaseApp(() =>
            initializeApp({
                projectId: "artisan-s-ledger-35040",
                appId: "1:697086090667:web:c782d805c3f11427cd86ee",
                storageBucket: "artisan-s-ledger-35040.firebasestorage.app",
                apiKey: "AIzaSyCQjba7b3DKIQ9ubpuH73A8EHd1FcqEn_8",
                authDomain: "artisan-s-ledger-35040.firebaseapp.com",
                messagingSenderId: "697086090667",
                measurementId: "G-FFGW6FGX9Z",
            }),
        ),
        provideFirestore(() => getFirestore()),
    ],
};
