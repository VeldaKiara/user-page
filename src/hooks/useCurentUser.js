import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase'; // Replace with the correct path to your supabase instance

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error);
        // Handle the error
      } else {
        setCurrentUser(data.session?.user.email);
      }
    };

    fetchSession();
  }, []);

  return currentUser;
};

export default useCurrentUser;

