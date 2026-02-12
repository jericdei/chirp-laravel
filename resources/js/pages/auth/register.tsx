import { Input } from "@/components/ui/input";
import GuestLayout from "@/layouts/guest";
import { Form, Link } from "@inertiajs/react";
import { login } from "@/routes/auth";
import { Button } from "@/components/ui/button";
import store from "@/actions/App/Http/Controllers/Auth/RegisterUserController"
import { PasswordInput } from "@/components/ui/password-input";

export default function RegisterPage() {
  return (
    <GuestLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Register with your Chirp account</h1>

        <Form action={store.post()} className="w-full flex justify-center">
          {({ errors }) => (
            <div className="flex flex-col gap-4 mt-4 w-1/4">
              <Input type="text" label="First Name" name="first_name" error={errors.first_name} autoComplete="given-name" required />
              <Input type="text" label="Middle Name" name="middle_name" error={errors.middle_name} autoComplete="middle-name" />
              <Input type="text" label="Last Name" name="last_name" error={errors.last_name} autoComplete="family-name" required />
              <Input type="email" label="Email" name="email" error={errors.email} autoComplete="email" required />
              <PasswordInput label="Password" name="password" error={errors.password} autoComplete="new-password" required />
              <PasswordInput label="Confirm Password" name="password_confirmation" error={errors.password_confirmation} autoComplete="new-password" required />

              <Button type="submit">Register</Button>
            </div>
          )}
        </Form>

        <p className="text-sm text-gray-500 mt-4">Already have an account? <Link href={login()} className="text-blue-500">Login</Link></p>
      </div>
    </GuestLayout>
  );
}
