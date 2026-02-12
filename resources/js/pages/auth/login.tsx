import { Form, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GuestLayout from "@/layouts/guest";
import store from "@/actions/App/Http/Controllers/Auth/LoginUserController";
import { register } from "@/routes/auth";

export default function LoginPage() {
  return (
    <GuestLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Login with your Chirp account</h1>

        <Form action={store.post()} className="w-full flex justify-center">
          {({ errors }) => (
            <div className="flex flex-col gap-4 mt-4 w-1/4">
              <Input type="email" label="Email" name="email" error={errors.email} autoComplete="email" required />
              <Input type="password" label="Password" name="password" error={errors.password} autoComplete="current-password" required />
              <Button type="submit">Login</Button>
            </div>
          )}
        </Form>

        <p className="text-sm text-gray-500 mt-4">Don't have an account? <Link href={register.get()} className="text-blue-500">Register</Link></p>
      </div>
    </GuestLayout>
  );
}
