/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/eventCard/eventCard.ts":
/*!***********************************************!*\
  !*** ./src/components/eventCard/eventCard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EventCardAttribute = void 0;\nvar EventCardAttribute;\n(function (EventCardAttribute) {\n    EventCardAttribute[\"title\"] = \"title\";\n    EventCardAttribute[\"date\"] = \"date\";\n    EventCardAttribute[\"hour\"] = \"hour\";\n    EventCardAttribute[\"location\"] = \"location\";\n    EventCardAttribute[\"participants\"] = \"participants\";\n    EventCardAttribute[\"eventimg\"] = \"eventimg\";\n    EventCardAttribute[\"registerbtn\"] = \"registerbtn\";\n})(EventCardAttribute = exports.EventCardAttribute || (exports.EventCardAttribute = {}));\nclass EventPost extends HTMLElement {\n    constructor() {\n        super();\n        this.heartCount = 0; // Contador para el botón de corazón\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        return Object.values(EventCardAttribute);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        if (oldValue !== newValue) {\n            this.render();\n        }\n    }\n    connectedCallback() {\n        this.render();\n        this.addHeartButtonListener();\n    }\n    render() {\n        if (this.shadowRoot) {\n            const eventName = this.getAttribute(EventCardAttribute.title) || 'Untitled Event';\n            const eventDate = this.getAttribute(EventCardAttribute.date) || 'Unknown Date';\n            const eventHour = this.getAttribute(EventCardAttribute.hour) || 'Unknown Hour';\n            const eventLocation = this.getAttribute(EventCardAttribute.location) || 'Location not found';\n            const eventParticipants = this.getAttribute(EventCardAttribute.participants) || 'Unknown Participants';\n            const eventImage = this.getAttribute(EventCardAttribute.eventimg) || 'Image not found';\n            this.shadowRoot.innerHTML = `\r\n                <link rel=\"stylesheet\" href=\"../public/src/components/eventCard/eventCard.css\">\r\n                <div class=\"post\">\r\n                    <div id=\"photo\">\r\n                        <img class=\"img2\" src=\"${eventImage}\" alt=\"${eventName}\">\r\n                    </div>\r\n                    <div class=\"info\">\r\n                        <div class=\"title\">\r\n                            <h2 class=\"songname\">${eventName}</h2>\r\n                        </div>\r\n                        <div class=\"subtitle\">\r\n                            <p class=\"genre\">${eventDate}</p>\r\n                            <p class=\"tags\">${eventHour}</p>\r\n                            <p class=\"genre\">${eventLocation}</p>\r\n                            <p class=\"tags\">${eventParticipants}</p>\r\n                            <button class=\"register-button\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"25\" height=\"25\">\r\n                                    <path class=\"heart-outline\" d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\" fill=\"none\" stroke=\"#371081\" stroke-width=\"2\"/>\r\n                                </svg>\r\n                            </button>\r\n                            <span class=\"heart-count\">${this.heartCount}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            `;\n        }\n    }\n    addHeartButtonListener() {\n        var _a, _b;\n        const heartButton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\".register-button\");\n        const heartCountElement = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(\".heart-count\");\n        if (heartButton && heartCountElement) {\n            heartButton.addEventListener(\"click\", () => {\n                heartButton.classList.toggle(\"filled\");\n                const path = heartButton.querySelector(\".heart-outline\");\n                if (path) {\n                    if (heartButton.classList.contains(\"filled\")) {\n                        path.setAttribute(\"fill\", \"#371081\"); // Relleno rosado\n                        path.setAttribute(\"stroke\", \"#371081\"); // Borde rosado\n                        this.heartCount = 1; // Incrementa el contador a 1\n                    }\n                    else {\n                        path.setAttribute(\"fill\", \"none\"); // Sin relleno\n                        path.setAttribute(\"stroke\", \"#371081\"); // Borde rosado\n                        this.heartCount = 0; // Reinicia el contador a 0\n                    }\n                    heartCountElement.textContent = `${this.heartCount}`; // Actualiza el contador en la interfaz\n                }\n            });\n        }\n    }\n}\n;\ncustomElements.define('event-post', EventPost);\nexports[\"default\"] = EventPost;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/eventCard/eventCard.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ./store/index */ \"./src/store/index.ts\");\nconst store_1 = __webpack_require__(/*! ./types/store */ \"./src/types/store.ts\");\n__webpack_require__(/*! ./screens/adminpage/admin */ \"./src/screens/adminpage/admin.ts\");\n__webpack_require__(/*! ./screens/userpage/user */ \"./src/screens/userpage/user.ts\");\n__webpack_require__(/*! ./components/eventCard/eventCard */ \"./src/components/eventCard/eventCard.ts\");\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0, index_1.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = '';\n            switch (index_1.appState.screen) {\n                case store_1.Screens.ADMIN:\n                    const adminPage = this.ownerDocument.createElement('app-home');\n                    this.shadowRoot.appendChild(adminPage);\n                    break;\n                case store_1.Screens.USER:\n                    const userPage = this.ownerDocument.createElement('app-edit-products');\n                    this.shadowRoot.appendChild(userPage);\n                    break;\n            }\n            console.log('Current screen:', index_1.appState.screen);\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/adminpage/admin.ts":
/*!****************************************!*\
  !*** ./src/screens/adminpage/admin.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst index_1 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\nconst actions_1 = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\nconst eventCard_1 = __webpack_require__(/*! ../../components/eventCard/eventCard */ \"./src/components/eventCard/eventCard.ts\");\nconst firebase_1 = __webpack_require__(/*! ../../utils/firebase */ \"./src/utils/firebase.ts\");\nconst event = {\n    title: \"\",\n    date: \"\",\n    hour: \"\",\n    location: \"\",\n    participants: \"\",\n    eventimg: \"\",\n};\nclass AdminPage extends HTMLElement {\n    constructor() {\n        super();\n        this.changeTitle = (e) => {\n            const target = e.target;\n            event.title = target.value;\n        };\n        this.changeDate = (e) => {\n            const target = e.target;\n            event.date = target.value;\n        };\n        this.changeHour = (e) => {\n            const target = e.target;\n            event.hour = target.value;\n        };\n        this.changeLocation = (e) => {\n            const target = e.target;\n            event.location = target.value;\n        };\n        this.changeParticipants = (e) => {\n            const target = e.target;\n            event.participants = target.value;\n        };\n        this.changeImg = (e) => {\n            const target = e.target;\n            event.eventimg = target.value;\n        };\n        this.submitForm = (e) => __awaiter(this, void 0, void 0, function* () {\n            e.preventDefault(); // Evita que el formulario se envíe automáticamente\n            // Validación manual\n            if (!event.title || !event.date || !event.hour || !event.location || !event.participants || !event.eventimg) {\n                alert('Por favor, completa todos los campos.');\n                return; // Salir si falta algún campo\n            }\n            yield (0, firebase_1.addEvents)(event); // Añadir canción a Firebase\n            yield this.getEvents(); // Recargar las canciones después de añadir\n        });\n        this.attachShadow({ mode: 'open' });\n        (0, index_1.addObserver)(this);\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (index_1.appState.events.length === 0) {\n                const action = yield (0, actions_1.getEventsAction)();\n                if (action) {\n                    (0, index_1.dispatch)(action);\n                }\n            }\n            this.render();\n        });\n    }\n    renderEvents() {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!this.eventsContainer)\n                return; // Check if the container exists\n            if (!index_1.appState.events || !Array.isArray(index_1.appState.events)) {\n                console.log('No products found');\n                return;\n            }\n            this.eventsContainer.innerHTML = ''; // Clean container\n            index_1.appState.events.forEach((event) => {\n                var _a;\n                const eventComponent = this.ownerDocument.createElement('products-home-component');\n                eventComponent.setAttribute(eventCard_1.EventCardAttribute.title, event.title);\n                eventComponent.setAttribute(eventCard_1.EventCardAttribute.date, event.date);\n                eventComponent.setAttribute(eventCard_1.EventCardAttribute.hour, event.hour.toString());\n                eventComponent.setAttribute(eventCard_1.EventCardAttribute.location, event.location);\n                eventComponent.setAttribute(eventCard_1.EventCardAttribute.participants, event.participants);\n                eventComponent.setAttribute(eventCard_1.EventCardAttribute.eventimg, event.eventimg);\n                eventComponent.classList.add('product');\n                (_a = this.eventsContainer) === null || _a === void 0 ? void 0 : _a.appendChild(eventComponent);\n            });\n        });\n    }\n    render() {\n        var _a, _b, _c, _d, _e, _f;\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.shadowRoot) {\n                this.shadowRoot.innerHTML = `\r\n            <link rel=\"stylesheet\" href=\"../public/src/screens/adminpage/admin.css\">\r\n              <div class=\"admin\">\r\n                        <form class=\"form\">\r\n                          <input id=\"name-input\" placeholder=\"Event name\" required>\r\n                          <input id=\"date-input\" placeholder=\"Event date\" required>\r\n                          <input id=\"hour-input\" placeholder=\"Event Hour\" type=\"date\" required>\r\n                          <input id=\"location-input\" placeholder=\"Event Location\" required>\r\n                          <input id=\"participants-input\" placeholder=\"Event Participants\" required>\r\n                          <input id=\"img\" placeholder=\"Add image link\" required />\r\n                            <button type=\"submit\" id=\"Publish\">Publish event</button>\r\n                        </form>\r\n              </div>\r\n            `;\n                // Referencia al input de tipo file y al elemento img\n                const postImg = this.shadowRoot.querySelector('#eventImg');\n                (_a = this.shadowRoot.getElementById(\"name\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"change\", this.changeTitle);\n                (_b = this.shadowRoot.getElementById(\"date\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"change\", this.changeDate);\n                (_c = this.shadowRoot.getElementById(\"hour\")) === null || _c === void 0 ? void 0 : _c.addEventListener(\"change\", this.changeHour);\n                (_d = this.shadowRoot.getElementById(\"location\")) === null || _d === void 0 ? void 0 : _d.addEventListener(\"change\", this.changeLocation);\n                (_e = this.shadowRoot.getElementById(\"img\")) === null || _e === void 0 ? void 0 : _e.addEventListener(\"change\", this.changeImg);\n                (_f = this.shadowRoot.getElementById(\"event-form\")) === null || _f === void 0 ? void 0 : _f.addEventListener(\"submit\", this.submitForm);\n            }\n        });\n    }\n}\ncustomElements.define('admin-page', AdminPage);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/adminpage/admin.ts?");

/***/ }),

/***/ "./src/screens/userpage/user.ts":
/*!**************************************!*\
  !*** ./src/screens/userpage/user.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/userpage/user.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteEventAction = exports.getEventsAction = exports.addEventAction = exports.navigate = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst firebase_1 = __webpack_require__(/*! ../utils/firebase */ \"./src/utils/firebase.ts\");\nconst navigate = (screen) => {\n    return {\n        action: store_1.Actions.NAVIGATE,\n        payload: screen,\n    };\n};\nexports.navigate = navigate;\nconst addEventAction = (product) => __awaiter(void 0, void 0, void 0, function* () {\n    const success = yield (0, firebase_1.addEvents)(product);\n    if (success) {\n        return {\n            action: store_1.Actions.ADDEVENTS,\n            payload: product,\n        };\n    }\n    return null;\n});\nexports.addEventAction = addEventAction;\nconst getEventsAction = () => __awaiter(void 0, void 0, void 0, function* () {\n    const products = yield (0, firebase_1.getEvents)();\n    return {\n        action: store_1.Actions.GETEVENTS,\n        payload: products,\n    };\n});\nexports.getEventsAction = getEventsAction;\nconst deleteEventAction = (uid) => __awaiter(void 0, void 0, void 0, function* () {\n    yield (0, firebase_1.deleteEvent)(uid);\n    return {\n        action: store_1.Actions.DELETEEVENT,\n        payload: uid,\n    };\n});\nexports.deleteEventAction = deleteEventAction;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.addObserver = exports.dispatch = exports.appState = void 0;\nconst storage_1 = __importStar(__webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\"));\nconst reducer_1 = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\nconst emptyState = {\n    screen: 'USER',\n    events: [],\n    user: '',\n};\nexports.appState = storage_1.default.get({\n    key: storage_1.PersistanceKeys.STORE,\n    defaultValue: emptyState,\n});\nlet observers = [];\nconst persistStore = (state) => storage_1.default.set({ key: storage_1.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(exports.appState));\n    const newState = (0, reducer_1.reducer)(action, clone);\n    exports.appState = newState;\n    persistStore(newState);\n    notifyObservers();\n};\nexports.dispatch = dispatch;\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\nexports.addObserver = addObserver;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.reducer = void 0;\nconst store_1 = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case store_1.Actions.NAVIGATE:\n            return Object.assign(Object.assign({}, currentState), { screen: payload });\n        case store_1.Actions.ADDEVENTS:\n            return Object.assign(Object.assign({}, currentState), { products: [...currentState.products, payload] });\n        case store_1.Actions.GETEVENTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload || [] });\n        case store_1.Actions.DELETEEVENT:\n            return Object.assign(Object.assign({}, currentState), { products: [...currentState.products.filter((product) => product.uid !== payload)] });\n        default:\n            return currentState;\n    }\n};\nexports.reducer = reducer;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Actions = exports.Screens = void 0;\nvar Screens;\n(function (Screens) {\n    Screens[\"ADMIN\"] = \"ADMIN\";\n    Screens[\"USER\"] = \"USER\";\n})(Screens = exports.Screens || (exports.Screens = {}));\nvar Actions;\n(function (Actions) {\n    Actions[\"NAVIGATE\"] = \"NAVIGATE\";\n    Actions[\"ADDEVENTS\"] = \"ADDEVENTS\";\n    Actions[\"GETEVENTS\"] = \"GETEVENTS\";\n    Actions[\"DELETEEVENT\"] = \"DELETEEVENT\";\n})(Actions = exports.Actions || (exports.Actions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/firebase.ts":
/*!*******************************!*\
  !*** ./src/utils/firebase.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteEvent = exports.getEvents = exports.addEvents = exports.getFirestoreInstance = void 0;\nlet db;\n// Instance of Firebase FireStore\nconst getFirestoreInstance = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (!db) {\n        const { initializeApp } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"node_modules_firebase_app_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\"));\n        const { getFirestore } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const firebaseConfig = {\n            apiKey: \"AIzaSyAjC2v4a7fJ1ATGjWI3hdjN9SWL3hsdIKY\",\n            authDomain: \"parcial3-fa459.firebaseapp.com\",\n            projectId: \"parcial3-fa459\",\n            storageBucket: \"parcial3-fa459.firebasestorage.app\",\n            messagingSenderId: \"276331101701\",\n            appId: \"1:276331101701:web:40464433fed070e24e666c\"\n        };\n        const app = initializeApp(firebaseConfig);\n        db = getFirestore(app);\n    }\n    return db;\n});\nexports.getFirestoreInstance = getFirestoreInstance;\n// Functions\nconst addEvents = (event) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const db = yield (0, exports.getFirestoreInstance)();\n        const { setDoc, doc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        // Use the product's ID when creating the document\n        const docRef = doc(db, 'events', event.id);\n        yield setDoc(docRef, event);\n        return true;\n    }\n    catch (error) {\n        console.error(\"Error adding document:\", error);\n        return false;\n    }\n});\nexports.addEvents = addEvents;\nconst getEvents = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const db = yield (0, exports.getFirestoreInstance)();\n        const { getDocs, collection } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n        const where = collection(db, 'events');\n        const querySnapshot = yield getDocs(where);\n        const data = [];\n        querySnapshot.forEach((doc) => {\n            data.push(doc.data());\n        });\n        return data;\n    }\n    catch (error) {\n        console.error(\"Error getting document:\", error);\n    }\n    ;\n});\nexports.getEvents = getEvents;\nconst deleteEvent = (uid) => __awaiter(void 0, void 0, void 0, function* () {\n    const db = yield (0, exports.getFirestoreInstance)();\n    const { doc, deleteDoc } = yield Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_firebase_app_dist_esm_index_esm2017_js\"), __webpack_require__.e(\"vendors-node_modules_firebase_firestore_dist_esm_index_esm_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\"));\n    const deleteRef = doc(db, 'products', uid);\n    yield deleteDoc(deleteRef).then(() => {\n        console.log(\"Document successfully deleted!\");\n    }).catch((error) => {\n        console.log(\"IT IS THIS ERROR!vvvv\");\n        console.error(\"Error removing document: \", error);\n    });\n});\nexports.deleteEvent = deleteEvent;\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/firebase.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PersistanceKeys = void 0;\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys = exports.PersistanceKeys || (exports.PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\nexports[\"default\"] = {\n    get,\n    set,\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/storage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dca_scoffolding:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdca_scoffolding"] = self["webpackChunkdca_scoffolding"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;