import { Input } from "@/components/ui/input";

export const InputDemo = () => {
  return <Input type="text" placeholder="Email" />;
};

export const InputPasswordDemo = () => {
  return <Input type="password" placeholder="Password" />;
};

export const InputDisabledDemo = () => {
  return <Input type="text" placeholder="Email" disabled />;
};
