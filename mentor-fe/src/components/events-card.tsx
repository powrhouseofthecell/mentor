"use client";

import { ActivityLogIcon, BellIcon } from "@radix-ui/react-icons";
import { UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";
import Edit_Event from "@/components/edit-event";
import Delete_Event from "@/components/delete-event";
import Create_Event from "@/components/create-event";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { get_local_storage } from "@/lib/local-storage";

type CardProps = React.ComponentProps<typeof Card>;

async function get_events(url: any) {
  try {
    const events = await axios({
      method: "GET",
      url,
      withCredentials: true,
    });
    return events;
  } catch (error: any) {
    toast.error(`${error.response.data.message}`);
  }
}

export default function Event_Card({ className, ...props }: CardProps) {
  const router = useRouter();

  const get_event_attendies = (event_id: string) => {
    router.push(`/events/attendies/${event_id}`);
  };

  const [events, set_events] = useState<any>([]);

  useEffect(() => {
    const url = `${BASE_URL}/events`;
    get_events(url).then((events) => {
      set_events(events?.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handle_event_attendece(event_id: string) {
    const url = `${BASE_URL}/events/attend/${event_id}`;
    await axios({
      method: "POST",
      url,
      withCredentials: true,
    });
    const get_event_url = `${BASE_URL}/events`;
    get_events(get_event_url).then((events) => {
      set_events(events?.data.data);
      toast.info("Your seat is reserved");
    });
  }

  return (
    <>
      {get_local_storage("user_role") === "mentor" ? <Create_Event /> : ""}
      <div className="flex flex-wrap gap-10 justify-center ">
        {events?.map((event: any, idx: number) => {
          return (
            <Card key={idx} className={cn("w-[380px]", className)} {...props}>
              <CardHeader>
                <CardTitle className="flex justify-between">
                  {event.event_name}
                  <span>
                    {get_local_storage("user_id") === event.organised_by._id ? (
                      <Button onClick={() => get_event_attendies(event._id)}>
                        <ActivityLogIcon />
                      </Button>
                    ) : (
                      ""
                    )}
                    <span className="mx-1"></span>
                    {get_local_storage("user_id") === event.organised_by._id ? (
                      <Edit_Event id={event._id} />
                    ) : (
                      ""
                    )}
                    <span className="mx-1"></span>
                    {get_local_storage("user_id") === event.organised_by._id ? (
                      <Delete_Event id={event._id} />
                    ) : (
                      ""
                    )}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <BellIcon />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Organised By:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {" "}
                      {event.organised_by.name}
                    </p>
                    <p className="text-sm text-muted-foreground text-stone-300">
                      <span className="">
                        &nbsp;
                        <span className="">
                          {new Date(event.event_date.from).toLocaleDateString(
                            "en-us",
                            { day: "numeric", month: "short", year: "numeric" }
                          )}
                        </span>
                        <span className="mx-3">To:</span>
                        <span>
                          {new Date(event.event_date.to).toLocaleDateString(
                            "en-us",
                            { day: "numeric", month: "short", year: "numeric" }
                          )}
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        {event.event_description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {event.attended_by.includes(get_local_storage("user_id")) ? (
                  <Button
                    onClick={() => handle_event_attendece(event._id)}
                    className="w-full"
                    disabled
                    variant="outline">
                    <UserCheck size={16} /> &nbsp; Your seat is reserved.
                  </Button>
                ) : (
                  <Button
                    onClick={() => handle_event_attendece(event._id)}
                    className="w-full">
                    Click to attend the event.
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
