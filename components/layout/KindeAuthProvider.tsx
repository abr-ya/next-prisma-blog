"use client";

import { ReactNode } from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export const KindeAuthProvider = ({ children }: { children: ReactNode }) => <KindeProvider>{children}</KindeProvider>;
