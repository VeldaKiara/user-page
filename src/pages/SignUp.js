import { supabase } from "@/utils/supabase";
import { Box, Center, Button} from "@chakra-ui/react";
import { Form, FormLayout, Field, SubmitButton } from "@saas-ui/react";
import Link from "next/link";
import {  useEffect } from "react";
import { useRouter } from 'next/router';



export default function SignUp() {
  const router = useRouter();

  useEffect (() => {

  supabase.auth.onAuthStateChange((event, session) => {
    
    if (session){
        router.push('/')
    }
  })
  
  },[router]) 
  const handleSubmit = async ({ email, password }) => {
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(data, error);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div > 
    <Box padding="8" position="relative" > 
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button colorScheme="purple" size="md">
          <Link href="/LogIn">LogIn</Link>
        </Button>
      </div>

      <Center>
        <Form onSubmit={handleSubmit}>
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
              marginBlockStart="10px"
              disableIfInvalid
            >
              Sign Up
            </SubmitButton>
          </FormLayout>
        </Form>
      </Center>
    </Box>
    </div>
  );
}
