// import { LoginCredentials, AuthResponse } from '../types/auth';

export async function loginUser(credentials: {
  username: string;
  password: string;
  email?: string;
}): Promise<unknown> {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    console.log(data); // Log the response

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error('Login failed. Please check your credentials.');
  }
}
