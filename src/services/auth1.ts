export const testLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'kminchelle', password: '0lelplR' }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      console.log('Login Successful:', data);
    } catch (Error) {
      // console.error(error.message);
    }
  };
  
  testLogin();
  