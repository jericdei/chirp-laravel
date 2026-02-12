import { usePage as useInertiaPage } from "@inertiajs/react";

import { SharedData } from "@/types";


export function usePage() {
  return useInertiaPage<SharedData>();
}
