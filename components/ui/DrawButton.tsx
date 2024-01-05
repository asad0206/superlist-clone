import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

const DrawButton = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="destructive">Join Beta</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="justify-center items-center flex flex-col">
            <DrawerTitle>Platforms</DrawerTitle>
            <DrawerDescription>
              Available on
              <Image
                className="relative"
                src="/details.png"
                alt="details"
                width={800}
                height={500}
                priority
              />
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawButton;
