import { Avatar } from "../ui/avatar";

export const AvatarDemo = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar name="Ren Amamiya" img="https://i.redd.it/unicurnujpqc1.jpeg" />
      <Avatar name="Ren Amamiya" img="link aleatorio que nao funfa" />
      <Avatar
        name="Sandman"
        img="https://www.denofgeek.com/wp-content/uploads/2020/03/neil-gaiman-the-sandman.jpg?resize=400%2C400"
      />
    </div>
  );
};
