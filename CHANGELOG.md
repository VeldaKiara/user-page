# Changelog 

## 1. (Article + Code)

1. Cleaned up the intro to be more direct regarding what devs of Saas apps need to know about designing a User/Account Settings page

2. Brought up SaaS UI earlier, with an explanation of what it actually is.

3. This is a SaaS app so it needs to look the part for readers/client satisfaction. Modified code to include a Sidebar (from Saas UI) and a Tabbed page view (Chakra UI), nothing  complicated, just copy pasted code from their respective webpages/default code examples and fit it into the main layout. 

4. Removed the detailed explanations of every prop used for each component, cut it down to only the critical ones, if they were directly used/needed.

5. Added a more fleshed out conclusion

## 2. Auth (Code) - 30th May 2023

1. Used Saas-UI's Auth and AuthProvider components for Supabase Auth (and forms UI for login and signup pages)
2. Added conditional rendering to index.js to only show a "Sign in  to see this content" message when user is not signed in
