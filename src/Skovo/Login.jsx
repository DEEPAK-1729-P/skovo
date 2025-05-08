// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login attempt with:', { email, password, rememberMe });
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="login-header">
//           <h2>Welcome Back</h2>
//           <p>Please sign in to continue</p>
//         </div>
        
//         <form className="login-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>
          
//           <div className="form-options">
//             <div className="remember-me">
//               <input
//                 type="checkbox"
//                 id="remember"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               <label htmlFor="remember">Remember me</label>
//             </div>
//             <a href="/forgot-password" className="forgot-password">Forgot password?</a>
//           </div>
          
//           <button type="submit" className="login-button">Sign In</button>
//         </form>
        
//         <div className="login-divider">
//           <span>OR</span>
//         </div>
        
//         <div className="social-login">
//           <button className="social-button google">
//             <i className="social-icon">G</i>
//             Continue with Google
//           </button>
//           <button className="social-button facebook">
//             <i className="social-icon">f</i>
//             Continue with Facebook
//           </button>
//         </div>
        
//         <div className="signup-prompt">
//           <p>Don't have an account? <a href="/signup">Sign up</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import './Login.css'; // Make sure to create this CSS file
import { GraduationCap } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Here you would typically make an API call to verify credentials
    // For now, we'll just simulate a successful login
    console.log('Login attempt with:', { email, password });
    
    // Call the onLogin function passed as prop
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-header">
          <GraduationCap size={36} className="logo-icon" />
          <h1>SKOVO</h1>
          <p>Your gateway to skills and knowledge</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
            />
          </div>
          
          <button type="submit" className="sign-in-btn">Sign In</button>
          
          <div className="form-footer">
            <a href="#forgot-password">Forgot Password?</a>
            <p>Don't have an account? <a href="#register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;