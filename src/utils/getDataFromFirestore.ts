import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  pricingPlan: string;
}

async function getData(): Promise<User[]> {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data: User[] = [];
  querySnapshot.forEach((doc) => {
    const userData = doc.data() as Omit<User, "id">;
    data.push({ id: doc.id, ...userData });
  });
  return data;
}

export const GetDataFromFirestore = () => {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setUserData(data);
    }
    fetchData();
  }, []);

  return { userData, setUserData };
};
