
import { useMutation } from 'react-query';
import { Authservice } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const navigate = useNavigate();
  

  const { mutate: signupFn, isPending: isSignupPending } = useMutation({
    mutationFn: Authservice.signup,
    mutationKey: ['signup'],
    onSuccess: ({ data }) => {
      
    },
    onError: (error) => {
      
    },
  });

  return {
    signupFn,
    isSignupPending,
  };
};