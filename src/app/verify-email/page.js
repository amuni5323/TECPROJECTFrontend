
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';

export default function VerifyEmail() {
  const router = useRouter();
  const { token } = router.query;
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token) {
      api.get(`/auth/verify-email/${token}`)
        .then(res => setMessage(res.data.message))
        .catch(err => setMessage(err.response?.data?.message || 'Error verifying email'));
    }
  }, [token]);

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">Email Verification</h2>
      <p className="mt-4 text-lg text-green-600">{message}</p>
    </div>
  );
}
