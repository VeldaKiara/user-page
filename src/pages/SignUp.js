// react/next stuff
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// chakraUI stuff
import { Text, Box, Center, Stack } from "@chakra-ui/react";

// saas-ui's auth imports
import { PasswordForm } from "@saas-ui/react";

export default function SignUp() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <>
      <Box padding="8" position="relative">
        <Center h="90vh" w="100%">
          <Stack maxW="400px">
            <PasswordForm
              action="signUp"
              submitLabel="Sign up"
              onSuccess={() => {
                router.push("/");
              }}
              onError={(error) => setErrorMessage(error.message)}
            />
            {errorMessage && <p className="highlight"> {errorMessage}</p>}
            <Center>
              <Text fontSize={"md"} color="gray.500">
                Already have an account?
                <Link style={{ color: "black" }} href="/login">
                  {" "}
                  Log in
                </Link>
              </Text>
            </Center>
          </Stack>
        </Center>
      </Box>
    </>
  );
}
