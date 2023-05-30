import { Box, Center } from "@chakra-ui/react";
import { Form, FormLayout, Field, SubmitButton } from "@saas-ui/react";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// auth stuff - saas ui
// import { Auth, PasswordForm, Stack } from "@saas-ui/react";

export default function LogIn() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push("/");
      }
    });
  }, [router]);
  const handleSubmit = async ({ email, password }) => {
    // clear error messages, if any
    setErrorMessage(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (data && data.user) {
        router.push("/");
      } else {
        setErrorMessage(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box padding="8" position="relative">
      <Center h="90vh" w="100%">
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

            <SubmitButton marginBlockStart="10px" disableIfInvalid>
              Log In
            </SubmitButton>
            {errorMessage && <p className="highlight">{errorMessage}</p>}
          </FormLayout>
        </Form>
      </Center>
    </Box>
  );
}

// function LoginPage() {
//   return (
//     <Stack maxW="400px">
//       <Auth
//         providers={{
//           github: {
//             icon: FaGithub,
//             name: "Github",
//           },
//         }}
//       />
//     </Stack>
//   );
// }
