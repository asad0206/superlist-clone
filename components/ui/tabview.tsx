import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tabliss() {
  return (
    <Tabs defaultValue="personalprojects">
      <TabsList>
        <TabsTrigger value="teamwork">Teamwork</TabsTrigger>
        <TabsTrigger value="personalprojets">Personal projects</TabsTrigger>
        <TabsTrigger value="everythinginbetween">
          Everything in between
        </TabsTrigger>
      </TabsList>
      <TabsContent value="teamwork"></TabsContent>
    </Tabs>
  );
}
