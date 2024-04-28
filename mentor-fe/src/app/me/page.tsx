"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type user_type = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  mentees: user_type[];
  mentors: user_type[];
  __v: number;
  calendly_id: string;
  connect_request: user_type[];
};
export default function Me() {
  const [user, set_user] = useState<user_type>();

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    const url = `${BASE_URL}/mentors/${id}`;
    get_mentor(url).then((mentor) => {
      set_user(mentor?.data[0]);
    });
  }, []);

  async function get_mentor(url: string) {
    try {
      const mentor = await axios({
        method: "GET",
        url,
        withCredentials: true,
      });
      return mentor;
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  }

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

  return (
    <>
      <div className="pt-16">
        <h1 className="text-4xl pb-10 m-6 mt-0 font-black">My Profile</h1>
        <Card className="w-[650px] mx-auto">
          {user ? (
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {user?.name}
                <Badge className="w-min">{user?.role}</Badge>
              </CardTitle>
              {/* <p className='text-rose-400 hover:underline'>
                {user?.calendly_id || (
                  <Link href={'/mentors/meet'} className='flex items-center gap-1'>
                    set up calendly
                    <ExternalLink color='white' size={16} />
                  </Link>
                )}
              </p> */}
              {/* <div>
                <div className='flex flex-col items-center'>
                  <span>{user?.mentees.length}</span>
                  <span>Mentees</span>
                </div>
              </div> */}
              <CardDescription>Full Stack Developer</CardDescription>
              <CardDescription>{user?.email}</CardDescription>
              {user?.calendly_id ? (
                ""
              ) : (
                <Link href={"/mentors/meet"}>
                  <Badge variant={"secondary"}>
                    Meeting id&nbsp; <ExternalLink size={16} />
                  </Badge>
                </Link>
              )}
            </CardHeader>
          ) : (
            ""
          )}

          <hr />

          <CardContent className="flex justify-center">
            {user?.connect_request?.length! > 0 && (
              <div className="w-[800px]">
                <h2 className="my-3">Your connections requests</h2>
                <CardContent className="space-y-2">
                  {user?.connect_request.map((mentee: any, idx: any) => {
                    return (
                      <div
                        key={idx}
                        className="rounded-md border px-4 py-3 font-mono text-sm flex justify-between items-center"
                      >
                        <span className="flex items-center">
                          <Avatar>
                            <AvatarFallback>
                              {mentee.name.split("")[0]}
                            </AvatarFallback>
                          </Avatar>
                          &nbsp;
                          {mentee.name}
                        </span>
                        <Button
                          onClick={() => accept_connection_req(mentee._id)}
                          variant={"secondary"}
                        >
                          Accept
                          {/* <CheckIcon size={16} /> */}
                        </Button>
                      </div>
                    );
                  })}
                </CardContent>
              </div>
            )}
          </CardContent>
        </Card>

        {/* <Request_Table user={user} /> */}
      </div>
    </>
  );
}
