"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Plus, X } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { toast } from "sonner";
import axios from "axios";
import { BASE_URL } from "../../config";
import { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";

export default function CollapsibleDemo({ user }: any) {
  const [isOpen, setIsOpen] = React.useState(false);

  async function accept_connection_req(id: string) {
    const url = `${BASE_URL}/mentors/accept/`;
    const data = { mentee_id: id };
    try {
      const mentor = await axios({
        method: "POST",
        url,
        data,
        withCredentials: true,
      });
      toast.info("Connected!");
      return mentor;
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  }
  const [profile, set_profile] = useState<any>(user);
  useEffect(() => {
    set_profile(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          You have {user?.connect_request.length} pending invitation/s
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {/* <div className='rounded-md border px-4 py-3 font-mono text-sm'>@radix-ui/primitives</div> */}
      <CollapsibleContent className="space-y-2">
        {user?.connect_request.map((mentee: any, idx: any) => {
          return (
            <div
              key={idx}
              className="rounded-md border px-4 py-3 font-mono text-sm flex justify-between items-center"
            >
              {mentee.name}
              <Button
                onClick={() => accept_connection_req(mentee._id)}
                variant={"secondary"}
              >
                <CheckIcon size={16} />
              </Button>
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
