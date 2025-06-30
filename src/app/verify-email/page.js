
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import api from '../services/api';

// export default function VerifyEmail() {
//   const router = useRouter();
//   const { token } = router.query;
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     if (token) {
//       api.get(`/auth/verify-email/${token}`)
//         .then(res => setMessage(res.data.message))
//         .catch(err => setMessage(err.response?.data?.message || 'Error verifying email'));
//     }
//   }, [token]);

//   return (
//     <div className="text-center mt-20">
//       <h2 className="text-2xl font-bold">Email Verification</h2>
//       <p className="mt-4 text-lg text-green-600">{message}</p>
//     </div>
//   );
// }
//"use client";

// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// export default function VerifyEmail() {
//   const searchParams = useSearchParams();
//   const token = searchParams.get('token');
//   const [message, setMessage] = useState('Verifying...');

//   useEffect(() => {
//     if (token) {
//       fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-email/${token}`)
//         .then(async (res) => {
//           const data = await res.json();
//           if (res.ok) {
//             setMessage(data.message);
//           } else {
//             setMessage(data.message || 'Error verifying email');
//           }
//         })
//         .catch(() => setMessage('Network error'));
//     } else {
//       setMessage('No token provided');
//     }
//   }, [token]);

//   return (
//     <div className="text-center mt-20">
//       <h2 className="text-2xl font-bold">Email Verification</h2>
//       <p className="mt-4 text-lg">{message}</p>
//     </div>
//   );
// }

// last one 
// "use client";

// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// export default function VerifyEmail() {
//   const searchParams = useSearchParams();
//   const token = searchParams.get('token');
//   const [message, setMessage] = useState('Verifying...');

//   useEffect(() => {
//     if (token) {
//       fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email/${token}`)
//         .then(async (res) => {
//           const data = await res.json();
//           if (res.ok) {
//             setMessage(data.message);
//           } else {
//             setMessage(data.message || 'Error verifying email');
//           }
//         })
//         .catch(() => setMessage('Network error'));
//     } else {
//       setMessage('No token provided');
//     }
//   }, [token]);

//   return (
//     <div className="text-center mt-20">
//       <h2 className="text-2xl font-bold">Email Verification</h2>
//       <p className="mt-4 text-lg">{message}</p>
//     </div>
//   );
// }

import React from 'react';

export default async function VerifyEmail({ searchParams }) {
  const token = searchParams.token;
  let message = '';

  if (token) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email/${token}`,
        { cache: 'no-store' } // optional: to avoid caching
      );

      const data = await res.json();

      if (res.ok) {
        message = data.message;
      } else {
        message = data.message || 'Error verifying email';
      }
    } catch (error) {
      message = 'Network error';
    }
  } else {
    message = 'No token provided';
  }

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">Email Verification</h2>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}
