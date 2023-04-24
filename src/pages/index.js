import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
  Form,
  FormLayout,
  Field,
  SubmitButton,
  Card,
  CardBody
} from '@saas-ui/react'
import usePasswordMatch from "./pwd";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {
    password,
    confirmPassword,
    isMatch,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePasswordMatch();

  const handleSubmit = (event) => {

    console.log(event)
  
    // Handle form submission here
  };
  return (
    <>
      <Head>
        <title>User Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.flex_center}> 
        <Card maxW="400px" margin="25px auto">
        <CardBody>
        <Form onSubmit={handleSubmit} 
        defaultValues={{
          firstName: 'Velda',
          lastName: 'Kiara',
          email:'velda@gmail.com'
        }} 
        >
              <FormLayout>
                <Field name="firstName" label="First Name" width="20.5em" rules={{ required: true}} />
                <Field name="lastName" label="Last Name" width="20.5em" rules={{ required: true }} />
                  <Field
                    name="email"
                    label="Email"
                    type="email" 
                    rules={{ required: true }}
                    width="20.5em" 
                  />
                <Field type="password" name="password" label=" New Password" width="18em" rules={{ required: true}} onChange={handlePasswordChange} />
                <Field type="password" name="confirmPassword" label="Confirm Password" width="18em" rules={{ required: true}} onChange={handleConfirmPasswordChange}/>
                {!isMatch && <p className={styles.highlight}>Passwords do not match</p>}
                  <SubmitButton disableIfInvalid > Save </SubmitButton> 
              </FormLayout>
        </Form>
        </CardBody>
        </Card>
        </div>   
      </main>
    </>
  )
}
