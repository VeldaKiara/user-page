//   nextjs/reract imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "next/link";

// chakraUI/saas-ui imports
import { Box, Center, Stack } from "@chakra-ui/react";
import { Form, FormLayout, Field, SubmitButton } from "@saas-ui/react";

// saas ui's auth imports
import { Auth, PasswordForm } from "@saas-ui/react";

export default function LogIn() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <>
      <Box padding="8" position="relative">
        <Center h="90vh" w="100%">
          <Stack maxW="400px">
            <Auth
              type="password"
              signupLink={<a href="/signup">Sign up</a>}
              onChange={() => {
                setErrorMessage(null);
              }}
              onSuccess={() => {
                router.push("/");
              }}
              onError={(error) => {
                setErrorMessage(error.message);
              }}
            />
            {errorMessage && <p className="highlight"> {errorMessage}</p>}
          </Stack>
        </Center>
      </Box>
    </>
  );
}
