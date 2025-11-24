import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginFormUI() {
  return (
    <div className="space-y-4 w-full">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input placeholder="email@example.com" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <Input type="password" placeholder="••••••••" />
      </div>

      <Button className="w-full" type="button">
        Login
      </Button>
    </div>
  );
}
