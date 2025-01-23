
import { LogInCred } from "../lib/actions"
 
export function SignInCred() {
  return (
    <form
      action={async (formData) => {
        // "use server"
        await LogInCred()
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  )
}