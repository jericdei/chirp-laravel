import { router } from "@inertiajs/react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth";
import RootLayout from "@/layouts/root";
import { login } from "@/routes/auth";
import { index as chirpsIndex } from "@/routes/chirps";

export default function Index() {
  const { user } = useAuth();

  if (!user) {
    return router.get(login())
  }

  return (
    <RootLayout>
      <div>
        <Button
          onClick={() => {
            router.get(chirpsIndex());
          }}
        >
          Click me
        </Button>
      </div>
    </RootLayout>
  );
}
