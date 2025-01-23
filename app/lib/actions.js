'use server';
import { signIn, signOut, auth } from "../../auth"
export async function createPost() {
    let counterID = 0
    
    const rawFormData = {
        id: formData.get('id'),
        title: formData.get('title'),
        avatar: formData.get('avatar'),
        author: formData.get('author'),
        date: formData.get('date'),
        image: formData.get('image'),
        content: formData.get('content'),
        popular: formData.get('popular'),
        engineering: formData.get('engineering'),
        marketing: formData.get('marketing'),
        company: formData.get('company'),
      };
      
    console.log("sdcssfvsdvsv");
}

export async function logIn() {
  await signIn("github")
  const user = await fetch('https://api.github.com/users/ascent2009')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    console.log(user);
}

export async function logOut() {
  await signOut({redirectTo: "/"})
}

export async function fetchUser() {
  const session = await auth();
  return session
}

export async function LogInCred() {
  await signIn("credentials", formData)
}