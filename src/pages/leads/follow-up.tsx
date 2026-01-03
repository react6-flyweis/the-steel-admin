import { useState } from "react";
import StatCard from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
} from "lucide-react";
import UpcomingFollowUps from "@/components/follow-up/upcoming-follow-ups";
import SmartReminders from "@/components/follow-up/smart-reminders";
import AddFollowUpDialog from "@/components/follow-up/add-follow-up-dialog";
import LeadCommunicationTimeline from "@/components/leads/lead-communication-timeline";
import AiScriptGenerator from "@/components/follow-up/ai-script-generator";
import LeadScoring from "@/components/follow-up/lead-scoring";
import FollowUpKpis from "@/components/follow-up/follow-up-kpis";

export default function FollowUpPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="pr-5 pt-5 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Follow-up & Task Management
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor upcoming tasks, overdue follow-ups, and completed actions.
          </p>
        </div>
        <Button
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Follow-up
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Follow-ups"
          value="8"
          icon={<CalendarIcon className="w-6 h-6 text-blue-600" />}
          color="bg-blue-600"
        />
        <StatCard
          title="Upcoming"
          value="4"
          icon={<Clock className="w-6 h-6 text-green-600" />}
          color="bg-green-600"
        />
        <StatCard
          title="Completed"
          value="2"
          icon={<CheckCircle2 className="w-6 h-6 text-green-600" />}
          color="bg-green-600"
        />
        <StatCard
          title="Overdue"
          value="2"
          icon={<AlertCircle className="w-6 h-6 text-red-600" />}
          color="bg-red-600"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <UpcomingFollowUps />
        <SmartReminders />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <LeadCommunicationTimeline />
        <AiScriptGenerator />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <LeadScoring />
        <FollowUpKpis />
      </div>

      {/* Add Follow-up Dialog */}
      <AddFollowUpDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
      />
    </div>
  );
}
