import toast from "react-hot-toast";
import type { LoginType } from "~/types";

const API = ' https://pitchfy.onrender.com';

export async function LoginWithGoogle() {
  try {
    const response = await fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Fetching Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function LoginWithEmail({ login }: { login: LoginType }) {
  try {
    const response = await fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(login),
    });
    if (response.ok) {
      const data = await response.json();
      return data
    }else{
      toast.error(
        "Login failed: Please check your email and password and try again.",
        {
          duration: 5000,
          style: {
            fontSize: '15px',
            padding: '8px',
          },
        }
      );
    }
  } catch (error) {
    console.error('Fetching Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function Logout() {
  try {
    await new Promise((resolve) => setTimeout(() => resolve(undefined), 2000));
    const response = await fetch(`${API}/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Fetching Error:', error);
    throw new Error('Failed to fetch logout.');
  }
}


export async function GetUser(id :string ) {
  try {
    const result = await fetch(`${API}/user/${id}`);
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Fetching Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}



export async function CreateAcount({ user }) {
  try {
    const response = await fetch(`${API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }else{
      toast.error(
        "The email address you entered is already associated with an account. Please use a different one.",
        {
          duration: 5000,
          style: {
            fontSize: '15px',
            padding: '8px',
          },
        }
      );
    }
    
  } catch (error) {
    console.error("Fetching Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}