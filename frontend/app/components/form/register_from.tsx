import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function RegisterFormUI() {
  return (
    <div className="space-y-4 w-full">
      <div className="space-y-2">
        <label className="text-sm font-medium">Nama</label>
        <Input placeholder="Nama lengkap" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input placeholder="email@example.com" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>
        <Input type="password" placeholder="••••••••" />
      </div>

      <Button className="w-full" type="button">
        Daftar
      </Button>
    </div>
  );
}
