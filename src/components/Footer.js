import React from 'react';

export function Footer() {
  const backgroundStyle = {
    backgroundColor: "#4a2e83"
  }
  return (<footer className="text-light p-4 text-center w-100" style={backgroundStyle}>
      <p>Designed by Rock Guan, Lydia Lin, Olivia Wei, Ashlyn Li, Ruby Feng</p>
      <p>&copy; {new Date().getFullYear()} UniWork. All rights reserved.</p>
    </footer>);
}

