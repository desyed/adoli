"use client";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { store } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import {useAuthContext} from "@/firebase/auth/authContext";

interface Props {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  // @ts-ignore
  const { user } = useAuthContext()

  useEffect(() => {
    if (user == null) router.push("/")
  }, [user])


  return (
    <>
      {loading ? (
        <>
          <main className="w-screen h-screen fixed flex items-center justify-center">
            {/*<Logo className="animate-pulse" />*/} Loading...
          </main>
        </>
      ) : (
        <>
          <Provider store={store}>{children}</Provider>
          <Toaster />
        </>
      )}
    </>
  );
};

export default ProtectedLayout;
