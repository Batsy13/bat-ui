import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const characters = [
  {
    codeName: "Joker",
    realName: "Ren Amamiya",
    arcana: "Fool",
    persona: "Arsène",
  },
  {
    codeName: "Skull",
    realName: "Ryuji Sakamoto",
    arcana: "Chariot",
    persona: "Captain Kidd",
  },
  {
    codeName: "Mona",
    realName: "Morgana",
    arcana: "Magician",
    persona: "Zorro",
  },
]

export function TableDemo() {
  return (
    <Table>
      <TableCaption>The Phantom Thieves of Hearts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Code Name</TableHead>
          <TableHead>Real Name</TableHead>
          <TableHead>Arcana</TableHead>
          <TableHead className="text-right">Persona</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {characters.map((character) => (
          <TableRow key={character.codeName}>
            <TableCell className="font-medium">{character.codeName}</TableCell>
            <TableCell>{character.realName}</TableCell>
            <TableCell>{character.arcana}</TableCell>
            <TableCell className="text-right">{character.persona}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Members</TableCell>
          <TableCell className="text-right">{characters.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
