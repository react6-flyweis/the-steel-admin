import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Meeting {
  id: string;
  title: string;
  organizer: string;
  date: string;
  time: string;
  type: "Online" | "In-person";
  status: "Scheduled" | "Cancelled" | "Completed";
}
// Generate randomized mock meetings for development/demo
function generateMockMeetings(count: number): Meeting[] {
  const titles = [
    "Project Review",
    "Kickoff",
    "Client Demo",
    "Sprint Planning",
    "Retrospective",
    "Design Sync",
    "Budget Review",
    "QA Review",
  ];
  const organizers = [
    "John Smith",
    "Jane Doe",
    "Aisha Khan",
    "Carlos Ruiz",
    "Priya Patel",
    "Liam Brown",
  ];
  const types: Meeting["type"][] = ["Online", "In-person"];
  const statuses: Meeting["status"][] = ["Scheduled", "Completed", "Cancelled"];

  const rand = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  const pad = (n: number) => n.toString().padStart(2, "0");

  const today = new Date();
  const makeDate = (offsetDays: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split("T")[0];
  };

  const items: Meeting[] = [];
  for (let i = 0; i < count; i++) {
    const offset = Math.floor(Math.random() * 60) - 15; // dates -15..+44 days
    const hour = 8 + Math.floor(Math.random() * 9); // 8..16
    const minute = Math.random() < 0.5 ? "00" : "30";
    items.push({
      id: `${Date.now().toString(36)}-${i}-${Math.floor(Math.random() * 1000)}`,
      title: rand(titles),
      organizer: rand(organizers),
      date: makeDate(offset),
      time: `${pad(hour)}:${minute}`,
      type: rand(types),
      status: rand(statuses),
    });
  }

  // sort by date then time
  items.sort((a, b) => {
    if (a.date === b.date) return a.time.localeCompare(b.time);
    return a.date.localeCompare(b.date);
  });

  return items;
}

const mockMeetings: Meeting[] = generateMockMeetings(9);

export default function Meetings() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredMeetings = mockMeetings.filter((meeting) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      meeting.title.toLowerCase().includes(q) ||
      meeting.organizer.toLowerCase().includes(q) ||
      meeting.date.toLowerCase().includes(q) ||
      meeting.type.toLowerCase().includes(q);
    const matchesStatus =
      statusFilter === "all" ||
      meeting.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: Meeting["status"]) => {
    switch (status) {
      case "Scheduled":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "Cancelled":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      case "Completed":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Upcoming Meetings</h1>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-5 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row flex-1 gap-4 w-full">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search meetings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="bg-blue-600 hover:bg-blue-700 mt-3 sm:mt-0 w-full sm:w-auto"
          onClick={() => navigate("/customers/meetings/schedule")}
        >
          Schedule meeting
        </Button>
      </div>

      {/* Meetings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredMeetings.map((meeting) => (
          <Card
            key={meeting.id}
            className="p-4 gap-2  bg-[#F9FAFB] shadow border-0 ring-0"
          >
            {/* Header with title and status */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{meeting.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {meeting.organizer}
                </p>
              </div>
              <Badge className={getStatusColor(meeting.status)}>
                {meeting.status}
              </Badge>
            </div>

            {/* Meeting Details */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{meeting.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{meeting.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Video className="h-4 w-4" />
                <span>{meeting.type}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                size="sm"
                className="w-full sm:flex-1 bg-blue-200 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
                onClick={() =>
                  navigate(`/customers/meetings/reschedule/${meeting.id}`)
                }
              >
                Edit
              </Button>
              <Button
                size="sm"
                className="w-full sm:flex-1 bg-orange-200 text-orange-600 hover:bg-orange-100 hover:text-orange-700"
                onClick={() =>
                  navigate(`/customers/meetings/reschedule/${meeting.id}`)
                }
              >
                Reschedule meeting
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredMeetings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No meetings found</p>
        </div>
      )}
    </div>
  );
}
