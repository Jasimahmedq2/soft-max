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
import Login from "./login";
import Signup from "./signup";

export function Tab() {
  return (
    <Tabs defaultValue="login" className="sm:w-[400px]">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent className="overflow-auto" value="login">
        <Login />
      </TabsContent>
      <TabsContent className="overflow-auto" value="register">
        <Signup />
      </TabsContent>
    </Tabs>
  );
}
