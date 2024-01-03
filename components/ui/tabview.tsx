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
    <Tabs defaultValue="personal-projects" className="w-[600px]">
      <TabsList className="grid w-full grid-cols-3 text-[#2590f2]">
        <TabsTrigger value="teamwork">Teamwork</TabsTrigger>
        <TabsTrigger value="personal-projects">Personal projects</TabsTrigger>
        <TabsTrigger value="everything">Everything in between</TabsTrigger>
      </TabsList>
      <TabsContent value="teamwork">
        <Card>
          <CardHeader>
            <CardTitle>App Launch</CardTitle>
            <CardDescription>
              Hey team, here's a quick recap of what we're working on ahead of
              the launch. Feel free to add any more notes or details to the
              tasks.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
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
          <CardContent className="space-y-1">
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
          <CardContent className="space-y-1">
            <div>
              <DataEverythingAll></DataEverythingAll>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
