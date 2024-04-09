"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Request_Table from "@/components/check-req-table";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

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
              {/* {console.log(user.mentees.length)} */}
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

          <CardContent className="flex justify-center"></CardContent>
        </Card>

        <Request_Table user={user} />
      </div>
    </>
  );
}
