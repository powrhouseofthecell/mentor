"use client";
import axios from "axios";
import { toast } from "sonner";
import { BASE_URL } from "../../config";
import { useState, useEffect } from "react";
import { Cog, HandHelping, Loader, Send, UserRoundPlus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Vaul_Scaled from "@/components/vaul-scaled";
import Link from "next/link";
import { get_local_storage } from "@/lib/local-storage";

type CardProps = React.ComponentProps<typeof Card>;
export default function Mentors_Card({ className, ...props }: CardProps) {
  const [mentors_list, set_mentors_list] = useState<any>([]);

  async function get_mentors(url: string) {
    try {
      const mentors = await axios({
        method: "GET",
        url,
        withCredentials: true,
      });
      return mentors;
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  }

  useEffect(() => {
    const url = `${BASE_URL}/mentors`;
    get_mentors(url).then((mentors) => {
      set_mentors_list(mentors?.data);
    });
  }, []);

  async function send_connect_req(id: any) {
    const url_req = `${BASE_URL}/mentors/follow/${id}`;
    const url_get = `${BASE_URL}/mentors`;
    try {
      await axios({
        method: "POST",
        url: url_req,
        withCredentials: true,
      });
      toast.info("Request sent!");
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
    get_mentors(url_get).then((mentors) => {
      set_mentors_list(mentors?.data);
    });
  }

  return (
    <>
      {get_local_storage("user_role") === "mentor" ? (
        <Link href={"/mentors/meet"}>
          <Button className="bg-amber-200 fixed right-0 m-6 bottom-0">
            <Cog size={16} /> &nbsp; Update your ID
          </Button>
        </Link>
      ) : (
        ""
      )}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {mentors_list?.length < 1 ? (
          <p>No other mentors available at this time</p>
        ) : (
          mentors_list.map((mentor: any, idx: any) => {
            return (
              <>
                {mentor._id === get_local_storage("user_id") ? (
                  <p>No other mentors available at this time</p>
                ) : (
                  <Card
                    key={idx}
                    className={cn("w-[380px]", className)}
                    {...props}
                  >
                    <CardHeader>
                      <div className="flex items-center">
                        <Avatar>
                          <AvatarFallback>
                            {mentor.name.split("")[0]}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle className="ml-3">{mentor.name}</CardTitle>
                      </div>
                      <CardDescription>Full Stack Developer</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <HandHelping />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Mentoring
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {mentor.mentees.length} Mentee/s
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-4 rounded-md">
                          <Send />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Email
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {mentor.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      {mentor.connect_request.includes(
                        get_local_storage("user_id"),
                      ) ? (
                        <Button className="w-full" variant={"outline"}>
                          <Loader size={16} />
                          &nbsp; Request Sent
                        </Button>
                      ) : (
                        <>
                          {mentor.mentees.includes(
                            get_local_storage("user_id"),
                          ) ? (
                            <Vaul_Scaled mentor_id={mentor._id} />
                          ) : (
                            <Button
                              onClick={() => send_connect_req(mentor._id)}
                              className="w-full"
                              variant={"secondary"}
                            >
                              {" "}
                              <UserRoundPlus size={16} /> &nbsp; Connect
                            </Button>
                          )}
                        </>
                      )}
                    </CardFooter>
                  </Card>
                )}
              </>
            );
          })
        )}
      </div>
    </>
  );
}
