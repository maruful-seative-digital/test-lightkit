import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export async function addDataToFirestore(
  name: string,
  email: string,
  pricingPlan: string
): Promise<boolean> {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      pricingPlan: pricingPlan,
    });

    console.log(docRef.id);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
