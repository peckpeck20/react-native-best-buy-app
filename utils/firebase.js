import * as firebase from "firebase";
import { firebaseConfig } from "../private/constants";

firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
