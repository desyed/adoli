"use client";

import { useState } from "react";
import { Clipboard, Code } from "lucide-react";
import {useAuthContext} from "@/firebase/auth/authContext";


const ScriptBox = () => {
    // @ts-ignore
    const {user} = useAuthContext()
  const scriptString = `
  <script src="https://Adoli.vercel.app/script-min.js"></script>
<script>
   Adoli.init("${user && user?.uid}");
</script>`;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(scriptString);
    setIsCopied(true);
  };

  const firstScript = (
    <span>
      <span className="text-secondary">{"<srcipt "}</span>
      <span className="text-secondary/70">src</span>=&apos;
      <span className="text-orange-400">
        https://Adoli.vercel.app/script-min.js
      </span>
      &apos;
      <span className="text-secondary">{"></script>"}</span>
    </span>
  );

  const secondScript = (
    <span>
      <span className="text-secondary">{"<srcipt>"}</span>
      <span className="text-brand">
        {" "}
        Adoli.init(&apos;
        <span className="text-green-500 text-sm">{user && user?.uid}</span>
        &apos;){" "}
      </span>
      <span className="text-secondary">{"</script>"}</span>
    </span>
  );

  return (
    <div className="mt-7 border border-secondary/10 bg-foreground rounded-lg overflow-hidden">
      <div className="flex px-4 py-2 bg-dark items-center justify-between">
        <h2 className="flex text-secondary text-xs items-center gap-2">
          <Code size={14} /> index.html
        </h2>
        <p
          className="flex cursor-pointer items-center gap-2 text-xs"
          onClick={handleCopyClick}
        >
          <Clipboard size={14} />
          {isCopied ? "Copied!" : "Copy"}
        </p>
      </div>
      <div className="body py-5 px-2 text-sm">
        {firstScript}
        <br />
        {secondScript}
      </div>
    </div>
  );
};

export default ScriptBox;
