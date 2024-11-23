import { appState } from '../store';

let db: any;

// Instance of Firebase FireStore
export const getFirestoreInstance = async () => {
    if (!db) {
        const { initializeApp } = await import('firebase/app');
        const { getFirestore } = await import('firebase/firestore');
        const firebaseConfig = {
            apiKey: "AIzaSyAjC2v4a7fJ1ATGjWI3hdjN9SWL3hsdIKY",
            authDomain: "parcial3-fa459.firebaseapp.com",
            projectId: "parcial3-fa459",
            storageBucket: "parcial3-fa459.firebasestorage.app",
            messagingSenderId: "276331101701",
            appId: "1:276331101701:web:40464433fed070e24e666c"
          };

        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    }
    return db;
}

// Functions
export const addEvents = async (event: any) => {
    try {
        const db = await getFirestoreInstance();
        const { setDoc, doc } = await import('firebase/firestore');
        // Use the product's ID when creating the document
        const docRef = doc(db, 'events', event.id);
        await setDoc(docRef, event);
        return true;
    } catch (error) {
        console.error("Error adding document:", error);
        return false;
    }
};

export const getEvents = async () => {
    try {
        const db = await getFirestoreInstance();
        const { getDocs, collection } = await import('firebase/firestore');

        const where = collection(db, 'events');
        const querySnapshot = await getDocs(where);
        const data: any[] = [];

        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });

        return data;
    } catch (error) {
        console.error("Error getting document:", error);
    };
};

export const deleteEvent = async (uid: string) => {

    const db = await getFirestoreInstance();

    const { doc, deleteDoc } = await import('firebase/firestore');

    const deleteRef = doc(db, 'products', uid);

    await deleteDoc(deleteRef).then(() => {
        console.log("Document successfully deleted!");
    }).catch((error: any) => {
        console.log("IT IS THIS ERROR!vvvv");
        
        console.error("Error removing document: ", error);
    });
};