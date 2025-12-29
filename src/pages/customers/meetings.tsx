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

const mockMeetings: Meeting[] = [
  {
    id: "1",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
  {
    id: "2",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
  {
    id: "3",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
  {
    id: "4",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
  {
    id: "5",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
  {
    id: "6",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
  {
    id: "7",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
  {
    id: "8",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
  {
    id: "9",
    title: "Project Review",
    organizer: "John Smith",
    date: "2024-01-15",
    time: "10:00",
    type: "Online",
    status: "Scheduled",
  },
];

export default function Meetings() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredMeetings = mockMeetings.filter((meeting) => {
    const matchesSearch =
      meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meeting.organizer.toLowerCase().includes(searchQuery.toLowerCase());
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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Upcoming Meetings</h1>
      </div>

      {/* Search and Filters */}
      <div className="flex  items-center gap-4 bg-white p-5 rounded-lg shadow">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search meetings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => navigate("/customers/meetings/schedule")}
        >
          Schedule meeting
        </Button>
      </div>

      {/* Meetings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <div className="flex gap-2">
              <Button
                // variant="outline"
                size="sm"
                className="flex-1 bg-blue-200 text-blue-600  hover:bg-blue-100 hover:text-blue-700"
                onClick={() =>
                  navigate(`/customers/meetings/reschedule/${meeting.id}`)
                }
              >
                Edit
              </Button>
              <Button
                // variant="outline"
                size="sm"
                className="flex-1 bg-orange-200 text-orange-600  hover:bg-orange-100 hover:text-orange-700"
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
