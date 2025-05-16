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
            // Show more specific error from backend
            alert(data.error || 'Invalid credentials');
            return;
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Use absolute path for redirect
        window.location.href = 'https://sn-frontend-xygo.vercel.app/HTML/studentdetail.html';
        
    } catch (error) {
        console.error('Login error:', error);
        alert('Network error - please try again');
    }
});