import { Box, Center } from "@chakra-ui/react";
import {Form, FormLayout, Field, SubmitButton } from "@saas-ui/react";
import { supabase } from "@/utils/supabase";
import {  useEffect } from "react";
import { useRouter } from 'next/router';

export default function LogIn() {

  const router = useRouter();

  useEffect (() => {

  supabase.auth.onAuthStateChange((event, session) => {
    
    if (session){
        router.push('/')
    }
  })
  
  },[router]) 
  const handleSubmit  = async({email, password}) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          })
          if (data && data.user){
            router.push('/')
          }
          
    } catch (error) {
        console.log(error)
    }
    

  };
 

return(
  
  <Box padding="8" position='relative'>
  <Center>
  <Form
    onSubmit={handleSubmit}
  >
    <FormLayout>
   
     
      <Field
        backgroundColor={"white"}
        textColor={"black"}
        name="email"
        
        label="Email"
        type="email"
        rules={{ required: true }}
        width="20.5em"
       
      />
      <Field
        fontFamily={"mono"}
        backgroundColor={"white"}
        textColor={"black"}
        type="password"
        name="password"
        label=" Password"
        width="18em"
        rules={{ required: true }}
       
      />
     
      <SubmitButton 
      marginBlockStart="10px" disableIfInvalid>
        Log In
      </SubmitButton>
    </FormLayout>
  </Form>
  </Center>
</Box>


  );
}



