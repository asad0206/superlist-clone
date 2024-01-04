import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTeamwork } from "./dataTeam";
import { DataPersonalProjects } from "./dataPersonal";
import { DataEverythingAll } from "./dataEverything";

export function TabsPlaylist() {
  return (
    <Tabs defaultValue="personal-projects" className="w-[800px]">
      <Card className="border-2">
        <TabsList className="grid w-full gap-3 grid-cols-3">
          <TabsTrigger
            className="border-solid hover:border-dotted border-2 border-[#2590f2] text-[#2590f2]"
            value="teamwork"
          >
            Teamwork
          </TabsTrigger>
          <TabsTrigger
            className="border-solid hover:border-dotted border-2 border-[#f84f39] text-[#f84f39]"
            value="personal-projects"
          >
            Personal projects
          </TabsTrigger>
          <TabsTrigger
            className="border-solid hover:border-dotted border-2 border-[#2a966f] text-[#2a966f]"
            value="everything"
          >
            Everything in between
          </TabsTrigger>
        </TabsList>
      </Card>

      <TabsContent value="teamwork">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>App Launch</CardTitle>
            <CardDescription>
              Hey team, here's a quick recap of what we're working on ahead of
              the launch. Feel free to add any more notes or details to the
              tasks.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <DataTeamwork></DataTeamwork>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="personal-projects">
        <Card>
          <CardHeader>
            <CardTitle>Kitchen Reno</CardTitle>
            <CardDescription>
              I'm putting this list together so we can get started organzing the
              project. Excited that we're doing this. 💚
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <DataPersonalProjects></DataPersonalProjects>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="everything">
        <Card>
          <CardHeader>
            <CardTitle>Daily Habits</CardTitle>
            <CardDescription>
              Working on self improvement and building good habits.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <DataEverythingAll></DataEverythingAll>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
