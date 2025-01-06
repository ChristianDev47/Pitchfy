import type { PaymentCard } from "~/types";

const API = " https://pitchfy.onrender.com/payment";

export async function CreatePaymentCard({ paymentCard }: { paymentCard: PaymentCard }) {

  try {
    console.log(paymentCard);
    const response = await fetch(`${API}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", 
      body: JSON.stringify(paymentCard),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create payment card.");
    }
  } catch (error) {
    console.error("Fetching Error:", error);
    throw new Error("Failed to fetch payment card data.");
  }

}
export async function UpdatePlan(sessionId: string ) {

  try {
    const response = await fetch(`${API}/update-plan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", 
      body: JSON.stringify({ sessionId }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json(); 
      throw new Error(errorData.message || "Failed to create payment card.");
    }
  } catch (error) {
    console.error("Fetching Error:", error);
    throw new Error("Failed to fetch payment card data.");
  }
}
