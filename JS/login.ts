document.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    try {
    const response = await fetch('https://student-management-1-xok5.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    
    if (!response.ok) {
      // Show actual error message from backend
      alert(data.error || 'Login failed');
      return;
    }

    localStorage.setItem('token', data.token);
    window.location.href = '/studentdetail.html';
    
  } catch (error) {
    console.error('Network error:', error);
    alert('Cannot connect to server. Please try again later.');
  }
});